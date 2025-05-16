'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useGallery } from '@/app/hooks/useGallery';



interface Car {
  id: number;
  name: string;
  image: string;
}

interface GalleryProps {
  cars: Car[];
}

export const Gallery: React.FC<GalleryProps> = ({ cars }) => {
  const { items } = useGallery(cars);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Galeria de Carros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((car) => (
          <Card key={car.id}>
            <Card.Image src={car.image} alt={car.name} />
            <Card.Title className="text-lg font-semibold text-center mt-2">{car.name}</Card.Title>
            <Card.Actions className="flex justify-center p-4">
              <Button variant="default">
                <Link href="/menu2">Detalhes</Link>
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </div>
    </div>
  );
};
