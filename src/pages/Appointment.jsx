import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';

import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {


  const { docId } = useParams();
  console.log(docId)

  const {doctors,currencysym} = useContext(AppContext)
  const [docInfo,setdocInfo ] = useState('doc1');
  const daysofweek = ['sun','mon','tue','wed','thu','fri','sat','sun']


  const fetchDocInfo  = async()=>{
    const docInfo = doctors.find(doc => doc._id===docId)
    setdocInfo(docInfo)

  }

  


  const [docSlots,setDocSlots] = useState([])
  const [slotidx,setSlotIdx] = useState(0)
  const [slottime,setSlotTime] = useState('')


  const getAvailableSlots = async () =>{
    setDocSlots([])
    let today = new Date()
    for(let i = 0 ;i<7;i++){
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate()+i);

      let endTime = new Date()
      endTime.setDate(today.getDate()+i);
      endTime.setHours(21,0,0,0)

      //setting hours

      if(today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1:10)
        currentDate.setMinutes(currentDate.getMinutes()>30?30:0);
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0);
      }

      let timeSlots = []

      while(currentDate<endTime){
        let formattedTime  = currentDate.toLocaleDateString([],{hour:'2-digit',minute:'2-digit'})

        //add slots to array
        timeSlots.push({
          datetime:new Date(currentDate),
          time:formattedTime
      })
        // increment current time by 30 mins 

        currentDate.setMinutes(currentDate.getMinutes()+30)
      }

      setDocSlots(prev=>([...prev,timeSlots]))
    }
  }


  useEffect(()=>{
    fetchDocInfo()
},[doctors,docId])

useEffect(()=>{
  getAvailableSlots()
},[docInfo])

useEffect(()=>{
  console.log(docSlots);
},[docSlots])

  
  return docInfo &&  (
    <div>
      
      {/**doc details */}

      <div className='flex flex-col sm:flex-row gap-4 '>
        <div>
          
          <img className='bg-primary w-full sm:max-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 p-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/**doc info : name , degree and experiance */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}</p> 
          <img className='w-5' src={assets.verified_icon} alt="" />
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree}  - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experiance}</button>
          </div>
          {/**doctor about */}
          <div >
            <p className='flex items-center hap-1 text-sm font-medium text-gray-900 mt-3'>About 
              <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>

          </div>
          <p className='text-gray-500 font-medium mt-4'>Appointment fee : <span className='ml-1 font-medium'>{currencysym}  {docInfo.fees}</span></p>
        </div>
      </div>

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div onClick={()=>setSlotIdx(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotidx==index?'bg-primary text-white':'bg-slate-100'}`} key={index}>
                <p >{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
                <p >{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots[slotidx].map((item,index)=>(
                <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slottime? 'bg-primary text-white' : 'text-gray-600 border-gray-300' }`} key={index}>
                  {item.time.toLowerCase()}
                </p>
            )

          )
          }
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full mt-5'>Book an appointment</button>

      </div>
      <RelatedDoctors docId={docId} speciality = {docInfo.speciality}/>
      

    </div>
  )
}

export default Appointment
