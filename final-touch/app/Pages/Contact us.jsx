"use client"

import ContactDetail from "../Components/Contact Detail"
import GoogleMaps from "../Components/Google Maps"
import { useState } from "react";
const Contactus = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "65a4465b-f033-4a5f-99a7-467b5c844345");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
 <div className="deatails mt-[200px]">
 <ContactDetail/> 
    {/* <div id="line"></div> */}
    <GoogleMaps/>
 </div>
 <div className="contact-form h-[100vh] w-screen">
      <form onSubmit={onSubmit}>
      <span className="text-3xl">Get in Touch</span>
<br />
        <input type="text" name="name" placeholder="Enter your name" required/>
        <input type="email" name="email"  placeholder="Enter your Email"required/>
        <textarea name="message" placeholder="Write your message here!" required></textarea>

        <button type="submit">Submit Form</button>
        <span className="text-white">{result}</span>

      </form>

    </div>
    </>
  )
}

export default Contactus
