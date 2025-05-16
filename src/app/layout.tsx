import  Header  from '@/components/header/Header';
import  NavBar  from '@/components/navbar/NavBar';
import  Footer  from '@/components/footer/Footer';
import { FaHome, FaCar, FaHistory, FaImages, FaEnvelope, FaDesktop } from 'react-icons/fa'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
  { href: '/', label: 'Home', icon: <FaHome /> },
  { href: '/galeria', label: 'Galeria', icon: <FaImages /> },
  { href: '/menu2', label: 'Esportivos', icon: <FaCar /> },
  { href: '/menu3', label: 'Clássicos', icon: <FaHistory /> },
  { href: '/contato', label: 'Contato', icon: <FaEnvelope /> },
  { href: '/tela-responsiva', label: 'Tela', icon: <FaDesktop /> }

];

  return (
    <html lang="pt-BR" className="h-full">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <NavBar items={navItems} className="shadow-md" />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}