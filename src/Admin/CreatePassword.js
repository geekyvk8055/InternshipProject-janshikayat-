import React from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CreatePassword = () => {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [basedepartment, setBasedepartment] = useState([]);
  const [selectedBasedepartment, setSelectedBasedepartment] = useState([]);
  const [employeeName, setEmployeeName] = useState([]);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [selectedDesignation, setSelectedDesignation] = useState([]);
  const [password, setPassword] = useState('');
  const [reEnterPaswd, setReEnterPaswd] = useState([]);
  const [username, setUsername] = useState([]);
  const [passwordlengthError, setPasswordlengthError] = useState([]);
  const [message, setMessage] = useState('');


  const handleValidation = (event) => {
    event.preventDefault();
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if (password === ""){
      setMessage("please enter Password")
    }else if (regExp.test(password)){
      setMessage("Password is valid")
    }else if (!regExp.test(password)){
      setMessage("password is Not Valid")
    }else{
      setMessage("")
    }
  }

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

  //fetching employee
  useEffect(() => {
    const fetchemployee = async () => {
      if (selectedBasedepartment) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/Getemployee"
        );
        setEmployeeName(response.data.table);
      }
    };
    fetchemployee();
  }, [selectedBasedepartment]);

  //fetching designation
  useEffect(() => {
    const fetchdesignation = async () => {
      if (selectedEmployeeName) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/Getdesignation"
        );
        setDesignation(response.data);
      }
    };
    fetchdesignation();
  }, [selectedEmployeeName]);

 

  //post method

  const handleSubmit = async (event) => {
    // const datafromapi = {"user_code":"2310000001",
    // "username":"sdfsfdg",
    // "password":"12345",
    // "usertype":"0",
    // "pwd_status":"N",
    // "country_code":"91",
    // "state_code":"22",
    // "district_code":"22",
    // "active_status":"Y"}


    // user_code: selectedEmployeeName,
    //       username: username,
    //       password: password,
    //       usertype: "0",
    //       pwd_status: "N",
    //       country_code: selectedCountry,
    //       state_code: selectedState,
    //       district_code: selectedDistrict,
    //       active_status:"Y",
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:44333/api/UserLogin/adminPaasword",
      
        {
          user_code:selectedEmployeeName,
        username:username,
        password:password,
        usertype:"0",
        pwd_status:"N",
        country_code:selectedCountry,
        state_code:selectedState,
        district_code:selectedDistrict,
        active_status:"Y"
        }
      );
      if(password === reEnterPaswd)
      {
        alert("matched");
      }
      else
      {
        alert("not match");
      }
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
      <Container fluid>
        <Row className="m-3">
          <Col md={12} style={{ background: "whitesmoke" }}>
            <Row>
              <Col md={3}>
                <h3
                  className="text-center"
                  style={{
                    background: "red",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "5px",
                  }}
                >
                  Admin Menu
                </h3>
                <ul className="adminList">
                  <li>
                    <NavLink to="/getLogin" style={{ textDecoration: "none" }}>
                      Create Counter Location
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/createCounter"
                      style={{ textDecoration: "none" }}
                    >
                      Create Counter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/CreateOffice"
                      style={{ textDecoration: "none" }}
                    >
                      Create Office
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/createOfficeLevel"
                      style={{ textDecoration: "none" }}
                    >
                      Create Office Level
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/createEmployee"
                      style={{ textDecoration: "none" }}
                    >
                      Create Employee
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/alloteEmployeeOffice"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Allote Employee Office Or section
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/alloteOfficeRole"
                      style={{ textDecoration: "none" }}
                    >
                      Allote Employee Office/Section Role
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/admin/CreatePassword"
                      style={{ textDecoration: "none" }}
                    >
                      Create Employee Password
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/admin/ResetEmplPwd"
                      style={{ textDecoration: "none" }}
                    >
                       Reset Employee Password
                    </NavLink>
                  </li>


                  <li>
                    <NavLink
                      to="/admin/Section"
                      style={{ textDecoration: "none" }}
                    >
                       Create Section
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/admin/counter_allotement"
                      style={{ textDecoration: "none" }}
                    >
                       Allote Counter To User
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/countercat_mapping"
                      style={{ textDecoration: "none" }}
                    >
                       Counter Category Mapping
                    </NavLink>
                  </li>
                </ul>
              </Col>

              <Col
                md={9}
                style={{ borderRadius: "3px", border: "1px solid black" }}
              >
                <div>
                  {/* <label>आवेदन की स्थिति हेतु आवेदन नंबर डालें : </label>
                  <input /> */}

                  {/* <Button>देखें </Button> */}
                </div>

                <Form>
                  <h5 className="text-center"> Create Employee Password </h5>
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
                        <Form.Label>Employee : </Form.Label>
                        <Form.Select
                          class="form-control custom-select browser-default"
                          value={selectedEmployeeName}
                          onChange={(event) =>
                            setSelectedEmployeeName(event.target.value)
                          }
                        >
                          <option value="">Select a Employee Name </option>
                          {employeeName.map((ename) => (
                            <option
                              key={ename.employee_id}
                              value={ename.employee_id}
                            >
                              {ename.employee_name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Designation : </Form.Label>
                        <Form.Select
                          class="form-control custom-select browser-default"
                         
                        >
                          <option value="">Designation </option>
                          {designation.map((design) => (
                            <option key={design.value} value={design.value}>
                              {design.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Form.Label>Login Name : </Form.Label>
                    <Col md={6}>
                      <Form.Control
                        class="form-control custom-select browser-default"
                        value={username}
                        onChange={(event) =>
                          setUsername(event.target.value)
                        }
                      />
                    </Col>

                    <Col md={6}>
                      <Button>Check Availability</Button>
                    </Col>
                  </Row>

                  <br />

                  <Row>
                  <Col md={6}>
                    <Form.Label>Enter Password :  </Form.Label>
                    
                      <Form.Control
                        class="form-control custom-select browser-default"
                        value={password}
                        type="password"
                        placeholder="create a new password"
                        onChange={(event) =>
                        setPassword(event.target.value)
                        }/>
                       <p>*please enter password{message}</p>  
                    </Col>
                    
                    <Col md={6}>
                    <Form.Label>Re-Enter Password :  </Form.Label>
                    
                      <Form.Control
                        class="form-control custom-select browser-default"
                        value={reEnterPaswd}
                        placeholder="confirm password"
                        type="password"
                        onChange={(event) =>
                          setReEnterPaswd(event.target.value)
                        }
                      />
                    </Col>
                  </Row>

                        <br />
                  <div>
                    <Button onClick={handleSubmit}>Create</Button>
                    
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

export default CreatePassword;
