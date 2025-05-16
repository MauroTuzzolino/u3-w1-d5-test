import React from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import TvShowsHeader from "./components/TvShowsHeader";
import TrendingNow from "./components/TrendingNow";
import WatchItAgain from "./components/WatchItAgain";
import NewReleases from "./components/NewReleases";
import Footer from "./components/Footer";

function App() {
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
