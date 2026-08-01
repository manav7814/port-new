'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { skills, aiSkills } from '../data';

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 py-24">
      <div className="section-shell">
        <SectionHeading title="Tools of the trade" subtitle="The stack I use to ship fast and beautiful products." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-80"
                style={{ background: s.color }}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{s.name}</div>
                    <div className="text-xs text-slate-400">Proficient</div>
                  </div>
                </div>
                <div className="text-xl font-bold text-white">{s.level}%</div>
              </div>
              <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-sky-400"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading title="AI Skills & Tools" subtitle="Leveraging artificial intelligence to accelerate development and enhance productivity." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiSkills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-80"
                  style={{ background: s.color || 'rgba(255,255,255,0.1)' }}
                />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <s.icon size={20} />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{s.name}</div>
                      <div className="text-xs text-slate-400">Proficient</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white">{s.level}%</div>
                </div>
                <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
