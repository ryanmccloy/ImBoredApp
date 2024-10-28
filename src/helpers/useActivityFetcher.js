import { useState } from "react";

const API_BASE_URL = "/api/fetchActivity";

export function useActivityFetcher() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const fetchActivity = async function (type) {
    const API_URL = `${API_BASE_URL}?type=${type}`;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Error fetching activity from serverless function");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error inside useActivityFetcher", err);
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchActivity, isLoading, error };
}
