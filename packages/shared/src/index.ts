// ENTERPRISES ==================================
type Sector = | "oil-and-gas" | "banking-and-finance" | "government" | "ngo" | "other";
type Service = | "staff-training" | "curriculum-design" | "assessment-reporting" | "technical-talent" | "partner-delivery" | ""
type Timeframe = "one-month" | "one-three-months" | "more-than-three-months" | ""

type ProposalForm = {
    name: string,
    organisation: string,
    email: string,
    phone: string,
    sector: Sector,
    services: Service[],
    number: number,
    timeframe: Timeframe,
    message: string
}


// TALENTS ======================================
type LearningStyle = "virtual" | "weekday" | "weekend";
type Level = "beginner" | "intermediate" | "advanced";

type EnrollmentQuery = {
    status?: EnrollmentResult["status"] | EnrollmentResult["status"][],
    id?: string,
    course?: string
}

type EnrollmentForm = {
    applicant_name: string,
    email: string,
    phone: string,
    course_name: string,
    level: Level,
    format: LearningStyle
}

type EnrollmentResult = {
    id: string | number,
    status: "accepted" | "pending" | "rejected",
    created_at: Date | string
}

type Message<T> = {
    message: string,
    data: T
}

export type {
    ProposalForm,
    EnrollmentResult, Message, EnrollmentForm, EnrollmentQuery
}