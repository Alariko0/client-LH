import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img from '../../assets/logoNavbar.png'

import './Navbar.css';

import { AuthContext } from '../../context/auth.context';

function NavBar() {
    const { logOut, isLoggedIn } = useContext(AuthContext);

    return (
        <>
            <Container>
                <Navbar className='link-navbar' bg="none" expand="lg">
                    <Navbar.Brand href="/"><img className='logo' src={img} alt="logo" />Loading Homes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <Nav.Link as='span'>
                                <Link className='link-navbar' to='/'>
                                    Home
                                </Link>
                            </Nav.Link>
                            {isLoggedIn ? (
                                <>

                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='/lists'>
                                            Lists
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='/update'>
                                            Update
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='/create'>
                                            Create
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='/me'>
                                            User
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link as='span'>
                                        <p className='link-navbar' onClick={logOut}>
                                            Log out
                                        </p>
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='/signup'>
                                            Signup
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='/login'>
                                            Login
                                        </Link>
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Container>
        </>
    )
}

export default NavBar