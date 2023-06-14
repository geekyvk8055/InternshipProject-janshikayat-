import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import CreateOfficeLevel from "./Admin/CreateOfficeLevel";

const CreateOfficeLevelComp = () => {
  return (
    <>
      <LoginMenu />
      <CreateOfficeLevel />
      <LoginFooter />
    </>
  )
}

export default CreateOfficeLevelComp;
