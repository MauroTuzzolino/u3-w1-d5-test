import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img13 from "../assets/img/13.png";
import img14 from "../assets/img/14.png";
import img15 from "../assets/img/15.png";
import img16 from "../assets/img/16.png";
import img17 from "../assets/img/17.png";
import img18 from "../assets/img/18.png";

const images = [img13, img14, img15, img16, img17, img18];

const NewReleases = () => (
  <Container fluid>
    <h4>New Releases</h4>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {images.map((img, idx) => (
        <Col key={idx} className="mb-2 text-center px-1">
          <img className="img-fluid" src={img} alt="movie" />
        </Col>
      ))}
    </Row>
  </Container>
);

export default NewReleases;
