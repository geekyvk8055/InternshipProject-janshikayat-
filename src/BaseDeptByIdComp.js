import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import Base_deptById from './Reports/Base_deptById';

const BaseDeptByIdComp = () => {
  return (
    <>
      <LoginMenu />
      <Base_deptById />
      <LoginFooter />
      
    </>
  )
}

export default BaseDeptByIdComp
