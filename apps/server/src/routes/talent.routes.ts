import { Router } from "express";
import { getAcademyApplicants, enrollIntoAcademy } from "../controllers/talent.controller.js";
import type { Router as RouterType } from "express";

const router: RouterType = Router();

router.get("get-applicants", getAcademyApplicants);
router.post("/enroll", enrollIntoAcademy);

export { router }