import { GraduationCap, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, GoogleScholarIcon } from '@/components/social-icons';
import { profile, publications, education } from './content';
import { InlineLinks } from '@/components/inline-links';
import { AuthorList } from '@/components/author-list';
import { PublicationImage } from '@/components/publication-image';
import { parseImageRatio } from '@/lib/image-ratio';
import { Fragment, type ReactNode } from 'react';

function ResourceLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return href ? <a className={className} href={href}>{children}</a> : <span className={`${className} unfilled`} title="Add your link in app/content.ts">{children}</span>;
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  if (!href.trim()) return <span className="social-link unfilled" role="link" aria-disabled="true" aria-label={label} title={`${label}（待填写链接）`}>{children}</span>;
  const external = !href.startsWith('mailto:');
  return <a className="social-link" href={href} aria-label={label} title={label} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
}

export default function Home() {
  const institution = 'institution' in profile && typeof profile.institution === 'string' ? profile.institution : '';
  return <>
    <a className="skip-link" href="#intro">Skip to content</a>
    <div className="site-shell" id="top">
      <div className="page-layout">
        <aside className="profile" aria-label="Personal profile">
          <div className="portrait">{profile.photo ? <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={460} height={540} /> : <div className="photo-placeholder"><span className="photo-initials">{profile.initials}<span>.</span></span><span className="photo-label">YOUR PHOTO HERE</span></div>}</div>
          <div className="profile-details">
            <h1>{profile.name}</h1><p className="native-name">{profile.nativeName}</p>
            <p className="role"><InlineLinks text={profile.role} /></p><p className="affiliation"><InlineLinks text={profile.department} />{institution && <><br /><InlineLinks text={institution} /></>}</p>
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
          <section id="intro" className="intro-section" aria-label="Introduction">
            <div className="intro-copy">{profile.introduction.map((paragraph, i) => <p key={i}><InlineLinks text={paragraph} /></p>)}</div>
            <div className="interests"><p className="small-label">RESEARCH TOPICS</p><div>{profile.interests.map(interest => <span key={interest}>{interest}</span>)}</div></div>
          </section>
          <section id="publications" aria-labelledby="publications-heading">
            <div className="section-heading"><h2 id="publications-heading">Recent Publications</h2></div>
            <p className="publication-note">* indicates equal contribution</p>
            <div className="publication-list">{publications.map((paper, index) => <article className="publication" key={paper.id}>
              <div className={`paper-image${paper.image && !parseImageRatio(paper.imageRatio) ? ' natural-image-ratio' : ''}`} style={{ aspectRatio: parseImageRatio(paper.imageRatio) }}>{paper.image ? <PublicationImage src={paper.image} alt={paper.imageAlt || `Figure for ${paper.title}`} /> : <div className="figure-placeholder"><span className="figure-corner">FIG. {String(index + 1).padStart(2, '0')}</span><span className="figure-label">Research preview</span><span className="figure-caption">YOUR IMAGE HERE</span></div>}</div>
              <div className="paper-content">
                <h3><InlineLinks text={paper.title} /></h3>
                <p className="authors"><AuthorList text={paper.authors} /></p>
                <p className="venue">{paper.venue}{'year' in paper && typeof paper.year === 'string' && paper.year && <><span> / </span>{paper.year}</>}</p>
                <div className="paper-links">{paper.links.map((link, i) => <Fragment key={link.label}>{i > 0 && <span className="paper-link-separator" aria-hidden="true">|</span>}<ResourceLink href={link.url}>{link.label}</ResourceLink></Fragment>)}</div>
              </div>
            </article>)}</div>
          </section>
          <section id="education" className="education-section" aria-labelledby="education-heading">
            <div className="section-heading"><h2 id="education-heading">Education</h2></div>
            {education.map(item => <article className="education-item" key={item.id}>
              <div className="education-meta">
                <div className="education-badge">{item.badge ? <img src={item.badge} alt={item.badgeAlt || `${item.institution} logo`} loading="lazy" /> : <span className="education-badge-placeholder" aria-hidden="true"><GraduationCap size={32} strokeWidth={1.5} /></span>}</div>
              </div>
              <div className="education-content"><div className="education-heading"><h3><InlineLinks text={item.institution} /></h3><div className="education-period">{item.period}</div></div><p className="degree"><InlineLinks text={item.degree} /></p>{item.detail && <p className="education-detail"><InlineLinks text={item.detail} /></p>}</div>
            </article>)}
          </section>
          <footer><span>© {new Date().getFullYear()} {profile.name}</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>
        </main>
      </div>
    </div>
  </>;
}
