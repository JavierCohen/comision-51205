// Importo  mi componente CartWidget que va a estar contenido dentro de NavBar
import CartWidget from "../CartWidget/CartWidget"
// Importo los componentes del Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Creo mi componente NavBar
const NavBar = () => {
    return (
      <Navbar NavBar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">💻 PC Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Monitores">Monitores</Nav.Link>
            <Nav.Link href="#Teclados">Teclados</Nav.Link>
            <Nav.Link href="#Pads">Pads</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

// exporto mi componente
export default NavBar