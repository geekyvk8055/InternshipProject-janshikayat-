import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import DepartmentList from './Reports/DepartmentList';

const DepartmentListComp = () => {
  return (
    <>
      <LoginMenu />
      <DepartmentList />
      <LoginFooter />
    </>
  )
}

export default DepartmentListComp
