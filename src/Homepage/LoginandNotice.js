import React from "react";

import { Row, Col, Container, ListGroup, Card, Toast } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { usehistory } from "react-router-dom";
import axios from "axios";
import bcrypt from 'bcryptjs';
import CryptoJS from "crypto-js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DataTable from "react-data-table-component";
import {
  Alert,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { withRouter } from "react-router-dom"
//import { type } from "@testing-library/user-event/dist/type";
import Swal from "sweetalert2";
const Reports = () => {
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [userData, setuserData] = useState('');
  const [userDataOne, setuserDataOne] = useState('');
  const [userDataTwo, setUserDataTwo] = useState('');
  const navigate = useNavigate();
  const [visitors, setVisitors] = useState(0);





  const handleSubmit = async (e) => {
    console.log("any");
    e.preventDefault();
    
  
    try {
      const [userResponse, employeeResponse, complaintResponse] = await axios.all([
        axios.get(`https://localhost:44333/api/UserLogin/GetUser/${username}`),
        axios.get(`https://localhost:44333/api/Master/getemployee/${username}`),
        axios.get(`https://localhost:44333/api/ComplaintDetailTbl/gettotalcomplaintstatusbyid/${username}`)
      ]);
  
      const userData = userResponse?.data?.table?.[0];
      const userDataOne = employeeResponse?.data?.table?.[0];
      const userDataTwo = complaintResponse?.data?.table?.[0];
  
      if (userData?.password === password) {
        // Compare entered password with the stored hashed password
        //const passwordMatch = await bcrypt.compare(password, userData.password);
        //if (passwordMatch) {
          Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            text: 'You will be redirected to your dashboard.',
            showConfirmButton: true,
            timer: 3000
          });
          window.scrollTo(0, 0);
          console.log('Login successful!');
          // Redirect to the dashboard page
          navigate('/user/dashboard', { state: { userData } });
        
        
      } else if (userDataOne?.employee_mob === password) {
        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          text: 'You will be redirected to your dashboard.',
          showConfirmButton: true,
          timer: 3000
        });
        window.scrollTo(0, 0);
        console.log('Login successful!');
        navigate('/cmHouse', { state: { userDataOne } });
      } else if (username === 'admin' && password === 'password') {
        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          text: 'You will be redirected to your dashboard.',
          showConfirmButton: true,
          timer: 3000
        });
        window.scrollTo(0, 0);
        console.log('Login successful!');
        navigate('/getLogin');
      } else if (userDataTwo?.pwd === password && userDataTwo?.userid === username) {
        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          text: 'You will be redirected to your dashboard.',
          showConfirmButton: true,
          timer: 3000
        });
        window.scrollTo(0, 0);
        console.log('Login successful!');
        navigate('/PendingLetter', { state: { userDataTwo } });
      } else {
        showLoginError();
      }
    } catch (error) {
      console.log('Login failed:', error);
    }
  };
  
  const showLoginError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'Please Enter Correct Username or Password',
      showConfirmButton: false,
      timer: 2000
    });
  };




  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     //: username,
  //     //password: password,
  //   };
  //   axios.get('https://localhost:44333/api/Master/GetUserid', { params: data })
  //     .then((response) => {
  //       console.log(response);
  //       if (response.value) {
  //         console.log("successfully login")

  //         // Redirect to dashboard or home page
  //       } else {
  //         console.log("failed");

  //         // Display error message
  //       }

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


  const refreshString = () => {
    setText("");
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const matchCaptcha = (e) => {
    e.preventDefault();
    if (text === captcha) {
      setValid(false);
      setSuccess(true);
    } else {
      setValid(true);
      setSuccess(false);
    }
  };

console.log(password);
console.log(userData);
console.log(userData);
console.log(userDataOne);
console.log(userDataTwo);


const incrementVisitorCount = () => {
  setVisitors(visitors + 1);
}
  return (
    <>
      <Container fluid style={{ background: "#E2E4F1", marginTop: "25px" }}>
        <div className="container">
          <Row>
            <Col
              md={12}
              sm={12}
              style={{ marginTop: "6px", marginBottom: "6px" }}
            >
              <Row>
                <Col
                  md={5}
                  sm={12}
                  style={{
                    height: "90vh",
                    background: "white",
                    borderRadius: "4px",
                    boxShadow: "2px 3px 17px 3px grey",
                    textAlign: "center",
                    overflow: "hidden",
                  }}
                >
                  <Row>
                    <h1
                      style={{
                        height: "10vh",
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "bold",
                        background: " #FF5733",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      <div style={{ marginTop: "10px" }}>
                        Notice & Instructions
                      </div>
                    </h1>
                    <Col md={12}>
                      <marquee direction="up">
                        <ul>
                          <li>
                            Online scholarship application for SC, ST & OBC
                            students studying in outside Chhattisgarh state will
                            be invited from 01/02/2023 to 10/02/2023 for
                            academic year 2022-23 scholarship.
                          </li>
                          <hr></hr>
                          <li>
                            {" "}
                            2022-23 scholarship. Online scholarship application
                            for SC, ST & OBC students studying in Chhattisgarh
                            State will be invited from 03/01/2023 to 30/01/2023
                            for those students who have not applied yet for
                            academic year 2022-23 scholarship.
                          </li>
                          <hr></hr>
                          <li>
                            To seed bank account with Aadhaar number for
                            receiving scholarship in the same, please visit your
                            bank branch and submit a "bank consent form for
                            receiving DBT". You can check which bank is seeded
                            to your Aadhaar number on NPCI mapper here
                            https://resident.uidai.gov.in/bank-mapper or through
                            Aadhaar-enabled micro-ATM machine of any of these
                            banks
                          </li>
                        </ul>
                      </marquee>
                    </Col>
                  </Row>
                </Col>

                <Col md={1} sm={12}></Col>

                <Col
                  className="card-login"
                  md={6}
                  sm={12}
                  style={{ borderRadius: "5px" }}
                >
                  <Row>
                    <h3
                      className="login-here"
                      style={{
                        textAlign: "center",
                        fontWeight: "bolder",
                        height: "10vh",
                        background: 'red'
                      }}
                    >

                      <div style={{ marginTop: "9px" }}>Login & Register</div>
                    </h3>
                    <Col md={12}>
                      <div style={{}}>
                        <div class="row content">
                          <div class="col-md-6">

                            <h3 class="signin-text mb-3"> Sign In</h3>

                            <form onSubmit={handleSubmit}>
                              <div class="form-group">
                                <label for="UserId">UserId</label>
                                <input
                                  name="username"
                                  type="text"
                                  class="form-control"
                                  value={username}

                                  onChange={(e) => setUsername(e.target.value)}
                                />
                              </div>
                              <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                  name="password"
                                  type="password"
                                  class="form-control"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />

                                {/* <div className="card1">
                                  <CardContent>
                                    <CardActions>
                                      <div className="h4">{captcha}</div>
                                      <Button
                                        startIcon={<RefreshIcon />}
                                        onClick={() => refreshString()}
                                      ></Button>
                                    </CardActions>

                                    <TextField
                                      label="Enter Captcha"
                                      focused
                                      value={text}
                                      onChange={(e) => setText(e.target.value)}
                                      error={valid}
                                      helperText={valid && "Invalid Captcha"}
                                    />
                                    <br></br> */}

                                <Button
                                  
                                  variant="contained"
                                  color="success"
                                  type="submit"
                                  sx={{ marginTop: "20px" }}
                                >

                                  LOGIN
                                  {/* <NavLink to="/getLogin">login</NavLink> */}
                                </Button>
                                <ToastContainer />
                                {/* </CardContent> */}
                                {/* </div> */}
                              </div>
                            </form>
                          </div>
                          <br />
                          <p>
                            Dont have an account{" "}
                            <NavLink to="/registration">Register!</NavLink>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>



          <div className="counter" onClick={incrementVisitorCount}>
      <p className="count">{visitors}</p>
      <p className="label">Visitors</p>
    </div>
        </div>
      </Container>
    </>
  );
};

export default Reports;
