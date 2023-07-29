import React from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateOffice = () => {
  const [id, setId] = useState();
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(0);
  const [basedepartment, setBasedepartment] = useState([]);
  const [selectedBasedepartment, setSelectedBasedepartment] = useState(0);
  const [officelevel, setOfficelevel] = useState([]);
  const [selectedOfficelevel, setSelectedOfficelevel] = useState([]);
  const [officecategory, setOfficecategory] = useState([]);
  const [selectedOfficecategory, setSelectedOfficecategory] = useState([]);
  const [office, setOffice] = useState([]);
  const [officeadd, setOfficeadd] = useState([]);
  const [officemobile, setOfficemobile] = useState([]);
  const [officefax, setOfficefax] = useState("");
  const [officeurl, setOfficeurl] = useState([]);
  const [email, setEmail] = useState([]);
  const [datatable, setDatatable] = useState([]);
  const [datatableToedit, setDatatableToedit] = useState([]);

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
        console.log(setSelectedDistrict);
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
    const fetchofficelevel = async () => {
      if (selectedBasedepartment) {
        const response = await axios.get(
          `https://localhost:44333/api/Master/Getofficelevel`
        );
        setOfficelevel(response.data);
      }
    };
    fetchofficelevel();
  }, [selectedBasedepartment]);

  //fetching officecategory
  useEffect(() => {
    const fetchofficecategory = async () => {
      if (selectedOfficelevel) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetOfficecategory"
        );
        setOfficecategory(response.data);
      }
    };
    fetchofficecategory();
  }, [selectedOfficelevel]);

  const fetchoffice = async (selectedDistrict, selectedBasedepartment) => {
    try {
      const response = await axios.get(
        `https://localhost:44333/api/Master/GetofficeByid/${selectedDistrict}/${selectedBasedepartment}`
      );
      setDatatable(response.data.table);
    } catch (err) {}
  };

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Master/newoffice",
        {
          district_code: selectedDistrict,
          office_name: datatableToedit,
          basedept_code: selectedBasedepartment,
          office_category: selectedOfficecategory,
          officelevel_code: selectedOfficelevel,
          country_code: selectedCountry,
          state_code: selectedState,
          office_add: officeadd,
          office_url: officeurl,
          contact_number: officemobile,
          email: email,
          fax: officefax,
          status: "",
          office_code: "",
          officer_code: "",
          subdept_code: "",
          oldoffice_level: "",
          district_codenew: "",
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
                      {" "}
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
                      {" "}
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
                      {" "}
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
                      {" "}
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
                      {" "}
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
                style={{ borderRadius: "3px", border: "1px solid black", marginTop:'40px' }}
              >
              <div className="bg-success  text-center mt-3 mb-3 "
                  style={{
                    height: "10vh",
                    fontSize: "35px",
                    color: "white",
                    fontFamily: "Times New Roman,Arial, sans-serif",
                  }}>
              Create Office
              </div>
                <form>
                  
                  <Row>
                    <Col md={6}>
                      <div className="form-group">
                        <Form.Label for="Country">देश </Form.Label>
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
                      </div>
                    </Col>
                    
                    <Col md={6}>
                      <div className="form-group">
                        <Form.Label for="Country">राज्य </Form.Label>
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
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Form.Label for="Country">जिला </Form.Label>
                        <Form.Select
                          class="form-control"
                          value={selectedDistrict}
                          onChange={(event) => {
                            setSelectedDistrict(event.target.value);
                            fetchoffice(
                              event.target.value,
                              selectedBasedepartment
                            );
                          }}
                        >
                          <option value="">Select a district</option>
                          {district.map((district) => (
                            <option key={district.value} value={district.value}>
                              {district.name}
                            </option>
                          ))}
                        </Form.Select>
                      </div>
                    </Col>

                    <Col>
                      <div className="form-group">
                        <Form.Label for="State">मुख्य विभाग </Form.Label>
                        <Form.Select
                          class="form-control"
                          value={selectedBasedepartment}
                          onChange={(event) => {
                            setSelectedBasedepartment(event.target.value);
                            fetchoffice(selectedDistrict, event.target.value);
                          }}
                        >
                          <option>Select a department </option>
                          {basedepartment.map((basedept) => (
                            <option key={basedept.value} value={basedept.value}>
                              {basedept.name}
                            </option>
                          ))}
                        </Form.Select>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Form.Label>ऑफिस लेवल : </Form.Label>
                        <Form.Select
                          class="form-control"
                          value={selectedOfficelevel}
                          onChange={(event) =>
                            setSelectedOfficelevel(event.target.value)
                          }
                        >
                          <option value="">Select a Office level </option>
                          {officelevel.map((officelevel) => (
                            <option
                              key={officelevel.value}
                              value={officelevel.value}
                            >
                              {officelevel.name}
                            </option>
                          ))}
                        </Form.Select>
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>कार्यालय श्रेणी : </Form.Label>
                        <Form.Select
                          class="form-control"
                          value={selectedOfficecategory}
                          onChange={(event) =>
                            setSelectedOfficecategory(event.target.value)
                          }
                        >
                          <option value="">Select a Office category </option>
                          {officecategory.map((officecat) => (
                            <option
                              key={officecat.value}
                              value={officecat.value}
                            >
                              {officecat.name}
                            </option>
                          ))}
                        </Form.Select>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Form.Label>कार्यालय :</Form.Label>
                        <Form.Control
                          type="text"
                          class="form-control"
                          value={datatableToedit}
                          onChange={(event) =>
                            setDatatableToedit(event.target.value)
                          }
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>कार्यालय का पता : </Form.Label>
                        <Form.Control
                          class="form-control"
                          value={officeadd}
                          onChange={(event) => setOfficeadd(event.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Form.Label>कार्यालय फोन नंबर : </Form.Label>
                        <Form.Control
                          class="form-control"
                          value={officemobile}
                          onChange={(event) =>
                            setOfficemobile(event.target.value)
                          }
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>कार्यालय (fax no. ) </Form.Label>
                        <Form.Control
                          class="form-control"
                          value={officefax}
                          onChange={(event) => setOfficefax(event.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Form.Label>कार्यालय (URL) </Form.Label>
                        <Form.Control
                          class="form-control"
                          value={officeurl}
                          onChange={(event) => setOfficeurl(event.target.value)}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>EMAIL ID. </Form.Label>
                        <Form.Control
                          class="form-control"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <div>
                    <Button onClick={handlesubmit}> submit</Button>
                    &nbsp;
                    <Button  className="bg-danger">
                      Clear
                    </Button>
                  </div>
                  <br />
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Base Department</th>
                        <th>Office Level</th>
                        <th>Office Category</th>
                        <th>Office</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datatable?.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>India</td>
                          <td>Chattisgarh</td>
                          <td>{item.district_Name}</td>
                          <td>{item.dept_name}</td>
                          <td>{item.officeCategoryName}</td>
                          <td>{item.officeLevelName}</td>
                          <td>{item.officeName}</td>
                          <td>
                            <Button
                              onClick={() =>
                                handleEditButton(item.officeName, index)
                              }
                            >
                              Edit
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateOffice;
