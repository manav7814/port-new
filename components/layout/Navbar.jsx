'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import CloudinaryImage from '../CloudinaryImage';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 120;
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(link.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="section-shell">
        <nav className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all sm:px-6 ${scrolled ? 'glass shadow-2xl' : 'bg-transparent'}`}>
          <button onClick={() => go('home')} className="flex items-center gap-2 font-bold">
            <div className="h-9 w-9 overflow-hidden rounded-xl shadow-glow relative">
              {/* Replace 'your_logo_public_id' with the actual Cloudinary Public ID of your logo */}
              <CloudinaryImage 
                src="https://res.cloudinary.com/di8lxrlph/image/upload/v1784189023/ChatGPT_Image_Jul_16_2026_01_33_06_PM_d37i8b.png" 
                alt="Logo"
                width={36} 
                height={36}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="hidden text-lg text-white sm:inline">Manav Parikh</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    active === link.id ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.id ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => go('contact')}
            className="hidden rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-glow md:inline-flex"
          >
            Let&apos;s talk
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-xl glass md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 rounded-2xl glass p-2 md:hidden"
            >
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className={`block w-full rounded-lg px-4 py-3 text-left text-sm ${
                    active === link.id ? 'bg-white/10 text-white' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
