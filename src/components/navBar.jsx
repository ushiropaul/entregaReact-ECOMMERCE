
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Link
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }

    export default NavBar;



































    // function NavBar({ Bgcolor, Display, Flow, direction, Zindex, position, width, top, children }) {
    
    
    //     const [isMenuOpen, setIsMenuOpen] = useState(false);
    //     const displayMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    // return (
    //     <>
    //     <header className="navBar"
    //         style={{
    //         backgroundColor: Bgcolor,
    //         display: Display,
    //         flexFlow: Flow,
    //         flexDirection: direction,
    //         zIndex: Zindex,
    //         position: position,
    //         width: width,
    //         top: top,
    //         }}
    //     >
    //         <div className="containerLogo">
    //         <img src="./vite.svg" alt="logo" className="logo" />
    //         <h2>NIZEN TECNNO</h2>
    //         </div>

    //         <nav className={isMenuOpen ? 'active' : ''}>
    //         <span>Nuestras categorías</span>
    //         <button className="menuHamburger" onClick={displayMenu}>
    //         <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    //             <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    //         </svg>
    //         </button>
    //         <ul className="navBarUl">
    //             <li><a href="">Todos los productos</a></li>
    //             <li><a href="">Laptops</a></li>
    //             <li><a href="">PC armadas</a></li>
    //             <li><a href="">Componentes</a></li>
    //             <li><a href="">Accesorios</a></li>
    //             <li><a href="">Contacto</a></li>
    //         </ul>
    //         </nav>

    //         {children}
    //     </header>
    //     </>
    // );
    // }

