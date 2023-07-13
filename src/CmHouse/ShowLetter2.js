import { useEffect, useState } from "react";
import React from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ShowLetter2 = (props) => {
  const [tableData, setTableData] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [id, setId] = useState([]);
  const location = useLocation();
  const [showdata, setShowData] = useState(false);
  const [remark, setRemark] = useState([]);
  const [showError,setShowError] = useState(false);
  const [showReject,setShowReject]= useState(false);
  const [special, setSpecial] = useState('');
  const [typecode, setTypeCode] = useState('');
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [basedepartment, setBasedepartment] = useState([]);
  const [selectedBasedepartment, setSelectedBasedepartment] = useState([]);
  const [officelevel, setOfficelevel] = useState([]);
  const [selectedOfficelevel, setSelectedOfficelevel] = useState([]);
  const [officecategory, setOfficecategory] = useState([]);
  const [selectedOfficecategory, setSelectedOfficecategory] = useState([]);
  const [office, setOffice] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState([]);
  const [section, setSection] = useState([]);
  const [selectedSection, setSelectedSection] = useState([]);
  const [EmployeeCatPost, setEmployeeCatPost] = useState([]);
  const [selectedEmployeeCatPost, setSelectedEmployeeCatPost] = useState([]);
  const [ReasonOfRejection, setReasonOfRejection] = useState('');





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
        "https://localhost:44333/api/Master/GetDistrict");
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
        "https://localhost:44333/api/Master/GetNewOffice");
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
        "https://localhost:44333/api/section/Getsection");
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
        "https://localhost:44333/api/Master/getemplcatpost");
      setEmployeeCatPost(response.data.table);
      console.log(setSelectedEmployeeCatPost);
    }
  };
  fetchemployee_category();
}, [selectedSection]);

  useEffect(() => {
    // Fetch data based on the selected radio button

    axios
      .get(
        `https://localhost:44333/api/userApplication/Getcomplaintid/${location.state}`
      )
      .then((response) => {
        setTableData(response.data.table);
      })

      .catch((error) => {
        console.error("Error fetching pending data:", error);
      });
  }, []);

  console.log(tableData);
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
  
  useEffect(()=>{
    if (selectedOption === "A"){
     setShowError(true);
     setShowReject(false);
     
    }
    else if (selectedOption === "R"){
      setShowReject(true);
      setShowError(false);
    }
  },[selectedOption])
