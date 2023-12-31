import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BucketFill } from "react-bootstrap-icons";
import axios from "axios";
import { set } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import LoginandNotice from './Homepage/LoginandNotice'

const UserDashboard = (props) => {
  const location = useLocation();
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [distrct, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [applicantId, setApplicantId] = useState([]);
  const [applicantName, setApplicantName] = useState("");
  const [applicantAdd, setApplicantAdd] = useState("");
  const [applicantMob, setApplicantMob] = useState();
  const [applicantCat, setApplicantCat] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState([]);
  const [applicantPassword, setApplicantPassword] = useState([]);
  const [applicantEmail, setApplicantEmail] = useState([]);
  const [subject, setSubject] = useState([]);
  const [selfCategory, setSelfCategory] = useState('');
  const [pwd, setPwd] = useState();
  const [selectedUpload, setSelectedUpload] = useState();





  const handlenameChange = (e) => {
    setApplicantName(e.target.value)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Perform file upload logic
    console.log('Uploading file:', file);
  };

  // useEffect(() => {
  //   fetchinfo();
  // }, []);
  useEffect(() => {
    const fetchstates = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetState"
      );
      setState(response.data);

    };
    fetchstates();
  }, []);

  useEffect(() => {
    const fetchdistrict = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetDistrict"
      );
      setDistrict(response.data);
    };
    fetchdistrict();
  }, []);



  useEffect(() => {
    if (selfCategory === "1") {
      setPwd(location?.state?.userData?.password);

    } else {
      setPwd(null);
    }

  }, []
  );
  useEffect(() => {
    const fetchinfo = async () => {
      console.log(pwd)

      const response = await axios.get(`https://localhost:44333/api/Master/getuserpass/${pwd}`);
      if (selfCategory === "1") {
        setApplicantName(response?.data?.table?.[0]?.applicant_name);
        setApplicantMob(response?.data?.table?.[0]?.mobile_no);
        setApplicantAdd(response?.data?.table?.[0]?.applicant_address);
        setSelectedDistrict(response?.data?.table?.[0]?.applicant_district);
        setSelectedState(response?.data?.table?.[0]?.applicant_state);
      } else {
        setApplicantName("");
        setApplicantMob("");
        setApplicantAdd("");
      }
      console.log(pwd);
    };
  }, []);




  useEffect(() => {
    const fetchapplicant = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/getappcat"
      );
      setApplicantCat(response.data.table);
    };
    fetchapplicant();
  }, []);

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/userApplication/userapplication",
        {
          applicant_dist_id: selectedDistrict,
          year: "2020",
          name: applicantName,
          address: applicantAdd,
          subject: subject,
          date_jandarshan: "2020-10-10",
          category: selectedApplicant,
          updated: "Y",
          country_code: "91",
          state_code: selectedState,
          file_uploaded: selectedUpload,
          client_ip: "",
          user_id: "",
          accepted: "A",
          new_application_district: "",
          new_forworded_district: "",
          applicant_state_id: selectedState,
          app_cat_id: selectedApplicant,
          entry_date: "2020-10-10",
          applicant_dist_name: "",
          reason: "",
          mode: "",
          applied_for: selfCategory,
          mobile_no: applicantMob
        }

      );
      alert("Submitted Successfully");
      toast.success('POST request successful!', {
        position: toast.POSITION.TOP_CENTER
      });
      // console.log({datafromapi});
      console.log(response.data); // do something with the response data
    } catch (error) {
      alert("Please Fill All Required Fields");
      toast.error('POST request failed!', {
        position: toast.POSITION.TOP_CENTER
      });
      console.log(error); // handle error
    }
  };
  console.log(selfCategory);
  console.log(location);
  return (
    <>
      <Container fluid style={{ backgroundImage: 'url("/Images/image_admin_bg.jpg")' }}>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={3} style={{  borderTopColor: '#f39c12',background: '#eaf9ff', border: "1px solid grey",
                  boxShadow: "1px 1px 5px 3px grey" }}>
                <div style={{
                  
                }}>
                  <div style={{
                    marginTop: '25px',
                    background: "#017e7e",
                    textAlign: 'center',
                    borderTopLeftRadius: "5px",
                    //borderTopRightRadius:'5px',

                    height: '6vh',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: 'white'

                  }}>




                    ऑनलईन जनशिकायत

                  </div>
                  <hr />
                  <a>
                    <NavLink to="/user/dashboard" style={{ textDecoration: "none", fontSize:'17px' }}>
                      <img style={{ height: '4vh', width: '4vw' }} src="/Images/icons8-arrow-48.png" />
                      शिकायत पंजीयन
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <img style={{ height: '4vh', width: '4vw' }} src="/Images/icons8-arrow-48.png" />
                    <NavLink
                      to="/user/applicant_detail"
                      style={{ textDecoration: "none", fontSize:'17px' }}
                    >
                      आवेदन विवरण
                    </NavLink>
                  </a>
                  <hr />
                  <br />
                </div>


              </Col>
              &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              {/* <Col md={1}></Col>*/}
              <Col
                md={8}
                style={{
                  background: "whitesmoke",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "25px",
                  marginBottom: "25px",
                  borderTopRightRadius: "5px",
                  borderTopLeftRadius:'5px',
                  border: "1px solid grey",
                  boxShadow: "1px 1px 5px 3px grey",
                }}
              >
                <Form>
                  <Form.Group>
                    <Row>
                      <Col md={12}>
                        <Row>
                          <Col
                            md={12}
                            style={{
                              textAlign: "center",
                              background: '#017e7e',

                              // backgroundImage:
                              //   "url('https://i.pinimg.com/originals/5e/76/0c/5e760cba5e9ca01ed6249f1ea49cb104.png')",
                              borderTopLeftRadius: "5px",
                              borderTopRightRadius: "5px",
                              marginBottom: "50px",
                            }}
                          >
                            <h4
                              className="mt-3"
                              style={{ fontWeight: "bolder", color: 'white' }}
                            >

                              आवेदक / आवेदन  का वर्णन

                            </h4>
                          </Col>
                        </Row>
                        <h6 style={{ color: "red", textAlign: "center" }}>
                          * चिन्ह वाले सभी भागो को भरना अनिवार्य है |
                        </h6>


                        आवेदन दर्ज करें :   <input
                          type="radio"
                          name="category"
                          value="1"
                          checked={selfCategory === "1"}
                          onChange={(event) => setSelfCategory(event.target.value)}

                        /> स्वयं के लिए

                        &nbsp;&nbsp;

                        <input
                          type="radio"
                          name="category"
                          value="2"
                          checked={selfCategory === "2"}
                          onChange={(event) => setSelfCategory(event.target.value)}

                        /> अन्य  के लिए

                        <br />
                        <br />

                        <Row>
                          <Col sm={7}>

                            <Form.Group className="require">
                              <Form.Label>
                                आवेदक का नाम
                                <span style={{ color: "red" }}>*</span> :
                              </Form.Label>
                              <Form.Control
                                defaultValue={applicantName}
                                onChange={handlenameChange}
                                placeholder="Enter your name."
                                data-val-required="please enter name"
                              />
                            </Form.Group>
                          </Col>



                          <Col md={5}>
                            <Form.Group>
                              <Form.Label for="email">
                                आवेदक का मोबाईल नंबर <span style={{ color: "red" }}>*</span>
                              </Form.Label>
                              <Form.Control

                                type="number"
                                class="form-control"
                                name="mobile"
                                placeholder="Enter your mobile."
                                defaultValue={applicantMob}
                                onChange={(event) =>
                                  setApplicantMob(event.target.value)
                                }
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col md={6}>
                            <Form.Label for="address-1">
                              पता<span style={{ color: "red" }}>*</span>{" "}
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              aria-label="With textarea"
                              value={applicantAdd}
                              onChange={(event) =>
                                setApplicantAdd(event.target.value)
                              }
                              type="address"
                              class="form-control"
                              name="Locality"
                              placeholder="Locality/House/Street no."
                              required
                            />


                          </Col>
                          <Col md={6}>

                            <Form.Label for="State">राज्य </Form.Label>
                            <Form.Select
                              class="form-control custom-select browser-default"
                              value={selectedState}
                              onChange={(event) =>
                                setSelectedState(event.target.value)
                              }
                            >
                              <option selected="selected">select state</option>
                              {state.map((st) => (
                                <option key={st.value} value={st.value}>
                                  {st.name}
                                </option>
                              ))}
                            </Form.Select>

                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col md={6}>
                            <Form.Label for="State">जिला </Form.Label>
                            <Form.Select
                              class="form-control custom-select browser-default"
                              value={selectedDistrict}
                              onChange={(event) =>
                                setSelectedDistrict(event.target.value)
                              }
                            >
                              <option selected="selected">
                                Select District
                              </option>
                              {distrct.map((di) => (
                                <option key={di.value} value={di.value}>
                                  {di.name}
                                </option>
                              ))}
                            </Form.Select>



                          </Col>

                          <Col md={6}>



                            <Form.Label for="cod">
                              आवेदक श्रेणी
                              <span style={{ color: "red" }}>*</span>{" "}
                            </Form.Label>
                            <Form.Select
                              class="form-control browser-default custom-select"
                              value={selectedApplicant}
                              onChange={(event) =>
                                setSelectedApplicant(event.target.value)
                              }
                            >
                              <option selected>आवेदक श्रेणी चुनें</option>

                              {applicantCat.map((ac) => (
                                <option key={ac.categoryID} value={ac.categoryID}>
                                  {ac.categoryName}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Row>
                        <br />

                        <Row>
                          <Col md={12}>
                            <Form.Label for="address-1">
                              विषय
                              <span style={{ color: "red" }}>*</span>{" "}
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              aria-label="With textarea"
                              style={{ height: '200px' }}
                              type="address"
                              class="form-control"

                              value={subject}
                              onChange={(event) =>
                                setSubject(event.target.value)

                              }

                              required
                            />
                            <span style={{ color: 'maroon' }}>बचे हुए अक्षर :-{1800 - subject.length} </span>

                          </Col>
                        </Row>

                        <br />

                        क्या आप फाइल अपलोड करना चाहते हैं  :   <input
                          type="radio"
                          name="category"
                          value="N"
                          checked={selectedUpload === "N"}
                          onChange={(event) =>
                            setSelectedUpload(event.target.value)}
                        /> No

                        &nbsp;&nbsp;


                        <label>
                          <input
                            type="radio"
                            name="category"
                            value="Y"
                            checked={selectedUpload === "Y"}
                            onChange={(event) =>
                              setSelectedUpload(event.target.value)}

                          /> Yes
                        </label>
                        &nbsp;&nbsp;
                        {selectedUpload === 'Y' && (
                          <input type="file" onChange={handleFileUpload} />
                        )}
                        <br />
                        <br />

                        <Col md={12} class=" text-center">
                          <Button onClick={handleSubmit}>Register</Button>
                        </Col>
                        <br />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserDashboard;
