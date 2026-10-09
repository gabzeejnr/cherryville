const SECTION_IDS = new Set<string>();
const CLAUSE_IDS = new Set<string>();
const sectionId = (n: number) => `s-${n}`;
const clauseId = (num: string) => `c-${num.replace('.', '-')}`;
const LINK =
    'text-[#AE154D] underline decoration-[#AE154D]/30 underline-offset-2 hover:decoration-[#AE154D]';
const BODY = 'text-[15px] leading-7 text-slate-700';
const HEADER_H = 56;
const CRUMB_H = 48;
const STICKY_TOP = HEADER_H + CRUMB_H;
const partId = (id: string) => `part-${id}`;

const REF = /clauses?\s+(\d{1,2})(?:\.(\d{1,2}))?(?:\([a-z]\))?/gi;

export {
    SECTION_IDS, CLAUSE_IDS, sectionId, HEADER_H,
    clauseId, LINK, STICKY_TOP, REF, BODY, partId
}