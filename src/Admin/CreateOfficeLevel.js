import React from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CreateOfficeLevel = () => {
  const [id, setId] = useState([]);
  const [basedepartment, setBasedepartment] = useState([]);
  const [selectedBasedepartment, setSelectedBasedepartment] = useState([]);
  const [officelevel, setOfficelevel] = useState([]);
  const [officelevelToEdit, setOfficelevelToEdit] = useState("");
  const [levelId, setlevelId] = useState("");
  React.useEffect(() => {
    fetchbasedept();
  }, []);

  const fetchbasedept = async () => {
    try {
      const response = await axios.get(
        `https://localhost:44333/api/Master/Getbasedepartment`
      );
      setBasedepartment(response.data);
    } catch (err) {}
  };

  const fetchOfficeLevel = async (selectedBasedepartment) => {
    try {
      const response = await axios.get(
        `https://localhost:44333/api/Master/GetofficeLevel/${selectedBasedepartment}`
      );
      setOfficelevel(response.data.table);
    } catch (err) {}
  };

  // const handleDropdownChange = (e) => {
  //   setId(e.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Master/officelevel",
        {
          country_code: "91",
          state_code: "22",
          basedept_code: selectedBasedepartment,
          officelevel_name: officelevelToEdit,
          officelevel_type: "01",
        }
      );

      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };

  const handleEditButton = (item, levelId) => {
    setOfficelevelToEdit(item);
    setlevelId(levelId);
  };

  const handleEditOfceLvl = () => {
    const data = {
      basedept_code: selectedBasedepartment,
      officelevelId: levelId,
      officelevelToEdit: officelevelToEdit,
    };
    console.log(data);
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
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Counter Location
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/createCounter"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Counter
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/CreateOffice"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Office
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/createOfficeLevel"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Office Level
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/createEmployee"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Employee
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/alloteEmployeeOffice"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >
                                           <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Allote Employee Office Or section
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/alloteOfficeRole"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Allote Employee Office/Section Role
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/CreatePassword"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Employee Password
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/ResetEmplPwd"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Reset Employee Password
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/Section"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Section
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/counter_allotement"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Allote Counter To User
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/countercat_mapping"
                      style={{ textDecoration: "none", color: "#2e415c" }}
                    >                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

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
                  style={{
                    height: "10vh",
                    fontSize: "35px",
                    color: "white",
                    fontFamily: "Times New Roman,Arial, sans-serif",
                  }}>
                Create Office Level
                </div>
                <form style={{border:'1px solid black', padding:'10px'}}>
                  
                    
                    <Row>

                    <Col>
                      <Form.Label for="BaseDepartment">Base Department : </Form.Label>
                      <Form.Select
                        // onChange={handleDropdownChange}
                        class="form-control "
                        value={selectedBasedepartment}
                        onChange={(event) => {
                          setSelectedBasedepartment(event.target.value);
                          fetchOfficeLevel(event.target.value);
                        }}
                      >
                        <option value="">Select a department</option>
                        {basedepartment.map((i) => (
                          <option key={i.value} value={i.value}>
                            {i.value} {i.name}
                          </option>
                        ))}
                      </Form.Select>
                      </Col>
                  
                  <Col>
                    <Form.Label for="State">Office Level : </Form.Label>
                    <Form.Control
                      class="form-control custom-select browser-default"
                      value={officelevelToEdit}
                      onChange={(event) =>
                        // setOfficelevel(event.target.value)
                        setOfficelevelToEdit(event.target.value)
                      }
                    />
                  </Col>
                  </Row>
                  <br />
                  <div>
                    <Button onClick={handleSubmit}> submit</Button>
                    &nbsp;
                    <Button className="bg-danger">Clear</Button>
                  </div>
                </form>
<br />
                {id && (
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Sn.</th>
                        <th>Officelevel Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {officelevel?.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.officeLevelName}</td>
                          <td>
                            
                            <Button
                              onClick={() =>
                                handleEditButton(item.officeLevelName, index)
                              }
                            >
                              Edit
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateOfficeLevel;
