"use client"

import Form  from "../Pages/Form";
import Navbar from "../Components/Navbar";
import NavbarForMoblie from "../Components/Navbar For Mobile";
import Footer from "../Components/Footer";

const page = () => {
  return (
    <div>
          <Navbar/>
          <NavbarForMoblie/>
      <br /><br /><br /><br /> <br /><br /><br /><br />
      <Form/> <Footer/>
    </div>
  );
}

export default page;
