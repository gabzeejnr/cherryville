type WorkType = "numbers" | "design" | "hands-on" | "organising" | "security";
type Experience = "beginner" | "intermediate" | "advanced"
type TimeFrame = "3 months" | "6 months" | "1 year" | "unknown";
type LearningStyle = "virtual" | "weekday" | "weekend"

type Questions = {
    id: string,
    question: string,
    options: {
        label: string,
        value: WorkType | Experience | TimeFrame
    }[]
}


type Course = {
    name: string,
    whoIsItFor: string,
    workType: WorkType[],
    learningStyle: LearningStyle,
    experience: Experience,
    timeframe: TimeFrame[],
    outcome: string[],
    jobTitle: string,
    duration: string,
    fee: number
}

type AnswerFinder = {
    workType: WorkType,
    experience: Experience,
    timeframe: TimeFrame
}

export type { Questions, Course, AnswerFinder, WorkType, LearningStyle }