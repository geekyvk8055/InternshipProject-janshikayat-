import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import CounterAllote from './Admin/CounterAllote';

const CounterAlloteComp = () => {
  return (
    <>
      <LoginMenu />
      <CounterAllote />
      <LoginFooter />
    </>
  )
}

export default CounterAlloteComp
