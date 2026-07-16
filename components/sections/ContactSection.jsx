'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setSent(true);
        e.target.reset();
        setTimeout(() => setSent(false), 3500);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24">
      <div className="section-shell">
        <SectionHeading
          title="Let's build something great"
          subtitle="Have a project in mind? Drop the details and I'll get back within 24 hours."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-glow">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="font-medium text-white">manavparikh501@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-glow">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="font-medium text-white">India · Available worldwide</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 text-sm leading-7 text-slate-300">
              I respond fastest via the form. For long-term collaborations, send a brief about
              your idea, audience, and goals.
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>


            <div className="mt-4">
              <label className="text-xs uppercase tracking-widest text-slate-400">Project Details</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-slate-400/60 focus:ring-purple-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-sky-500 px-6 py-3.5 font-semibold text-white shadow-glow transition hover:scale-[1.01] sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sent ? (
                'Message sent ✓'
              ) : loading ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-slate-400">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-slate-400/60 focus:ring-purple-400"
      />
    </div>
  );
}
