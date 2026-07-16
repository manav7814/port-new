'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, Palette, Briefcase, Plug } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const highlights = [
  { icon: Code2, label: 'MERN Stack Development' },
  { icon: Layers, label: 'Next.js' },
  { icon: Palette, label: 'UI/UX Design' },
  { icon: Briefcase, label: 'Freelancing' },
  { icon: Plug, label: 'API Integration' }
];

const stats = [
  { value: '3+', label: 'Projects Completed' },
  { value: '10+', label: 'Technologies' },
  { value: '4+', label: 'Happy Clients' },
  { value: '1+', label: 'Years Experience' }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A developer who designs"
          subtitle="I build delightful, performant web products end-to-end."
        />

        <div className="grid items-center gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-purple-500/50 to-fuchsia-500/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl glass p-2">
                <img
                  src="https://res.cloudinary.com/di8lxrlph/image/upload/v1784188160/Manav_f5idah.jpg"
                  alt="Manav Parikh, MERN stack developer"
                  width={768}
                  height={768}
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3"
          >
            <h3 className="text-3xl font-bold text-white">Crafting modern web experiences with the MERN stack.</h3>
            <p className="mt-4 text-slate-300">
              I&apos;m Manav - a  full-stack developer based in India. I help startups
              and businesses ship polished, production-ready websites and dashboards. I care
              deeply about performance, accessibility, and the tiny details that make great
              products feel inevitable.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span key={h.label} className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-sm text-slate-200">
                  <h.icon size={14} className="text-purple-300" /> {h.label}
                </span>
              ))}
            </div>

       
          </motion.div>
        </div>
      </div>
    </section>
  );
}
