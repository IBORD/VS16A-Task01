'use client';

import React from 'react';
import { useFetch } from '@/app/hooks/useFetch';

interface Car {
  id: number;
  name: string;
  value: string;
  image: string;
}

const Menu3Page = () => {
  const { data: classicCars, loading, error } = useFetch<Car[]>('/api/classic-cars');

  if (loading) return <p className="p-6">Carregando...</p>;
  if (error) return <p className="p-6 text-red-600">Erro: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Carros Clássicos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {classicCars?.map((car) => (
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