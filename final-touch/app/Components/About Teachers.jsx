"use client"

import React from 'react';
import AboutTeacher from './About-Teacher';
import { useEffect, useState } from 'react'

const AboutTeachers = () => {
  const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  // this forces a rerender
  setHydrated(true)
}, [])

if(!hydrated) {
  // this returns null on first render, so the client and server match
  return null
}

  return (
    <div className='about-teachers'>
<div className='w-screen flex items-center justify-center'>
<AboutTeacher Name={"Aniruddha Bandyopadhyay"} Role={"Head Teacher"} Qualifications={"B.A. , D.EL.Ed"} Experience={"6yrs as Para Teacher at Jharul High School 14yrs as Assistant Teacher in Primary School (Kaicher F.p School,Polyakura F.PSchool,Beroya F.p School)"} /> 
  
  </div>      

      <AboutTeacher Name={"Amit Naha"} Role={"Assistant Teacher"} Qualifications={"B.A. , D.EL.Ed"} Experience={"3yrs as Teacher in charge of this school"}/>
      <AboutTeacher Name={"Md. Saddam Hossain"} Role={"Assistant Teacher"} Qualifications={"Msc,B.A."} Experience={"3yrs as Assistant Teacher of this school"}/>
      <AboutTeacher Name={"Jhumpa Ruidas"} Role={"Assistant Teacher"} Qualifications={"M.A, Dlm"} Experience={"Joined this school in this year"}/>
    
    </div>
  );
}


export default AboutTeachers;
