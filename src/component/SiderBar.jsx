import React from 'react'
import Frame from '../assests/images/Frame 48096183.svg'
import { Book, Compliance, Dash, Loan, Roll, Settings, Support, Wallet, Yee } from '../assests/icons/icons'
import { Link } from 'react-router-dom'

const SiderBar = () => {
  return (
    <div className='w-[272px] h-[852px] shadow-lg'>
       <img src={Frame} alt='frame' />
       <div className='mt-5 cursor-pointer'>
           <div className='bg-[#E7E8E7] border-b-2 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex h-[60px]'>
              <Dash />
              <p className='text-[16px] font-medium'>Dashboard</p>
           </div>
       </div>
       <div className='cursor-pointer'>
        <Link to='/wallet'>
           <div className='bg-[#fff] border-b-2 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex h-[60px]'>
              <Wallet />
              <p className='text-[16px] font-medium'>Wallet</p>
           </div>
           </Link>
       </div>
       <div  className='cursor-pointer'>
           <div className='bg-[#fff] border-b-2 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex h-[60px]'>
              <Yee />
              <p className='text-[16px] font-medium'>Employee Management</p>
           </div>
       </div>
       <div  className='cursor-pointer'>
           <div className='bg-[#fff] border-b-2 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex h-[60px]'>
              <Roll />
              <p className='text-[16px] font-medium'>Payroll</p>
           </div>
       </div>
       <div  className='cursor-pointer'>
           <div className='bg-[#fff] border-b-2 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex h-[60px]'>
              <Compliance />
              <p className='text-[16px] font-medium'>Compliance</p>
           </div>
       </div>
       <div  className='cursor-pointer'>
           <div className='bg-[#fff] border-b-2 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex h-[60px]'>
              <Loan />
              <p className='text-[16px] font-medium'>Quick Loan</p>
           </div>
       </div >
       <div  className='cursor-pointer'>
           <div className='bg-[#fff] border-b-2 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex h-[60px]'>
            <Book />
              <p className='text-[16px] font-medium'>Book Keeping</p>
           </div>
       </div>
       <hr className='w-[85%] mx-auto mt-20'/>
       <div  className='cursor-pointer'>
           <div className='bg-[#fff] border-b-2 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex h-[60px]'>
            <Support />
              <p className='text-[16px] font-medium'>Support</p>
           </div>
       </div>
       <div className='cursor-pointer'>
           <div className='bg-[#fff] border-b-2 outline-offset-2 border-solid border-[#F0F7EB80] py-5 px-6 gap-3 flex h-[60px]'>
            <Settings />
              <p className='text-[16px] font-medium'>Settings</p>
           </div>
       </div>
    </div>
  )
}

export default SiderBar