import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" href="#home">
          <img src={logo} height={50} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" href="#about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" href="#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" href="#blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" href="#login">
              Login
            </Nav.Link>
            <Nav.Link>SomeThing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// <nav className="navbar">
//   <header className="container py-3 d-flex justify-content-between">
//     <div>
//       <Link to="/">Logo</Link>
//     </div>
//     <div className="middle-link w-50 d-flex justify-content-evenly ">
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/services">Services</Link>
//       <Link to="/blogs">Blogs</Link>
//     </div>
//     <div>
//       <Link to="/login">Login</Link>
//     </div>
//   </header>
// </nav>
