type LearningStyle = "virtual" | "weekday" | "weekend";
type Level = "No experience" | "Some experience" | "Working in Tech";


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

type EnrollmentForm = {
    name: string,
    email: string,
    phone: string,
    course: string,
    level: Level,
    format: LearningStyle
}

type Enrollment = {
    id: string | number
}

type Message<T> = {
    message: string,
    data: T
}

export type { AcademyResponse, EnrollmentForm, Message }