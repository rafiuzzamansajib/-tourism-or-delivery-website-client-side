import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
        <Navbar bg="secondary" variant="light p-4 shadow-lg" sticky="top"  expand="lg" >
            <Container>
                <Navbar.Brand href="#home"><span className='text-design'>T</span>RAVEL</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="header-link text-dark nav-bar" as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link className="header-link text-dark nav-bar" as={HashLink} to="/home#package">Package</Nav.Link>
                    <Nav.Link className="header-link text-dark nav-bar" as={HashLink} to="/home#reviwe">Reviwe</Nav.Link>
                    <Nav.Link className="header-link text-dark nav-bar" as={HashLink} to="/home#gallary">Gallary</Nav.Link>
                        {
                            user?.email?
                            <Nav.Link className="header-link text-dark nav-bar" as={Link} to="/addpackage">Add Package</Nav.Link>:
                            ""
                        }
                        {
                            user?.email?
                            <Nav.Link className="header-link text-dark nav-bar" as={Link} to="/manageorders">Manage Orders</Nav.Link>:
                            ""
                        }
                        {user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} className="header-link text-dark nav-bar" to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                    <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;