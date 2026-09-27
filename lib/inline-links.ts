export type InlinePart = { text: string; href?: string };

// A small inline-link subset: [visible text](https://example.com).
// Plain placeholders and unsupported URLs remain ordinary, escaped text.
export function parseInlineLinks(text: string): InlinePart[] {
  const parts: InlinePart[] = [];
  const pattern = /\[([^\]\n]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/g;
  let cursor = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index!;
    if (index > cursor) parts.push({ text: text.slice(cursor, index) });
    let allowed = false;
    try {
      allowed = ['https:', 'http:', 'mailto:'].includes(new URL(match[2]).protocol);
    } catch {
      // An incomplete link stays readable while the author edits it.
    }
    parts.push(allowed ? { text: match[1], href: match[2] } : { text: match[0] });
    cursor = index + match[0].length;
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor) });
  return parts;
}
