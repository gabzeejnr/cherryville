import pool from "../config/db.js";
import type { Request, Response } from "express";
import type { AcademyResponse, EnrollmentForm, ErrorType } from "../types/index.js";

async function getAcademyApplicants(req: Request, res: Response<AcademyResponse | ErrorType>): Promise<void> {
    try {
        const { rows } = await pool.query("SELECT * FROM academy_enrollment");
        res.status(200).json(rows);
    } catch (err) {
        console.error("Couldn't get academy applicants: ", err);
        res.status(500).json({ error: "Internal server error." })
    }
}

async function enrollIntoAcademy(req: Request<{}, {}, EnrollmentForm>, res: Response<ErrorType>): Promise<void> {
    const {
        name, email, phone,
        course, level, format
    } = req.body;

    if (!name || !email || !phone || !course || !level || !format) {
        res.status(400).json({ error: "Incomplete form field." });
        return
    }

    const client = await pool.connect();
    try {
        const { rows } = await client.query(`INSERT INTO academy_enrollment`)

    } catch (err) {
        console.error("Couldn't complete academy enrollment:", err);
        await client.query("ROLLBACK");
        res.status(500).json({ error: "Internal server error." });
    } finally {
        client.end();
    }

}

export {
    getAcademyApplicants, enrollIntoAcademy
}