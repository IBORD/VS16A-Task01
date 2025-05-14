import  Header  from '@/components/header/Header';
import  NavBar  from '@/components/navbar/NavBar';
import  Footer  from '@/components/footer/Footer';

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/contato', label: 'Contato' },
    { href: '/menu2', label: 'Esportivos' },
    { href: '/menu3', label: 'Classicos' },
  ];

  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <NavBar items={navItems} className="shadow-md" />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}