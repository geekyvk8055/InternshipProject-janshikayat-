import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
import CounterCategoryMapping from './Admin/CounterCategoryMapping';

const CounterCatMppingComp = () => {
  return (
    <>
      <LoginMenu />
      <CounterCategoryMapping />
      <LoginFooter />
    </>
  )
}

export default CounterCatMppingComp
