import { useEffect, useState } from "react";
import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Button,
  NavItem,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
//import { FileUpload } from "@mui/icons-material";

const Action_PendingLettersByDepartment = (props) => {
  const [tableData, setTableData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [dob, setDob] = useState("");
  const [id, setId] = useState("");
  const location = useLocation();
  const [showdata, setShowData] = useState(false);
  const [remark, setRemark] = useState("");
  const [showAccept, setShowAccept] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [special, setSpecial] = useState("");
  const [typecode, setTypeCode] = useState("");
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [basedepartment, setBasedepartment] = useState([]);
  const [selectedBasedepartment, setSelectedBasedepartment] = useState("");
  const [officelevel, setOfficelevel] = useState([]);
  const [selectedOfficelevel, setSelectedOfficelevel] = useState("");
  const [officecategory, setOfficecategory] = useState([]);
  const [selectedOfficecategory, setSelectedOfficecategory] = useState("");
  const [office, setOffice] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState("");
  const [section, setSection] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [EmployeeCatPost, setEmployeeCatPost] = useState([]);
  const [selectedEmployeeCatPost, setSelectedEmployeeCatPost] = useState("");
  const [ReasonOfRejection, setReasonOfRejection] = useState("");
  const [action_detail, setAction_Detail] = useState("");
  const [UploadFile, setUploadFile] = useState("");
  const [statusLetter, setStatusLetter] = useState("");
  const [forwordLetter, setForwordLetter] = useState("");

  //fetching basedepartment

  useEffect(() => {
    const fetchbasedepartment = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/Getbasedepartment"
      );
      setBasedepartment(response.data);
    };
    fetchbasedepartment();
  }, []);

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

  //fetching district
  useEffect(() => {
    const fetchdistricts = async () => {
      if (selectedOfficecategory) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetDistrict"
        );
        setDistrict(response.data);
        console.log(setSelectedDistrict);
      }
    };
    fetchdistricts();
  }, [selectedOfficecategory]);

  //fetching office through api

  useEffect(() => {
    const fetchoffice = async () => {
      if (selectedDistrict) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetNewOffice"
        );
        setOffice(response.data);
        console.log(setSelectedOffice);
      }
    };
    fetchoffice();
  }, [selectedDistrict]);

  //fetching section through api

  useEffect(() => {
    const fetchsection = async () => {
      if (selectedOffice) {
        const response = await axios.get(
          "https://localhost:44333/api/section/Getsection"
        );
        setSection(response.data.table);
        console.log(setSelectedSection);
      }
    };
    fetchsection();
  }, [selectedOffice]);

  //fetching employee category through api

  useEffect(() => {
    const fetchemployee_category = async () => {
      if (selectedSection) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/getemplcatpost"
        );
        setEmployeeCatPost(response.data.table);
        console.log(setSelectedEmployeeCatPost);
      }
    };
    fetchemployee_category();
  }, [selectedSection]);

  //   useEffect(() => {
  //     // Fetch data based on the selected radio button

  //     axios
  //       .get(
  //         `https://localhost:44333/api/userApplication/Getcomplaintid/${location?.state}`
  //       )
  //       .then((response) => {
  //         setTableData(response?.data?.table);
  //         // console.log('151',location.state.rowDatas);
  //       })

  //       .catch((error) => {
  //         console.error("Error fetching pending data:", error);
  //       });
  //   }, []);

  //console.log(props);
  const clickedFlag = () => {
    setShowData(true);
  };
  // const clickedFlag3 = () => {
  //   setShowReject(true);
  // };
  // const clickedFlag2 = () => {
  //   setShowError(true);
  // };

  useEffect(() => {
    if (selectedOption === "A") {
      setShowAccept(true);
      setShowReject(false);
    } else if (selectedOption === "R") {
      setShowReject(true);
      setShowAccept(false);
    }
  }, [selectedOption]);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  //   let date = location?.state?.entryDate
  //   date = date.split('T')[0];
  //   console.log(date);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://localhost:44333/api/ComplaintDetailTbl/updatecomplaintstatusaction/${location?.state?.complaintId}`,
        {
          counter_id: "",
          district_id: selectedDistrict,
          year: 2023,
          name: tableData?.[0]?.name,
          address: tableData?.[0]?.address,
          subject: tableData?.[0]?.subject,
          remarks: remark,
          officer_id: "",
          transferred: "",
          user_id: selectedEmployeeCatPost,
          forworded_district: selectedDistrict,
          date_of_jandarshan: "2023-07-11T11:35:15.892Z",
          applicant_district: tableData?.[0]?.applicntDistrictID,
          no_use_department_code: selectedBasedepartment,
          other: "",
          category: tableData?.[0]?.category,
          updated: "",
          app_category_id: "",
          counter_location_code: "",
          applicant_mobile: "",
          country_code: "91",
          state_code: "22",
          file_uploaded: "",
          reffered_by: "",
          application_sub_category: "",
          applicant_category: "",
          registration_number: "",
          status: "",
          reason_of_rejection: ReasonOfRejection,
          complaint_acceptance_date: "2023-07-11T11:35:15.892Z",
          complaint_complitance_date: "2023-07-11T11:35:15.892Z",
          base_dept_code: selectedBasedepartment,
          sub_dept_code: "",
          district_code: selectedDistrict,
          office_level: selectedOfficelevel,
          office_category: selectedOfficecategory,
          office_code: selectedOffice,
          section_code: selectedSection,
          designation_code: selectedEmployeeCatPost,
          entry_date: "2023-07-11T11:35:15.892Z",
          counter_location: "",
          counter_code: "",
          user_code: selectedEmployeeCatPost,
          action_id: "",
          action_date: "2023-07-11T11:35:15.892Z",
          app_sub_category: "",
          id: "",
          action: "",
          marked: "",
          no_use_officer_id: "",
          file_number: "",
          action_type: "",
        }
      );
      // console.log({datafromapi});
      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };
  console.log(location?.state?.complaintId);
  return (
    <>
      <Container fluid style={{ background: "#ecf0f5" }}>
        <Row>
          <Col md={12}>
            <Row>
              <Col
                md={2}
                style={{
                  background: "#eaf9ff",
                  border: "1px solid grey",
                  boxShadow: "1px 1px 5px 3px grey",
                }}
              >
                <div
                  style={{
                    marginTop: "25px",
                    background: "#017e7e",
                    textAlign: "center",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    height: "6vh",
                    fontSize: "19px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  ऑनलईन जनशिकायत
                </div>
                <hr />
                <a>
                  <img
                    style={{ height: "4vh", width: "4vw" }}
                    src="/Images/icons8-arrow-48.png"
                  />
                  <NavLink style={{ textDecoration: "none", fontSize: "20px" }}>
                    पत्र देखें{" "}
                  </NavLink>
                </a>
                <hr />
              </Col>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <Col md={9} style={{ marginTop: "25px" }}>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div class="mb-3 mt-3">
                      <div
                        style={{
                          borderTop: "3px solid #3c8dbc",
                          padding: "28px",
                          background: "white",
                          boxShadow: "1px 1px 2px 1px grey",
                          borderDownRadius: "2px",
                        }}
                      >
                        <Row>
                          <Col md={2}>टोकन नंबर :</Col>
                          <Col md={4}>
                            <input
                              type="text"
                              //   value={location.state}
                              defaultValue={location?.state?.complaintId}
                              class="form-control"
                              placeholder="enter token number"
                            />
                          </Col>
                          <Col md={2}>
                            <Button>Submit</Button>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div
                      style={{
                        borderTop: "3px solid #3c8dbc",
                        padding: "20px",
                        background: "white",
                        boxShadow: "1px 1px 2px 1px grey",
                        borderDownRadius: "2px",
                      }}
                    >
                      <h3 style={{ textAlign: "center" }}>पत्र का विवरण </h3>
                      <div style={{}}>
                        <Row>
                          <Col>
                            <h6>
                              <pre>
                                {" "}
                                पत्र क्रमांक :{" "}
                                <b>{location?.state?.complaintId}</b>
                              </pre>
                            </h6>
                            <br />
                          </Col>
                          <Col>
                            <pre> दिनांक : {formattedDate}</pre>
                            <br />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <pre> श्रेणी : {location?.state?.categoryName}</pre>
                            <br />
                          </Col>
                          <Col>
                            <pre> आवेदक का नाम : {location?.state?.name}</pre>
                            <br />
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <pre>
                              {" "}
                              आवेदक का पता : {location?.state?.address}
                            </pre>
                            <br />
                          </Col>

                          <Col>
                            <pre>
                              आवेदक का दिनांक :
                              {location?.state?.entryDate?.split("T")[0]}
                            </pre>
                            <br />
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <pre>
                              आवेदक का जिला : {location.state?.district_Name}
                            </pre>
                            <br />
                          </Col>
                          <Col>
                            <pre>
                              <label> विषय : {location?.state?.subject}</label>
                            </pre>
                            <br />
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col>
                            <pre>
                              <label style={{ fontSize: "25px" }}>
                                {" "}
                                <b>वर्तमान कार्यवाही विवरण</b>
                              </label>
                            </pre>

                            <br />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <pre>
                              पत्र की स्थिति :{" "}
                              <span>
                                <label style={{ color: "red" }}>अपूर्ण </label>
                              </span>
                            </pre>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <pre>अधिकारी का पद :</pre>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <pre>विभाग का नाम :</pre>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <pre>मुख्य विभाग का नाम :</pre>
                          </Col>
                        </Row>
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          border: "2px solid black",
                          borderTop: "3px solid #3c8dbc",
                          background: "white",
                          boxShadow: "1px 1px 2px 1px grey",
                          borderRadius: "10px",
                        }}
                      >
                        Action Has Not Be Taken
                      </div>
                    </div>
                        <div  className="mt-5"
                        style={{
                          borderTop: "3px solid #3c8dbc",
                          padding: "20px",
                          background: "white",
                          boxShadow: "1px 1px 2px 1px grey",
                          borderDownRadius: "2px",
                        }}>
                    <Row>
                      <Col
                       
                      >
                        <Row>
                          <Col md={4}>
                            कार्यवाही दिनांक : &nbsp;
                            <input
                              id="dob"
                              type="date"
                              value={dob}
                              onChange={(event) => setDob(event.target.value)}
                              required
                            />
                          </Col>
                          <Col md={3}></Col>
                          <Col md={4}>
                            <div>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={remark}
                                  onChange={(event) =>
                                    setRemark(event.target.value)
                                  }
                                />
                                &nbsp;<b>कार्यवाही की आवश्यकता नहीं </b>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <br /> <br />
                        <Row>
                          <Col>
                            <div>
                              <Form.Select
                                class="form-control"
                                value={special}
                                onChange={(event) =>
                                  setSpecial(event.target.value)
                                }
                              >
                                <option value="no" selected>
                                  Select
                                </option>

                                <option value="yes">हाँ</option>
                              </Form.Select>
                            </div>
                          </Col>
                          <Col md={2}></Col>
                          <Col>
                            कार्यवाही विवरण :
                            <textarea
                              rows={5} // You can adjust the number of visible rows here
                              cols={40} // You can adjust the number of visible columns here
                              value={action_detail}
                              onChange={(event) =>
                                setAction_Detail(event.target.value)
                              }
                            />
                            <p className="text-danger">
                              बचे हुए अक्षर : {1000 - action_detail.length}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            style={{
                              borderTop: "3px solid #3c8dbc",
                              padding: "20px",
                              background: "white",
                              boxShadow: "1px 1px 2px 1px grey",
                              borderDownRadius: "2px",
                              marginTop: "25px",
                            }}
                          >
                            <label>
                              क्या आप फ़ाइल अपलोड करना चाहते हैं:{" "}
                              <input
                                type="radio"
                                value="Y"
                                checked={UploadFile === "Y"}
                                onChange={(event) =>
                                  setUploadFile(event.target.value)
                                }
                              />
                              हाँ
                            </label>
                            &nbsp;
                            <label>
                              <input
                                type="radio"
                                value="N"
                                checked={UploadFile === "N"}
                                onChange={(event) =>
                                  setUploadFile(event.target.value)
                                }
                              />
                              नहीं
                            </label>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            style={{
                              borderTop: "3px solid #3c8dbc",
                              padding: "20px",
                              background: "white",
                              boxShadow: "1px 1px 2px 1px grey",
                              borderDownRadius: "2px",
                              marginTop: "25px",
                            }}
                          >
                            <label>
                              पत्र की स्थिति :{" "}
                              <input
                                type="radio"
                                value="P"
                                checked={statusLetter === "P"}
                                onChange={(event) =>
                                  setStatusLetter(event.target.value)
                                }
                              />
                              लंबित(Incomplete)
                            </label>
                            &nbsp;
                            <label>
                              <input
                                type="radio"
                                value="C"
                                checked={statusLetter === "C"}
                                onChange={(event) =>
                                  setStatusLetter(event.target.value)
                                }
                              />
                              निराकृत(Complete)
                            </label>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            style={{
                              borderTop: "3px solid #3c8dbc",
                              padding: "20px",
                              background: "white",
                              boxShadow: "1px 1px 2px 1px grey",
                              borderDownRadius: "2px",
                              marginTop: "25px",
                            }}
                          >
                            <label>
                              पत्र प्रेषित करें :{" "}
                              <input
                                type="radio"
                                value="Y"
                                checked={forwordLetter === "Y"}
                                onChange={(event) =>
                                  setForwordLetter(event.target.value)
                                }
                              />
                              हाँ
                            </label>
                            &nbsp;
                            <label>
                              <input
                                type="radio"
                                value="N"
                                checked={forwordLetter === "N"}
                                onChange={(event) =>
                                  setForwordLetter(event.target.value)
                                }
                              />
                              नहीं
                            </label>
                          </Col>
                        </Row>
                        <div>
                          <div
                            style={{
                              borderTop: "3px solid #3c8dbc",
                              padding: "20px",
                              background: "white",
                              boxShadow: "1px 1px 2px 1px grey",
                              borderDownRadius: "2px",
                              marginTop:'25px'
                            }}
                          >
                            <div>
                              <h4 className="text-center mt-2 mb-3">
                                <b>पत्र भेजें (शासकीय) </b>
                              </h4>
                            </div>
                            <Row>
                              <Col>
                                <div className="form-group">
                                  <Form.Label for="State">
                                    मुख्य विभाग{" "}
                                  </Form.Label>
                                  <Form.Select
                                    class="form-control"
                                    value={selectedBasedepartment}
                                    onChange={(event) =>
                                      setSelectedBasedepartment(
                                        event.target.value
                                      )
                                    }
                                  >
                                    <option>Select a department </option>
                                    {basedepartment.map((basedept) => (
                                      <option
                                        key={basedept.value}
                                        value={basedept.value}
                                      >
                                        {basedept.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
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
                                    <option>Select a Office level</option>
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
                            </Row>
                            <Row>
                              <Col>
                                <div className="form-group">
                                  <Form.Label>कार्यालय श्रेणी : </Form.Label>
                                  <Form.Select
                                    class="form-control"
                                    value={selectedOfficecategory}
                                    onChange={(event) =>
                                      setSelectedOfficecategory(
                                        event.target.value
                                      )
                                    }
                                  >
                                    <option value="">
                                      Select a Office category{" "}
                                    </option>
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
                              <Col>
                                <div className="form-group">
                                  <Form.Label for="District">जिला </Form.Label>
                                  <Form.Select
                                    class="form-control"
                                    value={selectedDistrict}
                                    onChange={(event) => {
                                      setSelectedDistrict(event.target.value);
                                    }}
                                  >
                                    <option value="">Select a district</option>
                                    {district.map((district) => (
                                      <option
                                        key={district.value}
                                        value={district.value}
                                      >
                                        {district.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="form-group">
                                  <Form.Label for="office ">
                                    कार्यालय :
                                  </Form.Label>
                                  <Form.Select
                                    class="form-control custom-select browser-default"
                                    value={selectedOffice}
                                    onChange={(event) => {
                                      setSelectedOffice(event.target.value);
                                    }}
                                  >
                                    <option value="">Select a office </option>
                                    {office.map((ofc) => (
                                      <option
                                        key={ofc.officecode}
                                        value={ofc.officecode}
                                      >
                                        {ofc.officename}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col>
                                <div className="form-group">
                                  <Form.Label for="section">
                                    अनुभाग :{" "}
                                  </Form.Label>
                                  <Form.Select
                                    class="form-control custom-select browser-default"
                                    value={selectedSection}
                                    onChange={(event) => {
                                      setSelectedSection(event.target.value);
                                    }}
                                  >
                                    <option value="">Select a section </option>
                                    {section.map((sec) => (
                                      <option
                                        key={sec.section_code}
                                        value={sec.section_code}
                                      >
                                        {sec.section_name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <div className="form-group">
                                  <Form.Label for="employeeCategoryPost">
                                    कर्मचारी श्रेणी पोस्ट :
                                  </Form.Label>
                                  <Form.Select
                                    class="form-control custom-select browser-default"
                                    value={selectedEmployeeCatPost}
                                    onChange={(event) => {
                                      setSelectedEmployeeCatPost(
                                        event.target.value
                                      );
                                    }}
                                  >
                                    <option>Select a post </option>
                                    {EmployeeCatPost.map((ecp) => (
                                      <option
                                        key={ecp.employee_id}
                                        value={ecp.employee_id}
                                      >
                                        {ecp.employee_name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <br />
                        <Button type="submit">Submit</Button>
                      </Col>
                    </Row>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Action_PendingLettersByDepartment;
