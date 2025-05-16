'use client';

import React from 'react';
import { useGoogleLogin } from '@/app/hooks/useGoogleLogin';
import { Button } from '../ui/Button';

const Header: React.FC = () => {
  const { user, loading, error, loginWithGoogle, logout } = useGoogleLogin();

  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Carros Esportivos</h1>
          <p className="text-yellow-400">Os melhores carros esportivos do mundo</p>
        </div>

        <div>
          {!user ? (
            <Button
              onClick={loginWithGoogle}
              disabled={loading}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-300 transition"
            >
              {loading ? 'Carregando...' : 'Entrar com Google'}
            </Button>
          ) : (
            <div className="flex items-center gap-4">
              <span>Olá, {user.displayName}</span>
              <Button
                onClick={logout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Sair
              </Button>
            </div>
          )}
          {error && <p className="text-red-400 mt-1">{error}</p>}
        </div>
      </div>
    </header>
  );
};

export default Header;