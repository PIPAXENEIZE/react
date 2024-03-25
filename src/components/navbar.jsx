import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import {Outlet, Link} from "react-router-dom"
import Cart from './cart'; 
import Logo from '../assets/img/hardware_10276260.png'


const NavBarTest = () => {
  return (
    <>

     <Navbar className="navcolor" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href=""> {/* agregar vinculo al href para hacer el brand clikeable */}
         <img
              src={Logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            {' '}
            <span className='branding_bussiness'>HARDWARE STORE</span>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/categoria/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/categoria/productos/SSD">DISCOS SOLIDOS</Nav.Link>
            <Nav.Link as={Link} to="/contact">Quienes Somos</Nav.Link>
          </Nav>
          <Cart />
        </Navbar.Collapse>
      </Container>
     </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default NavBarTest
