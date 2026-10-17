import pool from "../config/db.js";
import { turnToArray, arrayQueryClause, serverError } from "../libs/controllers.libs.js";
import type { Request, Response } from "express";
import type { QueryResult } from "pg";
import type { ErrorType, ProposalResponse } from "../types/index.js";
import type { ProposalQuery, ProposalForm, Message, ProposalResult } from "@cherryville/shared";

async function getProposals(req: Request<{}, {}, {}, ProposalQuery>, res: Response<ProposalResponse[] | ErrorType>): Promise<void> {

    const { name, sector, services, timeframe, status } = req.query;
    const conditions: string[] = [];
    const values: (string | string[])[] = [];
    try {

        if (name) {
            values.push(turnToArray(name));
            conditions.push(`name = ANY($${values.length}::text[])`)
        }

        if (sector) {
            values.push(turnToArray(sector));
            conditions.push(`sector = ANY($${values.length}::text[])`)
        }

        if (services) {
            values.push(turnToArray(services));
            conditions.push(`services = ANY($${values.length}::text[])`)
        }

        if (timeframe) {
            values.push(turnToArray(timeframe));
            conditions.push(`timeframe = ANY($${values.length}::text[])`)
        }

        if (status) {
            values.push(turnToArray(status));
            conditions.push(`status = ANY($${values.length}::text[])`)
        }

        const clause = arrayQueryClause(conditions);
        const query = `SELECT * FROM proposals ${clause} ORDER by created_at DESC`

        const { rows }: QueryResult<ProposalResponse> = await pool.query(query, values);

        res.status(200).json(rows)
    } catch (err) {
        console.error("Couldn't get proposals: ", err);
        res.status(500).json({ error: "Internal server error." })
    }
}

async function requestProposal(req: Request<{}, {}, ProposalForm>, res: Response<Message<ProposalResult> | ErrorType>): Promise<void> {

    const {
        name, organisation, email,
        phone, sector, services, number, timeframe, message
    } = req.body;

    if (!name || !organisation || !email || !sector || !message) {
        res.status(400).json({ error: "Incomplete form field" })
    }

    const validsectors = ["oil-and-gas", "banking-and-finance", "government", "ngo", "other"];
    if (!validsectors.includes(sector)) {
        res.status(400).json({ error: "Unknown sector type." });
        return
    }

    const allServices = (Array.isArray(services)
        ? services
        : [services]
    )

    try {

        const { rows }: QueryResult<ProposalResult> = await pool.query(`INSERT INTO proposals (name, organisation, email, phone, sector, services, number, timeframe, message)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id, status, created_at`,
            [name, organisation, email, phone, sector, allServices, number, timeframe, message]
        )

        res.status(201).json({
            message: "Proposal sent successfully.",
            data: rows[0]
        });
    } catch (err) {
        console.error("Couldn't submit proposal. Please try again.: ", err);
        res.status(500).json({ error: serverError })
    }
}


export { getProposals, requestProposal }