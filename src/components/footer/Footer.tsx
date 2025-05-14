import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>© 2025 José Alves - Todos os direitos reservados</p>
        <p className="text-sm text-gray-400 mt-2">
          Desenvolvido com Next.js e TypeScript
        </p>
      </div>
    </footer>
  )
}

export default Footer