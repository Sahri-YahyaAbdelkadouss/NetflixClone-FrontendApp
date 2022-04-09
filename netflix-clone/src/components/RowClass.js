import React, { Component } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

export default class RowClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      trailerUrl: "",
    };
  }

  BASE_URL = "https://image.tmdb.org/t/p/original/";
  opts = {
    height: "390",
    width: "100%  ",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  async fetchData() {
    const request = await axios.get(this.props.fetchUrl);
    return request;
  }

  handleClick = (movie) => {
    if (this.state.trailerUrl) {
      this.setState({ ...this.state, trailerUrl: "" });
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlSerch = new URL(url).search;
          const urlParams = new URLSearchParams(urlSerch);
          this.setState({ ...this.state, trailerUrl: urlParams.get("v") });
        })
        .catch((err) => console.log("Note movieTrailer catched this err", err));
    }
  }

  componentDidMount() {
    this.fetchData().then((res) => {
      this.setState({ ...this.state, movies: res.data.results });
    });
  }

  render() {
    return (
      <div className="row">
        {/* /* title */}
        <h2 className="row__title"> {this.propstitle} </h2>

        <div className="row__posters">
          {/*several row_posters */}
          {this.state.movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${
                this.props.isLargeRow && "row__posterLarge"
              }`}
              src={`${this.BASE_URL}${
                this.props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              //src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              onClick={() => this.handleClick(movie)}
              //onClick={() => onMovieSelect(movie)}
            />
          ))}
        </div>
        {/* /* container  ->  posters */}
        {this.state.trailerUrl && (
          <YouTube videoId={this.state.trailerUrl} opts={this.opts} />
        )}
      </div>
    );
  }
}
