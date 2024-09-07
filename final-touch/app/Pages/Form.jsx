"use client"

import { useEffect, useRef } from "react"
// import {db} from "../firebaseConfig.js"

import { collection, addDoc } from "firebase/firestore";
import { useState } from "react"
import FormElement from "../Components/Form Element"
import Image from "next/image"  
import Script from "next/script"
import Src from "../Script/Form"
import {jsPDF} from"jspdf"  
// import { useRef } from "react"
import html2canvas from 'html2canvas';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { set } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyBdi15nKXot-OyZhAUvolRB2xZY-BgQZ6Y",
    authDomain: "mahata-purba-para-fp-school.firebaseapp.com",
    databaseURL: "https://mahata-purba-para-fp-school-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mahata-purba-para-fp-school",
    storageBucket: "mahata-purba-para-fp-school.appspot.com",
    messagingSenderId: "923187616908",
    appId: "1:923187616908:web:4aec245b388a6e21dcafa9",
    measurementId: "G-HRE6W5NEJ2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);



async function  addDataToFirestore  
(
  Name,
  FatherName,
  MotherName,
  GuardianName,
  DOB,
  EnrollingClass,
  Annualincome,
  Height,
  Weight,
BankAccountNo,
IFSCECode,
AadharNumber,
NameInAadhar,
BloodGroup,
CWSN
) 
{

try{
  const docRef = await addDoc(collection(db,"AdmissionForm"),{
    Name,
    FatherName,
    MotherName,
    GuardianName,
    DOB,
    EnrollingClass,
    Annualincome,
    Height,
    Weight,
    BankAccountNo,
IFSCECode,
AadharNumber,
NameInAadhar,
BloodGroup,
CWSN
      })
  console.log("Document written with ID: ", docRef.id);
  return true;
}catch(error){
alert("Error adding document: "+ error);
return false;
}
}




const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const imgRef = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = (e) => {
        setSelectedFile(reader.result)
        // imgRef.current.src = e.target.result;

      }
      reader.readAsDataURL(file)
    }
    setStudentImage(e.target.value)
  }

  const [selectedFile2, setSelectedFile2] = useState(null)

  const handleFileChange2 = (e2) => {
    const file2 = e2.target.files[0]
    if (file2) {
      const reader2 = new FileReader()
      reader2.onloadend = () => {
        setSelectedFile2(reader2.result)
      }
      reader2.readAsDataURL(file2)
    }
    setDobimg(e2.target.value)
  }

  const [selectedFile3, setSelectedFile3] = useState(null)

  const handleFileChange3 = (e3) => {
    const file3 = e3.target.files[0]
    if (file3) {
      const reader3 = new FileReader()
      reader3.onloadend = () => {
        setSelectedFile3(reader3.result)
      }
      reader3.readAsDataURL(file3)
    }
    setAadharimg(e3.target.value)
  }
const [Name,setName] = useState();
const [FatherName,setFatherName] = useState();
const [MotherName,setMotherName] = useState();
const [GuardianName,setGuardianName] = useState();
const [DOB,setDOB] = useState();
const [EnrollingClass,setEnrollingClass] = useState();
// const [Address,setAddress] = useState();
const [Annualincome,setAnnualincome] = useState();
const [Weight,setWeight] = useState();
const [Height,setHeight] = useState();
const [StudentImage,setStudentImage] = useState();
const [Dobimg,setDobimg] = useState();  
const [Aadharimg,setAadharimg] = useState();
const [BankAccountNo,setBankAccountNo] = useState();
const [IFSCECode,setIFSCECode] = useState();
const [AadharNumber,setAadharNumber] = useState();
const [NameInAadhar,setNameinAadhar] = useState();
const [BloodGroup,setBloodGroup] = useState();
const [CWSN,setCWSN] = useState();

