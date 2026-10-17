import { posthog } from "./index";

const analytics = {
    pageViewed(page: string) {
        posthog.capture("page_viewed", { page })
    },

    ctaClicked(cta_name: string) {
        posthog.capture("cta_clicked", { cta_name })
    },

    formStarted(form_name: string, properties: Record<string, unknown> = {}) {
        posthog.capture("form_started", {
            form_name,
            ...properties
        });
    },

    formSubmissionSucceeded(form_name: string, properties: Record<string, unknown> = {}) {
        posthog.capture("form_submission_succeeded", {
            form_name,
            ...properties
        });
    },

    formSubmissionFailed(form_name: string, properties: Record<string, unknown> = {}) {
        posthog.capture("form_submission_failed", { form_name });
    },

    noCourseRecommendation(form_name: string = "course_recommendation") {
        posthog.capture("course_recommendation_no_match", { form_name })
    },

    courseRecommendationViewed(form_name: string = "course_recmmendation", course: Record<string, unknown>) {
        posthog.capture("course_recommendation_viewed", {
            form_name,
            course
        })
    }
}


export { analytics }