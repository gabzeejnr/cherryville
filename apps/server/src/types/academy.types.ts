type AcademyResponse = {
    id: string | number,
    applicant_name: string,
    email: string,
    phone: string,
    course_name: string,
    level: string,
    format: string,
    status: string,
    created_at: Date
}

export type { AcademyResponse }