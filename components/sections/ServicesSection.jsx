'use client';

import { motion } from 'framer-motion';
import { Building2, Globe, LayoutDashboard, Palette, Plug, Smartphone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { services } from '../data';

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 py-24">
      <div className="section-shell">
        <SectionHeading title="What I can build for you" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-purple-500/30 to-fuchsia-400/20 blur-2xl opacity-20 transition-opacity group-hover:opacity-50" />
              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-glow">
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-white">{s.title}</h3>
              <p className="relative mt-2 text-sm text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
