export function formatDate(iso: string) {
  // iso: "YYYY-MM-DD"
  const [y, m, d] = iso.split("-").map((v) => Number(v));
  if (!y || !m || !d) return iso;
  return `${y}/${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}`;
}
