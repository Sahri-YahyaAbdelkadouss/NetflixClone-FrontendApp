import React, { Component } from "react";
import axios from "../axios";
import "./Banner.css";

class BannerClass extends Component {
  constructor(props) {
    console.log("Banner constractor is invoked");
    super(props);
    this.state = {
      movie: [],
    };
    const base_url = "https://image.tmdb.org/t/p/original/";
    //fetchData = this.fetchData.bind(this);
  }

  componentDidMount = () => {
      componentWillReceiveProps();
  };
  componentWillReceiveProps = (nextProps) => {
    console.log("Banner componentWillReceiveProps is invoked");
      console.log("Banner componentDidMount is invoked");
    async function fetchData() {
      const request = await axios.get(this.props.fetchUrl);
      //console.log( "random Number",Math.floor(Math.random() * request.data.results.length - 1),"length", request.data.results.length );
      this.setstate({
        movie:
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ],
      });
      return request;
    }
    fetchData();
    // if (nextProps.fetchUrl !== this.props.fetchUrl) {
    //   this.fetchData();
    // }
  };

  render() {
    //check if setMovie got the setting done and checking the movie object
    //console.log("movie image link " , `${base_url}${movie?.backdrop_path}`);
    return (
      <>
        {console.log("movie", this.state.movie)}
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${this.base_url}${this.state.movie?.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="testing">
            <div className="banner_contents">
              {/* title  */}
              <h1 className="banner_title">
                {this.state.movie?.title ||
                  this.state.movie?.name ||
                  this.state.movie.original_name}
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
                  {
                  // function truncate(str, n) {return str?.length > n ? str.substr(0, n - 1) + "..." : str;}
                    this.state.movie?.overview
                  //truncate(this.state.movie?.overview, 150)
                  }
                  {" "}
                </h1>
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

// function Banner({ fetchUrl }) {
//   const [movie, setMovie] = useState([]);
//   const base_url = "https://image.tmdb.org/t/p/original/";

//   useEffect(() => {
//     //why useEffect is used only like this
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       //console.log( "random Number",Math.floor(Math.random() * request.data.results.length - 1),"length", request.data.results.length );
//       setMovie(
//         request.data.results[
//           Math.floor(Math.random() * request.data.results.length - 1)
//         ]
//       );
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }
