const COLORS = {
    burgundy: "#680A30",
    cherry: "#AE154D",
    ivory: "#FAF8F6",
    softCherry: "#FDF2E9",
    badge: "#ECEAE8",
    muted: "#5E4A52",
};


function Leaf() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.cherry} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21V11" />
            <path d="M12 11c0-4 3-6 7-6 0 4-3 6-7 6z" />
            <path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" />
        </svg>
    )
}

function TrendUp() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.cherry} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="15 7 21 7 21 13" />
        </svg>
    )
}

function Target() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.cherry} strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" fill={COLORS.cherry} />
        </svg>
    )
}

function Clock({ size = 16 }: { size?: string | number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={COLORS.cherry} strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 14" />
        </svg>
    )
}


export { Leaf, TrendUp, Target, Clock }