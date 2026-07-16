'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-24">
      <div className="section-shell">
        <SectionHeading title="Experience Timeline" />
        <div className="mt-10 space-y-6">
          {['Freelance MERN Developer', 'Web Designer', 'Frontend Developer'].map((role, index) => (
            <motion.div key={role} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative pl-10">
              <div className="absolute left-3 top-2 h-full w-px bg-white/10" />
              <div className="absolute left-0 top-2 h-6 w-6 rounded-full border border-purple-300/60 bg-slate-950 shadow-glow" />
              <div className="glass rounded-2xl p-5">
                <h3 className="text-lg font-medium text-white">{role}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">Delivered responsive, refined interfaces and full-stack solutions with a strong focus on clarity, reliability, and business goals.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
