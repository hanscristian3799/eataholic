import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getResults("");
  }, []);

  const getResults = async (newTerm) => {
    try {
      setIsLoading(true);
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: newTerm,
          location: "san jose",
        },
      });
      if (errorMessage) setErrorMessage("");
      setResults(response.data.businesses);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Something went wrong");
    }
  };

  return [getResults, results, errorMessage, isLoading];
};
