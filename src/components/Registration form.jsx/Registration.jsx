import { useState } from 'react'
import './Registration.css'
export default function RegistrationForm(){
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [submittedData,setSubmittedData]=useState({});
    function handleForm(e){


        if (!Name.trim()){
          alert("fill the Name")
          return
        }
        if (!Email.trim()){
           alert("fill the Email")
          return
        }
        if (!Password.trim()){
         alert("fill the password")
          return
        }
        setSubmittedData({Name,Email,Password})
        setName("")
        setEmail("")
        setPassword("")

    }
return(
        <div className='bg-white px-6 py-12'>
            <h1>Registration From</h1>
            <form>

            <div className='flex flex-col'>
            <label className='text-left'>Name</label>
            <input type="text" placeholder="enter your name" value={Name} onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className='flex flex-col'>
            <label className='text-left'>Email</label>
            <input type="text" placeholder="enter your Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className='flex flex-col'>
            <label className='text-left'>Password</label>
            <input type="text" placeholder="enter your Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <button className='w-full text-white onClick={handleForm}'>submit</button> 
            </form>
            
            {submittedData && <div className='text-left border-l-6 border-green-600 rounded-2x1 my-3 px-5 py-2 border-green-200 '>
                <h3>submitted Data</h3>
                <p>Name: {submittedData.Name}</p>
                <p>Email: {submittedData.Email}</p>
                <p>Password: {submittedData.Password}</p>
            </div>}
        </div>
        
    )
}