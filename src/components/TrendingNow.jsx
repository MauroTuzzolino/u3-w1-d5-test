import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";
import img4 from "../assets/img/4.png";
import img5 from "../assets/img/5.png";
import img6 from "../assets/img/6.png";

const images = [img1, img2, img3, img4, img5, img6];

const TrendingNow = () => (
  <Container fluid>
    <h4>Trending Now</h4>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {images.map((img, idx) => (
        <Col key={idx} className="mb-2 text-center px-1">
          <img className="img-fluid" src={img} alt="movie" />
        </Col>
      ))}
    </Row>
  </Container>
);

export default TrendingNow;
