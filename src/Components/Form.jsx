import React, { useState } from 'react'
import { MdReportGmailerrorred } from "react-icons/md";
import { GrCaretNext } from "react-icons/gr";
import Modelcomponent from './ModelComponent';



function Form() {

  const [showModel, setShowModel] = useState(false)


  return (
    <div >


      <div className='border rounded-xl shadow-inner ... max-w-[1011px] ml-[450px] grid grid-cols-2 items-center my-16 h-[495px]'>
        <div className='col-span-2 flex text-xl items-center mx-5'>
          Company Details<div className='border w-[80%] mx-2'></div>

        </div>
        <div className=' border w-[480px] h-[70px] shadow-inner ...   rounded-3xl mx-3'>
          <span className='bg-white mx-10 absolute my-[-14px] flex justify-center items-center text-slate-500'>Company Name <MdReportGmailerrorred /></span>
          <input type="text" className='w-[95%] h-[70%] mx-2 my-2  outline-none' />
        </div>

        <div className=' border w-[480px] h-[70px] shadow-inner ...  rounded-3xl mx-3'>
          <span className='bg-white mx-10 absolute my-[-14px] flex justify-center items-center text-slate-500'>Valution date<MdReportGmailerrorred /></span>
          <input type="date" className='w-[95%] h-[85%] mx-2 my-2 outline-none text-slate-500' />
        </div>

        <div className=' border w-[480px] h-[70px] shadow-inner ...  rounded-3xl mx-3'>
          <span className='bg-white mx-10 absolute my-[-14px] flex justify-center items-center text-slate-500'>Reporting Units<MdReportGmailerrorred /></span>
          <select name="" id="" className='w-[95%] h-[85%] mx-2 my-2 outline-none text-slate-500 bg-white'>
            <option value=""></option>
          </select>
        </div>

        <div className=' border w-[480px] h-[70px] shadow-inner ...   rounded-3xl mx-3'>
          <span className='bg-white mx-10 absolute my-[-14px] flex justify-center items-center text-slate-500'>Currency<MdReportGmailerrorred /></span>
          <select name="" id="" className='w-[95%] h-[85%] mx-2 my-2 outline-none text-slate-500 bg-white'>
            <option value=""></option>
          </select>
        </div>

        <div className=' border w-[480px] h-[70px] shadow-inner ...  rounded-3xl mx-3'>
          <span className='bg-white mx-10 absolute my-[-14px] flex justify-center items-center text-slate-500'>Location<MdReportGmailerrorred /></span>
          <input type="text" className='w-[95%] h-[70%] mx-2 my-2  outline-none' />
        </div>

        <div className=' border w-[480px] h-[70px] shadow-inner ...  rounded-3xl mx-3'>
          <span className='bg-white mx-10 absolute my-[-14px] flex justify-center items-center text-slate-500'>Indrustry<MdReportGmailerrorred /></span>
          <select name="" id="" className='w-[95%] h-[85%] mx-2 my-2 outline-none text-slate-500 bg-white'>
            <option value=""></option>
          </select>
        </div>

        <div className=' border w-[480px] h-[70px] shadow-inner ...  rounded-3xl mx-3'>
          <span className='bg-white mx-10 absolute my-[-14px] flex justify-center items-center text-slate-500'>Outstanding Shares<MdReportGmailerrorred /></span>
          <input type="text" className='w-[95%] h-[70%] mx-2 my-2  outline-none' />
        </div>

        <div className=' border w-[480px] h-[70px] shadow-inner ...  rounded-3xl mx-3'>
          <span className='bg-white mx-10 absolute my-[-14px] flex justify-center items-center text-slate-500'>Tax Rates<MdReportGmailerrorred /></span>
          <select name="" id="" className='w-[95%] h-[85%] mx-2 my-2 outline-none text-slate-500 bg-white'>
            <option value=""></option>
          </select>
        </div>

        <button onClick={() => {setShowModel(true) }} className='p-3 bg-[#0CD18F] text-bold text-white w-[50%] mx-10 rounded'>Select valuation Model</button>



        <button  className='p-3 bg-[#0CD18F] text-bold text-white w-[20%] mx-[350px] flex justify-center items-center rounded'><GrCaretNext />Next</button>

      </div>
      <Modelcomponent isVisible={showModel} onClose={()=>setShowModel(false)}/>
    </div>


  )
}

export default Form
