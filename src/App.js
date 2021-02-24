import React, { useEffect, useState } from "react";

function App() {
  const [state, setstate] = useState();
  const url =
    "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/pokemon";
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "577a9e8dcfmsh29063452fd641f9p1e671fjsn7dd642570e87",
        "x-rapidapi-host":
          "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      },
    })
      .then((response) => {
        setstate(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [url]);
  console.log(state);

  function nyLampe(farve, styrke) {
    consol;
  }

  nyLampe("grøn", "100%");

  return (
    <>
      <p>hey</p>
    </>
  );
}
export default App;
