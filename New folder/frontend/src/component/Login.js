import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login({setId}) {
  const navigate=useNavigate();
  const[policeId,setPoliceId]=useState("");
  const[password,setPassword]=useState("");
  const [state,setState]=useState(false);
  function submithandler(e){
    e.preventDefault();
    console.log(policeId);
    console.log(password);
    
    setState(true);
    
  }

  function getuser(){
    if(state){
     axios.get(`http://localhost:8080/user/${policeId}/${password}`)
      .then((result)=>{
       const data=result.status;
      
        if(data === 200){
         const policeid=result.data.policeId;
         if(policeid){
          console.log(policeid);
          setId(policeid);
         }
         
       
          navigate("/home");
          toast("Login Successfully");
         

        }
      })
      .catch((err)=>{
        const data=err.response.status;
        if(data === 404){
          toast("User Not found ");
        }
      })
    }
  }


  useEffect(()=>{
    getuser();
  })
  return (
    <div className='loginContainer w-[100vw] h-[100vh] bg-slate-300 flex justify-center items-center'>
      <form className='flex flex-col' onSubmit={submithandler}>

        <input type="text " className='mb-[20px] p-2 w-[300px] text-center font-bold text-xl' placeholder='Enter your ID here '
         value={policeId}
         onChange={e=>setPoliceId(e.target.value)}
         />
        <input type="password" className='p-2 text-center font-bold text-xl' placeholder='Enter Your Password'
        value={password}
        onChange={e=>setPassword(e.target.value)}
        />
        <button type='submit' className='border border-black rounded-md mt-[20px] w-[100px] mx-auto p-2 font-bold text-xl bg-slate-500 text-white hover:bg-slate-400'>Login</button>
      </form>
    </div>
  )
}

export default Login
