type AcademyResponse = {
    id: string | number,
    applicant_name: string,
    email: string,
    phone: string,
    course_name: string,
    level: string,
    format: string,
    status: "accepted" | "pending" | "rejected",
    created_at: Date
}

export type { AcademyResponse }