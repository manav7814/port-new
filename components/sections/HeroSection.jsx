'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/Manav785', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/manav-parikh-ba88b532a', label: 'LinkedIn' },
  // { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Mail, href: 'manavparikh501@gmail.com', label: 'Email' }
];

export default function HeroSection() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 pb-20 pt-28">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-slate-300"
        >
          <Sparkles size={14} className="text-purple-300" />
          Available for freelance · Worldwide
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
            Manav Parikh
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-xl font-medium text-purple-100 sm:text-2xl md:text-3xl"
        >
          MERN Stack Developer &  Web Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          I craft fast, premium web experiences from polished landing pages to full-stack
          platforms. React, Next.js, Node and a love for delightful UI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scroll('projects')}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02]"
          >
            View Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scroll('contact')}
            className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Hire Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex justify-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-xl glass text-slate-400 transition-all hover:scale-110 hover:text-white hover:shadow-glow"
            >
              <s.icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 animate-float">
        Scroll to explore ↓
      </div>
    </section>
  );
}
