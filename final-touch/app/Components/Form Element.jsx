"use client"

// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

const FormElement = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_0g2xptg', 'template_1jdqenr', form.current, {
  //       publicKey: 'by2tFFGdCTYH0R5X7',
  //     })
  //     .then(
  //       () => {
  //         alert('SUCCESS!');
  //       },
  //       (error) => {
  //         alert('FAILED...', error.text);
  //       },
  //     );
  // };
  return (
    <div className="admission-form">
<form  ref={form} onSubmit={sendEmail}>
<input type="text" placeholder="Name" required/>
<input type="text" placeholder="Father's Name" required/>
<input type="text" placeholder="Mother's Name" required/>
<input type="text" placeholder="Guardian's Name" required/>
<input type="text" placeholder="Address" required />
<input type="date" placeholder="Date of Birth" required/> <br />
<span>Which Class are you enrolling for</span>
<div className="class">
<span><input type="radio" name="Class" id="classpp"  required/>PP/Starting Class</span>
<span><input type="radio" name="Class" id="class1" required/> Class 1</span>
<span><input type="radio" name="Class" id="class2" required/> Class 2</span>
<span><input type="radio" name="Class" id="class3" required/> Class 3</span>
<span><input type="radio" name="Class" id="class4"required /> Class 4</span>
</div>
<input type="number" name="Annual Income" id=""  placeholder="Annual Income" required/>
<input type="text" name="BPL No" id="" placeholder="BPL No(optional):" />
<input type="number" name="Bank Account No:" id="Bank " placeholder=" Bank Account No(optional):" />
<input type="text" name="IFSCE Code:" id="IFSCE Code: (optional)"  placeholder="IFSCE Code: (optional)" />
<input type="number" name="Aadhar No:" id=""  placeholder="Aadhar(optional)" />
<input type="text" name="Name in Aadhar:" id="" placeholder="Name in Aadhar(optional)" />
<input type="number" name="Height" id=""  placeholder="Height" required/>
<input type="number" name="Weight" id="" placeholder="Weight" required/>
<input type="text" name="Blood Group(optional)" id="" placeholder="Blood Group" />
<input type="text" name="CWNS" id="" placeholder="CWSN (yes/No, optional)"/>


      <button type="submit" value={""} >Apply</button>
</form>
    </div>
  )
}

export default FormElement
