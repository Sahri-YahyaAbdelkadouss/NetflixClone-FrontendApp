import React, { Component } from "react";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import requests from "./requests";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
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
