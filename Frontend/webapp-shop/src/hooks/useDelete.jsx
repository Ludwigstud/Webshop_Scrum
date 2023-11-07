import { useState, useMemo } from 'react';

const useDelete = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const authToken = localStorage.getItem('accessToken');

  const headers = useMemo(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (authToken) {
      headers.append('Authorization', `Bearer ${authToken}`);
    }
    return headers;
  }, [authToken]);

  const deleteData = async (url, onSuccess) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: headers,
      });

      if (!response.ok) {
        throw Error(`${response.status}: ${await response.text()}`);
      }
      setResponse(response);
      onSuccess();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, error, isLoading, deleteData };
};

export default useDelete;
