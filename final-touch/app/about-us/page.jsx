import Aboutus from "../Pages/About-us";
import Navbar from "../Components/Navbar";
import NavbarForMoblie from "../Components/Navbar For Mobile";
import Footer from "../Components/Footer";


const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <NavbarForMoblie/>
      <Aboutus/> <Footer/>
    </>
  );
}

export default AboutPage;
