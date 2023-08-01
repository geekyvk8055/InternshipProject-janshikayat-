import { useEffect, useState } from "react";
import React from "react";

import { Container, Row, Col, Form, Table,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowLetter = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const test = "hello";
  const navigate = useNavigate();

  // const onrowClick = () => {
  //   navigate('/cmHouse/ShowLetter',{state:test})
  // }

  const handleRowData = (rowData) => {
    navigate("/cmHouse/ShowLetter", {
      state: { rowDatas: rowData, options: selectedOption },
    });
    console.log("option:", selectedOption, rowData);
    // console.log('rowdata', complaintID);
  };

  useEffect(() => {
    // Fetch data based on the selected radio button
    if (selectedOption === "P") {
      axios
        .get("https://localhost:44333/api/userApplication/GetUserApplicaton")
        .then((response) => {
          setTableData(response.data.table);
        })
        .catch((error) => {
          console.error("Error fetching pending data:", error);
        });
    } else if (selectedOption === "A") {
      axios
        .get(
          "https://localhost:44333/api/userApplication/GetUseracceptapplicaton"
        )
        .then((response) => {
          setTableData(response.data.table);
        })
        .catch((error) => {
          console.error("Error fetching approved data:", error);
        });
    }
  }, [selectedOption]);
  console.log(selectedOption);

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
                <div style={{}}>
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
                    <NavLink
                      style={{ textDecoration: "none", fontSize: "20px" }}
                    >
                      पत्र देखें{" "}
                    </NavLink>
                  </a>
                  <hr />
                  <br />
                </div>
              </Col>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <Col md={9}>
                <form>
                <div style={{
                      marginTop:'25px',
                      marginBottom:'25px',
                      borderTop: "3px solid #3c8dbc",
                      padding: "28px",
                      background: "white",
                      boxShadow: "1px 1px 2px 1px grey",
                      borderDownRadius: "2px",
                    }}>
                  <Row
                    
                    
                  >
                  <Col md={2}>
                    <label >
                      टोकन नंबर :
                    </label>
                    </Col>
                    <Col md={6}>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="enter token number"
                      />
                   </Col>
                   <Col md={2}>
                    <Button type="submit">
                      Submit
                    </Button>
                    </Col>
                  </Row>
                  </div>
        <div  style={{
                          borderTop: "3px solid #3c8dbc",
                          padding: "28px",
                          background: "white",
                          boxShadow: "1px 1px 2px 1px grey",
                          borderDownRadius: "2px",
                          marginBottom:'25px'
                        }}>
                  <div
                    className="text-center"
                    style={{ fontSize: "30px", fontWeight: "bold",background:"#3c8dbc",padding:'10px',borderRadius:'6px',color:'white' }}
                  >
                    ऑनलईन आवेदनों की स्थिति
                  </div>
                  <br />
                  <div>
                    <input
                      type="radio"
                      name="pending"
                      value="P"
                      checked={selectedOption === "P"}
                      onChange={(event) =>
                        setSelectedOption(event.target.value)
                      }
                    />{" "}
                    <label>विचाराधीन(प्रेषण हेतु )</label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="approved"
                      value="A"
                      checked={selectedOption === "A"}
                      onChange={(event) =>
                        setSelectedOption(event.target.value)
                      }
                    />{" "}
                    <label>स्वीकृत (प्रेषण हेतु)</label>
                  </div>
<br/>
                  <Table>
                    <thead>
                      <tr>
                        <th>S. NO.</th>
                        <th>आवेदन क्रमांक </th>
                        <th>नाम </th>
                        <th>पता </th>
                        <th>विषय </th>
                        <th>आवेदन दिनांक </th>
                        <th>राज्य </th>
                        <th>जिला </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData?.map((item, index) => (
                        <tr key={index}>
                          <td> {index + 1}</td>
                          <td onClick={() => handleRowData(item?.complaintID)}>
                            <NavLink> {item?.complaintID}</NavLink>
                          </td>
                          <td>{item.name} </td>
                          <td> {item.address}</td>
                          <td>{item.subject}</td>
                          <td>{item.entrydate}</td>
                          <td>{item.stateName}</td>
                          <td>{item.district_Name} </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
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

export default ShowLetter;
