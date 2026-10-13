type LearningStyle = "virtual" | "weekday" | "weekend";
type Level = "No experience" | "Some experience" | "Working in Tech";


type AcademyResponse = {}

type EnrollmentForm = {
    name: string,
    email: string,
    phone: string,
    course: string,
    level: Level,
    format: LearningStyle
}

export type { AcademyResponse, EnrollmentForm }