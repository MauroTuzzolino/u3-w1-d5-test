import React from "react";
import Alert from "react-bootstrap/Alert";

const PageError = ({ message = "Si è verificato un errore durante il caricamento." }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <Alert variant="danger" style={{ fontSize: 20, padding: 24, minWidth: 300, textAlign: "center" }}>
      <Alert.Heading>Errore</Alert.Heading>
      <div>{message}</div>
    </Alert>
  </div>
);

export default PageError;
