import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";

function Headerj() {
  return (
    <>
      <Container fluid style={{ background: "#191970" }}>
        <Row className="text-light text-left font-monospace">
          <Col md={2} sm={2} style={{ textAlign: "center" }}>
            छत्तीसगढ़ शासन &nbsp;
          </Col>
          <Col md={3} sm={2} style={{ textAlign: "center" }}>
            <div className="vr" />
            &nbsp; GOVERNMENT OF CHATTISGARH
          </Col>
          <Col md={7} sm={2} style={{ textAlign: "right" }}>
            <Button
              style={{
                background: "white",
                border: "1px black solid",
                height: "5vh",
                width: "4vw",
                color: "black",
                textAlign: "center",
                margin: "1px",
              }}
            >
              <b>A-</b>
            </Button>
            <Button
              style={{
                background: "white",
                border: "1px black solid",
                height: "5vh",
                width: "4vw",
                color: "black",
                textAlign: "center",
                margin: "1px",
              }}
            >
              <b>A</b>
            </Button>

            <Button
              style={{
                background: "white",
                border: "1px black solid",
                height: "5vh",
                width: "4vw",
                color: "black",
                textAlign: "center",
              }}
            >
              <b>A+</b>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Headerj;
