'use client';

import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: Github, href: 'https://github.com/Manav785' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/manav-parikh-ba88b532a' },
    // { icon: Instagram, href: 'https://instagram.com' },
    { icon: Mail, href: 'manavparikh501@gmail.com' }
  ];

  return (
    <footer className="relative px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl glass p-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white shadow-glow">
            M
          </span>
          <div>
            <div className="font-bold text-white">Manav Parikh</div>
            <div className="text-xs text-slate-400">MERN Developer · Freelance</div>
          </div>
        </div>
        <div className="flex gap-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 transition-all hover:scale-110 hover:text-white"
              aria-label="social link"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
        <div className="text-xs text-slate-400">© {new Date().getFullYear()} Manav Parikh. All rights reserved.</div>
      </div>
    </footer>
  );
}
