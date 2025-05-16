'use client'

import React from 'react';
import { useFetch } from '@/app/hooks/useFetch'

interface Car {
  id: number
  name: string
  year: number
  topSpeed: string
  image: string
}

const Menu2Page = () => {
  const { data: sportsCars, loading, error } = useFetch<Car[]>('/api/sports-cars')

  if (loading) return <p>Carregando...</p>
  if (error) return <p className="text-red-500">Erro: {error}</p>

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Modelos Esportivos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sportsCars?.map(car => (
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
  )
}

export default Menu2Page