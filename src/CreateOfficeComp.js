import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import CreateOffice from './Admin/CreateOffice';
import './Admin/AdminPanel.css'

const CreateOfficeComp = () => {
  return (
    <>
    <LoginMenu />
    <CreateOffice />
    <LoginFooter />

      
    </>
  )
}

export default CreateOfficeComp;
