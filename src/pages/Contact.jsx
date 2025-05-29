import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-semibold'>us</span> </p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className="w-full md:max-w-[360px]" src={assets.logo} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR office</p>
          <p className='text-gray-500'> 43242 willis station situ fl <br /> flsjr jfjelw </p>
          <p className='text-gray-500'>tel : (91)555-454 <br />email : tejasparkhe43@gmail.com </p>
          <p className='font-semibold text-lg text-gray-600'> careers at medico</p>
          <p className='text-gray-500'>learn more about our team and job opening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
