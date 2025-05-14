import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Carros Esportivos</h1>
        <p className="text-yellow-400">Os melhores carros esportivos do mundo</p>
      </div>
    </header>
  )
}

export default Header