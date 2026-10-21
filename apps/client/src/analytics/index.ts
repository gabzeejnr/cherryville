import type { Properties } from "posthog-js";

type QueuedEvent = {
    event: string,
    properties: Record<string, unknown>
}

let posthog: typeof import("posthog-js").default | undefined;
let initializing: Promise<void> | undefined;

const eventQueue: QueuedEvent[] = [];

async function initPostHog() {
    if (posthog) return;

    if (initializing) return initializing;

    initializing = (async () => {
        const apiKey = import.meta.env.VITE_POSTHOG_KEY;
        const api_host = import.meta.env.VITE_POSTHOG_HOST;

        if (!apiKey || !api_host) return;

        const { default: posthogClient } = await import("posthog-js");

        posthogClient.init(apiKey, {
            api_host,
            capture_pageview: false,
            capture_pageleave: true,
        });

        posthog = posthogClient;

        while (eventQueue.length > 0) {
            const queuedEvent = eventQueue.shift()!;

            posthog.capture(
                queuedEvent.event,
                queuedEvent.properties as Properties
            );
        }
    })();

    try {
        await initializing;
    } finally {
        initializing = undefined;
    }
}

function capture(event: string, properties: Record<string, unknown> = {}) {
    if (posthog) {
        posthog.capture(event, properties as Properties);
        return;
    }

    eventQueue.push({ event, properties });
}

export { initPostHog, capture }