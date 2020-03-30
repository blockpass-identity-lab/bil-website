import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const navbar = () => {
  return (
    <Navbar className="navbar-dark sticky-top" bg="light-1" expand="lg">
      <Navbar.Brand href="#home">Blockpass Identity Lab</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav class="nav navbar ml-auto mr-5" role="navigation">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link2">About</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="#link4">Team</Nav.Link>
          <Nav.Link href="#link5">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
