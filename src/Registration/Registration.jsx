import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { BucketFill } from "react-bootstrap-icons";
import axios from "axios";
import bcrypt from 'bcryptjs'
import { set } from "react-hook-form";
import CryptoJS from "crypto-js";

const Registration = () => {
  const [state, setState] = useState([]);
  // const [stname, setStname] = useState(22);
  const [selectedState, setSelectedState] = useState([]);
  const [distrct, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [applicantId, setApplicantId] = useState([]);
  const [applicantName, setApplicantName] = useState([]);
  const [applicantAdd, setApplicantAdd] = useState([]);
  const [applicantMob, setApplicantMob] = useState([]);
  const [applicantCat, setApplicantCat] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState([]);
  const [applicantPassword, setApplicantPassword] = useState([]);
  const [applicantEmail, setApplicantEmail] = useState([]);

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
    const fetchapplicant = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/UserLogin/Getapplicant"
      );
      setApplicantCat(response.data.table);
    };
    fetchapplicant();
  }, []);


const currentdate = new Date();
  const handleSubmit = async (event) => {
   
    event.preventDefault();
   // const hashedPassword = await bcrypt.hash(applicantPassword, 10);

    try {
      //const encryptedPassword = CryptoJS.AES.encrypt(applicantPassword, '7654321').toString();

      const response = await axios.post(
        "https://localhost:44333/api/Master/registration",
        {
          
      applicant_name: applicantName,
      applicant_add: applicantAdd,
      applicant_dist: selectedDistrict,
      applicant_distname: "",
      applicant_state: selectedState,
      applicant_mobile: applicantMob,
      registration_date: currentdate,
      application_cat: selectedApplicant,
      client_ip: "",
      verify: "y",
      password: applicantPassword,
      user_id: applicantId,
      email_id:applicantEmail
          // applicant_name: applicantName,
          // applicant_add: applicantAdd,
          // applicant_dist: selectedDistrict,
          // applicant_distname: "",
          // applicant_state: selectedState,
          // applicant_mobile: applicantMob,
          // registration_date: "2020-01-02",
          // application_cat: selectedApplicant,
          // client_ip: "",
          // verify: "Y",
          // password: applicantPassword,
          // user_id: applicantId,
          // email_id: applicantEmail,
        }
      );
      // console.log({datafromapi});
      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };

  return (
    <>
      <Container
        style={{
          background: "whitesmoke",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "50px",

          borderRadius: "10px",
          border: "1px solid black",
          boxShadow: "1px 1px 10px 2px grey",
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
                      background:'#017e7e',
                      //backgroundImage:"url('https://i.pinimg.com/originals/5e/76/0c/5e760cba5e9ca01ed6249f1ea49cb104.png')",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      marginBottom: "50px",
                    }}
                  >
                    <h4 className="mt-3" style={{ fontWeight: "bolder",color:'white' }}>
                      
                     ऑनलाइन जनशिकायत रजिस्ट्रेशन फॉर्म
                     
                    </h4>
                  </Col>
                </Row>
                <h6 style={{color:'red', textAlign:'center'}}>
                * चिन्ह वाले सभी भागो को भरना अनिवार्य है |
                </h6>
                <Row>
                  <Col sm={7}>
                    <Form.Group className="require">
                      <Form.Label>आवेदक का नाम<span style={{color:'red'}}>*</span> : </Form.Label>
                      <Form.Control
                        value={applicantName}
                        onChange={(event) =>
                          setApplicantName(event.target.value)
                        }
                        placeholder="Enter your name."
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group>
                      <Form.Label for="email">Email<span style={{color:'red'}}>*</span></Form.Label>
                      <Form.Control
                        value={applicantEmail}
                        onChange={(event) =>
                          setApplicantEmail(event.target.value)
                        }
                        type="email"
                        class="form-control"
                        name="email"
                        
                        placeholder="Enter your email."
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>
                    <Form.Label for="cod">आवेदक श्रेणी  </Form.Label>
                    <Form.Select
                      class="form-control browser-default custom-select"
                      value={selectedApplicant}
                      onChange={(event) => setSelectedApplicant(event.target.value)}
                    >
                      <option  selected>
                        आवेदक श्रेणी चुनें 
                      </option>
                     
                      {applicantCat.map((ac) => (
                      <option key={ac.cat_id} value={ac.cat_id}>
                        {ac.cat_name}
                      </option>
                    ))}
                      
                    </Form.Select>
                  </Col>
                  <Col md={6}>
                    <Form.Label for="address-1">पता<span style={{color:'red'}}>*</span>  </Form.Label>
                    <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                      value={applicantAdd}
                      onChange={(event) => setApplicantAdd(event.target.value)}
                      type="address"
                      class="form-control"
                      name="Locality"
                      placeholder="Locality/House/Street no."
                      required
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>

                  <Form.Label for="State">जिला <span style={{color:'red'}}>*</span> :  </Form.Label>
                  <Form.Select
                    class="form-control custom-select browser-default"
                    value={selectedDistrict}
                    onChange={(event) => setSelectedDistrict(event.target.value)}
                  >
                    <option selected="selected">Select District</option>
                    {distrct.map((di) => (
                      <option key={di.value} value={di.value}>
                        {di.name}
                      </option>
                    ))}
                  </Form.Select>
                </Col>

                <Col md={6}>
                  <Form.Label for="State">राज्य </Form.Label>
                  <Form.Select
                    class="form-control custom-select browser-default"
                    value={selectedState}
                    onChange={(event) => setSelectedState(event.target.value)}
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
                  <Col md ={6}>
                  <Form.Label for="tel">Phone <span style={{color:'red'}}>*</span> :</Form.Label>
                  <Form.Control
                    value={applicantMob}
                    onChange={(event) => setApplicantMob(event.target.value)}
                    type="tel"
                    name="phone"
                    class="form-control"
                    id="tel"
                    placeholder="Enter Your Contact Number."
                    required
                  />
                  </Col>

                  
                  <Col md={6}>

                  <Form.Label for="tel">यूजर आइडी <span style={{color:'red'}}>*</span> : </Form.Label>
                  <Form.Control
                    value={applicantId}
                    onChange={(event) => setApplicantId(event.target.value)}
                    type="tel"
                    name="phone"
                    class="form-control"
                    
                    placeholder="Create Your User ID."
                    required
                  />
                
                  </Col>
                </Row>
                 
                <br />
               <Row>
                <Col md={6}>
                  <label for="pass">Password <span style={{color:'red'}}>*</span> :</label>
                  <input
                    value={applicantPassword}
                    onChange={(event) =>
                      setApplicantPassword(event.target.value)
                    }
                    type="Password"
                    name="password"
                    class="form-control"
                    id="pass"
                    placeholder="Enter your password."
                    required
                  />
                  <span style={{color:'red'}}>Note: Password Should Be Minimum 8 Characters</span>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label htmlFor="inputPassword5">
                      Confirm Password <span style={{color:'red'}}>*</span> :
                    </Form.Label>
                    <Form.Control
                      // value={ver}
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Re-enter your password."
                      required
                    />
                  </Form.Group>
                </Col>
                  </Row>
                  <br />
                <Col md={12} class=" text-center">
                  <Button
                    
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                </Col>
                <br />
              </Col>
            </Row>
          </Form.Group>
        </Form>

        {/* 
        <section>
    <div class="container">
      
      <Form>
      
      <Row className="justify-content-center">
        <Col class=" md-8 lg-8 xl-6">
          <Row>
            <Col class="text-center">
              <h1>Register</h1> 
              </Col>
              </Row>
          <Row >
            <Col>
            <Form.Group>
            <Form.Label>Name</Form.Label>
              <Form.Control type="text"  placeholder="Enter Name" />
              
              </Form.Group>
            </Col>
          </Row>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input type="email" class="form-control" placeholder="Email" />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input type="password" class="form-control" placeholder="Password" />
            </div>
            <div class="col">
              <input type="password" class="form-control" placeholder="Confirm Password" />
            </div>
          </div>
          <div class="row justify-content-start mt-4">
            <div class="col">
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" />
                  I Read and Accept <a href="https://www.froala.com">Terms and Conditions</a>
                </label>
              </div>

              <button class="btn btn-primary mt-4">Submit</button>
            </div>
          </div>
        </Col>
      </Row>
      </Form>
    </div>
   
  </section> */}

        {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
      </Container>
    </>
  );
};

export default Registration;
