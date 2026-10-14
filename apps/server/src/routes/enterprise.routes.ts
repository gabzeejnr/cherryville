import { Router } from "express";
import { getProposals, requestProposal } from "../controllers/enterprise.controller.js"
import type { Router as RouterType } from "express";

const router: RouterType = Router();

router.get("/proposals", getProposals)
router.post("/request-proposal", requestProposal);

export { router }