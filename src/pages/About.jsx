import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div >
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.logo} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis dolore obcaecati dicta, magnam iure deleniti quidem molestias totam expedita aut est officiis inventore quam accusamus illum iusto! Quidem, suscipit sed. Numquam facilis, vitae quod accusamus sapiente tenetur sunt! Aperiam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo, sint minima facilis sunt qui pariatur et veniam nisi magni?</p>
          <b className='text-gray-800'>Our vision</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestiae molestias nulla ipsum non voluptate id assumenda nam perferendis ratione.</p>
        </div>
      </div>


      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all furation-300 text-gray-600 cursor-pointer'>
            <b>Efficiancy</b>
            <p>b atque laudantium porro accusantium cupiditate unde facilis! Tempora dolor voluptates pariatur quis inventore dicta dolorum, similique iusto amet. Ad!</p>
        </div>


        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all furation-300 text-gray-600 cursor-pointer'>
            <b>convenience</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, illum.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all furation-300 text-gray-600 cursor-pointer'>
          <b>personalization</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, at.</p>
        </div>
      </div>
    </div>
  )
}

export default About
