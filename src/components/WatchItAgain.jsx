import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img7 from "../assets/img/7.png";
import img8 from "../assets/img/8.png";
import img9 from "../assets/img/9.png";
import img10 from "../assets/img/10.png";
import img11 from "../assets/img/11.png";
import img12 from "../assets/img/12.png";

const images = [img7, img8, img9, img10, img11, img12];

const WatchItAgain = () => (
  <Container fluid>
    <h4>Watch it Again</h4>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {images.map((img, idx) => (
        <Col key={idx} className="mb-2 text-center px-1">
          <img className="img-fluid" src={img} alt="movie" />
        </Col>
      ))}
    </Row>
  </Container>
);

export default WatchItAgain;
