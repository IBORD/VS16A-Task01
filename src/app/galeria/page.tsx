import React from 'react';
import { Gallery } from '@/components/gallery/gallery';

const cars = [
  { id: 1, name: 'Porsche 911', image: '/images/porshe911.jpg' },
  { id: 2, name: 'Ferrari 488', image: '/images/ferrari.jpg' },
];

const GalleryPage = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Gallery cars={cars} />
    </div>
  );
};

export default GalleryPage;