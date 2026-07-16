'use client';

import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import CloudinaryImage from '../CloudinaryImage';

export default function Footer() {
  const socials = [
    { icon: Github, href: 'https://github.com/Manav785' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/manav-parikh-ba88b532a' },
    // { icon: Instagram, href: 'https://instagram.com' },
    { icon: Mail, href: 'manavparikh501@gmail.com' }
  ];

  return (
    <footer className="relative px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-3xl glass p-6 sm:flex-row">
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-3">
          <div className="h-10 w-10 sm:h-9 sm:w-9 overflow-hidden rounded-xl shadow-glow relative shrink-0">
            <CloudinaryImage 
              src="https://res.cloudinary.com/di8lxrlph/image/upload/v1784189023/ChatGPT_Image_Jul_16_2026_01_33_06_PM_d37i8b.png" 
              alt="Logo"
              width={40} 
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <div className="font-bold text-white text-lg sm:text-base">Manav Parikh</div>
            <div className="text-sm sm:text-xs text-slate-400">MERN Developer · Freelance</div>
          </div>
        </div>
        <div className="flex gap-4 sm:gap-3">
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
