import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const GalleryPage = () => {
  const cars = [
    { id: 1, name: 'Porsche 911', image: '/images/porshe911.jpg' },
    { id: 2, name: 'Ferrari 488', image: '/images/ferrari.jpg' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Galeria de Carros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cars.map((car) => (
          <Card key={car.id}>
            <Card.Image src={car.image} alt={car.name} />
            <Card.Title>{car.name}</Card.Title>
            <Card.Actions>
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

export default GalleryPage;