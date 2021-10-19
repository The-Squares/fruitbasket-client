import { useEffect, useState } from "react";

function useSearch() {
  let [results, setResults] = useState([]);
  let [term, setTerm] = useState("$$$$");

  useEffect(() => {
    if (term === "$$$$") return;
    const getResults = async () => {
      try {
        let ending = term === "" ? "" : `/search?term=${term}`;

        console.log(ending);
        let response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/offers` + ending
        );

        if (response.status !== 200) return;
        let data = await response.json();
        setResults(data);
      } catch (e) {}
    };

    getResults();
  }, [term]);

  let changeTerm = (e) => {
    e.preventDefault();
    let term = e.target[0].value;
    setTerm(term);
  };

  return [results, changeTerm];
}

export default useSearch;
