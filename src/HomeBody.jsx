import React from "react";
import "./ImportantLink.css";
import Carosel from "./Homepage/Carosel";
import Reports from "./Homepage/Reports";
import LoginandNotice from "./Homepage/LoginandNotice";
import Menubar from "./Homepage/Menubar";
import Footer from "./Homepage/Footer";

import "./Homepage/Carosel.css";

const HomeBody = () => {
  return (
    <>
      <Menubar />
      <Carosel />
      <Reports />
      <LoginandNotice />
      <Footer />
    </>
  );
};

export default HomeBody;
