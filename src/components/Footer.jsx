import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => (
  <footer>
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <Row>
            <Col className="mb-2 text-center">
              <BsFacebook className="footer-icon me-2" />
              <BsInstagram className="footer-icon me-2" />
              <BsTwitterX className="footer-icon me-2" />
              <BsYoutube className="footer-icon" />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 text-center text-md-start">
            <Col className="footer-links">
              <p>
                <a href="#">Audio and Subtitles</a>
              </p>
              <p>
                <a href="#">Media Center</a>
              </p>
              <p>
                <a href="#">Privacy</a>
              </p>
              <p>
                <a href="#">Contact us</a>
              </p>
            </Col>
            <Col className="footer-links">
              <p>
                <a href="#">Audio Description</a>
              </p>
              <p>
                <a href="#">Investor Relations</a>
              </p>
              <p>
                <a href="#">Legal Notices</a>
              </p>
            </Col>
            <Col className="footer-links">
              <p>
                <a href="#">Help Center</a>
              </p>
              <p>
                <a href="#">Jobs</a>
              </p>
              <p>
                <a href="#">Cookie Preferences</a>
              </p>
            </Col>
            <Col className="footer-links">
              <p>
                <a href="#">Gift Cards</a>
              </p>
              <p>
                <a href="#">Terms of Use</a>
              </p>
              <p>
                <a href="#">Corporate Information</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 text-center">
              <Button
                type="button"
                size="sm"
                className="footer-button rounded-0 mt-3"
                style={{
                  backgroundColor: "transparent",
                  color: "#999",
                  border: "1px solid #999",
                }}
              >
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright text-center">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
