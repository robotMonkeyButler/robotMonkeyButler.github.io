import type { Metadata } from 'next';
import './globals.css';
import { profile } from './content';

export const metadata: Metadata = {
  title: `${profile.name} — Academic Homepage`,
  description: `Academic homepage of ${profile.name}. Research, publications, and education.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
