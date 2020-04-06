import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import scrollTo from 'gatsby-plugin-smoothscroll'

const navbar = () => {
  return (
    <Navbar className="navbar-dark sticky-top" bg="light-1" expand="lg">
      <Navbar.Brand href="#home">Blockpass Identity Lab</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav class="nav navbar ml-auto mr-5" role="navigation">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link onClick={() => scrollTo('#about')}>About</Nav.Link>
          <Nav.Link onClick={() => scrollTo('#events')}>Events</Nav.Link>
          <Nav.Link onClick={() => scrollTo('#team')}>Team</Nav.Link>
          <Nav.Link onClick={() => scrollTo('#projects')}>Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
