import React from 'react'
import { Home, Loan, More, Roll, Yee } from '../assests/icons/icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full mt-10 h-[100px] bg-white shadow-2xl'>
       <div className='w-[90%] flex justify-between mx-auto pt-7'>
          <div>
            <Link to='/'>
            <Home />
            <span>Home</span>
            </Link>
          </div>
          <div>
            <Link to='/employee'>
            <Yee />
            <span>Employee</span>
            </Link>
          </div>
          <div>
            <Roll />
            <span>Payroll</span>
          </div>
          <div>
            <Loan />
            <span>Loans</span>
          </div>
          <div>
            <More />
            <span>More</span>
          </div>
       </div>
    </div>
  )
}

export default Footer