import React, { useState } from 'react';
import Anuja from '../assets/Anuja.png';
import { HiMenu , HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';


function Navbar() {
    const [showMenu , setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <div className='bg-black w-full py-3 fixed top-0 z-50 -mb-7 border-b-2 shadow-md'>
        <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0'>
            {/* Logo section */}
            <div className=''>
                <a href="/"><img className='w-24 h-24' src={Anuja} alt="" /></a>
            </div>
            {/* Menu Section */}
            <div className='hidden md:block'>
                <ul className='flex gap-7 text-xl items-center font-semibold text-white'>
                    <a href="/"><li className='cursor-pointer'>Home</li></a>
                    <a href="#about"><li className='cursor-pointer'>About</li></a>
                    <a href="#education"><li className='cursor-pointer'>Education & Experience</li></a>
                    <a href="#project"><li className='cursor-pointer'>Project</li></a>
                    <a href="#contact"><button className='px-3 py-1 cursor-pointer rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_12px_#33CCCC,0_0_12px_#33CCCC] shadow-blue-500 border-blue-400'>Contact</button></a>
                </ul>
            </div>
            <div className='md:hidden text-white text-4xl'>
                {
                    showMenu ? <HiMenu onClick={toggleMenu} /> : <HiMenuAlt3 onClick={toggleMenu} />
                }
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default Navbar