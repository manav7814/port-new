import './globals.css';

export const metadata = {
  title: 'Manav Parikh | MERN Stack Developer',
  description: 'Premium portfolio website for Manav Parikh, MERN Stack Developer &  Web Developer.',
  metadataBase: new URL('https://manavparikh.dev'),
  openGraph: {
    title: 'Manav Parikh | MERN Stack Developer',
    description: 'Premium portfolio website for Manav Parikh, MERN Stack Developer &  Web Developer.'
  }
};

import VantaBackground from '../components/VantaBackground';

import ClickSpark from '../components/ClickSpark';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={24}
          sparkRadius={40}
          sparkCount={6}
          duration={600}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
