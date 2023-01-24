import axios from "../axios";
import React, { useRef, useState } from "react";
import { Navbar, Button, Nav, NavDropdown, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout, resetNotifications } from "../features/userSlice";
import "./Navigation.css";
import logo from '../imágenes/logodefinitivo.jpg'

function Navigation() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const bellRef = useRef(null);
  const notificationRef = useRef(null);
  const [bellPos, setBellPos] = useState({});

  // Función para logout (debe estar en los reducers de los slice!!!
  // En redux debe asociarse al dispatch

  function handleLogout() {
    dispatch(logout());
  }
  const unreadNotifications = user?.notifications?.reduce((acc, current) => {
    if (current.status == "unread") return acc + 1;
    return acc;
  }, 0);

  function handleToggleNotifications() {
    const position = bellRef.current.getBoundingClientRect();
    setBellPos(position);
    notificationRef.current.style.display =
      notificationRef.current.style.display === "block" ? "none" : "block";
    dispatch(resetNotifications());
    if (unreadNotifications > 0)
      axios.post(`/users/${user._id}/updateNotifications`);
  }

  return (
    <Navbar expand="lg">
      <Container className="containergeneral ">
          <Navbar.Brand href="#home">
            <img
              src= {logo}
              width="100"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <LinkContainer to="/">

          <Navbar.Brand> ECOMMERCE - 5I </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="#features">Sobre Nosotros</Nav.Link>
          <Nav.Link href="#pricing">Sucursales</Nav.Link>
          <Nav.Link href="#pricing">Contáctenos</Nav.Link>

          <NavDropdown title="Categorías" id="collasible-nav-dropdown">
            <NavDropdown.Item href="http://localhost:3000/category/technology">Tecnología</NavDropdown.Item>
            <NavDropdown.Item href="http://localhost:3000/category/technology">Teléfonos</NavDropdown.Item>
            <NavDropdown.Item href="http://localhost:3000/category/technology">Laptops</NavDropdown.Item>
            <NavDropdown.Item href="http://localhost:3000/category/technology">Notebooks</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Otros productos
            </NavDropdown.Item>
          </NavDropdown>

          <Nav className="ms-auto">
            {/* si no hay un usuario registrado mostrar el botón login */}
            {!user && (
              <LinkContainer  to="/login">
                <Nav.Link className="text-primary login">Login</Nav.Link>
              </LinkContainer>
            )}

            {/* Si el usuario está registrado o es admin mostrar cart */}
            {user && !user.isAdmin && (
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  {user?.cart.count > 0 && (
                    <span className="badge badge-warning" id="cartcount">
                      {user.cart.count}
                    </span>
                  )}
                </Nav.Link>
              </LinkContainer>
            )}

            {/* Si el usuario está registrado: campana, notificaciones etc*/}
            {user && (
              <>
                <Nav.Link
                  style={{ position: "relative" }}
                  onClick={handleToggleNotifications}
                >
                  <i
                    className="fas fa-bell"
                    ref={bellRef}
                    data-count={unreadNotifications || null}
                  ></i>
                </Nav.Link>
                <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                  {/* Si el usuario es administrador: habilita dashboard y creación de producto  */}
                  {user.isAdmin && (
                    <>
                      <LinkContainer to="/admin">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/new-product">
                        <NavDropdown.Item>Crear producto</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}
                  {/* Si el usuario no es un administrador:  */}
                  {!user.isAdmin && (
                    <>
                      <LinkContainer to="/cart">
                        <NavDropdown.Item>Carrito</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orders">
                        <NavDropdown.Item>Mis compras</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}

                  {/* Botón para salir de la sesión (ya sea usuario o admin) con función handlelogout */}

                  <NavDropdown.Divider />
                  <Button
                    variant="danger"
                    onClick={handleLogout}
                    className="logout-btn"
                  >
                    Logout
                  </Button>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* notifications */}
      <div
        className="notifications-container"
        ref={notificationRef}
        style={{
          position: "absolute",
          top: bellPos.top + 30,
          left: bellPos.left,
          display: "none",
        }}
      >
        {user?.notifications.length > 0 ? (
          user?.notifications.map((notification) => (
            <p className={`notification-${notification.status}`}>
              {notification.message}
              <br />
              <span>
                {notification.time.split("T")[0] +
                  " " +
                  notification.time.split("T")[1]}
              </span>
            </p>
          ))
        ) : (
          <p>todavía no hay notificaciones</p>
        )}
      </div>
    </Navbar>
  );
}

export default Navigation;