const [change,setChange] = useState();
async function handlepdf () {
  const canvas = await  html2canvas(imgRef.current);
  const canvas1 = await html2canvas(imgRef1.current);
  const canvas2 = await html2canvas(imgRef2.current);

  const imgData = canvas.toDataURL('image/png');
  const imgData1 = canvas1.toDataURL('image/png');

  const doc = new jsPDF()
  doc.addImage(imgData, 'PNG', 15, 40,410, 160);
  doc.addImage(imgData1, 'PNG', 30, 80, 820, 320);
  doc.addImage(imgData2, 'PNG', 60, 160, 1640,640);
  doc.text(`
    Name: ${Name}
    Father's Name: ${FatherName}
    Mother's Name: ${MotherName}
    Gurdian's Name: ${GuardianName}
    Date of Birth: ${DOB} 
    Enrolling Class: ${EnrollingClass}

    Annual Income: ${Annualincome}
    Height: ${Height}
    Weight: ${Weight} 
    Bank Account No: ${BankAccountNo}
    IFSCE Code: ${IFSCECode}
    Aadhar Number: ${AadharNumber}
    Name in Aadhar: ${NameInAadhar}
    Blood Group: ${BloodGroup}
    CWSN: ${CWSN}
    `,10,10)
  doc.save("Admission Form.pdf")
}
 if(change){
handlepdf();
}else{
  console.log("Error")

}

