import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import District from './Reports/District';

const DistrictListComp = () => {
  return (
    <>
       <LoginMenu />
       <District />
       <LoginFooter />
    </>
  )
}

export default DistrictListComp
