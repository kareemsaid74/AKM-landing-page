import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../assites/logo.png"; // Ensure the correct path to your logo

export default function CustomNavbar() {
  // Function to smoothly scroll to the section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the navbar collapse after clicking an item (for mobile view)
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Simulates clicking to close the menu
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#" onClick={() => scrollToSection('home')} className="d-flex align-items-center">
          <img src={logo} alt="logo" className="logo" style={{ width: '60px', marginRight: '10px' }} />
          {/* <h1 className="fw-bold mb-0" style={{
            fontSize: '1.8rem', 
           letterSpacing: '2px', 
           color: '#007bff',  // لون أغمق من الرمادي الداكن
           fontFamily: 'Arial, sans-serif'
           }}>
           Akm
          </h1> */}

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" onClick={() => scrollToSection('home')} className="fw-bold px-3">
              Home
            </Nav.Link>
            <Nav.Link href="#" onClick={() => scrollToSection('about')} className="fw-bold px-3">
              About
            </Nav.Link>
            <Nav.Link href="#" onClick={() => scrollToSection('services')} className="fw-bold px-3">
              Services
            </Nav.Link>
            <Nav.Link href="#" onClick={() => scrollToSection('contact')} className="fw-bold px-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
