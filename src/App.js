import React from "react";
import './Components/Loginform.css';
import "./menubar.css";
import "./index.css";
import './Admin/AdminPanel.css'
// import "./Login_page/Login.css";
import "./Report.css";
import "./Charts.css";
import "./Homepage/Footer.css";
import Headerj from "./Homepage/Headerj";
//import Cards from "./Components/Cards";
//import Vreports from './Components/Vreports';
import Footer from "./Homepage/Footer";
import Headerjs from "./Homepage/Headerjs";
import HomeBody from "./HomeBody";
import { Routes, Route } from "react-router-dom";

// import LoginPage from "./LoginPage";
import RegistrationComp from "./RegistrationComp";
import AvedanComp from "./AvedanComp";
import AdminPanelComp from "./AdminPanelComp";
import CreateCounterComp from "./CreateCounterComp";
import CreateOfficeComp from "./CreateOfficeComp";
import CreateOfficeLevelComp from "./CreateOfficeLevelComp";
import CreateEmployeeComp from "./CreateEmployeeComp";
import DistrictListComp from "./DistrictListComp";
import DepartmentListComp from "./DepartmentListComp";
import OfficeListComp from "./OfficeListComp";
import AlloteEmplOfficeComp from "./AlloteEmplOfficeComp";
import AlloteOffcRoleComp from "./AlloteOffcRoleComp";
import CreatePasswordComp from "./CreatePasswordComp";
import ResetEmplPwdComp from "./ResetEmplPwdComp";
import SectionComp from "./SectionComp";
import CounterAlloteComp from "./CounterAlloteComp";
import UserDashboardComp from "./UserDashboardComp";
import CounterCatMppingComp from "./CounterCatMppingComp";
import UserApplicationDetailComp from "./UserApplicationDetailComp";
import ShowLetter from "./CmHouse/ShowLetter";
import ShowLetterComp from "./ShowLetterComp";
import ShowLetter2Comp from "./ShowLetter2Comp";

import PendingLetterComp from "./PendingLetterComp";
import PendingLetterListComp from "./PendingLetterListComp";
import Action_PendingLetterComp from "./Action_PendingLetterComp";


//import AdminRouting from "./AdminRouting";



const App = () => {
  return (<>
    <Headerj />
      <Headerjs />
    <Routes>
      <Route path="/" element={<HomeBody />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/registration" element={<RegistrationComp />} />
      <Route path="/avedan" element={<AvedanComp />} />
      <Route path="/getLogin" element={<AdminPanelComp />} />
      <Route path="/createCounter" element={<CreateCounterComp />} />
      <Route path="/createOffice" element={<CreateOfficeComp />} />
      <Route path="/createOfficeLevel" element={<CreateOfficeLevelComp />} />
      <Route path="/createEmployee" element={<CreateEmployeeComp />} />
      <Route path="/DistrictList" element={<DistrictListComp />} />
      <Route path="/DepartmentList" element={<DepartmentListComp />} />
      <Route path="/reports/OfficeList" element={<OfficeListComp />} />
      <Route path="/alloteEmployeeOffice" element={<AlloteEmplOfficeComp />} />
      <Route path="/alloteOfficeRole" element={<AlloteOffcRoleComp />} />
      <Route path="/admin/CreatePassword" element={<CreatePasswordComp />} />
      <Route path="/admin/ResetEmplPwd" element={<ResetEmplPwdComp />} />
      <Route path="/admin/Section" element={<SectionComp />} />
      <Route path="/admin/counter_allotement" element={<CounterAlloteComp />} />
      <Route path="/user/dashboard" element={<UserDashboardComp />} />
      <Route path="/admin/countercat_mapping" element={<CounterCatMppingComp />} />
      <Route path="/user/applicant_detail" element={<UserApplicationDetailComp />} />
      //  CmHouse Routing
      <Route path="/cmHouse" element={<ShowLetterComp />} />
      <Route path="/cmHouse/ShowLetter" element={<ShowLetter2Comp />} />
     
      <Route path="/PendingLetter" element={<PendingLetterComp />} />

      <Route path="/PendingList" element={<PendingLetterListComp />} />
      <Route path="/PendingList/ActionPendingLetters" element={<Action_PendingLetterComp />} />

      

      {/* <Route path="/getLogin" element={<AdminRouting />} /> */}
      </Routes>
    
    </>
  );
};

export default App;
