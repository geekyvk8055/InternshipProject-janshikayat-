import React from 'react';
import LoginMenu from './Components/LoginMenu';
import Section from './Admin/Section';
import LoginFooter from './Login_page/LoginFooter';
import './Admin/AdminPanel.css'
const SectionComp = () => {
  return (
    <>
      <LoginMenu />
      <Section />
      <LoginFooter /> 
    </>
  )
}

export default SectionComp;
