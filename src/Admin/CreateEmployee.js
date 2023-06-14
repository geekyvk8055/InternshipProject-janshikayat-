import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
      <Container fluid>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={3}>
                <h3 className="text-center" style={{background:"red", alignItems:'center', justifyContent:'center', borderRadius:'5px'}}>Admin Menu</h3>
                <ul className="adminList">
                  <li>
                    <NavLink to="/getLogin" style={{textDecoration:"none"}}>Create Counter Location</NavLink>
                  </li>
                  <li>
                    <NavLink to="/createCounter" style={{textDecoration:"none"}}>Create Counter</NavLink>
                  </li>
                  <li>
                    <NavLink to="/CreateOffice" style={{textDecoration:"none"}}>Create Office</NavLink>
                  </li>
                  <li>
                    <NavLink to="/createOfficeLevel" style={{textDecoration:"none"}}>
                      Create Office Level
                    </NavLink>
                  </li>

                  <li>
                  <NavLink to="/createEmployee" style={{textDecoration:"none"}}>Create Employee</NavLink>
                  </li>
                  <li>
                  <NavLink to="/alloteEmployeeOffice" style={{textDecoration:"none"}}> Allote Employee Office Or section</NavLink>
                  </li>

                  <li>
                  <NavLink to="/alloteOfficeRole" style={{textDecoration:"none"}}>Allote Employee Office/Section Role</NavLink>
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

              <Col md={9} style={{borderRadius:'3px', border:'1px solid black'}}>
                <div>
                  {/* <label>आवेदन की स्थिति हेतु आवेदन नंबर डालें : </label>
                  <input /> */}

                  {/* <Button>देखें </Button> */}
                </div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <h5 className="text-center">Create Employee</h5>
                    <div className="form-group">
                      <label for="Country">देश </label>
                      <select
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
                      </select>
                    </div>

                    <div className="form-group">
                      <label for="Country">राज्य </label>
                      <select
                        class="form-control custom-select browser-default"
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
                      </select>
                    </div>

                    <div className="form-group">
                      <label for="Country">जिला </label>
                      <select
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
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="State">मुख्य विभाग </label>
                    <select
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
                    </select>
                  </div>

                  <div className="form-group">
                    <label>कर्मचारी का नाम (Employee Name): </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={employeeName}
                      onChange={(event) => setEmployeeName(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>पद(designation) : </label>
                    <select
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
                    </select>
                  </div>
                  &nbsp;

                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth: </label>
                    <input
                      id="dob"
                      type= "date"
                      value= {dob}
                      onChange={(event) => setDob(event.target.value)}
                   required />
                  </div>
                  &nbsp;

                  <div className="form-group">
                    <label> पता : </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                   required />
                  </div>

                  <div className="form-group">
                    <label> फोन नंबर : </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={mobilenumber}
                      onChange={(event) => setMobilenumber(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>alternate Number : </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={alternatenumber}
                      onChange={(event) => setAlternatenumber(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>कार्यालय फोन नंबर : </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={officemobile}
                      onChange={(event) => setOfficemobile(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>EMAIL ID. </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div>
                    <Button type="submit"> submit</Button>
                    <a href="#">Cancel</a>
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
