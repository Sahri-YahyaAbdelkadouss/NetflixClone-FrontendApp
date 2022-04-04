import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Banner.css";
function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    //why useEffect is used only like this
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log( "random Number",Math.floor(Math.random() * request.data.results.length - 1),"length", request.data.results.length );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  //check if setMovie got the setting done and checking the movie object
  //console.log("movie image link " , `${base_url}${movie?.backdrop_path}`);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title  */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>

        {/* div > 2 buttons  */}
        <div className="banner_button">
          <button className="banner_buttons">Play</button>
          <button className="banner_buttons">My List</button>
        </div>

        {/* description */}
        <div className="banner_description">
          <h1 className="banner_description">
            {" "}
            {truncate(movie?.overview, 150)}{" "}
          </h1>
        </div>
      </div>
      <div className="banner_fadebottom" />
    </header>
  );
}

export default Banner;
