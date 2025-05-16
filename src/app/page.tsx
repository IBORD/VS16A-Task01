import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-900 text-white">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-blue-400 text-center sm:text-left drop-shadow">
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
        <div className="text-lg sm:text-xl space-y-6 font-medium leading-relaxed">
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