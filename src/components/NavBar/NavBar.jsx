// Importo  mi componente CartWidget que va a estar contenido dentro de NavBar
import CartWidget from "../CartWidget/CartWidget"

// Creo mi componente NavBar
const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-md navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="null">
          💻 PC Store
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="null">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="null">
              Monitores
            </a>
            <a className="nav-item nav-link" href="null">
              Teclados
            </a>
            <a className="nav-item nav-link" href="null">
              Pads
            </a>
          </div>
        </div>
        <CartWidget />
      </nav>
    );
}

// exporto mi componente
export default NavBar