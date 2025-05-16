'use client';

import React from 'react';
import { useWindowSize } from '@/app/hooks/useWindowSize';

const TelaResponsiva = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-800">Tamanho da Janela</h2>
        
        <div className="space-y-2 text-base sm:text-lg">
          <p>
            Largura: <strong className="text-blue-700">{width}px</strong>
          </p>
          <p>
            Altura: <strong className="text-blue-700">{height}px</strong>
          </p>
        </div>

        <div className="mt-6">
          {width < 768 ? (
            <p className="text-red-600 font-medium">
              ⚠️ Você está visualizando em uma tela pequena (mobile).
            </p>
          ) : (
            <p className="text-green-600 font-medium">
              ✅ Tela maior detectada (tablet ou desktop).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TelaResponsiva;