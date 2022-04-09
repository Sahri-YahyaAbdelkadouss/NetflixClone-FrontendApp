import React, { Component } from "react";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import BannerClass from "./components/BannerClass";
import Navbar from "./components/Navbar";
import NavbarClass from "./components/NavbarClass"
import requests from "./requests";
import RowClass from "./components/RowClass";


function App() {
  return (
    <div className="App">
    <div>
          <NavbarClass/>
    </div>
      <BannerClass fetchUrl={requests.fetchNetflixOriginals} />
      <RowClass
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
