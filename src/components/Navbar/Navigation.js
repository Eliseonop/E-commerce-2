import React, { useContext } from "react";
import Swal from "sweetalert2";
import { CarritoContext } from "../../context/carritoContext";
import "./navigation.css";

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
/* import './Navbar.css' */
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function Navigation() {
  const { currentUser, logout } = useContext(AuthContext);
  const { carrito } = useContext(CarritoContext);
  const totalCarrito = carrito.reduce((total, prod) => {
    return total + prod.cantidad;
  }, 0);
  async function handleLogout() {
    // e.preventDefault();
    try {
      Swal.fire({
        title: 'Quieres cerrar sesion?',
        // text: "Deseas cerrar secion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          logout();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Vuelva pronto ' + '😎',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      // await logout();
      // await logout();
      // console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar bg="light" expand="md" id="navbar">
        <Container className="justify-content-between" >
          <Navbar.Brand>
            <Link className="nav-link text-dark" to="/home">
              <a id="brand">Wiki</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <i className="fa fa-search" aria-hidden="true"></i>
              </Button>
            </Form>

            <Nav  className="m-auto ">
              <Link className="nav-link" to="/home">
                <p id="nav"> Home</p>
              </Link>
              <Link className="nav-link" to="/productos">
                <p id="nav">Productos </p>
              </Link>


              <Link className="nav-link d-flex  flex-row " to="/carrito">
                <p id="nav"> Carrito</p>
                {totalCarrito === 0 ? (
                  ""
                ) : (
                  <span className="text-primary fs-6 fw-bold mx-1">
                    {totalCarrito}
                  </span>
                )}
              </Link>
              <Link className="nav-link" to="/checkout">
                <p id="nav">Comprar</p>
              </Link>
            </Nav>

            {currentUser ? (
              <NavDropdown
                title={
                  <div className="d-inline">
                    <img
                      src="https://www.citypng.com/public/uploads/preview/-41603940812rethyhget8.png"
                      className="me-2"
                      alt="avatar"
                      style={{ borderRadius: "50%", width: "30px" }}
                    />
                    <span className="text-black">Bienvenido</span>
                    <span> {currentUser.displayName ? currentUser.displayName : currentUser.email}</span>
                  </div>
                }
              >
                <NavDropdown.Item onClick={handleLogout}>
                  Salir
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav className="d-flex align-items-center">
                  <Link className="nav-link" to="/login">
                    <Button variant="info">	Iniciar Sesión</Button>
                  </Link>
                  <Link className="nav-link" to="/register">
                    <Button variant="warning">Regístrese</Button>
                  </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;