import { parseInlineLinks } from '@/lib/inline-links';

export function InlineLinks({ text }: { text: string }) {
  return <>{parseInlineLinks(text).map((part, index) => part.href ? (
    <a
      key={index}
      className="inline-link"
      href={part.href}
      target={part.href.toLowerCase().startsWith('mailto:') ? undefined : '_blank'}
      rel={part.href.toLowerCase().startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    >
      {part.text}
    </a>
  ) : part.text)}</>;
}
