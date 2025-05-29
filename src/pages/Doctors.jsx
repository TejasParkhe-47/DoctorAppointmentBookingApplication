import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {

const {speciality} = useParams();
const {doctors} = useContext(AppContext);
const [filterdoc, setfilterdoc] = useState([])
const [showfilter , setshowfilter] = useState(false)

const navigate = useNavigate()

const applyfilter = () =>{
  if(speciality){
    setfilterdoc(doctors.filter(doc=> doc.speciality ===speciality))
  }
  else {
    setfilterdoc(doctors);
  }
}

useEffect(()=>{
  applyfilter()
},[doctors,speciality])


  return (
    <div >
      <p className='text-gray-600'>Browse through the doctors specialist</p>
        <div className='flex flex-sol sm:flex-row items-start gap-5 mt-5'>
          <button className={`py-1 px-2 border rounded text-sm transition-all sm:hidden ${showfilter? 'bg-primary':'' }`} onClick={()=>setshowfilter(!filterdoc)}>fillters</button>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=>speciality=='General physician'? navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94vw sm:w-auto pl-3 py-1.5 cursor-pointer pr-16 hover:bg-gray-400 hover:text-white border border-gray-300 rounded transition-all cursor-pointer] ${speciality==="General physician"?'bg-blue-500 text-white':'' }`}>General physician</p>
            <p onClick={()=> speciality==='Dermatologist' ?navigate('/doctors'):navigate('/doctors/Dermatologist') } className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 cursor-pointer border hover:bg-gray-400 hover:text-white border-gray-300 rounded transition-all cursor-pointer] ${speciality==="Dermatologist"?'bg-blue-500 text-white':'' }`}>Dermatologist</p>
            <p onClick={()=> speciality==='Pediatricians' ?navigate('/doctors'):navigate('/doctors/Pediatricians') } className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 cursor-pointer border hover:bg-gray-400 hover:text-white border-gray-300 rounded transition-all cursor-pointer] ${speciality==="Pediatricians"?'bg-blue-500 text-white':'' }`}>Pediatricians</p>
            <p onClick={()=> speciality==='Gynecologist' ?navigate('/doctors'):navigate('/doctors/Gynecologist') } className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 cursor-pointer border hover:bg-gray-400 hover:text-white border-gray-300 rounded transition-all cursor-pointer] ${speciality==="Gynecologist"?'bg-blue-500 text-white':'' }`}>Gynecologist</p>
            <p onClick={()=> speciality==='Neurologist' ?navigate('/doctors'):navigate('/doctors/Neurologist') } className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 cursor-pointer border hover:bg-gray-400 hover:text-white border-gray-300 rounded transition-all cursor-pointer] ${speciality==="Neurologist"?'bg-blue-500 text-white':'' }`}>Neurologist</p>
            <p onClick={()=> speciality==='Gastroenterologist' ?navigate('/doctors'):navigate('/doctors/Gastroenterologist') } className={`w-[94vw sm:w-auto pl-3 cursor-pointer hover:bg-gray-400 hover:text-white  py-1.5 pr-16 border border-gray-300 rounded transition-all ] ${speciality==="Gastroenterologist"?'bg-blue-500 text-white':'' }`}>Gastroenterologist</p>
          </div>

          <div  className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
              filterdoc.map((item,index)=>(
                <div onClick ={()=>navigate(`/appointment/${item._id}`) } className='border border-gray-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-xl' key={index}>
                  <img className='bg-violet-600' src={item.image} alt="" />
                  <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-400'>
                      <p className='w-2 h-2 bg-green-600 rounded-full ' ></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm '>{item.speciality}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors
