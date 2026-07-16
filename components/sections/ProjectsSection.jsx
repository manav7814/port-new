'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Work" title="Selected Projects" subtitle="A glimpse of recent client and personal work." />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass p-3"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={project.img}
                  alt={project.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-100 sm:opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-0 sm:translate-y-6 items-center justify-center gap-3 p-5 opacity-100 sm:opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <a href={project.live} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-glow">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href={project.github} className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2 text-sm font-semibold text-white">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{project.sub}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full glass px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
