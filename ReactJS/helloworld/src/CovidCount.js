import React, { useState, useEffect } from "react";

function CovidCount() {
  const [country, setCountry] = useState("");
  const [result, setResult] = useState({});

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/${country}`)
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data) => {
        setResult(data);
        console.log(result);
      });
  }, [country]);

  const getCountry = (e) => {
    setCountry(e.target.value);
    console.log(country);
  };
  return (
    <div>
      <label>Enter your country</label>
      <input type="text" onChange={getCountry} />
      {result.confirmed === undefined ? (
        "Please wait"
      ) : (
        <p>{result.confirmed.value}</p>
      )}
    </div>
  );
}

export default CovidCount;
