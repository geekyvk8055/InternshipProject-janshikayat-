import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Header.css";

const Headerjs = () => {
  return (
    <>
      <Container fluid className="bg-white">
        <div className="container">
          <Row>
            <Col md={12}>
              <img
                src="https://janshikayat.cg.nic.in/images/janshikayat_logo.png"
                height={800}
                width={600}
                className="img-fluid shadow-4"
                alt="..."
              />
            </Col>
            {/* <Col className=" " md={6} style={{textAlign:'right'}}>
              <img
                src=""
                height={500}
                width={400}
                className="img-fluid shadow-4"
                alt="..."
              /> */}

              {/* <div id="headContent">जनशिकायत निवारण विभाग</div>

            <Row xs="md">
              <Col xs="md">
                <div id="headsubContent">GOVERNMENT OF CHATTISGARH</div>
            
               </Col>
            </Row> */}
            {/* </Col> */}

            {/* <Col className="" xm="2">
              <div id="here1" className="text-white"></div>
            </Col> */}

            {/* <Col className="" md="1"></Col> */}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Headerjs;
