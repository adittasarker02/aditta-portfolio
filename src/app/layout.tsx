import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
export const metadata: Metadata = {
  title: 'Aditta Sarker | Web Developer Portfolio',
  description: 'Portfolio of Aditta Sarker, CSE student at Daffodil International University.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar />{children}<footer className="footer"><span>© {new Date().getFullYear()} Aditta Sarker</span><span>Built with Next.js · React · CSS</span></footer></body></html>;
}
