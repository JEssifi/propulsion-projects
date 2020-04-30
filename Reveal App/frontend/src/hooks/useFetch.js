import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFetch = (url, options, reducer, dep) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        dispatch(reducer(json));
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [dep]);
  return [response, error, isLoading];
};
