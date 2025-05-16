import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const MovieRow = ({ title, apiUrl }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError("Nessun risultato trovato.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Errore nel caricamento dei dati.");
        setLoading(false);
      });
  }, [apiUrl]);

  return (
    <Container fluid>
      <h4>{title}</h4>
      {loading && <Spinner animation="border" variant="light" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {movies.slice(0, 6).map((movie) => (
          <Col key={movie.imdbID} className="mb-2 text-center px-1">
            <img
              className="img-fluid"
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
              alt={movie.Title}
              style={{ minHeight: "100%", minWidth: "100%" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieRow;
