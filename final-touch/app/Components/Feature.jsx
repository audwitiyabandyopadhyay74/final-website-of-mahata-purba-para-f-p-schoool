"use client"
import Script from "next/script";
import React from "react";
import Image from "next/image";
const Feature = ({ Imgsrc, Name, Description }) => {
  //   console.log(props);
  //   const { imgsrc, name, description } = props;
//   useEffect(()=>{
//     gsap.registerPlugin(ScrollTrigger);
  
//   const feature = document.querySelector("div#rFeature");

// const gsap = gsap;
// // 
//     gsap.to(".Feature",{
//         scale:1,
//         delay:1,
//         duration:2,
//         rotate:360,
// stragger:0.1
        
//     })
  return (
    <div className="Feature" id="rFeature">
      <Image src={Imgsrc} />
      <span>{Name}</span>
      <p>{Description}</p>
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"/>
          </div>
  );
}

export default Feature;
