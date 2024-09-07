"use client"

import Image from "next/image";

const BasicInformationCard = ({Imgsrc,Name,Description}) => {
  return (
    <div className="basic-information-card">
      <Image src={Imgsrc} />
      <h1>{Name}</h1>
      <p>{Description}</p>
    </div>
  );
}

export default BasicInformationCard;
