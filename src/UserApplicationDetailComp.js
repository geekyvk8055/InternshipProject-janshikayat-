import React from 'react';
import UserLoginMenu from './User/UserLoginMenu';
import LoginFooter from './Login_page/LoginFooter';
//import UserDashboard from './User/UserDashboard';
import UserApplicationDetail from './User/UserApplicationDetail';


const UserDashboardComp = () => {
  return (
    <>
       <UserLoginMenu />
       <UserApplicationDetail />
       <LoginFooter />
    </>
  )
}

export default UserDashboardComp
