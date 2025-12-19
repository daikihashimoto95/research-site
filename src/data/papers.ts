export type Paper = {
  title: string;
  authors: string;     // "A. Author, B. Author"
  venue?: string;      // "PRB (submitted)" etc.
  year?: number;
  status?: "In prep" | "Submitted" | "Published" | "Preprint";
  links?: { label: string; href: string }[];
  note?: string;
};

export const papers: Paper[] = [
  {
    title: "Asymptotic quantum many-body scars in SU(N) Hubbard models",
    authors: "D. Hashimoto, ...",
    venue: "in preparation",
    year: 2026,
    status: "In prep",
    links: [
      // { label: "arXiv", href: "https://arxiv.org/abs/xxxx.xxxxx" },
      // { label: "PDF", href: "/files/paper.pdf" },
    ],
    note: "Short 1–2 line summary goes here.",
  },
];
