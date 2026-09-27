import { InlineLinks } from '@/components/inline-links';
import { parseAuthors } from '@/lib/author-format';

// Contribution markers immediately after a bold name inherit its emphasis.
export function AuthorList({ text }: { text: string }) {
  return <>{parseAuthors(text).map((part, index) =>
    part.bold ? (
      <strong key={index}><InlineLinks text={part.text} /></strong>
    ) : <InlineLinks key={index} text={part.text} />
  )}</>;
}
