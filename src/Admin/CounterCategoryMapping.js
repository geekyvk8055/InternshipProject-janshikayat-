import React from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const CounterCategoryMapping = () => {
  const [id, setId] = useState();
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(0);
  const [counterLocation, setCounterLocation] = useState([]);
  const [selectedCounterLocation, setSelectedCounterLocation] = useState(0);
  const [counter, setCounter] = useState([]);
  const [selectedCounter, setSelectedCounter] = useState([]);
  const [cat, setCat] = useState([]);
  const [selectedCat, setSelectedCat] = useState([]);
  const [datatable, setDatatable] = useState([]);
  const [datatableToedit, setDatatableToedit] = useState([]);
  

  //fetching district
  useEffect(() => {
    const fetchdistricts = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetDistrict"
      );
      setDistrict(response.data);
      console.log(setSelectedDistrict);
    };

    fetchdistricts();
  }, []);

  //fetching counterLocation

  useEffect(() => {
    const fetchcounterlocation = async () => {
      if (selectedDistrict) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetCounterLocation"
        );
        setCounterLocation(response.data);
      }
    };
    fetchcounterlocation();
  }, [selectedDistrict]);

  //fetching counter
  useEffect(() => {
    const fetchcounter = async () => {
      if (selectedCounterLocation) {
        const response = await axios.get(
          `https://localhost:44333/api/Master/GetCounter`
        );
        setCounter(response.data.table);
      }
    };
    fetchcounter();
  }, [selectedCounterLocation]);

  useEffect(() => {
    const fetchcategory = async () => {
      const response = await axios.get(
        `https://localhost:44333/api/Master/getcategory` );
      setCat(response.data.table);
    };
    fetchcategory();
  }, []);

  const handlesubmit = async (event, item) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Counter_Cat_Map/counter_category_map",
        {
          district_id: selectedDistrict,
          counter_location_code: selectedCounterLocation,
          counter_id: selectedCounter,
          category_id:selectedCat,
          entry_date: "",
          user_ip: "",
        }
      );

      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };

  const handleEditButton = (item) => {
    setDatatableToedit(item);
  };
const onChangeHandle = (data)=> {
  console.log(data.target);
};

const handlecheck =(item)=>
{
  setSelectedCat(item.categoryID)
}
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
                  </a><hr />
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
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Employee Password
                    </NavLink>
                  </a><hr />

                  <a>
                    <NavLink
                      to="/admin/ResetEmplPwd"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

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
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/counter_allotement"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Allote Counter To User
                    </NavLink>
                  </a><hr />
                  <a>
                    <NavLink
                      to="/admin/countercat_mapping"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Counter Category Mapping
                    </NavLink>
                  </a>
                  </div>
                  <hr />
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
               Create Counter Mapping With Category
               </div>
                <Form>
                 
                    

                     <Row>
                     <Col>
                      <Form.Label for="Country">जिला(District) :</Form.Label>
                      <Form.Select
                        class="form-control"
                        value={selectedDistrict}
                        onChange={(event) => {
                          setSelectedDistrict(event.target.value);
                        }}
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
                    <Form.Label for="State">काउन्टर लोकेशन(Counter Location) :</Form.Label>
                    <Form.Select
                      class="form-control"
                      value={selectedCounterLocation}
                      onChange={(event) =>
                        setSelectedCounterLocation(event.target.value)
                      }
                    >
                      <option value="">Select a Counter Location </option>
                      {counterLocation.map((cl) => (
                        <option key={cl.value} value={cl.value}>
                          {cl.name}
                        </option>
                      ))}
                    </Form.Select>
                    </Col>
                  </Row> 
                  <br />
                  <Row>
                  <Col md={6}>
                    <Form.Label>काउन्टर (Counter) :</Form.Label>
                    <Form.Select
                      class="form-control custom-select browser-default"
                      value={selectedCounter}
                      onChange={(event) =>
                        setSelectedCounter(event.target.value)
                      }
                    >
                      <option>Select a Counter </option>
                      {counter.map((c) => (
                        <option key={c.counterCode} value={c.counterCode}>
                          {c.counterName}
                        </option>
                      ))}
                    </Form.Select>
                    </Col>
                    </Row>

                  <br />
                  <br />

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>Category Name</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.map((item,keyid) => (
                        <tr key={keyid}>
                          <td>
                            <input
                              type="checkbox"
                              checked={item.categoryID===selectedCat}
                              onChange={() =>handlecheck(item)

                              }
                            ></input>
                          </td>
                          <td>{item.categoryName}</td>

                          <td>
                            <Button>Remove</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <br />

                  <div>
                    <Button onClick={handlesubmit}> Allote</Button>
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

export default CounterCategoryMapping;
