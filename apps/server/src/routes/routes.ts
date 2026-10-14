import { Router } from "express";
import healthRouter from "./health.routes.js";
import { router as enterpriseRoute } from "./enterprise.routes.js";
import { router as talentRoute } from "./talent.routes.js";
import type { Router as RouterType } from "express";

const router: RouterType = Router();

router.use("/health", healthRouter)
router.use("/enterprise", enterpriseRoute);
router.use("/talent", talentRoute);

export { router as apiRoutes };