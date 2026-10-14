import { Router } from "express";
import { requestProposal } from "../controllers/enterprise.controller.js"
import type { Router as RouterType } from "express";

const router: RouterType = Router();

router.post("/request-proposal", requestProposal);

export { router }