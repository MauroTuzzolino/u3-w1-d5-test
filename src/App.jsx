import React from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import TvShowsHeader from "./components/TvShowsHeader";

function App() {
  return (
    <div>
      <CustomNavbar />
      <div className="mt-4">
        <TvShowsHeader />
      </div>
    </div>
  );
}

export default App;
