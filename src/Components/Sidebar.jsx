import React from 'react'
import { MdWebhook } from "react-icons/md";
import { IoAlarmSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { TbProgress } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";
import { PiBatteryVerticalFull } from "react-icons/pi";
import { MdOutlineReport } from "react-icons/md";

function Sidebar() {
  return (
    <>
      <div dir="rtl" className='w-[100px] border h-[944px] flex flex-col gap-3 rounded-s-xl bg-gradient-to-t from-green-400 to-indigo-400 ' >
        <div dir="ltr" className='border flex justify-center items-center flex-col mt-16 rounded-s-xl ...  bg-white h-[60px] w-[100px]'>
          <span><MdWebhook className='text-[#0CD18F]' /></span>
          <span className='text-[#3355DD] text-[14px]'>Valutions</span>
        </div>
        <div className='flex justify-center items-center flex-col   h-[60px] w-[100px]'>
          <span><IoAlarmSharp className='text-white' /></span>
          <span className='text-white text-[14px]'>Activity</span>
        </div>
      </div>

      {/* valutions of company-line */}

      <div className=' flex items-center ml-[100px] relative top-[-920px]'>
        <span className='text-xl text-[#4B6DF3] mx-5'>Valution of company</span>
        <div className='border w-[78%] '></div>
      </div>

      {/* buttons */}


      <div className=' flex flex-col items-center  gap-10 justify-evenly h-[600px] ml-[100px] w-[250px] relative top-[-900px]'>

        <div className='w-[200px] h-[86px] bg-[#baf3e0] border border-[#0CD18F] rounded-xl flex flex-col justify-center items-center'>
          <span className='mr-[30px] text-[#464646]'>Company Details</span>
          <div className='flex items-center gap-4 mr-[30px]'>
            <span className='bg-[#50db7e] w-[30px] h-[30px] flex justify-center items-center rounded-full'><FaCheck className='text-xl text-white' /></span>
            <button className='p-[3px] px-3 rounded bg-[#0CD18F] text-[13px] text-[white]'>Completed</button>
          </div>
        </div>

        <div className='w-[200px] h-[86px] bg-[#4B6DF3] border rounded-xl flex flex-col justify-center items-center'>
          <span className='mr-[30px] text-[white]'>Model inputs</span>
          <div className='flex items-center gap-4 mr-[30px]'>
            <span className='bg-[#50db7e] border border-white w-[30px] h-[30px] flex justify-center items-center rounded-full'><TbProgress className='text-xl text-white' /></span>
            <button className='p-[3px] px-3 rounded bg-[#9dabe1] text-[13px] text-[white]'>in Progress</button>
          </div>
        </div>

        <div className='w-[200px] h-[86px] border rounded-xl flex flex-col justify-center items-center'>
          <span className='mr-[30px] '> Review Form </span>
          <div className='flex items-center gap-4 mr-[30px]'>
            <span className='bg-white shadow-xl  border border-white w-[30px] h-[30px] flex  justify-center items-center rounded-full'><FiFileText className='text-xl' /></span>
            <button className='p-[3px] px-3 rounded bg-[#b1b6c8] text-[13px] text-[#4B6DF3]'>Pending</button>
          </div>
        </div>

        <div className='w-[200px] h-[86px] border rounded-xl flex flex-col justify-center items-center'>
          <span className='mr-[30px] '>Evaluate Result</span>
          <div className='flex items-center gap-4 mr-[30px]'>
            <span className='bg-white shadow-xl border  w-[30px] h-[30px] flex justify-center items-center rounded-full'><PiBatteryVerticalFull className='text-xl' /></span>
            <button className='p-[3px] px-3 rounded bg-[#b1b6c8] text-[13px] text-[#4B6DF3]'>Pending</button>
          </div>
        </div>

        <div className='w-[200px] h-[86px] border rounded-xl flex flex-col justify-center items-center'>
          <span className='mr-[30px] '>Report Details</span>
          <div className='flex items-center gap-4 mr-[30px]'>
            <span className='bg-white shadow-xl  w-[30px] h-[30px] flex justify-center items-center rounded-full'><MdOutlineReport className='text-xl' /></span>
            <button className='p-[3px] px-3 rounded bg-[#b1b6c8] text-[13px] text-[#4B6DF3]'>Pending</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sidebar
