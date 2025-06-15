import { NavLink } from "react-router-dom";
import "./StyleNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Register } from "../pages/Register";

export const NavBar = () => {
  //Jag använder en navbar från Bootstrap. Jag stylear den lite i en separat css-fil.
  return (
      //På små skärmar visas nav-länkarna horisontellt med "expand="sm"".
      //Nedan definierar jag var länkarna går.
      //Jag skapade en knapp för att kunna registrera sig till en kurs. När man
      //klickar på den poppar ett formulärfält upp.
      <Navbar expand="sm" bg="dark" data-bs-theme="dark">
        <Container className="nav-container">
          <div className="navbar-container1">
            <Navbar.Brand className="nav-title" href="/">
              Student Portal
            </Navbar.Brand>
            <Nav className="navbar-links">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/news">
                News
              </Nav.Link>
              <Nav.Link as={NavLink} to="/courses">
                Courses
              </Nav.Link>
            </Nav>
          </div>
          <div className="navbar-container2">
            <Register className="register-button"></Register>
          </div>
        </Container>
      </Navbar>
    
  );
};
