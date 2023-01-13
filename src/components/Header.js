import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

export default function Header(props) {
    const {onCartView, cartCount} = props;
    function gayAlert() {
        alert("Say it with me ANIME!!")
    }


  return (
    <>
      <Navbar className="header-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="fs-1">ALP</Navbar.Brand>
            <Nav className="ms-auto fs-3">
                <Nav.Link onClick={onCartView}>Cart {cartCount}</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cake Daddies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Women's
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3" onClick={gayAlert}>Measure Assets </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}
