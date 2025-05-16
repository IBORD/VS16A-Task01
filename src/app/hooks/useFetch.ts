import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface ErrorWithMessage {
  message: string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

export function useFetch<T = unknown>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        const data: T = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
          setState({ data: null, loading: false, error: error.message });
        } else {
          setState({ data: null, loading: false, error: 'Erro desconhecido ao buscar dados' });
        }
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return state;
}