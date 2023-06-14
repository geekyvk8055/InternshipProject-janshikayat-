import React from "react";
import { Card, ListGroup, Button, Form, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { AlignCenter, TextCenter } from "react-bootstrap-icons";
import { MdAccountCircle } from "react-icons/md";
// Import custom CSS file

const LoginForm = () => {
  return (
    <>
      <Container fluid className="report" style={{ marginTop: "25px" }}>
        <div className="container">
        <Row>
        <Col md={12}>
          <Row>
            <Col
              
            >
            <h3 className="header-text text-center">
              आवेदनों की स्थिति
              </h3>
            </Col>
          </Row>

          <Row>
            <Col md={3} >
              <Card
                style={{
                  width: "15rem",
                  marginTop: "19px",
                  textAlign: "center",
                  background: "whitesmoke",
                }}
              >
                <Card.Title
                  style={{
                    // padding: "8px",
                    background: "#373DAD",
                    color: "white",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    fontSize:'15px',
                    height:'5vh',
                    justifyContent:'center',
                    alignItems:'center',
                    display:'flex'
                  }}
                >
                  V.C. द्वारा प्राप्त आवेदन
                </Card.Title>

                <table class="table">
                  <thead>
                    <tr style={{ background: "black", color: "white" }}>
                      <th scope="col" style={{ background: "#D61515" }}>
                        लंबित{" "}
                      </th>
                      <th scope="col" style={{ background: "#1ACC83" }}>
                        निराकृत{" "}
                      </th>
                      <th scope="col" style={{ background: "#5F6587" }}>
                        कुल{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: "white" }}>
                      <td style={{ color: "red", background: "white" }}>
                        50000
                      </td>
                      <td style={{ color: "green", background: "white" }}>
                        85000
                      </td>
                      <td style={{ background: "white" }}>6000</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Col>

            <Col md={3}>
              <Card
                style={{
                  width: "15rem",
                  // marginLeft: "6px",
                  marginTop:'19px',
                  marginLeft:'19px',
                  textAlign: "center",
                  background: "whitesmoke",
                }}
              >
                <Card.Title
                  style={{
                    // padding: "8px",
                    background: "#373DAD",
                    color: "white",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    fontSize:'15px',
                    height:'5vh',
                    justifyContent:'center',
                    alignItems:'center',
                    display:'flex'
                  }}
                >
                  Web द्वारा प्राप्त आवेदन
                </Card.Title>

                <table class="table">
                  <thead>
                    <tr style={{ background: "black", color: "white" }}>
                      <th scope="col" style={{ background: "#D61515" }}>
                        लंबित{" "}
                      </th>
                      <th scope="col" style={{ background: "#1ACC83" }}>
                        निराकृत{" "}
                      </th>
                      <th scope="col" style={{ background: "#5F6587" }}>
                        कुल{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ color: "red", background: "white" }}>
                        50000
                      </td>
                      <td style={{ color: "green", background: "white" }}>
                        85000
                      </td>
                      <td style={{ background: "white" }}>6000</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Col>

            <Col md={3}>
              <Card
                style={{
                  width: "15rem",
                  // marginLeft: "6px",
                  marginTop:'19px',
                  marginLeft:'19px',
                  textAlign: "center",
                  background: "whitesmoke",
                }}
              >
                <Card.Title
                  style={{
                    // padding: "8px",
                    background: "#373DAD",
                    color: "white",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    fontSize:'15px',
                    height:'5vh',
                    justifyContent:'center',
                    alignItems:'center',
                    display:'flex'
                  }}
                >
                  Mail/Post द्वारा प्राप्त आवेदन{" "}
                </Card.Title>

                <table class="table">
                  <thead>
                    <tr style={{ background: "black", color: "white" }}>
                      <th scope="col" style={{ background: "#D61515" }}>
                        लंबित{" "}
                      </th>
                      <th scope="col" style={{ background: "#1ACC83" }}>
                        निराकृत{" "}
                      </th>
                      <th scope="col" style={{ background: "#5F6587" }}>
                        कुल{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ color: "red", background: "white" }}>
                        50000
                      </td>
                      <td style={{ color: "green", background: "white" }}>
                        85000
                      </td>
                      <td style={{ background: "white" }}>6000</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Col>

            <Col md={3}>
              <Card
                style={{
                  width: "15rem",
                  // marginLeft: "20px",
                  marginTop:'19px',
                  marginLeft:'19px',
                  textAlign: "center",
                  background: "whitesmoke",
                }}
              >
                <Card.Title
                  style={{
                    // padding: "8px",
                    background: "#373DAD",
                    color: "white",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    fontSize:'15px',
                    height:'5vh',
                    justifyContent:'center',
                    alignItems:'center',
                    display:'flex'
                  }}
                >
                  कुल आवेदन{" "}
                </Card.Title>

                <table class="table">
                  <thead>
                    <tr style={{ background: "black", color: "white" }}>
                      <th scope="col" style={{ background: "#D61515" }}>
                        लंबित{" "}
                      </th>
                      <th scope="col" style={{ background: "#1ACC83" }}>
                        निराकृत{" "}
                      </th>
                      <th scope="col" style={{ background: "#5F6587" }}>
                        कुल{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ color: "red", background: "white" }}>
                        50000
                      </td>
                      <td style={{ color: "green", background: "white" }}>
                        85000
                      </td>
                      <td style={{ background: "white" }}>6000</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Col>
          </Row>
          </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default LoginForm;
