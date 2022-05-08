import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import logo from './LOGOOO.png';
import avatar from './profile.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NavbarUser() {
    const history = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        history("/LoginPage");
    };
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ marginTop: '-30px', background: '#004b88b6' }}>
            <Container style={{ marginTop: '10px' }}>
                <Navbar.Brand href="/Home" style={{width:'50%'}} ><img style={{width:'65%'}} src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/Home" style={{ color: '#ffffff', marginTop: '7px' }}>Acceuil</Nav.Link>
                    </Nav>
                    <Nav >
                        <img src={avatar} alt="avatar" class="rounded-circle p-1 bg-primary d-none d-md-flex" width="50" />
                        <NavDropdown color='white' title="GMJ" id="collasible-nav-dropdown" style={{ marginTop: '10px' }}>
                            <NavDropdown.Item onClick={handleLogout}>Se Déconnecté</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

