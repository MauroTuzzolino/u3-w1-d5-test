import React, { useState, useEffect } from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import TvShowsHeader from "./components/TvShowsHeader";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import PageError from "./components/PageError";
import ApiError from "./components/ApiError";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      //setError(true); // Decommenta per simulare errore pagina
      setLoading(false);

      setTimeout(() => {
        //setApiError(true); // Decommenta per simulare errore API
      }, 1000);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;
  if (error) return <PageError message="Errore nel caricamento della pagina." />;
  if (apiError) return <ApiError message="Errore nel recupero dei dati dalle API." />;

  return (
    <div>
      <CustomNavbar />
      <div className="mt-4">
        <TvShowsHeader />
        <MovieRow title="Trending Now" apiUrl="http://www.omdbapi.com/?apikey=877c77c7&s=Doraemon&type=movie" />
        <MovieRow title="Watch it Again" apiUrl="http://www.omdbapi.com/?apikey=877c77c7&s=detective conan&type=movie" />
        <MovieRow title="New Releases" apiUrl="http://www.omdbapi.com/?apikey=877c77c7&s=Naruto&type=movie" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
