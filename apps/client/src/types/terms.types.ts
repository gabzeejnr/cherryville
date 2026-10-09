type Data = { title: string, child: string };

type TermsHead = "general" | "enterprise-training" | "talent-solutions" |"cherryville-academy" | "private-training" | "terms";


interface TableData {
  head: [string, string];
  rows: [string, string][];
}

interface Clause {
  num: string;
  text: string;
  items?: string[];
  table?: TableData;
  note?: boolean;
}

interface Definition {
  term: string;
  text: string;
}

interface ContactRow {
  label: string;
  values: { text: string; href: string }[];
}

interface ContactData {
  company: string;
  address: string;
  rows: ContactRow[];
}

interface Section {
  n: number;
  title: string;
  clauses?: Clause[];
  definitions?: Definition[];
  contact?: ContactData;
}

interface Part {
  id: string;
  label: string;
  title: string;
  sections: Section[];
}

interface Crumb {
  label: string;
  id: string;
}

export type { Data, TermsHead, Part, Crumb, TableData, Clause, Definition, ContactData, Section };