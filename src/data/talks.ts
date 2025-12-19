export type Talk = {
  title: string;
  event: string;   // "APS March Meeting 2026" etc.
  date: string;    // "2026-03-xx"
  kind?: "Poster" | "Talk";
  links?: { label: string; href: string }[];
  note?: string;
};

export const talks: Talk[] = [
  {
    title: "Quantum many-body scars and symmetry-based constructions",
    event: "APS March Meeting",
    date: "2026-03-01",
    kind: "Poster",
    links: [
      // { label: "Slides", href: "/files/slides.pdf" },
    ],
    note: "Optional 1–2 line context.",
  },
];
