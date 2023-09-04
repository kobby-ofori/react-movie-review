import React, { Component } from "react";
import Cards from "./Cards";
import { Col, Container } from "react-bootstrap";

export class MovieClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  // Birth stage- call method after component is rendered
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=YKFQnvWKwNwhg9GsTyBN85tUnyE74dl9"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("response:", data); //logging response to console to check data availability
        this.setState({ movies: data.results }); //updating users property in the state with the list of users retrieved from the API.
        console.log("updated movies:", this.state.movies); //logging the state tothe console to check data(list of users) availability
      })
      .catch((error) => {
        console.log("Fetched error:", error);
      });
  }
  render() {
    return (
      <Container>
        <Col md="4">
          <h2
            style={{
              textAlign: "center",
              paddingBottom: "15px",
              color: "red",
              opacity: "50%",
            }}
          >
            New York Times Movie Reviews
          </h2>
          {/* Rendering the list of users to the browser */}
          {this.state.movies.map((movie) => (
            <div key={movie.id}>
              <Cards
                byline={movie.byline}
                title={movie.display_title}
                review={movie.headline}
                pick={movie.critics_pick}
              />
              <hr />
              <br />
              {/* <ul>
                <li>
                  <strong>Byline:</strong> {movie.byline}
                </li>
                <li>
                  <strong>Critics_pick:</strong> {movie.critics_pick}
                </li>
                <li>
                  <strong>Movie_title:</strong> {movie.display_title}
                </li>
                <li>
                  <strong>Headline:</strong> {movie.headline}
                </li>
              </ul>
              <hr />
              <br /> */}
            </div>
          ))}
        </Col>
      </Container>
    );
  }
}

export default MovieClass;
