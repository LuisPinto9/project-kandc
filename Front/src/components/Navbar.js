import "../css/styles.css";
import edificio from "../images/edificio.png";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navbarinicio = () => {
  const location = useLocation();

  const cerrarSesion = () => {
    localStorage.clear();
  };

  return (
    <div>
      <nav className="navbar navbar-principal">
        <div className="container-fluid d-flex">
          <Link className="navbar-brand align-items-center" to="/">
            <div className="d-flex d-inline-block align-items-center">
              <h1 className="titulo px-2 pt-2">Edificio K&C</h1>
              <div className="pb-1">
                <img src={edificio} alt="Logo" width="60" height="60" />
              </div>
            </div>
          </Link>
          {location.pathname === "/" && (
            <Navbar expand="lg" className="navBg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link as={Link} to="/login" className="inicio-sesion">
                      Iniciar Sesión
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          {location.pathname === "/dashboard-admin" && (
            <Navbar expand="lg" className="navBg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link
                      as={Link}
                      to="/login"
                      className="inicio-sesion"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesión
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          {location.pathname === "/dashboard-admin/registro" && (
            <Navbar expand="lg" className="navBg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link
                      as={Link}
                      to="/login"
                      className="inicio-sesion"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesión
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          {location.pathname === "/dashboard-admin/componentes" && (
            <Navbar expand="lg" className="navBg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link
                      as={Link}
                      to="/login"
                      className="inicio-sesion"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesión
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          {location.pathname === "/dashboard-admin/zonas" && (
            <Navbar expand="lg" className="navBg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link
                      as={Link}
                      to="/login"
                      className="inicio-sesion"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesión
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          {location.pathname === "/dashboard-admin/habitaciones" && (
            <Navbar expand="lg" className="navBg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link
                      as={Link}
                      to="/login"
                      className="inicio-sesion"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesión
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          {location.pathname === "/dashboard-usuario" && (
            <Navbar expand="lg" className="navBg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link
                      as={Link}
                      to="/login"
                      className="inicio-sesion"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesión
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          {location.pathname === "/dashboard-usuario/perfil" && (
            <Navbar expand="lg" className="navBg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link
                      as={Link}
                      to="/login"
                      className="inicio-sesion"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesión
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          {location.pathname === "/dashboard-usuario/inventario" && (
            <Navbar expand="lg" className="navBg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link
                      as={Link}
                      to="/login"
                      className="inicio-sesion"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesión
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbarinicio;
