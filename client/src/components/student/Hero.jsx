import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'
const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7
    md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70 '>
      <h1 className='md:text-[36px] md:leading-[44px] text-[26px] leading-[36px] relative font-bold text-gray-800 max-w-3xl mx-auto' >Empower your future with the courses designed to 
        <span className='text-blue-600  ' > fit your choice.</span> <img src={assets.sketch} alt="sketch" 
      className='md:block hidden absolute -bottom-7 right-0' /> </h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto ' >
        We bring together the best educators and students to create a vibrant learning community and a supportive environment for all.
      </p>

      <p className='md:hidden block text-gray-500 max-w-sm mx-auto ' >
        We bring together the best educators and students to create a vibrant learning community and a supportive environment for all.
      </p>
      <SearchBar />
    </div>
  )
}

export default Hero