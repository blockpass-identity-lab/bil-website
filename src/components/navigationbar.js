import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"


const Navigationbar = () => {
  return (
    <Navbar bg="light-1" expand="lg">
    <Navbar.Brand href="/">Blockpass Identity Lab</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto mr-5">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/">Team</Nav.Link>
        <Nav.Link href="/">Events</Nav.Link>
        <Nav.Link href="/">Contact</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/">Action</NavDropdown.Item>
          <NavDropdown.Item href="/">Another action</NavDropdown.Item>
          <NavDropdown.Item href="/">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  
  )
}

export default Navigationbar 
