import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const navbar = () => {
  return (
    <div className="nav">
      <Navbar.Brand href="/" className="logo"></Navbar.Brand>
      <Navbar bg="light-1" expand="lg">
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
