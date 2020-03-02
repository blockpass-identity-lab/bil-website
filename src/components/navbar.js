import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const navbar = () => {
  return (
    <div>
      <Navbar bg="light-1" expand="lg">
        <Navbar.Brand href="/">Blockpass Identity Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5 links">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Team</Nav.Link>
            <Nav.Link href="/">Events</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default navbar
