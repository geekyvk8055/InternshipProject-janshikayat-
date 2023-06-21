import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import CreateEmployee from './Admin/CreateEmployee';
import './Admin/AdminPanel.css'

const CreateEmployeeComp = () => {
  return (
    <>
     <LoginMenu />
     <CreateEmployee />
     <LoginFooter />
      
    </>
  )
}

export default CreateEmployeeComp
