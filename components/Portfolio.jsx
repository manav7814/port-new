'use client';

import { useEffect, useState } from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { Background } from './layout/Background';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import VantaBackground from './VantaBackground';

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020617] text-white">
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
          <div className="h-16 w-16 animate-spin rounded-full border-2 border-white/15 border-t-purple-400" />
        </div>
      )}
      <Background />
      <div className="noise pointer-events-none fixed inset-0 z-0 opacity-30" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-radial-soft" />
      <VantaBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
