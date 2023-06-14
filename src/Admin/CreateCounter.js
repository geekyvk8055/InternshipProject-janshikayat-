import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CreateCounter = () => {
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [counterlocation, setCounterlocation] = useState([]);
  const [selectedCoutnterlocation, setSelectedCounterlocation] = useState([]);
  const [counter, setCounter] = useState([]);

  // useEffect(() => {
  // 	axios.get("https://localhost:44333/api/Master/GetDistrict").then((response) => {
  // 	  setdistrict(response.data);
  // 	});
  //   }, []);

  useEffect(() => {
    const fetchdistricts = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetDistrict"
      );
      setDistrict(response.data);
    };
    fetchdistricts();
  }, []);

  // useEffect(() => {
  //   axios.get("https://localhost:44333/api/Master/GetCounterLocation").then((response) => {
  //     setcounterlocation(response.data);
  //   });
  //   }, []);

  useEffect(() => {
    const fetchCounterlocation = async () => {
      if (selectedDistrict) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetCounterLocation"
        );
        setCounterlocation(response.data);
      }
    };
    fetchCounterlocation();
  }, [selectedDistrict]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Master/Countermaster",
        {
          location_code: selectedCoutnterlocation,
          district_code: selectedDistrict,
          counter_name: counter,
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
        <Row className="m-3">
          <Col md={12}>
            <Row>
              <Col md={3} >
                <h3 className="text-center"  style={{background:"red", alignItems:'center', justifyContent:'center', borderRadius:'5px'}}>Admin Menu</h3>
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
                  <NavLink to="/createOfficeLevel" style={{textDecoration:"none"}}>Create Office Level</NavLink>
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
                  <h5>Create Counter</h5>
                 

                  <div className="form-group">
                    <label for="Country">जिला </label>
                    <select
                      class="form-control custom-select browser-default"
                      value={selectedDistrict}
                      onChange={(event) =>
                        setSelectedDistrict(event.target.value)
                      }
                    >
                      <option value="">Select a country</option>
                      {district.map((district) => (
                        <option key={district.value} value={district.value}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label for="State">Counter Location </label>
                  <select
                    class="form-control custom-select browser-default"
                    value={selectedCoutnterlocation}
                    onChange={(event) =>
                      setSelectedCounterlocation(event.target.value)
                    }
                    disabled={!selectedDistrict}
                  >
                    <option value="">Select a state</option>
                    {counterlocation.map((j) => (
                      <option key={j.value} value={j.value}>
                        {j.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Counter : </label>
                  <input
                    value={counter}
                    onChange={(event) => setCounter(event.target.value)}
                  />
                </div>

                <div>
                  <Button type="submit"> submit</Button>
                  &nbsp;
                  <Button className="bg-danger">Cancel</Button>
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

export default CreateCounter;
