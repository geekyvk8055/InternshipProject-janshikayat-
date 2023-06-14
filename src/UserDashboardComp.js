import React from 'react';
import UserLoginMenu from './User/UserLoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import UserDashboard from './User/UserDashboard';


const UserDashboardComp = () => {
  return (
    <>
       <UserLoginMenu />
       <UserDashboard />
       <LoginFooter />
    </>
  )
}

export default UserDashboardComp
