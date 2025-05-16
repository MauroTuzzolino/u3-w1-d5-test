import React from "react";
import { Dropdown, Container } from "react-bootstrap";
import { BsGrid, BsGrid3X3 } from "react-icons/bs";

const TvShowsHeader = () => (
  <Container fluid className="d-flex justify-content-between align-items-center mb-4 w-100">
    <div className="d-flex align-items-center">
      <h2 className="mb-0">TV Shows</h2>
      <Dropdown className="ms-4 mt-1">
        <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }} id="dropdown-genres">
          Genres
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Comedy</Dropdown.Item>
          <Dropdown.Item href="#">Drama</Dropdown.Item>
          <Dropdown.Item href="#">Thriller</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div>
      <BsGrid className="icons me-2" size={24} />
      <BsGrid3X3 className="icons" size={24} />
    </div>
  </Container>
);

export default TvShowsHeader;
