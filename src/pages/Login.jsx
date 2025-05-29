import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const {token,backendurl,settoken} = useContext(AppContext)

  const [state , setstate] = useState('sign up')
  const [email ,setemail] = useState('')
  const [password ,setpassword] = useState('')
  const [name,setname] = useState('')

  const onSubmitHandler = async(event)=>{

    event.preventDefault //to do not reload page


    console.log("onsumbit handler")
    try{
      


      if(state==='sign up'){
        
        

        const {data} = await axios.post(backendurl+'/api/user/register',{name,password,email})
       
        if(data.success){
          localStorage.setItem('token',data.token)
          
          settoken(data.token)

          
        }
        else {
          toast.error(data.message)
        }
      }

      else{

        
          const {data} = await axios.post(backendurl+'/api/user/login',{password,email})
          if(data.success){
            console.log(data.token)
            localStorage.setItem('token',data.token)
            settoken(data.token) 
          }
          else {
            toast.error(error.message)
          

      }
      }
    }
    catch(error){
      toast.error(error.message)

    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center' name='login' id='login'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px ] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow bg-violet-400'>
        <p className='text-2xl font-semibold text-black'>{state==='sign up' ? "Create account":"login"} </p>
        <p  className='text-black'>please {state==='sign up' ? "sign up":"Login"}  to book appointment</p>
          {
            state ==='sign up' && <div className='w-full text-black'>
            <p>full name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setname(e.target.value)} value  = {name}/>
          </div>
          }
        

        <div className='w-full text-black'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setemail(e.target.value)} value  = {email}/>
        </div>
 
        <div className='w-full text-black'>
          <p>password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setpassword(e.target.value)} value  = {password}/>
        </div>

        <button type='submit' className='bg-blue-400 text-white w-full py-2 rounded-md text-base shadow'>{state==='sign up' ?"Create account":"login"}</button>
        {state==='sign up'? <p className='text-black'>already have an acc? <span onClick={()=>setstate('login')} className='text-black underline cursor-pointer '>login here</span ></p>:<p className='text-black'>create new acc ? <span  onClick={()=>setstate('sign up')} className='text-black underline cursor-pointer '>clicK Here</span></p>}
      </div>




    </form>
  )
}

export default Login
