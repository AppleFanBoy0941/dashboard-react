import { useContext, useEffect, useState } from "react";
import TokenContext from "../context/TokenContext";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            authorization: "Bearer " + token,
          },
        });
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [url, token]);

  return { data, isLoading, error };
};

export default useFetch;
