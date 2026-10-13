import { Router } from "express";
import { enrollIntoAcademy } from "../controllers/talent.controller.js";
import type { Router as RouterType } from "express";

const router: RouterType = Router();

router.post("/enroll", enrollIntoAcademy);

export { router }