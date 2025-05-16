import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert, Modal, Button } from "react-bootstrap";

const MovieRow = ({ title, apiUrl }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState(null);

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

  // Funzione per recuperare i dettagli del film
  const fetchMovieDetails = (imdbID) => {
    setDetailsLoading(true);
    setDetailsError(null);
    fetch(`https://www.omdbapi.com/?apikey=877c77c7&i=${imdbID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovieDetails(data);
        } else {
          setDetailsError("Dettagli non trovati.");
        }
        setDetailsLoading(false);
      })
      .catch(() => {
        setDetailsError("Errore nel caricamento dei dettagli.");
        setDetailsLoading(false);
      });
  };

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
    fetchMovieDetails(movie.imdbID);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMovieDetails(null);
    setSelectedMovie(null);
    setDetailsError(null);
  };

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
              style={{ minHeight: "100%", minWidth: "100%", cursor: "pointer" }}
              onClick={() => handlePosterClick(movie)}
            />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body>
          {detailsLoading && <Spinner animation="border" />}
          {detailsError && <Alert variant="danger">{detailsError}</Alert>}
          {movieDetails && (
            <Row>
              <Col md={5} className="text-center">
                <img
                  src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                  alt={movieDetails.Title}
                  className="img-fluid"
                />
              </Col>
              <Col md={7}>
                <h4 style={{ color: "black" }}>{movieDetails.Title}</h4>
                <p>
                  <strong>Year:</strong> {movieDetails.Year}
                </p>
                <p>
                  <strong>Type:</strong> {movieDetails.Type}
                </p>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MovieRow;
