import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import OfficeList from './Reports/OfficeList';

const OfficeListComp = () => {
  return (
    <>
        <LoginMenu />
        <OfficeList />
        <LoginFooter />
    </>
  )
}

export default OfficeListComp
