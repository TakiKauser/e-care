import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold'>
                        <img
                            alt=""
                            src="/logo.png"
                            width="30"
                            height="30"
                            className="align-top d-inline-block"
                        />{' '}
                        e-Care
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to="/home" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">Home</NavLink>
                            <NavLink to="/doctors" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">Doctors</NavLink>
                            <NavLink to="/appointment" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">Appointment</NavLink>
                            <NavLink to="/about" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">About</NavLink>
                            <NavLink to="/contact" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">Contact</NavLink>
                        </Nav>
                        <Nav>
                            <Navbar.Text>
                                Signed in as: <a href="#login">Taki Kauser</a>
                            </Navbar.Text>
                            <Navbar.Text>
                                <a href="#login">Sign Out</a>
                            </Navbar.Text>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;