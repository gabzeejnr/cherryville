import pool from "../config/db.js";
import type { Request, Response } from "express";
import type { EnrollmentForm, ErrorType } from "../types/index.js"

async function enrollIntoAcademy(req: Request<{}, {}, EnrollmentForm>, res: Response<ErrorType>): Promise<void> {
    const {
        name, email, phone,
        course, level, format
    } = req.body;

    if (!name || !email || !phone || !course || !level || !format) {
        res.status(400).json({ error: "Incomplete form field." });
        return
    }

    try {

    } catch (err) {
        console.error("Couldn't complete academy enrollment:", err);
        res.status(500).json({ error: "Internal server error." });
        return
    }

}

export { enrollIntoAcademy }