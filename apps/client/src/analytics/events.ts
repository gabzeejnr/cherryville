import { capture } from "./index";

const analytics = {
    pageViewed(page: string) {
        capture("page_viewed", { page })
    },

    ctaClicked(cta_name: string) {
        capture("cta_clicked", { cta_name })
    },

    formStarted(form_name: string, properties: Record<string, unknown> = {}) {
        capture("form_started", {
            form_name,
            ...properties
        });
    },

    formSubmissionSucceeded(form_name: string, properties: Record<string, unknown> = {}) {
        capture("form_submission_succeeded", {
            form_name,
            ...properties
        });
    },

    formSubmissionFailed(form_name: string, properties: Record<string, unknown> = {}) {
        capture("form_submission_failed", { form_name, ...properties });
    },

    noCourseRecommendation(form_name: string = "course_recommendation") {
        capture("course_recommendation_no_match", { form_name })
    },

    courseRecommendationViewed(form_name: string = "course_recmmendation", course: Record<string, unknown>) {
        capture("course_recommendation_viewed", {
            form_name,
            course
        })
    }
}


export { analytics }