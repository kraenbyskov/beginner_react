import React, { useEffect, useState } from "react";

function FecthAPI() {

    const [state, setstate] = useState();
    const Key = `7c105b21789fdf773ab798b1c284f40e`
    const category = `popular`
    const url =
        `https://api.themoviedb.org/3/movie/${category}?api_key=${Key}`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setstate(result.results))
            .catch((err) => {
                console.error(err);
            });
    }, [url]);


    return (
        <>
            {state && state.map(({ poster_path }) => (
                <div style={{ width: "150px", display: "inline-flex", margin: "10px" }}>
                    <div>
                        <img style={{ width: "150px" }} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
                    </div>
                </div>
            ))}
        </>
    );
}
export default FecthAPI;
