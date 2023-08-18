import React from 'react'
import Logo from '../assests/icons/Company Logo.svg'
import Icon from  '../assests/icons/Ellipse 12.svg'
import  Bell from  '../assests/icons/Vector.svg'

const NavBar = () => {
  return (
    <div className='h-20  w-[81%] ml-auto shadow-md nav'>
         <div className='flex justify-between'>
            <img src={Logo} alt='Logo' className='ml-9 mt-2' />
            <div className='flex mr-12'>
            <img src={Bell} alt='Logo' className='ml-9 mt-7 w-[18px] h-[18px]' />
            <img src={Icon} alt='Logo' className='ml-9 mt-2 mr-5' />
            <p className='text-[#2b2b2b] font-bold pt-3 w-[126px]'>Kalu Abasiama <span className='text-[#898989]'>Admin</span></p>
            </div>
         </div>

    </div>
  )
} 

export default NavBar