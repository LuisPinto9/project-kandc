import "../css/styles.css";
import edificio from "../images/edificio.png";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import React, { Fragment } from "react";

const Navbariniciora = () => {
  return (
    <div>
      {/* 
      <nav className="navbar navbar-principal">
        <div className="container-fluid d-flex">
          <Link className="navbar-brand align-items-center" to="/">
           <Link className="navbar-brand align-items-center " to="/">
            <div className="d-flex d-inline-block align-items-center">
              <h1 className="titulo px-2 pt-2">Edificio K&C</h1>
              <div className="pb-1">
                <img
                  src={edificio}
                  alt="Logo"
                  width="60"
                  height="60"
                  className=""
                />
              </div>
            </div>
          </Link>         
          </div>
      </nav>

       */}
      {/* fffff */}
      <Navbar expand="lg" className="navBg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <a className="titulo px-2 pt-2">Edificio K&C</a>
            <img
              src={edificio}
              alt="Logo"
              width="64"
              height="64"
              className="pb-1"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/iniciosesion">
                {" "}
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Navbariniciora;
