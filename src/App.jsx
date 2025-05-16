import React, { useState, useEffect } from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import TvShowsHeader from "./components/TvShowsHeader";
import TrendingNow from "./components/TrendingNow";
import WatchItAgain from "./components/WatchItAgain";
import NewReleases from "./components/NewReleases";
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
        <TrendingNow />
        <WatchItAgain />
        <NewReleases />
      </div>
      <Footer />
    </div>
  );
}

export default App;
