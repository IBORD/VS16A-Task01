import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-800 text-center sm:text-left">
        Carros
      </h2>
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <img 
            src="images/esportivo.jpg" 
            alt="Carro esportivo" 
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="text-base sm:text-lg font-medium text-gray-700 space-y-4">
          <p>
            Explore o mundo dos carros esportivos e clássicos. 
            Descubra os modelos mais rápidos, luxuosos e icônicos da história automotiva.
          </p>
          <p>
            Navegue pelo nosso site para conhecer as melhores marcas e modelos que 
            já foram produzidos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage