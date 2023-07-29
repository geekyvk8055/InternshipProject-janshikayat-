import React from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Section = () => {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [basedepartment, setBasedepartment] = useState([]);
  const [selectedBasedepartment, setSelectedBasedepartment] = useState([]);
  const [office, setOffice] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState([]);
  const [section, setSection] = useState([]);

  //country fetching
  useEffect(() => {
    const fetchcountries = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetCountry"
      );
      setCountry(response.data);
    };
    fetchcountries();
  }, []);

  //state fetching

  useEffect(() => {
    const fetchstates = async () => {
      if (selectedCountry) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetState"
        );
        setState(response.data);
      }
    };
    fetchstates();
  }, [selectedCountry]);

  //fetching district
  useEffect(() => {
    const fetchdistricts = async () => {
      if (selectedState) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetDistrict"
        );
        setDistrict(response.data);
      }
    };
    fetchdistricts();
  }, [selectedState]);

  //fetching basedepartment

  useEffect(() => {
    const fetchbasedepartment = async () => {
      if (selectedDistrict) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/Getbasedepartment"
        );
        setBasedepartment(response.data);
      }
    };
    fetchbasedepartment();
  }, [selectedDistrict]);

  // fetching office
  useEffect(() => {
    const fetchoffice = async () => {
      if (selectedBasedepartment) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetNewOffice"
        );
        setOffice(response.data);
      }
    };
    fetchoffice();
  }, [selectedBasedepartment]);

  //post method

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:44333/api/section/postsection",
        {
          country_code: selectedCountry,
          state_code: selectedState,
          districtCode: selectedDistrict,
          base_dept_code: selectedBasedepartment,
          office_code: selectedOffice,
          section_name: section,
          status_code: "",
          entry_date: "2023-06-07",
          owner_code: "",
        }
      );
      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };
  //  const handleOfficeClick = () => {
  //    setShowTable(true);
  //  };

  return (
    <>
      <Container
        fluid
        style={{ backgroundImage: 'url("/Images/image_admin_bg.jpg")' }}
      >
        <Row>
          <Col md={12} style={{ marginTop: "25px" }}>
            <Row>
              <Col md={3}>
                <h3
                  className="text-center"
                  style={{
                    background: "#FA0C00",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    color: "white",
                  }}
                >
                  Admin Menu
                </h3>
                <div
                  style={{
                    border: "1px solid whitesmoke",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    background: "#eaf9ff",
                  }}
                >
                  <a>
                    <NavLink
                      to="/getLogin"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Create Counter Location
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/createCounter"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Create Counter
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/CreateOffice"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Create Office
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/createOfficeLevel"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Create Office Level
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/createEmployee"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Create Employee
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/alloteEmployeeOffice"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Allote Employee Office Or section
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/alloteOfficeRole"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Allote Employee Office/Section Role
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/CreatePassword"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Create Employee Password
                    </NavLink>
                  </a>
                  <hr />

                  <a>
                    <NavLink
                      to="/admin/ResetEmplPwd"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Reset Employee Password
                    </NavLink>
                  </a>
                  <hr />

                  <a>
                    <NavLink
                      to="/admin/Section"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Create Section
                    </NavLink>
                  </a>
                  <hr />

                  <a>
                    <NavLink
                      to="/admin/counter_allotement"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Allote Counter To User
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/countercat_mapping"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                      {" "}
                      <img
                        style={{ height: "4vh", width: "4vw" }}
                        src="/Images/icons8-arrow-48.png"
                      />
                      Counter Category Mapping
                    </NavLink>
                  </a>
                </div>
                <hr />
              </Col>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <Col
                md={8}
                style={{ borderRadius: "3px", border: "1px solid black", marginTop:'40px' }}
              >
                <div className="bg-success  text-center mt-3 mb-3 "
                  style={{ height: "10vh", fontSize:'35px',color:'white', fontFamily:'Times New Roman,Arial, sans-serif' }}>
                Create Section
                </div>

                <Form>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label for="Country">Country : </Form.Label>
                        <Form.Select
                          value={selectedCountry}
                          onChange={(event) =>
                            setSelectedCountry(event.target.value)
                          }
                        >
                          <option value="">Select a country</option>
                          {country.map((country) => (
                            <option key={country.value} value={country.value}>
                              {country.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>State : </Form.Label>
                        <Form.Select
                          value={selectedState}
                          onChange={(event) =>
                            setSelectedState(event.target.value)
                          }
                        >
                          <option value="">Select a State</option>
                          {state.map((state) => (
                            <option key={state.value} value={state.value}>
                              {state.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label for="Country">District : </Form.Label>
                        <Form.Select
                          class="form-control custom-select browser-default"
                          value={selectedDistrict}
                          onChange={(event) =>
                            setSelectedDistrict(event.target.value)
                          }
                        >
                          <option value="">Select a district</option>
                          {district.map((district) => (
                            <option key={district.value} value={district.value}>
                              {district.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label for="State">Base Dept : </Form.Label>
                        <Form.Select
                          class="form-control custom-select browser-default"
                          value={selectedBasedepartment}
                          onChange={(event) =>
                            setSelectedBasedepartment(event.target.value)
                          }
                        >
                          <option value="">Select a department </option>
                          {basedepartment.map((basedept) => (
                            <option key={basedept.value} value={basedept.value}>
                              {basedept.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Office : </Form.Label>
                        <Form.Select
                          class="form-control custom-select browser-default"
                          value={selectedOffice}
                          onChange={(event) =>
                            setSelectedOffice(event.target.value)
                          }
                        >
                          <option value="">Select a Office </option>
                          {office.map((ofc) => (
                            <option key={ofc.officecode} value={ofc.officecode}>
                              {ofc.officename}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Section Name : </Form.Label>
                        <Form.Control
                          class="form-control custom-select browser-default"
                          value={section}
                          onChange={(event) => setSection(event.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <br />
                  <div>
                    <Button onClick={handleSubmit}>Save</Button>
                    &nbsp;&nbsp;
                    <Button type="button" className="bg-danger">
                      Cancel
                    </Button>
                  </div>
                  <br />
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Section;
