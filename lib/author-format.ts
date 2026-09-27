export function parseAuthors(text: string) {
  const normalized = text.replace(/\$\\(ddagger|dagger)\$/g, (_, command: string) =>
    command === 'ddagger' ? '‡' : '†'
  );

  return normalized.split(/(\*\*[^*\n]+\*\*[*†‡]*)/g).filter(Boolean).map(part => {
    const bold = part.match(/^\*\*([^*\n]+)\*\*([*†‡]*)$/);
    return bold ? { text: bold[1] + bold[2], bold: true } : { text: part, bold: false };
  });
}
