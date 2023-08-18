import React from 'react'
import Footer from '../component/Footer'
import { Filter, Menu, More } from '../assests/icons/icons'
import { Image } from '../assests/images/images'

const Employee = () => {
  return (
    <div>
    <div className="mobile">
     <h1 className='text-[22px] mt-20 font-semibold  text-center'>Eazipay’s Team</h1>
     <hr className='w-full mx-auto mt-20'/>
     <div className='w-[86%] mx-auto pt-7'>
     <div className=" flex justify-between  h-12 gap-3 mx-auto rounded-lg border border-solid border-[#e7e8e7]">
        <p className="bg-[#11453B] w-[50%] text-center ml-3 pt-2 text-white h-10 mt-1 rounded-lg">All Employee</p>
        <p className="bg-[#F2F1F1] w-[50%] text-center pt-2 mr-3 text-[##11453B] h-10 mt-1 rounded-lg">Departments</p>
    </div>
    <div className="flex justify-between gap-3 mt-4">
          <div className="w-[90%] flex h-12  rounded-2xl border-2 border-solid border-[#e7e8e7]">
            <input
              type="text"
              className="pl-5 py-2.5 text-[14px] w-[90%] font-normal"
              placeholder="Search Employee"
            />
            {/* <img src={Frame3} alt="frame" /> */}
          </div>
          <div className="w-[10%] text-center gap-3 flex rounded-lg border-2 border-solid border-[#e7e8e7]">
            <Filter />
          </div>
        
        </div>
        <div className='flex justify-between mt-5'>
              <div className='flex gap-3'>
                   <Menu />
                   <More />
                   <span className='text-[#B5B6B5] text-14px'>Archived</span>
              </div>
              <div>
                <input type='checkbox'  />
                <span className='text-[#8D8E8D] pl-3'>Select All</span>
                
              </div>
          </div>

          <div className='bg-[#fff] border-b-4 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex '>
              <div className='flex justify-between gap-2'>
              <Image />
                <h1 className='text-[#292A29] text-[20px] font-medium'>Caleb Nwafor <br/> <span className='text-[#515251] text-[12px] font-normal'> Accountant <br/> Female | Monthly</span></h1>
              </div>
              <h1 className='text-[16px] font-bold text-[#11453B] pt-16'>N550,600.78</h1>
          </div>
        
          <div className='bg-[#fff] border-b-4 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex '>
              <div className='flex justify-between gap-2'>
              <Image />
                <h1 className='text-[#292A29] text-[20px] font-medium'>Caleb Nwafor <br/> <span className='text-[#515251] text-[12px] font-normal'> Accountant <br/> Female | Monthly</span></h1>
              </div>
              <h1 className='text-[16px] font-bold text-[#11453B] pt-16'>N550,600.78</h1>
          </div>
          <div className='bg-[#F0F7EB] rounded-xl  py-5 px-6 gap-3 flex'>
          <div className='flex justify-between gap-2'>
              <Image />
                <h1 className='text-[#292A29] text-[20px] font-medium'>Caleb Nwafor <br/> <span className='text-[#515251] text-[12px] font-normal'> Accountant <br/> Female | Monthly</span></h1>
              </div>
              <h1 className='text-[16px] font-bold text-[#11453B] pt-16'>N550,600.78</h1>
          </div>
          <div className='bg-[#F0F7EB] rounded-xl  py-5 px-6 gap-3 mt-4 flex'>
          <div className='flex justify-between gap-2 '>
              <Image />
                <h1 className='text-[#292A29] text-[20px] font-medium'>Caleb Nwafor <br/> <span className='text-[#515251] text-[12px] font-normal'> Accountant <br/> Female | Monthly</span></h1>
              </div>
              <h1 className='text-[16px] font-bold text-[#11453B] pt-16'>N550,600.78</h1>
          </div>
          <div className='bg-[#fff] border-b-4 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex '>
              <div className='flex justify-between gap-2'>
              <Image />
                <h1 className='text-[#292A29] text-[20px] font-medium'>Caleb Nwafor <br/> <span className='text-[#515251] text-[12px] font-normal'> Accountant <br/> Female | Monthly</span></h1>
              </div>
              <h1 className='text-[16px] font-bold text-[#11453B] pt-16'>N550,600.78</h1>
          </div>
     </div>
    </div>
      {/* Footer */}
    <Footer />
    </div>
  )
}

export default Employee