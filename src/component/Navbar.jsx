// import logo from './logo.svg';
import logo from '../logo.svg';
import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary text-bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="www.google.com">
          <img src={logo} alt="" width={40} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="www.google.com">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">Vehiculos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">Electronica</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">Libros</a>
            </li>

          </ul>
          <CartWidget valor={'4'}></CartWidget>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Buscar</button>
          </form>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
