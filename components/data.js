import { Code2, Globe, ShieldCheck, Sparkles, BriefcaseBusiness, LayoutDashboard, Smartphone, Link2, Palette, GitBranch, Building2, Plug } from 'lucide-react';

export const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['services', 'Services'],
  ['testimonials', 'Testimonials'],
  ['contact', 'Contact']
];

export const skills = [
  { name: 'React', level: 96, icon: Code2 },
  { name: 'Next.js', level: 94, icon: Globe },
  { name: 'Node.js', level: 92, icon: ShieldCheck },
  { name: 'Express', level: 90, icon: BriefcaseBusiness },
  { name: 'MongoDB', level: 89, icon: Link2 },
  { name: 'Tailwind CSS', level: 97, icon: Sparkles },
  { name: 'TypeScript', level: 88, icon: LayoutDashboard },

  { name: 'Git/GitHub', level: 93, icon: GitBranch },
  { name: 'N8N',level:70,icon:Building2},
];

export const projects = [
  {
    title: 'A1 Distributor LLC',
    sub: 'Logistics & Distribution Company Website',
    img: 'https://res.cloudinary.com/di8lxrlph/image/upload/v1784188451/Screenshot_2026-07-16_132352_t3mfbn.png',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'SEO'],
    live: 'https://a1distributorllc.com/',
    github: '#'
  },
  {
    title: 'Vehi LLC',
    sub: 'Corporate Business Website',
    img: 'https://res.cloudinary.com/di8lxrlph/image/upload/v1784188360/Screenshot_2026-07-16_132210_zocrvx.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    live: 'https://www.vehilllc.com/',
    github: '#'
  },
  {
  title: 'Highfield Pharmacy',
  sub: 'Healthcare, NHS Pharmacy & Travel Clinic',
  img: 'https://res.cloudinary.com/di8lxrlph/image/upload/v1784187880/Screenshot_2026-07-16_131354_vp8itf.png',
  tags: ['Next.js', 'Express.js', 'MongoDB'],
  live: 'https://www.highfieldpharmacyclinic.co.uk/',
  github: '#'
},
{
  title: 'ST Blood Test',
  sub: 'Private Blood Testing & Diagnostic Services Platform',
  img: 'https://res.cloudinary.com/di8lxrlph/image/upload/v1784188059/Screenshot_2026-07-16_131706_s53cl7.png',
  tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  live: 'https://www.stalbansbloodtest.com/',
  github: '#'
}
  // {
  //   title: 'Vemina Foods',
  //   sub: 'Premium Food Brand Website',
  //   img: '/assets/project-vemina.svg',
  //   tags: ['Next.js', 'GSAP', 'Tailwind'],
  //   live: '#',
  //   github: '#'
  // },

];

export const services = [
  { icon: Globe, title: 'Website Development', desc: 'Fast, SEO-friendly marketing sites and product websites.' },
  { icon: LayoutDashboard, title: 'Admin Dashboards', desc: 'Data-rich dashboards with auth, charts and role management.' },
  { icon: Plug, title: 'API Integration', desc: 'Stripe, Firebase, OpenAI and any third-party API you need.' },
  { icon: Smartphone, title: 'Responsive Design', desc: 'Pixel-perfect experiences across mobile, tablet and desktop.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Brand-aligned design systems and reusable components.' },
  { icon: Building2, title: 'Business Websites', desc: 'Premium presence for startups, agencies and SMBs.' }
];

export const testimonials = [
  {
    name: 'Client A',
    role: 'Founder, Logistics Company',
    quote: 'Manav delivered a polished website that instantly elevated our brand and made our operations look more credible online.'
  },
  {
    name: 'Client B',
    role: 'Director, Corporate Firm',
    quote: 'The communication was sharp, the design felt premium, and the final build was fast and dependable.'
  },
  {
    name: 'Client C',
    role: 'Brand Manager, Food Business',
    quote: 'We got a site that felt modern, clean, and conversion-ready. The attention to detail was the best part.'
  }
];
