import React from "react";
import Spinner from "react-bootstrap/Spinner";

const PageLoader = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <Spinner animation="border" role="status" variant="primary" style={{ width: 80, height: 80 }}>
      <span className="visually-hidden">Caricamento...</span>
    </Spinner>
    <div style={{ marginTop: 16 }}>Caricamento...</div>
  </div>
);

export default PageLoader;
