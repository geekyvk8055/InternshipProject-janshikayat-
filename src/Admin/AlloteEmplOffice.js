import React from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const AlloteEmplOffice = () => {
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
  const [office, setOffice] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState([]);

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

  // fetching office
  useEffect(() => {
    const fetchoffice = async () => {
      if (selectedDesignation) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetNewOffice"
        );
        setOffice(response.data);
      }
    };
    fetchoffice();
  }, [selectedDesignation]);

  //post method

   const handleSubmit = async (event) => {
     event.preventDefault();
     try {
       const response = await axios.post(
         "https://localhost:44333/api/Master/employeepost",
         {
          countrycode: selectedCountry,
          statecode: selectedState,
          district_code:selectedDistrict,
          basedept_code: selectedBasedepartment,
          employee_code: selectedEmployeeName,
          designation_id: selectedDesignation,
          office_code: selectedOffice,
          section_code: "",
          usercode: "",
          status: "",
          prarup_code: "",
          designationno: ""
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
      <Container fluid style={{backgroundImage:'url("/Images/image_admin_bg.jpg")'}}>
        <Row >
          <Col md={12} style={{marginTop:'25px' }}>
            <Row>
              <Col md={3}>
              <h3
                  className="text-center"
                  style={{
                    background: "#FA0C00",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius:'10px',
                    borderTopRightRadius:'10px',
                    color:'white'
                  

                  }}
                >
                  Admin Menu
                </h3>
                <div style={{border:'1px solid whitesmoke',borderTopLeftRadius:'10px',
                    borderTopRightRadius:'10px',background:'#eaf9ff'}}>
                
                  <a>
                    <NavLink to="/getLogin" style={{ textDecoration: "none",color:'#2e415c' }}>
                    <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Counter Location
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/createCounter"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
                      Create Counter
                    </NavLink>
                  </a><hr />
                  <a>
                    <NavLink
                      to="/CreateOffice"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Office
                    </NavLink>
                  </a><hr />
                  <a>
                    <NavLink
                      to="/createOfficeLevel"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Office Level
                    </NavLink>
                  </a><hr />
                  <a>
                    <NavLink
                      to="/createEmployee"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Employee
                    </NavLink>
                  </a><hr />

                  <a>
                    <NavLink
                      to="/alloteEmployeeOffice"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                           <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Allote Employee Office Or section
                    </NavLink>
                  </a><hr />

                  <a>
                    <NavLink
                      to="/alloteOfficeRole"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Allote Employee Office/Section Role
                    </NavLink>
                  </a><hr />
                  <a>
                    <NavLink
                      to="/admin/CreatePassword"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Employee Password
                    </NavLink>
                  </a><hr />

                  <a>
                    <NavLink
                      to="/admin/ResetEmplPwd"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                       Reset Employee Password
                    </NavLink>
                  </a><hr />

                  <a>
                    <NavLink
                      to="/admin/Section"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                       Create Section
                    </NavLink>
                  </a><hr />

                  <a>
                    <NavLink
                      to="/admin/counter_allotement"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                       Allote Counter To User
                    </NavLink>
                  </a><hr />
                  <a>
                    <NavLink
                      to="/admin/countercat_mapping"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                       Counter Category Mapping
                    </NavLink>
                  </a>
                  </div>
               
              </Col>
              
              &nbsp;&nbsp;
             &nbsp;&nbsp;
             &nbsp;&nbsp;

              <Col
                md={8}
                style={{ borderRadius: "3px", border: "1px solid black", marginTop:'40px' }}
              >
                <div className="bg-success  text-center mt-3 mb-3 "
                  style={{ height: "10vh", fontSize:'35px',color:'white', fontFamily:'Times New Roman,Arial, sans-serif' }}>
                Allote Employee Office/Section
                </div>

                <Form >
                
                  
                    
                    <Row>
                    <Col md={6}>
                    <Form.Group>
                      <Form.Label for="Country">देश </Form.Label>
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
                      <Form.Label >राज्य </Form.Label>
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
                      <Form.Label for="Country">जिला </Form.Label>
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
                    <Form.Label for="State">मुख्य विभाग  </Form.Label>
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
                    <Form.Label>कर्मचारी का नाम : </Form.Label>
                    <Form.Select
                      class="form-control custom-select browser-default"
                      value={selectedEmployeeName}
                      onChange={(event) =>
                        setSelectedEmployeeName(event.target.value)
                      }
                    >
                      <option value="">Select a Employee Name </option>
                      {employeeName.map((ename) => (
                        <option key={ename.employee_id} value={ename.employee_id}>
                          {ename.designation_name}/{ename.employee_name}/{ename.employee_id}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                        </Col>
                        <Col md ={6}>
                  <Form.Group>
                    <Form.Label >कर्मचारी का पद </Form.Label>
                    <Form.Select
                      class="form-control custom-select browser-default"
                      value={selectedDesignation}
                      onChange={(event) =>
                        setSelectedDesignation(event.target.value)
                      }
                    >
                      <option value="" className="text-center" hover>Designation </option>
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
                  <Col md={6}>
                  <Form.Group>
                    <Form.Label>कार्यालय : </Form.Label>
                    <Form.Select
                      class="form-control custom-select browser-default"
                      value={selectedOffice}
                      onChange={(event) =>
                        setSelectedOffice(event.target.value)
                      }
                    >
                      <option value="">select office </option>
                      {office.map((ofc) => (
                        <option key={ofc.officecode} value={ofc.officecode}>
                          {ofc.officename}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  </Col>
                  </Row>

                  <br />

                  <div>
                    <Button onClick={handleSubmit}> submit</Button>
                    &nbsp;&nbsp;
                    <Button className="bg-danger" href="#">Cancel</Button>
                  </div>
                  <br />
                  <Row>
                  <Col md= {12} sm = {4}>
                  <Table striped bordered hover style={{alignItems:'center', justifyContent:'center'}}>
                    <thead className="text-center">
                      <tr>
                        <th>Name</th>
                        <th>seq</th>
                        <th>prarup_type_name</th>
                        <th>up down</th>
                        <th>Hide Show</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>

                        <td>
                          <Button>Up</Button>
                          &nbsp;
                          <Button>Down</Button>
                        </td>
                        <td>
                          <Button>Hide</Button>
                          &nbsp;
                          <Button>Show</Button>
                        </td>
                      </tr>
                    </tbody>
                    {/* <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <button>Up</button>
                          &nbsp;
                          <button>Down</button>
                        </td>
                        <td>
                          <button>Hide</button>
                          &nbsp;
                          <button>Show</button>
                        </td>
                      </tr>
                    </tbody> */}
                  </Table>
                  </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AlloteEmplOffice;
