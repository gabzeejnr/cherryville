import pool from "../config/db.js";
import { turnToArray, arrayQueryClause } from "../libs/controllers.libs.js";
import type { Request, Response } from "express";
import type { ErrorType } from "../types/index.js";
import type { ProposalQuery } from "@cherryville/shared";

async function getProposals(req: Request<{}, {}, {}, ProposalQuery>, res: Response<ErrorType>): Promise<void> {

    const { name, sector, services, timeframe } = req.query;
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

        if(timeframe) {
            values.push(turnToArray(timeframe));
            conditions.push(`timeframe = ANY($${values.length}::text[])`)
        }
        const { rows } = await pool.query("SELECT * FROM proposals")
    } catch (err) {
        console.error("Couldn't get proposals: ", err);
        res.status(500).json({ error: "Internal server error." })
    }
}

async function requestProposal(req: Request, res: Response<ErrorType>): Promise<void> {

}


export { requestProposal }