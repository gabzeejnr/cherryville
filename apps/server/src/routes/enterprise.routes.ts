import { Router } from "express";
import { proposalRequest } from "../controllers/enterprise.controller.js"
import type { Router as RouterType } from "express";

const router: RouterType = Router();

router.post("/request-proposal", proposalRequest);

export { router }