"use client"

import BasicInformationCard from "./Basic Information Card";
import {BasicInformationData} from "../Data/Basic Information"
import Marquee from "react-fast-marquee";

const BasicInformation = () => {
  return (
    <div className='basic-information'>
      <span id="heading">Basic Information</span>
      <Marquee play={true} pauseOnHover={false} direction={"left"} speed	={150} loop={100}>
      <div className="cards">
{
    BasicInformationData.map((BasicInformationData) =>
        <BasicInformationCard key={BasicInformationData.Id} Imgsrc={BasicInformationData.Imgsrc} Name={BasicInformationData.Name} Description={BasicInformationData.Description}/>
    )
}    </div>
</Marquee>
</div>
  );
}

export default BasicInformation;
