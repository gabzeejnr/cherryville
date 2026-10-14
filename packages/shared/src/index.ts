type EnrollmentResult = {
    id: string | number,
    status: "accepted" | "pending" | "rejected",
    created_at: Date | string
}

type Message<T> = {
    message: string,
    data: T
}

export type { EnrollmentResult, Message }