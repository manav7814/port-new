'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-24">
      <div className="section-shell">
        <SectionHeading title="Experience Timeline" />
        <div className="mt-10 space-y-6">
          {experiences.map((exp, index) => {
            const isPresent = exp.duration.includes('Present');
            return (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative pl-10 group">
                {/* Timeline Line */}
                <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-purple-500/50 to-white/10" />
                
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-2 h-6 w-6 rounded-full border-2 ${isPresent ? 'border-purple-400 bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'border-purple-300/40 bg-slate-950'} transition-all duration-300`} />
                
                {/* Content Card */}
                <div className={`glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${isPresent ? 'border border-purple-500/30 bg-white/[0.03]' : 'border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.02]'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h3 className={`text-xl font-bold ${isPresent ? 'text-purple-300' : 'text-white'}`}>{exp.role}</h3>
                    <span className={`inline-block mt-2 sm:mt-0 px-3 py-1 rounded-full text-xs font-semibold tracking-wider ${isPresent ? 'bg-purple-500/20 text-purple-200 border border-purple-500/30' : 'bg-white/5 text-slate-400'}`}>
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-md text-white/80 mb-3 font-semibold flex items-center gap-2">
                    {exp.company}
                  </div>
                  <p className="text-sm leading-7 text-slate-300">{exp.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
