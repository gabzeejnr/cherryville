type LearningStyle = "virtual" | "weekday" | "weekend";
type Level = "No experience" | "Some experience" | "Working in Tech";


type AcademyResponse = {
    id: number,
    applicant_name: string,
    email: string,
    phone: string,
    course_name: string,
    level: string,
    format: string,
    sta
}

type EnrollmentForm = {
    name: string,
    email: string,
    phone: string,
    course: string,
    level: Level,
    format: LearningStyle
}

export type { AcademyResponse, EnrollmentForm }