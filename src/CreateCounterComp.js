import React from 'react'
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import CreateCounter from './Admin/CreateCounter';

const CreateCounterComp = () => {
  return (
    <>
    <LoginMenu />
    <CreateCounter />
    <LoginFooter />
      
    </>
  )
}

export default CreateCounterComp
