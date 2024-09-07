import AdmissionsBanner from "../Components/Admissions Banner"
import Banner from "../Components/Banner"
import BasicInformation from "../Components/Basic Information"
import Features from "../Components/Features"
import MiniAboutusSection from "../Components/Mini-About-us-Section"

const Home = () => {
  return (
    <>
    <Banner/>
   <span id="heading" style={{textTransform:"capitalize", fontWeight:"700",marginTop:"100px"}}>Why Us <br /><br /><br /><span id="note" className="py-100" style={{padding:"50px"}}>ℹ️ Note: This All Services are Given by WB Govt</span> </span> 
   <Features/>
   <AdmissionsBanner/>
   <BasicInformation/>
   <MiniAboutusSection/>
   {/* <h1 class="text-5xl bg-slate-100 w-screen h-screen flex content-center justify-center">hi</h1>
    */}
    </>
  )
}

export default Home
