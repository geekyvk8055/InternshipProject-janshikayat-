import React from 'react';
import './Login_page/Login.css';
import './Registration/Registration.css';
import Registration from './Registration/Registration';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';

const RegistrationComp = () => {
  return (
    <>
    <LoginMenu />
    <Registration /> 
    <LoginFooter />
      
    </>
  )
}

export default RegistrationComp;
