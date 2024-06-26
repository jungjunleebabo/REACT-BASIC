import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: "공항패션",
  };

  getMovies = async () => {
    const ID_KEY = "ueU7QWg_KNRJCSAPrXEV";
    const SECRET_KEY = "kWtNdymZiG";
    const search = this.state.value;

    try {
      if (search === "") {
        this.setState({ movies: [], isLoading: false });
      } else {
        const {
          data: { items },
        } = await axios.get("/api/v1/search/image", {
          params: {
            query: search,
            display: 10,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });

        this.setState({ movies: items, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="input_div">
              <h1>검색</h1>
              <input
                className="input_search"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="검색해 보세요."
              />
            </div>
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  id="1"
                  title={movie.title}
                  thumbnail={movie.thumbnail}
                  link={movie.link}
                  sizeheight={movie.sizeheight}
                  sizewidth={movie.sizewidth}
                />
              ))}
            </div>
            <div
              id="observer"
              style={{ height: "10px", border: "solid" }}
            ></div>
          </form>
        )}
      </section>
    );
  }
}

export default Home;
