import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import CreatePassword from './Admin/CreatePassword';
import './Admin/AdminPanel.css'

const CreatePasswordComp = () => {
  return (
    <>
      <LoginMenu />
      <CreatePassword />
      <LoginFooter />
    </>
  )
}

export default CreatePasswordComp
