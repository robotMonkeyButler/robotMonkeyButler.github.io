import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, GoogleScholarIcon } from '@/components/social-icons';
import { profile, publications, education } from './content';
import type { ReactNode } from 'react';

function ResourceLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return href ? <a className={className} href={href}>{children}</a> : <span className={`${className} unfilled`} title="Add your link in app/content.ts">{children}</span>;
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  if (!href.trim()) return <span className="social-link unfilled" role="link" aria-disabled="true" aria-label={label} title={`${label}（待填写链接）`}>{children}</span>;
  const external = !href.startsWith('mailto:');
  return <a className="social-link" href={href} aria-label={label} title={label} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#intro">Skip to content</a>
    <div className="site-shell" id="top">
      <header className="masthead">
        <a className="wordmark" href="#top"><span className="mark" aria-hidden="true" />{profile.name}<span className="wordmark-note"> / Academic homepage</span></a>
        <nav aria-label="Page sections"><a href="#intro">Intro</a><a href="#publications">Publications</a><a href="#education">Education</a></nav>
      </header>
      <div className="page-layout">
        <aside className="profile" aria-label="Personal profile">
          <div className="portrait">{profile.photo ? <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={460} height={540} /> : <div className="photo-placeholder"><span className="photo-initials">{profile.initials}<span>.</span></span><span className="photo-label">YOUR PHOTO HERE</span></div>}</div>
          <div className="profile-details">
            <h1>{profile.name}</h1><p className="native-name">{profile.nativeName}</p>
            <p className="role">{profile.role}</p><p className="affiliation">{profile.department}<br />{profile.institution}</p>
            <p className="location"><MapPin size={14} strokeWidth={1.5} aria-hidden="true" />{profile.location}</p>
            <div className="contact-links" role="group" aria-label="Contact and social profiles">
              <SocialLink href={profile.email.trim() ? `mailto:${profile.email.trim()}` : ''} label="Email"><Mail size={18} strokeWidth={1.6} aria-hidden="true" /></SocialLink>
              <SocialLink href={profile.github} label="GitHub"><GithubIcon /></SocialLink>
              <SocialLink href={profile.linkedin} label="LinkedIn"><LinkedinIcon /></SocialLink>
              <SocialLink href={profile.x} label="X"><XIcon /></SocialLink>
              <SocialLink href={profile.scholar} label="Google Scholar"><GoogleScholarIcon /></SocialLink>
            </div>
          </div>
        </aside>
        <main>
          <section id="intro" className="intro-section" aria-labelledby="intro-heading">
            <div className="section-kicker"><span>ABOUT ME</span><span>01</span></div>
            <h2 id="intro-heading" className="intro-title">Introduction<span>.</span></h2>
            <div className="intro-copy">{profile.introduction.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
            <div className="interests"><p className="small-label">RESEARCH INTERESTS</p><div>{profile.interests.map(interest => <span key={interest}>{interest}</span>)}</div></div>
          </section>
          <section id="publications" aria-labelledby="publications-heading">
            <div className="section-heading"><h2 id="publications-heading">Publications</h2><span className="section-number">02</span></div>
            <div className="publication-list">{publications.map((paper, index) => <article className="publication" key={paper.id}>
              <div className="paper-image">{paper.image ? <img src={paper.image} alt={paper.imageAlt || `Figure for ${paper.title}`} width={440} height={300} loading="lazy" /> : <div className="figure-placeholder"><span className="figure-corner">FIG. {String(index + 1).padStart(2, '0')}</span><span className="figure-label">Research preview</span><span className="figure-caption">YOUR IMAGE HERE</span></div>}</div>
              <div className="paper-content">
                <p className="venue">{paper.venue}<span> / </span>{paper.year}</p><h3>{paper.title}</h3>
                <p className="authors">{paper.authors.map((author, i) => <span key={i}>{i > 0 && ', '}{author.self ? <strong>{author.name}</strong> : author.name}</span>)}</p>
                <p className="paper-summary">{paper.summary}</p>
                <div className="paper-links">{paper.links.map(link => <ResourceLink key={link.label} href={link.url}>{link.label}<ArrowUpRight size={13} aria-hidden="true" /></ResourceLink>)}</div>
              </div>
            </article>)}</div>
          </section>
          <section id="education" className="education-section" aria-labelledby="education-heading">
            <div className="section-heading"><h2 id="education-heading">Education</h2><span className="section-number">03</span></div>
            {education.map(item => <article className="education-item" key={item.id}><div className="education-period">{item.period}</div><div><h3>{item.institution}</h3><p className="degree">{item.degree}</p>{item.detail && <p className="education-detail">{item.detail}</p>}</div></article>)}
          </section>
          <footer><span>© {new Date().getFullYear()} {profile.name}</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>
        </main>
      </div>
    </div>
  </>;
}
