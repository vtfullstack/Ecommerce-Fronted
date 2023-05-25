import React from "react";
import "./header.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Form, Button, FormControl, Offcanvas } from "react-bootstrap";
import Useroptions from "../UserOptions/Useroptions";
const Header = () => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar bg="light" expand={expand} className="mb-0">
          <Container fluid>
      
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-between align-items-center flex-grow-1 pe-3 ml-auto">
                  <NavLink to="#action1">Profile</NavLink>
                  <NavLink to="#action2">Link</NavLink>
                  <NavLink to="/products" className="navLinktext">
                    Products
                  </NavLink>
                  <NavLink to="login" className="navLinktext">
                    signin
                  </NavLink>

                  <NavDropdown
                    title="Profile"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                      <NavLink to="login">Login</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Useroptions />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
