import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BucketFill } from "react-bootstrap-icons";
import axios from "axios";
import { set } from "react-hook-form";

const UserDashboard = () => {
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [distrct, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [applicantId, setApplicantId] = useState([]);
  const [applicantName, setApplicantName] = useState([]);
  const [applicantAdd, setApplicantAdd] = useState([]);
  const [applicantMob, setApplicantMob] = useState([]);
  const [applicantCat, setApplicantCat] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState([]);
  const [applicantPassword, setApplicantPassword] = useState([]);
  const [applicantEmail, setApplicantEmail] = useState([]);

  useEffect(() => {
    const fetchstates = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetState"
      );
      setState(response.data);
    };
    fetchstates();
  }, []);

  useEffect(() => {
    const fetchdistrict = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetDistrict"
      );
      setDistrict(response.data);
    };
    fetchdistrict();
  }, []);

  useEffect(() => {
    const fetchapplicant = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/UserLogin/Getapplicant"
      );
      setApplicantCat(response.data.table);
    };
    fetchapplicant();
  }, []);

  const handleSubmit = async (event) => {
    // const datafromapi = {
    //   "applicant_name": "vinod",
    //   "applicant_add": "narayanpur",
    //   "applicant_dist": "11",
    //   "applicant_distname": "raipur",
    //   "applicant_state": "22",
    //   "applicant_mobile": "78946123",
    //   "registration_date": "2020-01-02",
    //   "application_cat": "self",
    //   "client_ip": "",
    //   "verify": "y",
    //   "password": "12345",
    //   "user_id": "vinod",
    //   "email_id": "vy848481@gmail.com"
    // }
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Master/registration",
        {
          applicant_name: applicantName,
          applicant_add: applicantAdd,
          applicant_dist: selectedDistrict,
          applicant_distname: "",
          applicant_state: selectedState,
          applicant_mobile: applicantMob,
          registration_date: "2020-01-01",
          application_cat: selectedApplicant,
          client_ip: "",
          verify: "y",
          password: applicantPassword,
          user_id: applicantId,
          email_id: applicantEmail,
        }
      );
      // console.log({datafromapi});
      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };

  return (
    <>
      <Container >
        <Row>
          <Col md={12}>
            <Row>
              <Col md={4} style={{marginTop:'25px'}}>
              <div style={{
                    background: "red",
                    //alignItems: "center",
                    //justifyContent: "center",
                    borderRadius: "5px",
                    height:'35px'
                  }}>
                <h5
                  className="text-center"
                  style={{alignItems:'center', justifyContent:'center'}}
                  
                >
                  ऑनलईन जनशिकायत 
                </h5>
                </div>
                <ul className="adminList">
                  <li>
                    <NavLink to="/getLogin" style={{ textDecoration: "none" }}>
                      शिकायत पंजीयन 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/createCounter"
                      style={{ textDecoration: "none" }}
                    >
                      आवेदन विवरण 
                    </NavLink>
                  </li>
                </ul>
              </Col>
              <Col
                md={8}
                style={{
                  background: "whitesmoke",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "25px",
                  marginBottom: "25px",

                  borderRadius: "10px",
                  border: "1px solid black",
                  boxShadow: "2px -2px 20px 4px black",
                }}
              >
                <Form>
                  <Form.Group>
                    <Row>
                      <Col md={12}>
                        <Row>
                          <Col
                            md={12}
                            style={{
                              textAlign: "center",
                              backgroundImage:
                                "url('https://i.pinimg.com/originals/5e/76/0c/5e760cba5e9ca01ed6249f1ea49cb104.png')",
                              borderTopLeftRadius: "10px",
                              borderTopRightRadius: "10px",
                              marginBottom: "50px",
                            }}
                          >
                            <h4
                              className="mt-3"
                              style={{ fontWeight: "bolder" }}
                            >
                              <i style={{ color: "#6F1E1A" }}>
                                आवेदक / आवेदन  का वर्णन 
                              </i>
                            </h4>
                          </Col>
                        </Row>
                        <h6 style={{ color: "red", textAlign: "center" }}>
                          * चिन्ह वाले सभी भागो को भरना अनिवार्य है |
                        </h6>
                        <Row>
                          <Col sm={7}>
                            <Form.Group className="require">
                              <Form.Label>
                                आवेदक का नाम
                                <span style={{ color: "red" }}>*</span> :{" "}
                              </Form.Label>
                              <Form.Control
                                value={applicantName}
                                onChange={(event) =>
                                  setApplicantName(event.target.value)
                                }
                                placeholder="Enter your name."
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md={5}>
                            <Form.Group>
                              <Form.Label for="email">
                                Email<span style={{ color: "red" }}>*</span>
                              </Form.Label>
                              <Form.Control
                                value={applicantEmail}
                                onChange={(event) =>
                                  setApplicantEmail(event.target.value)
                                }
                                type="email"
                                class="form-control"
                                name="email"
                                placeholder="Enter your email."
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col md={6}>
                            <Form.Label for="cod">
                              आवेदक श्रेणी
                              <span style={{ color: "red" }}>*</span>{" "}
                            </Form.Label>
                            <Form.Select
                              class="form-control browser-default custom-select"
                              value={selectedApplicant}
                              onChange={(event) =>
                                setSelectedApplicant(event.target.value)
                              }
                            >
                              <option selected>आवेदक श्रेणी चुनें</option>

                              {applicantCat.map((ac) => (
                                <option key={ac.cat_id} value={ac.cat_id}>
                                  {ac.cat_name}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                          <Col md={6}>
                            <Form.Label for="address-1">
                              पता<span style={{ color: "red" }}>*</span>{" "}
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              aria-label="With textarea"
                              value={applicantAdd}
                              onChange={(event) =>
                                setApplicantAdd(event.target.value)
                              }
                              type="address"
                              class="form-control"
                              name="Locality"
                              placeholder="Locality/House/Street no."
                              required
                            />
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col md={6}>
                            <Form.Label for="State">जिला </Form.Label>
                            <Form.Select
                              class="form-control custom-select browser-default"
                              value={selectedDistrict}
                              onChange={(event) =>
                                setSelectedDistrict(event.target.value)
                              }
                            >
                              <option selected="selected">
                                Select District
                              </option>
                              {distrct.map((di) => (
                                <option key={di.value} value={di.value}>
                                  {di.name}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>

                          <Col md={6}>
                            <Form.Label for="State">राज्य </Form.Label>
                            <Form.Select
                              class="form-control custom-select browser-default"
                              value={selectedState}
                              onChange={(event) =>
                                setSelectedState(event.target.value)
                              }
                            >
                              <option selected="selected">select state</option>
                              {state.map((st) => (
                                <option key={st.value} value={st.value}>
                                  {st.name}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Row>
                        <br />

                        <Row>
                          <Col md={6}>
                            <Form.Label for="tel">Phone </Form.Label>
                            <Form.Control
                              value={applicantMob}
                              onChange={(event) =>
                                setApplicantMob(event.target.value)
                              }
                              type="tel"
                              name="phone"
                              class="form-control"
                              id="tel"
                              placeholder="Enter Your Contact Number."
                              required
                            />
                          </Col>

                          <Col md={6}>
                            <Form.Label for="tel">यूजर आइडी </Form.Label>
                            <Form.Control
                              value={applicantId}
                              onChange={(event) =>
                                setApplicantId(event.target.value)
                              }
                              type="tel"
                              name="phone"
                              class="form-control"
                              placeholder="Create Your User ID."
                              required
                            />
                          </Col>
                        </Row>

                        <br />
                        <Row>
                          <Col md={6}>
                            <label for="pass">Password</label>
                            <input
                              value={applicantPassword}
                              onChange={(event) =>
                                setApplicantPassword(event.target.value)
                              }
                              type="Password"
                              name="password"
                              class="form-control"
                              id="pass"
                              placeholder="Enter your password."
                              required
                            />
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label htmlFor="inputPassword5">
                                Confirm Password
                              </Form.Label>
                              <Form.Control
                                // value={ver}
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder="Re-enter your password."
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br />
                        <Col md={12} class=" text-center">
                          <Button onClick={handleSubmit}>Register</Button>
                        </Col>
                        <br />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserDashboard;
