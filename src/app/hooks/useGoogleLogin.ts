import { useState } from "react";
import { signInWithPopup, User } from "firebase/auth";
import { auth, googleProvider } from "@/app/firebase/firebase";

interface UseGoogleLoginReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

export function useGoogleLogin(): UseGoogleLoginReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao tentar logar");
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await auth.signOut();
      setUser(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao tentar sair");
      }
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, loginWithGoogle, logout };
}