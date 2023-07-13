import React from 'react';
import LoginMenu from './Components/LoginMenu';
import LoginFooter from './Login_page/LoginFooter';
//import ShowLetter2 from './CmHouse/ShowLetter2';
import PendingLetters from './CmHouse2/PendingLetters';

const PendingLettersComp = () => {
  return (

    <>
       <LoginMenu />
       <PendingLetters />
       <LoginFooter /> 

    </>
  )
}

export default PendingLettersComp;