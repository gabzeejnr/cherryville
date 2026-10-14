import pool from "../config/db.js";
import type { Request, Response } from "express";
import type { EnrollmentResult, Message, EnrollmentForm } from "@cherryville/shared";
import type { AcademyResponse, ErrorType } from "../types/index.js";
import type { QueryResult } from "pg";

async function getAcademyApplicants(req: Request, res: Response<AcademyResponse[] | ErrorType>): Promise<void> {
    try {
        const { rows }: QueryResult<AcademyResponse> = await pool.query("SELECT * FROM academy_enrollment");
        res.status(200).json(rows);
    } catch (err) {
        console.error("Couldn't get academy applicants: ", err);
        res.status(500).json({ error: "Internal server error." })
    }
}

async function enrollIntoAcademy(req: Request<{}, {}, EnrollmentForm>, res: Response<Message<EnrollmentResult> | ErrorType>): Promise<void> {

    console.log(req.body)
    const {
        applicant_name, email, phone,
        course_name, level, format
    } = req.body;

    if (!applicant_name || !email || !phone || !course_name || !level || !format) {
        res.status(400).json({ error: "Incomplete form field." });
        return
    }

    const validLevels = ["beginner", "intermediate", "advanced"];
    const validFormats = ["virtual", "weekday", "weekend"];

    if (!validLevels.includes(level)) {
        res.status(400).json({ error: "Invalid level data." });
        return;
    }

    if (!validFormats.includes(format)) {
        res.status(400).json({ error: "Invalid format." });
        return;
    }

    try {
        const { rows }: QueryResult<EnrollmentResult> = await pool.query(`INSERT INTO academy_enrollment (applicant_name, email, phone, course_name, level, format)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, status, created_at`,
            [applicant_name, email, phone, course_name, level, format]
        );

        res.status(201).json({
            message: "Application successful",
            data: rows[0]
        });

    } catch (err) {
        console.error("Couldn't complete academy enrollment:", err);
        res.status(500).json({ error: "Internal server error." });
    }

}

export {
    getAcademyApplicants, enrollIntoAcademy
}