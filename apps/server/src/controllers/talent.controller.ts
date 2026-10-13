import type { Request, Response } from "express";
import type {Enroll}

function enrollIntoAcademy(req: Request<{}, {}, { name: string }>, res: Response) {
    const { } = req.body
}

export { enrollIntoAcademy }