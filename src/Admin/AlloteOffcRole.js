import React from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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

 const handleSubmit = async (event,item) => {
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
        roll_type_code: item.value
        }
      );
      console.log(item)
      if (response.data)
      {
        alert('submitted');
      }
      else{alert('wrong entered data')}
      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
   
  };

useEffect(() => {
  const fetchrole = async () => {
    const response = await axios.get(
      "https://localhost:44333/api/Master/GetRoll");
       setRole(response.data);
    
  }
  fetchrole();
  }, []);
  // const handleOfficeClick = () => {
  //   setShowTable(true);
  // };

  return (
    <>
      <Container fluid>
        <Row className="m-3">
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
                <Form>
                  <div>
                    <h5 className="text-center">Allote Employee Office or Section Role</h5>
                    <div className="form-group">
                      <label for="Country">Country : </label>
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
                      <label for="Country">State :  </label>
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
                      <label for="Country">District : </label>
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
                    <label for="State">BaseDept : </label>
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
                    <label>Employee : </label>
                    <select
                      class="form-control custom-select browser-default"
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
                          {empl.designation_name}/{empl.employee_name}/{empl.employee_id}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Designation : </label>
                    <select
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
                    </select>
                  </div>
                
                    <br />

                    <Table striped bordered hover>
                    <thead>
                          <tr>
                            <th>
                              Select
                            </th>
                            <th>Roll</th>
                          
                          </tr>
                    </thead>
                    <tbody>
                     {role.map((item) => (
                        <tr>
                          <td><input type ="checkbox" value={selectedRole} 
                          onChange ={(e)=>handleSubmit(e,item)}
                           
                          

                            /></td>
                          <td>{item.name}</td>
                        </tr>
                     ))}
                    </tbody>
                  </Table>
                  </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AlloteOffcRole;
