import React from 'react'

const Menu3Page: React.FC = () => {
  const classicCars = [
    { id: 1, name: 'Ford Mustang 1967', value: 'R$ 350.000', image: '/images/mustang1947.jpg' },
    { id: 2, name: 'Chevrolet Corvette 1963', value: 'R$ 420.000', image: '/images/corvette1963.jpg'  },
    { id: 3, name: 'Volkswagen Fusca 1970', value: 'R$ 45.000', image: '/images/fusca.jpg' },
    { id: 4, name: 'Porsche 356', value: 'R$ 600.000', image: '/images/porshe356.jpg' },
  ]

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Carros Clássicos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {classicCars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{car.name}</h3>
              <p>Valor estimado: {car.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu3Page;