const Handleonsubmit123 = async(e) =>{
  // alert(e.message);  
  // handleadmissionformsubmission()
    e.preventDefault()
    handlepdf();

  const added = await addDataToFirestore(
    Name,
    FatherName,
    MotherName,
    GuardianName,
    DOB,
    EnrollingClass,
    Annualincome,
    Height,
    Weight,
    BankAccountNo,
    IFSCECode,
    AadharNumber,
    NameInAadhar,
    BloodGroup,
    CWSN

  ) 
  if(added){
    setName("")
    setFatherName("")
    setMotherName("")
    setGuardianName("")
    setDOB("")
    setEnrollingClass("")
    setAnnualincome("")
    setHeight("")
    setWeight ("")
    setBankAccountNo("")
    setIFSCECode("")
    setAadharNumber()
    setNameinAadhar("") 
    setCWSN("")
    //
    // setSelectedFile("")
    // setSelectedFile2("")

    alert("Data Added Successfully")
  }else{
    alert("Error Adding Data")
  }

  setChange(true)

  
try{
  const docRef = await addDoc(collection(db,"AdmissionForm"),{
    Name,
    FatherName,
    MotherName,
    GuardianName,
    DOB,
    EnrollingClass,
  
    Annualincome,
    Height,
    Weight,
    
    
  })
  console.log("Document written with ID: ", docRef.id);
  return true;
}catch(error){
alert("Error adding document: ", error);
return false;
}
}



  
const [file, setFile] = useState();
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState();

  const handleFileChangeforfirebase = (event) => {
    setFile(event.target.files[0]);
  
  }

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const storageRef = ref(storage, `${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setUploadedUrl(url);
      console.log("File Uploaded Succesfuly");
    } catch (error) {
      console.error('Error uploading the file', error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
    <section>

    </section>
<span id="heading">Admission Form </span> <br /><br />
<div className="flex flex-col justify-start items-center w-screen h-max gap-[300px] p-1 rounded-lg">
  
<div className="flex flex-col bg-[#080808e0] w-[80%] h-max justify-center items-center rounded-lg gap-5 p-4" >
<span id="heading">Required Things <br /> <br /></span>
  <input required type="text" name="" id="name" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" className="w-[80%] h-[3rem] p-1 text-white overflow-none bg-[#000] border-[#000] border-b-[#fff] rounded-md" />
  <input required type="text" name="" id="name" value={FatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Enter Your Father's Name"className="w-[80%] h-[3rem] p-1 text-white overflow-none bg-[#000] border-[#000] border-b-[#fff] rounded-md"/>
  <input required type="text" name="" id="name" value={MotherName} onChange={(e) => setMotherName(e.target.value)} placeholder="Enter Your Mother's Name"className="w-[80%] h-[3rem] p-1 text-white overflow-none bg-[#000] border-[#000] border-b-[#fff] rounded-md"/>
  <input required type="text" name="" id="name" value={GuardianName} onChange={(e) => setGuardianName(e.target.value)}  placeholder="Enter Your Guardian's Name" className="w-[80%] h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />

<label className="text-2xl">Enter Your Date of Birth</label>
  <input required type="date" name="" id="name" value={DOB} onChange={(e) => setDOB(e.target.value)} placeholder="Enter Your Date of Birth" className="w-[80%] h-[3rem] p-1 text-white overflow-none bg-[#000] border-[#000] rounded-md border-b-[#fff] " />
  <input required type="Number" name="" id="name" value={EnrollingClass} onChange={(e) => setEnrollingClass(e.target.value)} placeholder="Enter Your Enrolling Class Example-0,1,2,3,4"  className="w-[80%] h-[3rem] p-1 text-white overflow-none  rounded-md bg-[#000] border-[#000] border-b-[#fff] "  />
  <input required type="number" name="" id="name"  value={Annualincome} onChange={(e) => setAnnualincome(e.target.value)} placeholder="Annual Income"  className="w-[80%] h-[3rem] p-1 text-white overflow-none bg-[#000] border-[#000]  rounded-md border-b-[#fff] "  />
  <input required type="text" name="" id="name"     value={Height} onChange={(e) => setHeight(e.target.value)} placeholder="Height in ft Example:6-4" pattern="0-0"  className="w-[80%] h-[3rem] p-1 text-white overflow-none bg-[#000] border-[#000]  rounded-md border-b-[#fff] "  />
  <input required type="number" name="" id="name" value={Weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight in kg example:10"  className="w-[80%] h-[3rem] p-1 text-white overflow-none bg-[#000] border-[#000]  rounded-md border-b-[#fff] "  />
  <div className="text-2xl">Upload Student Image</div>
  <input type="file" onChange={handleFileChangeforfirebase}  className="w-[80%] p-3 h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      { uploadedUrl && (
        <div>
          <p>Uploaded image:</p>
          <Image
            src={uploadedUrl}
            alt="Uploaded image"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      )}
<div className="text-2xl">Upload Student Date of Birth Certificate Image</div>
<input type="file" onChange={handleFileChangeforfirebase}  className="w-[80%] p-3 h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      { uploadedUrl && (
        <div>
          <p>Uploaded image:</p>
          <Image
            src={uploadedUrl}
            alt="Uploaded image"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      )}     
  </div>
<div  className="flex flex-col bg-[#080808e0] w-[80%] h-max justify-start items-center rounded-md gap-5 p-4">
<div id="heading">Optional Things</div>
<input type="number" name="" id="name" value={BankAccountNo} onChange={(e) => setBankAccountNo(e.target.value)} placeholder="Enter Your Bank Account Number:" maxLength={12} className="w-[80%] h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />
<input type="text" name="" id="name"  value={IFSCECode} onChange={(e) => setIFSCECode(e.target.value)} placeholder="Enter Your IFSCE Code:" pattern="BANK0000000" maxLength={11} className="w-[80%] h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />
<input type="number" name="" id="name" value={AadharNumber} onChange={(e) => setAadharNumber(e.target.value)} placeholder="Enter Your Aadhar No:"  className="w-[80%] h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />
<input type="text" name="" id="name"  value={NameInAadhar} onChange={(e) => setNameinAadhar(e.target.value)} placeholder="Enter Your Name in Aadhar:"   className="w-[80%] h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />
<input type="text" name="" id="name"  value={BloodGroup} onChange={(e) => setBloodGroup(e.target.value)} maxLength={2} placeholder="Enter Your Blood Group:"  className="w-[80%] h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />
<input type="text" name="" id="name"  value={CWSN} onChange={(e) => setCWSN(e.target.value)} placeholder="Enter Your CWSN (Write Yes or No):"   className="w-[80%] h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />
<div className="text-2xl">Upload Student Aadhar Image</div>
<input type="file" onChange={handleFileChangeforfirebase}  className="w-[80%] p-3 h-[3rem] text-white overflow-none bg-[#000] border border-[#000] border-b-[#000] rounded-md" />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      { uploadedUrl && (
        <div>
          <p>Uploaded image:</p>
          <Image
            src={uploadedUrl}
            alt="Uploaded image"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      )}

</div>
<input value={"Submit"} type="button" onClick={Handleonsubmit123}  className="w-[20%] h-[3rem] bg-[#000] my-4 text-white rounded-md border hover:bg-white hover:text-black hover:scale-105" />

</div>
{/* <Script src={src}/> */}
</>
)
}


export default Form
