import React from 'react';
import Contactus from '../Pages/Contact us';
import Navbar from "../Components/Navbar";
import NavbarForMoblie from "../Components/Navbar For Mobile";
import Footer from "../Components/Footer";

const page = () => {
  return (
    <div>
          <Navbar/>
          <NavbarForMoblie/>
      <Contactus/> <Footer/>
    </div>
  );
}

export default page;
