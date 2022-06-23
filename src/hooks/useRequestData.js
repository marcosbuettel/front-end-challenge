import axios from 'axios';
import { useEffect, useState } from 'react';

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const requestApi = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url, {});
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestApi(url);
  }, [url]);

  return [data, isLoading, error];
};
