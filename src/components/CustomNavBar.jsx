import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { BsSearch, BsBell, BsPersonCircle } from "react-icons/bs";
import logo from "../assets/logo.png";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container fluid className="d-flex flex-row align-items-center justify-content-between">
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="fw-bold active">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold text-secondary">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="d-flex flex-row justify-content-around align-items-center">
            <Nav.Link href="#" className="text-white">
              <BsSearch />
            </Nav.Link>
            <div id="kids" className="fw-bold text-white">
              KIDS
            </div>
            <Nav.Link href="#" className="text-white">
              <BsBell />
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <BsPersonCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
