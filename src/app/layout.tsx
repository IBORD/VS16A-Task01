import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VS16A - Carros Esportivos',
  description: 'Site sobre carros esportivos e clássicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <NavBar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}