import React from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FourMp } from "@mui/icons-material";

const AlloteOffcRole = () => {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [basedepartment, setBasedepartment] = useState([]);
  const [selectedBasedepartment, setSelectedBasedepartment] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [selectedDesignation, setSelectedDesignation] = useState([]);
  const [role, setRole] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);

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

  //fetching officelevel
  useEffect(() => {
    const fetchemployee = async () => {
      if (selectedBasedepartment) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/Getemployee"
        );
        setEmployee(response.data.table);
      }
    };
    fetchemployee();
  }, [selectedBasedepartment]);

  //fetching officecategory
  useEffect(() => {
    const fetchdesignation = async () => {
      if (selectedEmployee) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/Getdesignation"
        );
        setDesignation(response.data);
      }
    };
    fetchdesignation();
  }, [selectedEmployee]);

  //post method

  const handleSubmit = async (event, item) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Master/postemployee_role",
        {
          designation_no: "",
          section_code: "",
          employee_id: selectedEmployee,
          basedept_id: selectedBasedepartment,
          office_id: "",
          district_id: selectedDistrict,
          user_id: "",
          active_status: "",
          designation_id: selectedDesignation,
          roll_type_code: item.value,
        }
      );
      console.log(item);
      if (response.data) {
        alert("submitted");
      } else {
        alert("wrong entered data");
      }
      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };

  useEffect(() => {
    const fetchrole = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetRoll"
      );
      setRole(response.data);
    };
    fetchrole();
  }, []);
  // const handleOfficeClick = () => {
  //   setShowTable(true);
  // };

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
                  style={{
                    height: "10vh",
                    fontSize: "35px",
                    color: "white",
                    fontFamily: "Times New Roman,Arial, sans-serif",
                  }}
                >
                  Allote Employee Office or Section Role
                </div>
                <Form>
                  <Row>
                    <Col>
                     
                        <Form.Label for="Country">Country : </Form.Label>
                        <Form.Select
                          class="form-control"
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
                      
                        <Form.Label for="Country">State : </Form.Label>
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
                      
                    </Col>
                    <Col>
                      
                        <Form.Label for="State">BaseDept : </Form.Label>
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
                      
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      
                        <Form.Label>Employee : </Form.Label>
                        <Form.Select
                          class="form-control"
                          value={selectedEmployee}
                          onChange={(event) =>
                            setSelectedEmployee(event.target.value)
                          }
                        >
                          <option value="">Select a Employee </option>
                          {employee.map((empl) => (
                            <option
                              key={empl.employee_id}
                              value={empl.employee_id}
                            >
                              {empl.designation_name}/{empl.employee_name}/
                              {empl.employee_id}
                            </option>
                          ))}
                        </Form.Select>
                    
                    </Col>
                    <Col>
                      
                        <Form.Label>Designation : </Form.Label>
                        <Form.Select
                          class="form-control custom-select browser-default"
                          value={selectedDesignation}
                          onChange={(event) =>
                            setSelectedDesignation(event.target.value)
                          }
                        >
                          <option value="">Select a Designation </option>
                          {designation.map((design) => (
                            <option key={design.value} value={design.value}>
                              {design.name}
                            </option>
                          ))}
                        </Form.Select>
                    
                    </Col>
                  </Row>
                </Form>

                <br />

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Select</th>
                      <th>Roll</th>
                    </tr>
                  </thead>
                  <tbody>
                    {role.map((item) => (
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            value={selectedRole}
                            onChange={(e) => handleSubmit(e, item)}
                          />
                        </td>
                        <td>{item.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AlloteOffcRole;
