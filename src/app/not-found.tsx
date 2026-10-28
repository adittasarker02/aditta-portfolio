import Link from 'next/link';
export default function NotFound() { return <main className="not-found container"><p className="eyebrow">404 — PAGE NOT FOUND</p><h1>Looks like this page wandered off.</h1><Link className="button button-primary" href="/">Back to home ↗</Link></main>; }
