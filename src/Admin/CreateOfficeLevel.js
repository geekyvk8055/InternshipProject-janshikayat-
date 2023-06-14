import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CreateOfficeLevel = () => {
  const [id, setId] = useState([]);
  const [basedepartment, setBasedepartment] = useState([]);
  const [selectedBasedepartment, setSelectedBasedepartment] = useState([]);
  const [officelevel, setOfficelevel] = useState([]);
  const [officelevelToEdit, setOfficelevelToEdit] = useState("");
const [levelId,setlevelId] =useState("")
React.useEffect(()=>{
fetchbasedept()  
},[])  
  


  const fetchbasedept = async () => {
    try{
    const response = await axios.get(
      `https://localhost:44333/api/Master/Getbasedepartment`
    );
    setBasedepartment(response.data);
  }
   catch (err)
   {

   }
  };


    const fetchOfficeLevel = async (selectedBasedepartment) => {
      try{
      const response = await axios.get(
        `https://localhost:44333/api/Master/GetofficeLevel/${selectedBasedepartment}`
      );
      setOfficelevel(response.data.table);
    }
     catch (err)
     {

     }
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
         country_code:"91",
         state_code:"22",
         basedept_code: selectedBasedepartment,
         officelevel_name: officelevelToEdit,
         officelevel_type:"01"

        }
      );

      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };

  const handleEditButton=(item,levelId)=>{
    setOfficelevelToEdit(item)
    setlevelId(levelId)
  }

  const handleEditOfceLvl =()=>{
    const data ={
      basedept_code:selectedBasedepartment,
      officelevelId:levelId,
      officelevelToEdit:officelevelToEdit
    }
    console.log(data)
  }

  return (
    <>
      <Container fluid>
        <Row className="m-3">
          <Col md={12}>
            <Row>
              <Col md={3}>
                <h3 className="text-center" style={{background:"red", alignItems:'center', justifyContent:'center', borderRadius:'5px'}}>Admin Menu</h3>
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
                <form  >
                <div>
                  <h5>Create Office Level</h5>
                 

                  <div className="form-group">
                    <label for="Country">Base Department : </label>
                    <select
                    // onChange={handleDropdownChange}
                      class="form-control custom-select browser-default"
                      value={selectedBasedepartment}
                      onChange=   {(event) =>{
                        setSelectedBasedepartment(event.target.value);
                        fetchOfficeLevel(event.target.value)
                      }
                      }
                     
                    >
                      <option value="">Select a department</option>
                      {basedepartment.map((i) => (
                        <option key={i.value} value={i.value}>
                        {i.value} {i.name} 
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label for="State">Office Level : </label>
                  <input
                    class="form-control custom-select browser-default"
                    value={officelevelToEdit}
                    onChange={(event) =>
                      // setOfficelevel(event.target.value)
                      setOfficelevelToEdit(event.target.value)
                    }
                   
                   />
                   
                    
                </div>
                <div>
                  <Button onClick={handleSubmit}> submit</Button>
                  &nbsp;
                  <a href="#">Cancel</a>
                </div>
                </form>


                {id && (
                  <Table striped bordered hover>
                    <thead>
                          <tr>
                            <th>
                              Sn.
                            </th>
                            <th>Officelevel Name</th>
                            <th>Action</th>
                          </tr>
                    </thead>
                    <tbody>
                      {officelevel?.map((item, index) => (
                        <tr key = {index}>
                          <td>{index + 1}</td>
                          <td>{item.officeLevelName}</td>
                          <td> <Button onClick={()=>handleEditButton(item.officeLevelName,index)}>Edit</Button></td>
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
