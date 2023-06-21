import React from 'react';
import LoginMenu from './Components/LoginMenu';
import ResetEmployeePassword from './Admin/ResetEmployeePassword';
import LoginFooter from './Login_page/LoginFooter';
import './Admin/AdminPanel.css'
const ResetEmplPwdComp = () => {
  return (
    <>
      <LoginMenu />
      <ResetEmployeePassword />
      <LoginFooter />
    </>
  )
}

export default ResetEmplPwdComp;
