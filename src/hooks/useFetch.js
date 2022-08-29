import { useEffect, useState } from "react";

const useFetch = ({ url }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async () => {
      try {
        const response = await fetch("url");
        const data = await response.json();
        setData(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
