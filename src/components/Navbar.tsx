'use client';
import Link from 'next/link';
import { useState } from 'react';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="nav container"><Link className="brand" href="/"><span className="brand-mark">A</span><span>Aditta<span className="brand-dot">.</span></span></Link><button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button><div className={`nav-links ${open ? 'nav-open' : ''}`}><a href="/#about" onClick={() => setOpen(false)}>About</a><a href="/#skills" onClick={() => setOpen(false)}>Skills</a><a href="/#projects" onClick={() => setOpen(false)}>Projects</a><a href="/#education" onClick={() => setOpen(false)}>Education</a><a className="nav-contact" href="/#contact" onClick={() => setOpen(false)}>Contact ↗</a></div></nav></header>;
}
