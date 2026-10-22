import type { ReactNode, MouseEventHandler } from "react";

type WorkType = "numbers" | "design" | "hands-on" | "organising" | "security";
type Experience = "beginner" | "intermediate" | "advanced"
type TimeFrame = "3 months" | "6 months" | "1 year" | "unknown";
type LearningStyle = "virtual" | "weekday" | "weekend";
type Level = "No experience" | "Some experience" | "Working in Tech";

type Questions = {
    id: string,
    question: string,
    options: {
        label: string,
        value: WorkType | Experience | TimeFrame
    }[]
}


interface Course {
    name: string,
    slug:string,
    whoIsItFor: string,
    workType: WorkType[],
    learningStyle: LearningStyle,
    experience: Experience,
    timeframe: TimeFrame[],
    outcome: string[],
    jobTitle: string,
    duration: string,
    fee: number,
    image: string
}

type AnswerFinder = {
    workType: WorkType | null,
    experience: Experience | null,
    timeframe: TimeFrame | null
}

type AcademyCTA = {
    title?: string
    subtitle: string,
    children?: ReactNode,
    button?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

type EnrollmentForm = {
    name: string,
    email: string,
    phone: string,
    course: string,
    level: Experience,
    format: LearningStyle
}

export type { Questions, Course, AnswerFinder, WorkType, LearningStyle, Experience, AcademyCTA, Level, EnrollmentForm }