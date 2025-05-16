import React from "react";
import Alert from "react-bootstrap/Alert";

const ApiError = ({ message = "Errore nel recupero dei dati dalle API." }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <Alert variant="warning" style={{ fontSize: 20, padding: 24, minWidth: 300, textAlign: "center" }}>
      <Alert.Heading>Errore API</Alert.Heading>
      <div>{message}</div>
    </Alert>
  </div>
);

export default ApiError;
