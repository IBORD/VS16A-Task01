import { useState } from 'react';

interface Car {
  id: number;
  name: string;
  image: string;
}

export function useGallery(cars: Car[]) {
  const [items] = useState(cars);

  return { items };
}