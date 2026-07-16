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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
