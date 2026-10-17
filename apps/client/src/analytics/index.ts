import posthog from "posthog-js";

const apiKey = import.meta.env.VITE_POSTHOG_KEY;
const api_host = import.meta.env.VITE_POSTHOG_HOST;

console.log("PostHog configuration:", {
    hasApiKey: Boolean(apiKey),
    hasApiHost: Boolean(api_host),
    host: api_host,
});

if (apiKey && api_host) {
    posthog.init(apiKey, {
        api_host,
        capture_pageview: false,
        capture_pageleave: true
    })

}
export { posthog }