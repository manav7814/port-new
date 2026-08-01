import { Code2, Globe, ShieldCheck, Sparkles, BriefcaseBusiness, LayoutDashboard, Smartphone, Link2, Palette, GitBranch, Building2, Plug, Bot, BrainCircuit, MousePointer2, Rocket } from 'lucide-react';

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

export const aiSkills = [
  { name: 'ChatGPT', level: 95, icon: Bot, color: '#10a37f' },
  { name: 'Claude AI', level: 90, icon: BrainCircuit, color: '#d97757' },
  
  { name: 'Cursor', level: 90, icon: MousePointer2, color: '#ffffff' },
  { name: 'Antigravity', level: 95, icon: Rocket, color: '#a855f7' },
];

export const projects = [
  {
  title: 'UI Template Engine',
  sub: 'Professional Online Graphic Editor (Canva Clone)',
  img: 'https://res.cloudinary.com/di8lxrlph/image/upload/v1785573243/Screenshot_2026-08-01_135926_i3l1kd.png',
  tags: [
    'React',
    'Konva.js',
    'Redux Toolkit',
    'Express.js',
    'MongoDB'
  ],
  live: 'https://ui-template-engine-tan.vercel.app',
  github: 'https://github.com/yourusername/designflow-studio'
},
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
  sub: 'Healthcare, NHS Pharmacy & Travel Clinic. It is fully CMS based website with admin panel to manage the content.',
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

export const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Skywave Technology Pvt Ltd',
    duration: 'Present (6 Months)',
    desc: 'Working as a Full Stack Developer, contributing to various web applications and focusing on building robust, scalable solutions.'
  }
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
