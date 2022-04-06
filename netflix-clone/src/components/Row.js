import React, { useState, useEffect } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const opts = {
  height: "390",
  width: "100%  ",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  //const [slectedMovie, setslectedMovie] = useState();


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


  const handleClick = (movie) => {
    console.log("click");
    console.log("trailerUrl", trailerUrl);
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      console.log("movie", movie.name);
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlSerch = new URL(url).search;
          const urlParams = new URLSearchParams(urlSerch);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log("movieTrailer catched this err", err));
    }
  };

  // const onMovieSelect =(movie)=>{
  //       setslectedMovie(movie);
  //       handleClick(setslectedMovie);
  //   }

  return (
    <div className="row">
      {/* /* title */}
      <h2 className="row__title"> {title} </h2>
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
          //   console.log(movie);
          <>
            {console.log(movie)};
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              //src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
              //onClick={() => onMovieSelect(movie)}
            />
          </>
        ))}
      </div>
      {/* /* container  ->  posters */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;