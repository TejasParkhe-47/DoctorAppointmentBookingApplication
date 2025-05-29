import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/**left section */}
     <div>
        <div className='flex flex-row items-center'>
        <img src={assets.logo} alt=""  className='w-20'/>
        <h1 className='font-bold text-4xl'> Medico</h1>
      </div>
      <hr />
  
            <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab animi voluptatibus maiores provident deserunt et veniam unde dolores nobis.</p>
        </div>

        {/**center section */}
        <div>
            <p className='text-xl font-medium mb-5'> Company</p>
            
            <ul className='flex flex-col gap-2 text-gray-600'>

                <li>Home</li>
                <li>about us</li>
                <li>contact us</li>
                <li>privacy policy</li>
                
            </ul>
        </div>


        {/**right section */}
        <div>
            <p className='text-xl font-medium mb-5' >Get in touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>123434546654</li>
                <li>tejasparkhe43@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/**copyright text */}

        <hr />
        <p className='py-5 text-sm text-center'>copyright goes to tejasparkhe</p>
      </div>
    </div>
  )
}

export default Footer
