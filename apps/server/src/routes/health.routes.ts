import { Router } from "express";
import type { Router as RouterType, Response } from "express";

const router: RouterType = Router();

router.get("/", (_req, res: Response) => {
    res.status(200).json({ status: "ok" });
});

export default router;