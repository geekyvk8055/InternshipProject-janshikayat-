import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
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
      <Container fluid>
        <Row className="m-3">
          <Col md={12}>
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
                <form>
                  <div>
                    <h5 className="text-center">
                      Create Counter Mapping With Category
                    </h5>

                    <div className="form-group">
                      <label for="Country">जिला(District) </label>
                      <select
                        class="form-control custom-select browser-default"
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
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="State">काउन्टर लोकेशन(Counter Location) </label>
                    <select
                      class="form-control custom-select browser-default"
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
                    </select>
                  </div>

                  <div className="form-group">
                    <label>काउन्टर (Counter) </label>
                    <select
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
                    </select>
                  </div>

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
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CounterCategoryMapping;
