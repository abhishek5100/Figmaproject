import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Modelcomponent({ isVisible,onClose}) {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, [])

  if (!isVisible) {
    return null
  }
  return (
    <div>
      <div data-aos="zoom-in" className='fixed inset-0 w-[1000px] h-[490px] ml-[455px] mt-[146px] rounded-xl  bg-black bg-opacity-30 flex justify-center items-center'>
        <div className='flex flex-col gap-5 border w-[755px] h-[405px] bg-white p-5 rounded-2xl'>
          <p className='bg-white absolute mt-[-15px] mx-5 text-xl'>DCF Approch</p>
          <div className='border grid grid-cols-3 border-gray-500 shadow-inner rounded-xl w-[714px] h-[180px]'>

            <div className='  w-[180px] h-[110px]'>
              <input type="radio" id="html" name="fav_language" value="HTML" className='my-3 mt-5 mx-2' />
              <label for="html">FCFE</label><br />
              <input type="radio" id="css" name="fav_language" value="CSS" className='my-3 mx-2' />
              <label for="css">FCFE</label><br />
              <input type="radio" id="javascript" name="fav_language" value="JavaScript" className='my-3 mx-2' />
              <label for="javascript">Excess Earnings</label>
            </div>

            <div className=' flex flex-col  items-center col-span-2 w-full] h-[110px]'>
              <p className='my-2 mx-2'>Helper text details about this model in 1-2 line</p>
              <p className='my-2 mx-2'>Helper text details about this model in 1-2 line</p>
              <p className='my-2 mx-2'>Helper text details about this model in 1-2 line</p>
            </div>

            <div className='border flex items-center gap-4 rounded-xl shadow-inner border-gray-400 my-[10px] w-[95%] mx-5 col-span-3 '>
              <input type="radio" id="javascript" name="fav_language" value="JavaScript" className='my-3 mx-1' />
              <label for="javascript">Going concern</label>
              <input type="radio" id="javascript" name="fav_language" value="JavaScript" className='my-3 mx-1' />
              <label for="javascript">Finite Projection</label>
            </div>

          </div>



          <div className='border flex  border-gray-500 rounded-xl w-[714px] h-[145px]'>
            <div className='  w-[180px] '>
              <input type="radio" id="html" name="fav_language" value="HTML" className='my-3 mt-5 mx-2' />
              <label for="html">FCFE</label><br />
              <input type="radio" id="css" name="fav_language" value="CSS" className='my-3 mx-2' />
              <label for="css">FCFE</label><br />
              <input type="radio" id="javascript" name="fav_language" value="JavaScript" className='my-3 mx-2' />
              <label for="javascript">Excess Earnings</label>
            </div>
            <div className='flex  flex-col items-center ml-[120px]'>
              <p className='my-2 mx-2'>Helper text details about this model in 1-2 line</p>
              <p className='my-2 mx-2'>Helper text details about this model in 1-2 line</p>
              <p className='my-2 mx-2'>Helper text details about this model in 1-2 line</p>
            </div>


          </div>

  {/* buttons here  */}
          <div className='flex justify-between '>
            <input type="file" className=' w-fit' />
            <button onClick={()=>onClose()} className='p-1 px-4 rounded bg-[#0CD18F] text-white'>Cancel</button>
            <button className='p-1 px-4 rounded bg-[#0CD18F] text-white'>submit</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Modelcomponent
