
import React from 'react';
import LoginFooter from './Login_page/LoginFooter';
import PendingReportsList from './CmHouse2/PendingReportsList';
import UserLoginMenu from './User/UserLoginMenu';

const PendingLetterListComp = () => {
  return (
    <>
    <UserLoginMenu />
    <PendingReportsList />
     <LoginFooter />
    </>
  )
}

export default PendingLetterListComp;
