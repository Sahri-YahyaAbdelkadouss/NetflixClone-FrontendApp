import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //   this code runs when a spesific condition is met
  useEffect(() => {
    // any outside variable is a depandancy must be added in []
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* /* title */}
      <h2 className="row__title" > {title} </h2>
      <div className="row__posters">
        {/*several row_posters */}
        {movies.map((movie) => (
          // why it's not working without () ==> change it to {} is not feasible
          //   console.log(movie);
          //   console.log(isLargeRow, "isLargeRow");
          //   const poster_path = "poster_path";
          //   const backdrop_path = "backdrop_path";
          //   console.log(`${isLargeRow ? poster_path : backdrop_path}`);
          //   console.log("url :" , `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`);
          //console.log(`${base_url}${movie.poster_path}`);
          <img
            key={movie.id}
            className={ `row__poster ${isLargeRow && "row__posterLarge"}`} 
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            //src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* /* container  ->  posters */}
    </div>
  );
}

export default Row;
