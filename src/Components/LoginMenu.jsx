import { Link } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function Menubar() {
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
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              
              <Nav.Link
                href="https://janchaupal.cg.nic.in/"
                className="home-menu  text-white fw-bold"
              >
                Janchaupal
              </Nav.Link>
              <NavDropdown
                className="home-menu text-white fw-bold"
                title="Graph"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  href="https://janshikayat.cg.nic.in/Graphs/category_pie.aspx"
                  style={{ fontWeight: "bold" }}
                >
                  श्रेणीवार प्राप्त ग्राफ{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://janshikayat.cg.nic.in/Graphs/District_wise_graph.aspx"
                  style={{ fontWeight: "bold" }}
                >
                  जिलेवार ग्राफ{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://janshikayat.cg.nic.in/Graphs/Year_wise_TotalLetter.aspx"
                  style={{ fontWeight: "bold" }}
                >
                  {" "}
                  वर्षवार ग्राफ{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://janshikayat.cg.nic.in/Graphs/Districtwise_demandcomplaint.aspx"
                  style={{ fontWeight: "bold" }}
                >
                  {" "}
                  मांग शिकायत ग्राफ{" "}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
}

export default Menubar;
