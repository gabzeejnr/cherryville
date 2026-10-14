type LearningStyle = "virtual" | "weekday" | "weekend";
type Level = "beginner" | "intermediate" | "advanced";

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

export type { EnrollmentResult, Message, EnrollmentForm }