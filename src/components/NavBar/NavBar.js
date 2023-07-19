import CartWidget from "../CartWidget/CartWidget";
import logo from "../CartWidget/assets/logo-1635651913-1677604746-9d2e7d826bcdb1506200625fca2f2b351677604747-320-0.png"

const NavBar = () => {
    return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
          <img src={logo} alt="Logo de la página web" width="112" height="28"/>
           
            
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              href="/"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
  
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Inicio
              </a>
              <a className="navbar-item" href="/">
                Acerca de
              </a>
              <a className="navbar-item" href="/">
                Servicios
              </a>
              <a className="navbar-item" href="/">
                Contacto
              </a>
            </div>
              
            
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-light" href="/">
                    Iniciar sesión
                  </a>
                  <a className="button is-primary" href="/">
                    Registrarse
                  </a>
                  <div className="navbar-end"><CartWidget/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };


export default NavBar