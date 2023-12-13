import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import logo from "./images/figmalogo.jpg"
import { FaSortDown } from "react-icons/fa6";
import Sidebar from './Sidebar';




function Navbar() {
  return (
    <>
      <div className='bg-[#fff] align-middle  shadow-lg h-[80px] max-w-[1366px] mx-auto'>
        <div className=' gap-4 w-full h-full  flex '>

          <div className='w-[40px] h-[40px] flex justify-center rounded-full bg-[#c6ece0] text-[#0CD18F] items-center relative  top-[23px] left-[997px]'>
            <FaRegBell className='text-2xl' />
          </div>


          <div className='w-[40px] h-[40px] flex justify-center rounded-full bg-[#c6ece0] text-[#0CD18F] items-center relative  top-[23px] left-[997px]'>
            <IoMoon className='text-2xl' />
          </div>


          <div className='w-[40px] h-[40px] flex justify-center rounded-full bg-[#c6ece0] text-[#0CD18F] items-center relative  top-[23px] left-[997px]'>
            <CiSettings className='text-2xl' />
          </div>

          <div className='w-[60px] h-[60px] flex border-black  justify-center rounded-full items-center relative  top-[13px] left-[997px] '>
            <img src={logo} alt="" className='' />
          </div>
          <div className='w-[80px] h-[30px]  flex  justify-center items-center relative  top-[24px] left-[980px]'>
            <span className='text-[#4B6DF3] text-[xl]'>Joo muri</span>
          </div>

          <div className=' flex justify-center items-center h-fit relative  top-[30px] left-[980px]'>
            <span><FaSortDown /></span>
          </div>
        </div>

        {/* Here i called sibebar */}
        <Sidebar />
      </div>
    </>
  )
}

export default Navbar
