type FormStatus<T> = T | "pending" | "rejected" | "reviewing"

// ENTERPRISES ==================================
type Sector = | "oil-and-gas" | "banking-and-finance" | "government" | "ngo" | "other";
type Service = | "staff-training" | "curriculum-design" | "assessment-reporting" | "technical-talent" | "partner-delivery" | ""
type Timeframe = "one-month" | "one-three-months" | "more-than-three-months" | "";
type EnterpriseStatus = FormStatus<"approved">

type ProposalQuery = {
    name?: string,
    sector?: Sector,
    services?: Service[],
    timeframe?: Timeframe,
    status?: EnterpriseStatus
}

interface ProposalForm {
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

type ProposalResult = {
    id: string,
    status: EnterpriseStatus,
    created_at: string
}


// TALENTS ======================================
type LearningStyle = "virtual" | "weekday" | "weekend";
type Level = "beginner" | "intermediate" | "advanced";
type AcademyStatus = FormStatus<"accepted">

type EnrollmentQuery = {
    status?: AcademyStatus | AcademyStatus[],
    id?: string,
    course?: string,
    level?: Level
}

interface EnrollmentForm {
    applicant_name: string,
    email: string,
    phone: string,
    course_name: string,
    level: Level,
    format: LearningStyle
}

type EnrollmentResult = {
    id: string | number,
    status: AcademyStatus,
    created_at: Date | string
}

type Message<T> = {
    message: string,
    data: T
}

export type {
    ProposalForm, ProposalQuery, ProposalResult, Sector, Service,
    Timeframe, FormStatus,
    EnrollmentResult, Message, EnrollmentForm, EnrollmentQuery
}