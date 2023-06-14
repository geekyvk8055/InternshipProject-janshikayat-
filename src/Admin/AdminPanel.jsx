import React, { useState, useEffect, useRef  } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { clear } from "@testing-library/user-event/dist/clear";

const AdminPanel = () => {
  const [CounterLocationName, setCounterLocationName] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const[message, setMessage] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetCountry"
      );
      setCountries(response.data);
    };
    fetchCountries();
  }, []);

  // fetch the list of states when a country is selected
  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetState"
        );
        setStates(response.data);
      }
    };
    fetchStates();
  }, [selectedCountry]);

  // fetch the list of districts when a state is selected
  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedState) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetDistrict"
        );
        setDistricts(response.data);
      }
    };
    fetchDistricts();
  }, [selectedState]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Master/CounterLocation",
        {
          country_code: selectedCountry,
          state_code: selectedState,
          district_code: selectedDistrict,
          location_name: CounterLocationName,
        }
      );

      console.log(response.data); // do something with the response data
      if(response.data)
      {
        alert("submitted successfully");
      }
      else{
        alert("failed to submit");
      }
    } catch (error) {
      console.log(error); // handle error
      
    }
  };

  const formRef = useRef(null);

  const handleClear = () => {

    const shouldClear = window.confirm('Are you sure you want to clear all fields?');

    if (shouldClear && formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="m-3">
          <Col md={12} style={{ background: "whitesmoke" }}>
            <Row>
              <Col md={3} style={{}}>
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
                <Row>
              
                  <Form.Label>
                    आवेदन की स्थिति हेतु आवेदन नंबर डालें :{" "}
                  </Form.Label>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                       type="number"
                       placeholder="आवेदन की स्थिति हेतु आवेदन नंबर डालें"
                       name="alloted_number"

                      
                       />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Button>देखें </Button>
                  </Col>
                </Row>
                <div>
                  <h5>Create Counter Location</h5>
                </div>
                <Form>
                  <Form.Group class="col-sm-5 form-group">
                    <Form.Label htmlFor="country">Country:</Form.Label>
                    <Form.Select
                      className="form-control"
                      id="country"
                      value={selectedCountry}
                      onChange={(event) =>
                        setSelectedCountry(event.target.value)
                      }
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.value} {country.name}
                        </option>
                      ))}
                    </Form.Select>

                    <Col md={7}>
                      <Form.Group>
                        <Form.Label htmlFor="state">State:</Form.Label>
                        <Form.Select
                          className="form-control"
                          id="state"
                          value={selectedState}
                          onChange={(event) =>
                            setSelectedState(event.target.value)
                          }
                          disabled={!selectedCountry}
                        >
                          <option value="">Select a state</option>
                          {states.map((state) => (
                            <option key={state.value} value={state.value}>
                              {state.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Form.Group>
                  <div>
                    <label htmlFor="district">District:</label>
                    <select
                      className="form-control"
                      id="district"
                      value={selectedDistrict}
                      onChange={(event) =>
                        setSelectedDistrict(event.target.value)
                      }
                      disabled={!selectedState}
                    >
                      <option value="">Select a district</option>
                      {districts.map((district) => (
                        <option key={district.value} value={district.value}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Form.Group class="col-sm-5 form-group">
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control
                      className="form-control"
                      id="name"
                      type="text"
                      value={CounterLocationName}
                      onChange={(event) =>
                        setCounterLocationName(event.target.value)
                      }
                    />
                  </Form.Group>
                      <br />
                  <Button onClick={handleSubmit}>Submit</Button>
                  &nbsp;
                  <Button onClick={handleClear}  className="bg-danger">Clear</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPanel;
