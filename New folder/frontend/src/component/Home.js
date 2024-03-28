import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const [Name,setName]=useState("");
  const [Type,setType]=useState("");
  const [DrivingLicense,setDrivingLicense]=useState("");
  const [VehicleType,setVehicleType]=useState("");
  const [RepeatedOffener,setRepeatedOffener]=useState("");
  const [Other,setOther]=useState("");
  const [PoliceId,setPoliceId]=useState("");
  const navigate=useNavigate();

  function handlesubmit(e){
    e.preventDefault();
    const Ticket={
      name:Name,
      type:Type,
      drivingLicense:DrivingLicense,
      vehicleType:VehicleType,
      repeatedOffener:RepeatedOffener,
      other:Other,
      policeId:PoliceId
    }
   axios.post("http://localhost:8080/violator",Ticket)
   .then((result)=>{
    const data=result.status;
    if(data === 200){
      toast("Ticket Issue Successfully");
      navigate("/ticket");
    }
   })
   .catch((err)=>{
    const data=err.response.status;
    if(data===404){
      toast("Enter valid PoliceId");
    }
   })
  }
  return (
    <div className='HomeContainer'>
  <div className="navbar">
  <nav className=' w-[100vw]  bg-slate-500'>
            <ul className='flex gap-10 justify-center items-center p-3'>
              <Link to={"/home"}>
              <li className='cursor-pointer text-white font-bold hover:text-[#77eedb]'>
                    Home
                </li>
                </Link>
                <Link to={"/ticket"}>
                
                <li className='cursor-pointer text-white font-bold hover:text-[#77eedb]'>
                    Tickets
                </li>
                </Link>
            </ul>
        </nav>
  </div>


        <div className="container flex justify-center flex-col items-center">
          <h1 className='text-5xl text-center mt-3 font-bold'>Issue Ticket !</h1>
          <form className='flex flex-col border border-black border-4 rounded-[20px] p-12 mt-7' onSubmit={handlesubmit}>
            <label htmlFor="name" className='font-bold '>Name:</label>
         <input type="text" placeholder='Enter violator name here' id='name' className='border border-black border-2 rounded-[8px] w-[300px] text-center font-bold mt-1' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="type" className='font-bold mt-1 '>Type:</label>
         <input type="text" placeholder='Enter violator type here' id='type' className='border border-black border-2 rounded-[8px] w-[300px] text-center font-bold mt-1' value={Type} onChange={(e)=>{setType(e.target.value)}}/>
            <label htmlFor="drivingLicense" className='font-bold mt-1'>DrivingLicense:</label>
         <input type="text" placeholder='Enter violator drivingLicense here' id='drivingLicense' className='border border-black border-2 rounded-[8px] w-[300px] text-center font-bold mt-1 ' value={DrivingLicense} onChange={e=>setDrivingLicense(e.target.value)}/>
            <label htmlFor="vehicleType" className='font-bold mt-1'>VehicleType:</label>
         <input type="text" placeholder='Enter violator vehicleType here' id='vehicleType' className='border border-black border-2 rounded-[8px] w-[300px] text-center font-bold mt-1' value={VehicleType} onChange={e=>setVehicleType(e.target.value)} />
            <label htmlFor="repeatedOffener" className='font-bold mt-1'>RepeatedOffener:</label>
         <input type="text" placeholder='Enter violator repeatedOffener here' id='repeatedOffener' className='border border-black border-2 rounded-[8px] w-[300px] text-center font-bold mt-1' value={RepeatedOffener} onChange={e=>setRepeatedOffener(e.target.value)}/>
            <label htmlFor="other" className='font-bold mt-1'>Other:</label>
         <input type="text" placeholder='Enter violator other Info' id='other' className='border border-black border-2 rounded-[8px] w-[300px] text-center font-bold mt-1' value={Other} onChange={e=>setOther(e.target.value)}/>
            <label htmlFor="policeId" className='font-bold mt-1'>PoliceId:</label>
         <input type="text" placeholder='Enter violator policeId here' id='policeId' className='border border-black border-2 rounded-[8px] w-[300px] text-center font-bold mt-1' value={PoliceId} onChange={e=>setPoliceId(e.target.value)}/>
          <button type='submit' className='border border-black mt-3 w-[80px] mx-auto bg-gray-400 text-white font-bold p-1 cursor-pointer hover:bg-gray-700'>Submit</button>
          </form>
        </div>
    
    </div>
  )
}

export default Home
