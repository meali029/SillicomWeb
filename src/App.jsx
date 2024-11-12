import React from "react";

import ScheduleMeeting from "./component/ScheduleMeeting/ScheduleMeeting";
import Header from "./component/Header/Header";
import AboutUs from "./component/AboutUs/AboutUs";
import Footer from "./component/Footer/Footer";
import Goal from "./component/Goal/Goal";

import Pricing from "./component/Pricing/Pricing";

function App() {
  return (
    <>
      <Header/>
      <Goal/>
      <Pricing/>
      <AboutUs/>
   

      <ScheduleMeeting/>
      <Footer/>
    </>
  );
}

export default App;
