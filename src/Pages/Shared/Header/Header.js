import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height={50} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              Home
            </Nav.Link>

            <Nav.Link href="home#services">Services</Nav.Link>

            <Nav.Link as={Link} to="/blogs" href="#blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about" href="#about">
              About
            </Nav.Link>

            {user ? (
              <button
                onClick={handleSignOut}
                className="btn btn-link text-decoration-none"
              >
                Sign Out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login" href="#login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
