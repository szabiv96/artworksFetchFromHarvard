import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Search from './Search';

export default function Navigation({artpieces, setSearch}) {
    return (
        <>
            <Navbar key="lg" bg="light" expand="lg" className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">Art Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link><Link className='text-secondary' to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link className='text-secondary' to="/artworks" >Artworks</Link></Nav.Link>
                                <Nav.Link><Link className='text-secondary' to="/favouritePics" >Favourites</Link></Nav.Link>
                            </Nav>

                            <Search artpieces={artpieces} setSearch={setSearch} ></Search>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

