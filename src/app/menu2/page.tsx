import React from 'react';

const Menu2Page: React.FC = () => {
  const sportsCars = [
    { id: 1, name: 'Porsche 911', year: 2023, topSpeed: '293 km/h', image: '/images/porshe911.jpg' },
    { id: 2, name: 'Ferrari 488 GTB', year: 2022, topSpeed: '330 km/h', image: '/images/ferrari.jpg' },
    { id: 3, name: 'Lamborghini Huracán', year: 2023, topSpeed: '325 km/h', image: '/images/lambo.jpg' },
    { id: 4, name: 'McLaren 720S', year: 2023, topSpeed: '341 km/h', image: '/images/mclaren.jpg' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Modelos Esportivos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sportsCars.map(car => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
          >
            {car.image && (
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{car.name}</h3>
              <p className="text-gray-600">Ano: {car.year}</p>
              <p className="text-gray-600">Velocidade Máxima: {car.topSpeed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu2Page;
