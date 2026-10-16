import type { UUID } from "node:crypto";
import type { Sector, Service, Timeframe, FormStatus } from "@cherryville/shared";

type ProposalResponse = {
    id: string | UUID,
    name: string,
    organisation: string,
    email: string,
    phone: string,
    sector: Sector,
    services: Service[],
    number: number,
    timeframe: Timeframe,
    message: string,
    status: FormStatus<"approved">,
    created_at: string
}

type AcademyResponse = {
    id: UUID,
    applicant_name: string,
    email: string,
    phone: string,
    course_name: string,
    level: string,
    format: string,
    status: "accepted" | "pending" | "rejected",
    created_at: string
}

export type { AcademyResponse, ProposalResponse }