import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Carros</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src="images/esportivo.jpg" 
            alt="Carro esportivo" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <p className="mb-4">
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