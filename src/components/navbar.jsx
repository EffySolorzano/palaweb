import React from "react";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import TempLogo from  "./assets/tempLogo.png"
import "./navbar.css";

export default function Navbar() {
  return (
    <BSNavbar expand="lg" bg="light" variant="light" sticky="top"  className="shadow-sm border-bottom ">
      <Container>
        <BSNavbar.Brand href="#">
        <img src={TempLogo} alt="Pa' la Web logo" className="navbar-logo" />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="main-navbar" />
        <BSNavbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#services">Portfolio</Nav.Link>
            <Nav.Link href="#services">Reviews</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
