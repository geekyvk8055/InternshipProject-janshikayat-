import React from 'react';
import AdminPanel from './Admin/AdminPanel';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import './Admin/AdminPanel.css'
//import { Routes, Route,BrowserRouter } from 'react-router-dom';
//import CreateCounterComp from "./CreateCounterComp";



const AdminPanelComp = () => {
  return (
    <>
      <LoginMenu />
      <AdminPanel />
      <LoginFooter />
     


    </>
  )
}

export default AdminPanelComp;
