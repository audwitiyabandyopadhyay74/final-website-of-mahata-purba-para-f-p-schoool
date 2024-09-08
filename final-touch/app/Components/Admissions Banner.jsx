"use client"

// import Image from 'next/image'
// import schoolelement from '../Assets/Image/School.jpg'
import Script from 'next/script'
const AdimissionPage = () => {
  document.location.href = "/form"
}


const AdmissionsBanner = () => {
  return (
    <div className='shadow-md' style={{padding:"50px"}}>
    <div className="admissions-banner" style={{borderRadius:"30px"}}>
      <div className="text">
      <h1>Admissions Are Open</h1>
      <p>Admissions into our school are open to everyone!</p>        <button id="apply-now-button" onClick={AdimissionPage}>Apply Now!</button>
</div>    
{/* <div className="skew1"></div>
<div className="skew2"></div> */}
{/* <div className="img">      <Image src={schoolelement} alt="" /> */}
<Script src='https://cdn.tailwindcss.com'></Script>
{/* </div>   */}
  </div></div>
  );
}

export default AdmissionsBanner;
