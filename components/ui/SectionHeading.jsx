import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-purple-200"
        >
          {eyebrow}
        </motion.div>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 text-4xl font-bold text-white sm:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-slate-300"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
