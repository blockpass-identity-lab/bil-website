import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link} from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';

const navbar = () => {
  return (
    <Navbar className="navbar-dark sticky-top" bg="light-1" expand="lg">
      <Navbar.Brand href="/">Blockpass Identity Lab</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav class="nav navbar ml-auto mr-5" role="navigation">
          <Nav.Link href="/">Home</Nav.Link>
          <Link to='about'smooth={true} offset={-75} duration={1000}><Nav.Link>About</Nav.Link></Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Link to='team'smooth={true} offset={-75} duration={1000}><Nav.Link>Team</Nav.Link></Link>
          <Link to='projects'smooth={true} offset={-75} duration={1000}><Nav.Link>Projects</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
