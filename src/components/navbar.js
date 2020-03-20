import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const navbar = () => {
  return (
    <Navbar className="nav" bg="light-1" expand="lg">
      <Navbar.Brand href="#home">Blockpass Identity Lab</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link2">Events</Nav.Link>
          <Nav.Link href="#link3">Team</Nav.Link>
          <Nav.Link href="#link4"></Nav.Link>
          <Nav.Link href="#link4">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
