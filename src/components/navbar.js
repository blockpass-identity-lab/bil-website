import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const navbar = () => {
  return (
    <Navbar className="nav navbar-dark sticky-top" bg="light-1" expand="lg">
      <Navbar.Brand href="#home">Blockpass Identity Lab</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav class="navbar navbar-default ml-auto" role="navigation">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link2">About</Nav.Link>
          <Nav.Link href="#link3">Events</Nav.Link>
          <Nav.Link href="#Link4">Team</Nav.Link>
          <Nav.Link href="#link5">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
