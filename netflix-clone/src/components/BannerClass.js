import React, { Component } from "react";
import axios from "../axios";
import "./Banner.css";

class BannerClass extends Component {
  BASE_URL = "https://image.tmdb.org/t/p/original/";

  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      readMore: false,
    };
  }

  async fetchMovie(fetchUrl) {
    const request = await axios.get(fetchUrl);
    return request.data.results[
      Math.floor(Math.random() * request.data.results.length - 1)
    ];
  }

  componentDidMount() {
    //fetch Movie
    this.fetchMovie(this.props.fetchUrl).then((movie) => {
      this.setState({ ...this.state, movie });
      this.readMoreButton();
    });
    console.log("BannnerClass DidMount is invoked");
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.movie !== this.props.movie) {
      this.fetchMovie(this.props.fetchUrl).then((movie) => {
        this.setState({ ...this.state, movie });
        this.readMoreButton();
      });
    }
  };

  changeMovie() {
    this.fetchMovie(this.props.fetchUrl).then((movie) => {
      this.setState({ ...this.state, movie });
      this.readMoreButton();
    });
  }

  truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "" : str;
  }

  readMoreButton() {
    // console.log("typeof this.state.movie ", typeof this.state.movie.overview);
    if (this.state.movie !== null) {
      let movieOverview = this.state.movie.overview;
      console.log(
        "readMoreButton Movie OverView",
        movieOverview,
        "length",
        movieOverview.length
      );
      if (this.state.movie.overview.length > 150) {
        console.log("setting ReadMore to True");
        this.setState({ ...this.state, readMore: true });
      } else {
        console.log("setting ReadMore to False");
        this.setState({ ...this.state, readMore: false });
      }
    }
  }

  handleReadmore() {
    if (this.state.readMore) {
      console.log("readMore set to false");
      this.setState({ ...this.state, readMore: false });
    } else {
      console.log("readMore set to true");
      this.setState({ ...this.state, readMore: true });
    }
  }

  render() {
    return (
      <>
        {console.log("movie", this.state.movie)}
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${this.BASE_URL}${this.state.movie?.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="testing">
            <div className="banner_contents">
              <div className="banner_contents_col_left">
                {/* title  */}
                <h1 className="banner_title">
                  {this.state.movie?.title ||
                    this.state.movie?.name ||
                    this.state.movie?.original_name}
                </h1>

                {/* div > 2 buttons  */}
                <div className="banner_button">
                  <button className="banner_buttons">Play</button>
                  <button className="banner_buttons">My List</button>
                </div>

                {/* description */}
                <div className="banner_description">
                  <h1 className="banner_description">
                    {this.state.readMore
                      ? this.truncate(this.state.movie?.overview, 150)
                      : this.state.movie?.overview}
                    {this.state.readMore && (
                      <button
                        className="benner_button_readmore :"
                        onClick={() => this.handleReadmore()}
                      >
                        {" "}
                        ...{">"}
                      </button>
                    )}
                  </h1>
                </div>
              </div>
              <div className="banner_contents_col_mid">  </div>
              <div claseName="banner_contents_col_right">
                <button
                  className="ribbon-btn"
                  onClick={() => this.changeMovie()}
                >
                  {" "}
                  {">"}{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="banner_fadebottom" />
        </header>
      </>
    );
  }
}

export default BannerClass;
