'use client';

import React from 'react';
import { useWindowSize } from '@/app/hooks/useWindowSize';

const TelaResponsiva = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-blue-400 drop-shadow">
          Tamanho da Janela
        </h2>

        <div className="space-y-3 text-lg font-medium text-white">
          <p>
            Largura: <strong className="text-blue-400">{width}px</strong>
          </p>
          <p>
            Altura: <strong className="text-blue-400">{height}px</strong>
          </p>
        </div>

        <div className="mt-8">
          {width < 768 ? (
            <p className="text-red-500 font-semibold">
              ⚠️ Você está visualizando em uma tela pequena (mobile).
            </p>
          ) : (
            <p className="text-green-400 font-semibold">
              ✅ Tela maior detectada (tablet ou desktop).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TelaResponsiva;