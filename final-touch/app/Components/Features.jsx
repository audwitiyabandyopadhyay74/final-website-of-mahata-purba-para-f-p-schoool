"use client"

import Feature from "./Feature";
import { FeaturesData } from "../Data/FeaturesData";
import {AtlastData} from "../Data/FeaturesData";
import Marquee from "react-fast-marquee";
// import { useEffect } from "react";

// import Img1 from '../Assets/Image/doubt-solve-in-class.png'

const features = () => {
  // useEffect(()=>{
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.from("#Features",{
  //       scale:0,
  //       delay:1,
  //       duration:2,
  //       rotate:360,
        
  //   })});
  return (
    <div className="Features" id="Features">
      <Marquee
      quee play={true} pauseOnHover={false} direction={"left"} speed	={150} loop={100}>
<div className="top" style={{display:"flex",flexWrap:"wrap"}}>
{
FeaturesData.map((FeaturesData) => (
    <Feature key={FeaturesData.Id} Imgsrc={FeaturesData.Imgsrc} Name={FeaturesData.Name} Description={FeaturesData.Description} id="d"/> 
)
)
}
</div>
</Marquee>
<Marquee play={true} pauseOnHover={false} direction={"right"} speed	={150} loop={100}>

<div className="bottom"  style={{display:"flex",flexWrap:"wrap"}}>
{
AtlastData.map((AtlastData) => (
    <Feature key={AtlastData.Id} Imgsrc={AtlastData.Imgsrc} Name={AtlastData.Name} Description={AtlastData.Description}/> 
)
)
}
</div>
</Marquee>
    </div>
  );
}

export default features;
