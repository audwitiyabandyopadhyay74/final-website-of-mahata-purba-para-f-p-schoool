/* eslint-disable react/no-unescaped-entities */
// import React,{useRef,useLayoutEffect} from 'react';
"use client"

import govtofwblogo from "../Assets/Image/government-of-west-bengal-logo.png"


const MiniAboutusSection = () => {
/* The `gsap.to(".content", { x: 1000, duration: 2, delay: 1 })` code snippet is using the GSAP
(GreenSock Animation Platform) library to animate the element with the class name "content". */
  // gsap.to(".content",{
  //   x:1000,
  //   duration:2,
  //   delay:1
  // })
  // const box = useRef();



//   gsap.to(".box",{
//     scale:10,
// y:-10,
//     delay:1,
//     duration:2
//   })

  // gsap.to(".p",{
  // x:1500,
  // rotate:360,
  // duration:1.5,
  // delay:1
  // })


  return (
  <div style={{padding:"50px"}}>

<section  className='mini-about-us-section' style={{background:"#0f0f0fe9",borderRadius:"30px"}}>
  <br /><br /><br />
      <h1 id="heading">About us</h1>
<div className="content">
      <p className="p" style={{opacity:"1",marginLeft:"0"} }>
        this school is a government school and is approved by the West Bengal ministry of education. 
        and this school is manged and owned by the Government of West Bengal it's falls under WBBPE Board. 
      </p>
      <div className="img-of-about-section"> </div>
      </div>
      <button id="know-more" onClick={()=>{
  document.location.href = "/about-us"
}}>Know More</button> <br /><br />

    </section></div>
  );
}

export default MiniAboutusSection;
