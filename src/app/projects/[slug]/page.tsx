import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return <main className="detail-page container"><Link className="text-link" href="/#projects">← Back to projects</Link><p className="eyebrow detail-eyebrow">{project.category}</p><h1>{project.title}</h1><p className="detail-description">{project.description}</p><img className="detail-image" src={project.image} alt={`${project.title} preview`} /><h2>Technologies</h2><div className="tags">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div><div className="hero-actions detail-actions">{project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Open live project ↗</a>}<a className="button button-secondary" href={project.code} target="_blank" rel="noreferrer">View source code ↗</a></div><p className="detail-note">Project summaries are intentionally general. Update this page with the exact features and technologies used in your project.</p></main>;
}
