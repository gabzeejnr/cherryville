import Section from "../Section";

export default function WhatToExpect({ subtitles }: { subtitles: string[] }) {

    return (
        <Section subtitleArray={subtitles} bg="bg-cherry"></Section>
    )
}