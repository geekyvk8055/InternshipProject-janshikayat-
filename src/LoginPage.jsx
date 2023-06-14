import React from 'react';
import "./Login_page/Login.css";
import "./Login_page/LoginFooter.css";

import Login from "./Login_page/Login";
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';





const LoginPage = () => {
  return (
    <>
        <LoginMenu />
        <Login />
        <LoginFooter />
       
    </>
  )
}

export default LoginPage;
