import React, { Component } from "react";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import BannerClass from "./components/BannerClass";
import Navbar from "./components/Navbar";
import NavbarClass from "./components/NavbarClass";
import requests from "./requests";
import RowClass from "./components/RowClass";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerClass fetchUrl={requests.fetchNetflixOriginals} />
      <RowClass
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <RowClass title="Trending Now" fetchUrl={requests.fetchTrending} />
      <RowClass title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <RowClass title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <RowClass title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <RowClass title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <RowClass title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
