import Link from 'next/link'
import React from 'react'

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-800 text-white py-4">
      <div className="container mx-auto px-4 flex space-x-6">
        <Link href="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link href="/menu2" className="hover:text-yellow-300">
          Modelos Esportivos
        </Link>
        <Link href="/menu3" className="hover:text-yellow-300">
          Clássicos
        </Link>
      </div>
    </nav>
  )
}

export default NavBar