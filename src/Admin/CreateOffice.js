import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState} from "react";
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
  const [officefax, setOfficefax] = useState([]);
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
          "https://localhost:44333/api/Master/GetDistrict");
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
    try{
      const response = await axios.get( 
        `https://localhost:44333/api/Master/GetofficeByid/${selectedDistrict}/${selectedBasedepartment}`

      );
      setDatatable(response.data.table);
    }
    catch(err){

    }
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

  const handleEditButton = (item) =>{
    setDatatableToedit(item)

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
                    <NavLink to="/createOfficeLevel" style={{textDecoration:"none"}}>
                      Create Office Level
                    </NavLink>
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
                <form >
                  <div>
                    <h5 className="text-center">Create Office</h5>
                    <div className="form-group">
                      <label for="Country">देश </label>
                      <select
                        class="form-control custom-select browser-default"
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
                      </select>
                    </div>

                    <div className="form-group">
                      <label for="Country">राज्य </label>
                      <select
                        class="form-control custom-select browser-default"
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
                      </select>
                    </div>

                    <div className="form-group">
                      <label for="Country">जिला </label>
                      <select
                        class="form-control custom-select browser-default"
                        value={selectedDistrict}
                        onChange={(event) =>{
                          setSelectedDistrict(event.target.value);
                          fetchoffice(event.target.value,selectedBasedepartment)
                        }
                        }
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
                    <label for="State">मुख्य विभाग </label>
                    <select
                      class="form-control custom-select browser-default"
                      value={selectedBasedepartment}
                      onChange={(event) =>{
                        setSelectedBasedepartment(event.target.value);
                        fetchoffice(selectedDistrict,event.target.value)
                      }
                      }
                    >
                      <option value="">Select a department </option>
                      {basedepartment.map((basedept) => (
                        <option key={basedept.value} value={basedept.value}>
                          {basedept.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>ऑफिस लेवल : </label>
                    <select
                      class="form-control custom-select browser-default"
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
                    </select>
                  </div>

                  <div className="form-group">
                    <label>कार्यालय श्रेणी : </label>
                    <select
                      class="form-control custom-select browser-default"
                      value={selectedOfficecategory}
                      onChange={(event) =>
                        setSelectedOfficecategory(event.target.value)
                      }
                    >
                      <option value="">Select a Office category </option>
                      {officecategory.map((officecat) => (
                        <option key={officecat.value} value={officecat.value}>
                          {officecat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      कार्यालय :
                      <input
                        type="text"
                        class="form-control custom-select browser-default"
                        value={datatableToedit}
                        onChange={(event) => setDatatableToedit(event.target.value)}
                        
                      />
                    </label>
                   
                     
                  
                    <br />
                  </div>

                  <div className="form-group">
                    <label>कार्यालय का पता : </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={officeadd}
                      onChange={(event) => setOfficeadd(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>कार्यालय फोन नंबर : </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={officemobile}
                      onChange={(event) => setOfficemobile(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>कार्यालय (fax no. ) </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={officefax}
                      onChange={(event) => setOfficefax(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>कार्यालय (URL) </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={officeurl}
                      onChange={(event) => setOfficeurl(event.target.value)}
                    
                    />
                  </div>

                  <div className="form-group">
                    <label>EMAIL ID. </label>
                    <input
                      class="form-control custom-select browser-default"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div>
                    <Button onClick={handlesubmit}> submit</Button>
                    &nbsp;
                    <Button href="#" className="bg-danger">Cancel</Button>
                  </div>
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
                              <Button onClick={ () => handleEditButton(item.officeName, index)}>Edit</Button>
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
