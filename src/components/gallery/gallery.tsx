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
        <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">Galeria de Carros</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((car) => (
                    <Card key={car.id} className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-blue-800 transition-shadow">
                        <Card.Image src={car.image} alt={car.name} />
                        <Card.Title className="text-xl font-semibold text-center mt-4 text-white">{car.name}</Card.Title>
                        <Card.Actions className="flex justify-center p-4">
                            <Button variant="default"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                            >
                                <Link href="/menu2">Detalhes</Link>
                            </Button>
                        </Card.Actions>
                    </Card>
                ))}
            </div>
        </div>
    );
};
