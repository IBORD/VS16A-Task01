import { useState } from 'react';

interface Car {
  id: number;
  name: string;
  image: string;
}

export function useGallery(cars: Car[]) {
  const [items, setItems] = useState(cars);

  return { items };
}