import React from 'react'
import Anuja from '../assets/Anuja.png'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='bg-black text-white py-4 text-center border-t-2 flex flex-row justify-around'>
      <div className='w-28 h-24'>
        <img src={Anuja} alt="logo" />
      </div>
      <p className='text-center mt-10 '>&copy; {new Date().getFullYear()} Anuja Pradhan. All rights reserved.</p>
      <div className='w-28'>
        <img src={logo} alt="" />
      </div>
    </footer>
  )
}

export default Footer