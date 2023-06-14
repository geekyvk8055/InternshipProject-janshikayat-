import React from 'react';
import { Container } from 'react-bootstrap';



const LoginFooter = () => {
  return (
    <>
    <Container fluid style={{background:'#0E4D92'}}>
    
    <div class="container text-center">
      <p class="text-white mb-0 py-2">
      &copy; {new Date().getFullYear()} Copyright:{' '}
    

            Site Designed, developed and hosted by National Informatics Centre (NIC), Chhattisgarh, Raipur.
            <hr></hr>
      All efforts have been made to make the information as accurate as possible. Departments of Chhattisgarh Govt. or NIC, will not be responsible for any damage caused by inaccuracy in the information available on this Website.
     &nbsp; &nbsp;<a  href="https://chhattisgarh.nic.in"
                  target={"_blank"} >
                  <img src="https://www.nic.in/wp-content/themes/NICTheme/assets/images/logo.png"
                    height={100} width={100}className="img-fluid shadow-4" alt="..."/>
                 </a>
    
    </p>
    </div>
  



</Container>
</>
  )
}

export default LoginFooter;
