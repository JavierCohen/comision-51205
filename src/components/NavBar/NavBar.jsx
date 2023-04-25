// Importo  mi componente CartWidget que va a estar contenido dentro de NavBar
import CartWidget from "../CartWidget/CartWidget";
// Importo los componentes del Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";

// Creo mi componente NavBar
const NavBar = (props) => {
  // Array de etiquetas del NavBar
  const nameOptions = ["Home", "Monitores", "Teclados", "Pads", "Gabinetes"]; 
  
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">💻 PC Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <ListOptionNavBarComponent nameOption={nameOptions}></ListOptionNavBarComponent>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

// exporto mi componente
export default NavBar