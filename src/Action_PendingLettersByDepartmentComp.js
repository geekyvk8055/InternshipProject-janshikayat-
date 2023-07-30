import React from 'react';
import UserLoginMenu from './User/UserLoginMenu';
import Action_PendingLettersByDepartment from './CmHouse2/Action_PendingLettersByDepartment';
import LoginFooter from './Login_page/LoginFooter';


const Action_PendingLettersByDepartmentComp = () => {
  return (
    <>
      <UserLoginMenu />
      <Action_PendingLettersByDepartment />
      <LoginFooter />
    </>
  )
}

export default Action_PendingLettersByDepartmentComp