const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;


    const handleSubmit = async (event) => {

      event.preventDefault();
  
      try {
        const response = await axios.post(
          "https://localhost:44333/api/Master/complaintaction",
          {
                complaint_id: location.state,
                counter_id: "",
                district_id: selectedDistrict,
                year: 2023,
                name: tableData?.[0]?.name ,
                address: tableData?.[0]?.address,
                subject: tableData?.[0]?.subject,
                remarks: remark,
                officer_id: "",
                transferred: "Y",
                user_id: "",
                forworded_district: selectedDistrict,
                date_of_jandarshan: "2023-07-11T11:35:15.892Z",
                applicant_district: tableData?.[0]?.district_Name,
                no_use_department_code: selectedBasedepartment,
                other: "N",
                category: tableData?.[0]?.categoryName,
                updated: "Y",
                app_category_id: "",
                counter_location_code: "",
                applicant_mobile: "",
                country_code: "91",
                state_code: "22",
                file_uploaded: "Y",
                reffered_by: "",
                application_sub_category: "",
                applicant_category: "",
                registration_number: "",
                status: "N",
                reason_of_rejection: ReasonOfRejection,
                complaint_acceptance_date: "2023-07-11T11:35:15.892Z",
                complaint_complitance_date: "2023-07-11T11:35:15.892Z",
                base_dept_code: selectedBasedepartment,
                sub_dept_code: "",
                district_code:selectedDistrict,
                office_level: selectedOfficelevel,
                office_category: selectedOfficecategory,
                office_code: selectedOffice,
                section_code: selectedSection,
                designation_code: selectedEmployeeCatPost,
                entry_date: "2023-07-11T11:35:15.892Z",
                counter_location: "",
                counter_code: "",
                user_code: "",
                action_id: "",
                action_date: "2023-07-11T11:35:15.892Z",
                app_sub_category: "string",
                id: "string",
                action: "string",
                marked: "string",
                no_use_officer_id: "string",
                file_number: "N",
                action_type: "Null"
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
      <Container fluid>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={2} style={{ boxShadow: "6px 2px 15px 1px whitesmoke" }}>
                <div>
                  <h5 style={{ marginTop: "25px", background: "red" }}>
                    ऑनलईन जनशिकायत
                  </h5>
                </div>

                <div style={{ textAlign: "center" }}>
                  <NavLink>पत्र देखें </NavLink>
                </div>
              </Col>

              <Col md={10}>
                <form class="row  mt-5">
                  <div class="mb-3 ">
                  <Row>
                  <Col md={2}>
                    <label>
                      टोकन नंबर :
                    </label>
                    </Col>
                    
                  
                    <Col md={4}>
                      <input  
                        type="text"
                        //   value={location.state}
                        defaultValue={location.state}
                        class="form-control"
                        placeholder="enter token number"
                      />
                      </Col>
                      <Col md={2}>
                      <Button onClick={clickedFlag}>Submit</Button>
                      </Col>
                      </Row>
                    </div>
                 
                  {showdata && (
                    <div style={{border:'2px solid grey'}}>
                    <h3 style={{textAlign:'center'}} >पत्र का विवरण </h3 >
                    <div style={{marginLeft:'10vw'}}>
                    <Row>
                    <Col>
                      <h6><pre>      पत्र क्रमांक :    <b>{location.state}</b></pre></h6><br/>
                      </Col>
                      <Col>
                      <pre>         दिनांक :       {formattedDate}</pre><br/>
                      </Col>
                      </Row>
                      <Row>
                        <Col>
                          <pre>           श्रेणी :    {tableData?.[0]?.categoryName}</pre><br/>
                        </Col>
                        <Col>
                          <pre>  आवेदक का नाम :      {tableData?.[0]?.name}</pre><br/>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col>
                            <pre> आवेदक का पता :     {tableData?.[0]?.address}</pre><br/>
                        </Col>
                        
                        <Col>
                          <pre>आवेदक का दिनांक :      ibl</pre><br/>
                        </Col>
                      </Row>
                     
                      <Row>
                        <Col>
                          <pre>आवेदक का जिला :     {tableData?.[0]?.district_Name}</pre><br/>
                        </Col>
                        <Col>
                          <pre>          विषय  :      {tableData?.[0]?.subject}</pre><br/>
                        </Col>
                      </Row>
                      


                      <Row>
                        <Col>
                          <h6><pre>वर्तमान कार्यवाही विवरण  :</pre></h6><br/>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <pre>पत्र की स्थिति  :</pre><br/>
                        </Col>
                      </Row>
                      </div>
                      <div style={{textAlign:'center', border:'2px solid black', marginBottom:'2px'}}>Action Has Not Be Taken</div>
                    </div>
                  )}
                    <Row>
                    <Col>
                  <div className="text-center">
                      Acceptance:&nbsp;&nbsp;&nbsp;&nbsp;<input
                        type="radio"
                        name="Accept"
                        value="A"
                        checked={selectedOption ===  "A" }
                        onClick={setShowError}
                        onChange={(event)=> setSelectedOption(event.target.value)}
                       
                      />&nbsp;Accept
                      &nbsp;
                      
                      <input
                        type="radio"
                        name="Accept"
                        value="R"
                        checked={selectedOption === "R" }
                        onClick={setShowReject}
                        onChange={(event) => setSelectedOption(event.target.value)}
                      
                      />Reject&nbsp;
                  </div>
                  {showError && (
                  <div>
                    <div>
                     Remark   <input
                     class ="form-control"
                     name="remark"
                     value={remark}
                     onChange={(event) => setRemark(event.target.value)}

                        />

                  </div>
                  <div>
                  <label for="Country">विशेष : </label>
                      <select
                        class="form-control custom-select browser-default"
                        value={special}
                        onChange={(event) =>
                          setSpecial(event.target.value)
                        }
                      >
                        <option value="no" selected>नहीं </option>
                        
                          <option  value="yes">
                            हाँ 
                          </option>
                       
                      </select>
                  </div>
                  <div>
                    यदि आपने पत्र प्रेषित करने का प्रारूप बनाया है तो सिलेक्ट कोड करें (type code)
                    <label for="Country">type code </label>
                      <select
                        class="form-control custom-select browser-default"
                        value={typecode}
                        onChange={(event) =>
                          setTypeCode(event.target.value)
                        }
                      >
                        <option  selected>Select</option>
                        
                          <option  value="yes">
                            हाँ 
                          </option>
                       
                      </select>
                  </div>
                  <div>
                   <p>को भेजा जाना है (Forward To)</p>
                   </div>
                   <div className="form-group">
                    <label for="State">मुख्य विभाग </label>
                    <select
                      class="form-control custom-select browser-default"
                      value={selectedBasedepartment}
                      onChange={(event) =>
                        setSelectedBasedepartment(event.target.value)
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
                      <label for="District">जिला </label>
                      <select
                        class="form-control custom-select browser-default"
                        value={selectedDistrict}
                        onChange={(event) =>{
                          setSelectedDistrict(event.target.value);
                          
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
                    <div className="form-group">
                      <label for="office ">कार्यालय : </label>
                      <select
                        class="form-control custom-select browser-default"
                        value={selectedOffice}
                        onChange={(event) =>{
                          setSelectedOffice(event.target.value);
                          
                        }
                        }
                      >
                        <option value="">Select a office </option>
                        {office.map((ofc) => (
                          <option key={ofc.officecode} value={ofc.officecode}>
                            {ofc.officename}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label for="section">अनुभाग  : </label>
                      <select
                        class="form-control custom-select browser-default"
                        value={selectedSection}
                        onChange={(event) =>{
                          setSelectedSection(event.target.value);
                          
                        }
                        }
                      >
                        <option value="">Select a section  </option>
                        {section.map((sec) => (
                          <option key={sec.section_code} value={sec.section_code}>
                            {sec.section_name}
                          </option>
                        ))}
                      </select>
                    </div>


                    <div className="form-group">
                      <label for="employeeCategoryPost">कर्मचारी श्रेणी पोस्ट   : </label>
                      <select
                        class="form-control custom-select browser-default"
                        value={selectedEmployeeCatPost}
                        onChange={(event) =>{
                          setSelectedEmployeeCatPost(event.target.value);
                          
                        }
                        }
                      >
                        <option value="">Select a post  </option>
                        {EmployeeCatPost.map((ecp) => (
                          <option key={ecp.ofc_mapping_id} value={ecp.ofc_mapping_id}>
                            {ecp.employee_name}
                          </option>
                        ))}
                      </select>
                    </div>

                  यदि मंत्रालय को भेजना हो :  <input
                    type="checkbox"
                    name="mantralaya"
                    value="mantralaya"
                    /> छत्तीसगढ़ शासन 
                  </div>

                  )}
                  <br />
                  {showReject &&(
                    <div>
                      Reason for rejection<textarea rows='4' cols='50' className="form-control" value={ReasonOfRejection} onChange={(event => setReasonOfRejection(event.target.value))}></textarea>
                    </div>
                  )}
                  <Button onClick={handleSubmit}>Submit</Button>
                  </Col>
                  </Row>

                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShowLetter2;
