'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../data';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-24">
      <div className="section-shell">
        <SectionHeading title="What clients say" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl glass p-6"
            >
              <Quote className="absolute right-5 top-5 text-purple-300/40" size={28} />
              <div className="flex gap-1 text-purple-300">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{item.name}</div>
                <div className="text-xs text-slate-400">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
