'use client';

import React from "react";
import { useGoogleLogin } from "@/app/hooks/useGoogleLogin";

const LoginPage = () => {
  const { user, loading, error, loginWithGoogle, logout } = useGoogleLogin();

  return (
    <div className="p-4">
      {!user ? (
        <button
          onClick={loginWithGoogle}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Carregando..." : "Entrar com Google"}
        </button>
      ) : (
        <div>
          <p>Olá, {user.displayName}!</p>
          <button
            onClick={logout}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Sair
          </button>
        </div>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default LoginPage;