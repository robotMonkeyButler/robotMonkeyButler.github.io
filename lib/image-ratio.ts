// Invalid or unfinished values use the natural image ratio (or the placeholder default).
export function parseImageRatio(value: string): number | undefined {
  const match = value.trim().match(/^(\d+(?:\.\d+)?)\s*(?:\/\s*(\d+(?:\.\d+)?))?$/);
  if (!match) return undefined;
  const ratio = Number(match[1]) / Number(match[2] ?? 1);
  return Number.isFinite(ratio) && ratio > 0 ? ratio : undefined;
}
