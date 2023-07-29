import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";

function Carosel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [isHovering, setIsHovering] = useState(false);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const frame = () => {
      if (!isHovering) {
        setDistance((distance) => (distance + 0.5) % 100);
      }
      requestAnimationFrame(frame);
    };
    frame();
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Container fluid className="coresol" style={{ marginTop: "25px" }}>
        <div className="container">
          <Row>
            <Col md={12}>
              <Row>
                <Col md={8} sm={12}>
                  <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    style={{}}
                  >
                    <Carousel.Item>
                      <img
                        className="d-flex w-100"
                        src="Images\322403323_874721830321494_6796359235655917553_n.jpg"
                        alt="First slide"
                        height={"400vh"}
                      />
                      {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-flex w-100 "
                        src="https://api.indianmandarins.com/public/advImages/12260-3_Side%20Banner_04.jpg"
                        alt="Second slide"
                        height={"400vh"}
                      />
                      {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-flex w-100"
                        src="Images\336670020_927740528260687_7929263910638655439_n.jpg"
                        alt="Third slide"
                        height={"400vh"}
                      />

                      {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
                    </Carousel.Item>
                  </Carousel>
                </Col>

                <Col md={4} sm={12}>
                  <Row>
                    <div
                      className="imp"
                      style={{
                        fontWeight: "bolder",
                        borderTopRadius: "6px",
                        height: "6vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Important Links
                    </div>

                    <Col
                      id="card"
                      style={{
                        // border: "1px solid grey",
                        height: "57vh",
                        borderBottomRadius: "4px",
                        backgroundImage:
                          'url("https://devbeep.com/wp-content/uploads/2021/06/aaaa-1024x540.png")',
                        backgroundRepeat: "round",
                      }}
                    >
                      <Row>
                        <div
                        // className="marquee"
                        // style={{ top: `${distance}%` }}
                        // onMouseEnter={handleMouseEnter}
                        // onMouseLeave={handleMouseLeave}
                        >
                          <Col md={12} className="mar">
                            <Row>
                             
                                <Col
                                  style={
                                    {
                                      // textAlign: "center",
                                      // display: "flex",
                                      // justifyContent: "center",
                                      // alignItems: "center",
                                    }
                                  }
                                >
                                  <Card
                                    style={{
                                      width: "12vw",
                                      // margin: "2px",
                                      textAlign: "center",
                                      color: "white",
                                      backgroundImage:
                                        'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")',
                                      backgroundRepeat: "round",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZIBn2nOm_AO3M4QLFzIU-_ErwI7GY9ZTNp0_tjPmSGR262OCyZvyJZkD0xxcj-DIoDA&usqp=CAU"
                                      height={140}
                                      className="bg-white"
                                    />
                                    <Card.Body>
                                      <a href="#Home" target={"_blank"}>
                                        <Button
                                          variant="success"
                                          style={{ fontSize: "15px" }}
                                        >
                                          दैनिक कार्यवाही
                                        </Button>
                                      </a>
                                    </Card.Body>
                                  </Card>
                                </Col>

                                <Col
                                  style={
                                    {
                                      // textAlign: "center",
                                      // display: "flex",
                                      // justifyContent: "center",
                                      // alignItems: "center",
                                    }
                                  }
                                >
                                  <Card
                                    style={{
                                      width: "12vw",
                                      // margin: "2px",
                                      textAlign: "center",
                                      backgroundImage:
                                        'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")',
                                      color: "white",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      src="https://icon-library.com/images/district-icon/district-icon-22.jpg"
                                      height={140}
                                    />
                                    <Card.Body>
                                      <NavLink
                                        to="DistrictList"
                                        target={"_blank"}
                                      >
                                        <Button variant="success">
                                          जिला सूची
                                        </Button>
                                      </NavLink>
                                    </Card.Body>
                                  </Card>
                                </Col>

                                <Col
                                  style={
                                    {
                                      // textAlign: "center",
                                      // display: "flex",
                                      // justifyContent: "center",
                                      // alignItems: "center",
                                    }
                                  }
                                >
                                  <Card
                                    style={{
                                      width: "12vw",
                                      // margin: "2px",
                                      textAlign: "center",
                                      backgroundImage:
                                        'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")',
                                      color: "white",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      style={{
                                        background: "white",
                                        height: "140px",
                                      }}
                                      src="Images\department.png"
                                    />
                                    <Card.Body>
                                      <NavLink
                                        to="/DepartmentList"
                                        target={"_blank"}
                                      >
                                        <Button variant="success">
                                          विभाग सूची
                                        </Button>
                                      </NavLink>
                                    </Card.Body>
                                  </Card>
                                </Col>

                                <Col
                                  style={
                                    {
                                      //  textAlign: "center"
                                    }
                                  }
                                >
                                  <Card
                                    style={{
                                      width: "12vw",
                                      // margin: "2px",
                                      textAlign: "center",
                                      backgroundImage:
                                        'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")',
                                      color: "white",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      height="140px"
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGYsTatTkc4mLJ3K8UQagj3u--r1jcdr9XmPWEKUVRFXcwmcQavd9Td0fLNYFAcCXnnE&usqp=CAU"
                                    />
                                    <Card.Body>
                                      <NavLink
                                        to="/reports/OfficeList"
                                        target={"_blank"}
                                      >
                                        <Button variant="success">
                                          ऑफिस सूची{" "}
                                        </Button>
                                      </NavLink>
                                    </Card.Body>
                                  </Card>
                                </Col>

                                <Col style={{}}>
                                  <Card
                                    style={{
                                      width: "12vw",
                                      // margin: "2px",
                                      textAlign: "center",
                                      backgroundImage:
                                        'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")',
                                      color: "white",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      style={{
                                        background: "white",
                                        height: "140px",
                                      }}
                                      src="Images\user.png"
                                    />
                                    <Card.Body>
                                      <a href="#Home" target={"_blank"}>
                                        <Button variant="success">
                                          ऑफिसर सूची
                                        </Button>
                                      </a>
                                    </Card.Body>
                                  </Card>
                                </Col>

                                <Col
                                  style={
                                    {
                                      // textAlign: "center"
                                    }
                                  }
                                >
                                  <Card
                                    style={{
                                      width: "12vw",
                                      // margin: "2px",
                                      textAlign: "center",
                                      backgroundImage:
                                        'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")',
                                      color: "white",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      style={{
                                        background: "white",
                                        height: "140px",
                                      }}
                                      src="Images\office-officer.webp"
                                    />
                                    <Card.Body>
                                      <a href="#Home" target={"_blank"}>
                                        <Button
                                          variant="success"
                                          style={{ fontSize: "11px" }}
                                        >
                                          ऑफिस/ऑफिसरसूची
                                        </Button>
                                      </a>
                                    </Card.Body>
                                  </Card>
                                </Col>

                                <Col>
                                  <Card
                                    style={{
                                      width: "12vw",
                                      // margin: "2px",
                                      textAlign: "center",
                                      backgroundImage:
                                        'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")',
                                      color: "white",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      style={{
                                        background: "white",
                                        height: "130px",
                                      }}
                                      src="Images\rti.webp"
                                    />
                                    <Card.Body>
                                      {/* <Card.Title>आर.टी.आई.</Card.Title> */}
                                      <a href="#Home" target={"_blank"}>
                                        <Button variant="success">
                                          आर.टी.आई.
                                        </Button>
                                      </a>
                                    </Card.Body>
                                  </Card>
                                </Col>
                            
                            </Row>
                          </Col>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Carosel;
