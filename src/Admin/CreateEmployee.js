import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactDatePicker from "react-datepicker";

const CreateEmployee = () => {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [basedepartment, setBasedepartment] = useState([]);
  const [selectedBasedepartment, setSelectedBasedepartment] = useState([]);
  const [employeeName, setEmployeeName] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [selectedDesignation, setSelectedDesignation] = useState([]);
  const [dob, setDob] = useState([]);
  const [address, setAddress] = useState([]);
  const [mobilenumber, setMobilenumber] = useState([]);
  const [alternatenumber, setAlternatenumber] = useState([]);
  const [officemobile, setOfficemobile] = useState([]);
  const [email, setEmail] = useState([]);

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

  //fetching designation
  useEffect(() => {
    const fetchdesignation = async () => {
      if (selectedBasedepartment) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/Getdesignation"
        );
        setDesignation(response.data);
      }
    };
    fetchdesignation();
  }, [selectedBasedepartment]);

  //post method

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Master/employee",
        {
          country_code: selectedCountry,
          district_code: selectedDistrict,
          state_code: selectedState,
          employee_name: employeeName,
          basedepartment_code: selectedBasedepartment,
          employee_dob: dob,
          employee_mobile: mobilenumber,
          employee_altmobile: alternatenumber,
          employee_email: email,
          office_mobile: officemobile,
          address: address,
          designation_id: selectedDesignation,
          entry_year: "2023",
          user_code: "",
          employee_level: "",
          empoyee_altemail: "",
          nouseoffice_code: "",
          nouseofficer_code: "",
          olddistrict_code: "",
          client_ip: "",
          entry_date: "",
          active: "",
        }
      );

      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };

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
                      {" "}
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
                style={{
                  borderRadius: "3px",
                  border: "1px solid black",
                  marginTop: "40px",
                }}
              >
                <div
                  className="bg-success  text-center mt-3 mb-3 "
                  style={{ height: "10vh", fontSize:'35px',color:'white', fontFamily:'Times New Roman,Arial, sans-serif' }}
                >
                  Create Employee
                </div>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Label for="Country">देश </Form.Label>
                      <Form.Select
                        class="form-control custom-select browser-default"
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
                    </Col>

                    <Col>
                      <Form.Label for="State">राज्य </Form.Label>
                      <Form.Select
                        class="form-control"
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
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Form.Label for="District">जिला </Form.Label>
                      <Form.Select
                        class="form-control"
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
                    </Col>

                    <Col>
                      <Form.Label for="State">मुख्य विभाग </Form.Label>
                      <Form.Select
                        class="form-control"
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
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Form.Label>कर्मचारी का नाम (Employee Name): </Form.Label>
                      <Form.Control
                        class="form-control"
                        value={employeeName}
                        onChange={(event) =>
                          setEmployeeName(event.target.value)
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Label>पद(designation) : </Form.Label>
                      <Form.Select
                        class="form-control custom-select browser-default"
                        value={selectedDesignation}
                        onChange={(event) =>
                          setSelectedDesignation(event.target.value)
                        }
                      >
                        <option value="">Select Designation </option>
                        {designation.map((design) => (
                          <option key={design.value} value={design.value}>
                            {design.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Form.Label htmlFor="dob">Date of Birth: </Form.Label>
                      <Form.Control
                        id="dob"
                        type="date"
                        value={dob}
                        onChange={(event) => setDob(event.target.value)}
                        required
                      />
                    </Col>

                    <Col>
                      <Form.Label> पता : </Form.Label>
                      <Form.Control
                        class="form-control"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required
                      />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Form.Label> फोन नंबर : </Form.Label>
                      <Form.Control
                        class="form-control"
                        value={mobilenumber}
                        onChange={(event) =>
                          setMobilenumber(event.target.value)
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Label>alternate Number : </Form.Label>
                      <Form.Control
                        class="form-control"
                        value={alternatenumber}
                        onChange={(event) =>
                          setAlternatenumber(event.target.value)
                        }
                      />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Form.Label>कार्यालय फोन नंबर : </Form.Label>
                      <Form.Control
                        class="form-control"
                        value={officemobile}
                        onChange={(event) =>
                          setOfficemobile(event.target.value)
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Label>EMAIL ID. </Form.Label>
                      <Form.Control
                        class="form-control custom-select browser-default"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </Col>
                  </Row>
                  <br />
                  <div>
                    <Button type="submit"> submit</Button>&nbsp;
                    <Button href="#" className="bg-danger">
                      Clear
                    </Button>
                  </div>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateEmployee;
