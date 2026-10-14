import type { UUID } from "node:crypto"

type ProposalResponse = {
    id: string | UUID
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
    created_at: Date
}

export type { AcademyResponse, ProposalResponse }