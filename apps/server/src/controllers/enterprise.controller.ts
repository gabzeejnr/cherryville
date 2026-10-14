import pool from "../config/db.js";
import type { Request, Response } from "express";
import type { ErrorType } from "../types/index.js";

async function getProposals(req: Request, res: Response<ErrorType>): Promise<void> {

    const {} = req.stat
    try {
        const { rows } = await pool.query("SELECT * FROM proposals")
    } catch (err) {
        console.error("Couldn't get proposals: ", err);
        res.status(500).json({ error: "Internal server error." })
    }
}

async function requestProposal(req: Request, res: Response<ErrorType>): Promise<void> {

}


export { requestProposal }