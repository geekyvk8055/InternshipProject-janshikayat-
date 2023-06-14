import { Link } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function UserLoginMenu() {
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <Container
      fluid
      className="sticky-top"
      style={{ background: "rgb(45, 45, 170)" }}
    >
      <div className="container">
        <Navbar expand="lg">
          <NavLink to="/" style={{textDecoration:'none'}}> <Navbar.Brand className="home-menu text-white"  style={{fontWeight:'bolder'}}>
            Home
            </Navbar.Brand>
          </NavLink>
          <hr />
          <span style={{color:"white"}}>|</span>
          &nbsp;
          <NavLink to="/" style={{textDecoration:'none'}}> <Navbar.Brand className="home-menu text-white"  style={{fontWeight:'bolder'}}>
            Logout
            </Navbar.Brand>
          </NavLink>
         
        </Navbar>
      </div>
    </Container>
  );
}

export default UserLoginMenu;





