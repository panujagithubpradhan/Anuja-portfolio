import React from 'react';
import { FaUserCircle } from "react-icons/fa";

function ResponsiveMenu({showMenu , setShowMenu}) {
  return (
    <div className={`${showMenu ? 'left-0':'-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-black px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
        <div className='flex flex-col justify-start gap-3'>
            <FaUserCircle size={50} className='text-white' />
            <div>
                <h1 className='text-white'>Hello User</h1>
                <h1 className='text-sm text-slate-500'>Premium User</h1>
            </div>
            <nav className='mt-12'>
                <ul className='flex flex-col gap-7 text-lg font-semibold text-white'>
                    <a href="/"><li className='cursor-pointer'>Home</li></a>
                    <a href="#about"><li onClick={() => setShowMenu(false)} className='cursor-pointer'>About</li></a>
                    <a href="#education"><li onClick={() => setShowMenu(false)} className='cursor-pointer'>Education & Experience</li></a>
                    <a href="#project"><li onClick={() => setShowMenu(false)} className='cursor-pointer'>Project</li></a>
                    <a href="#contact"><button onClick={() => setShowMenu(false)} className='px-3 py-1 cursor-pointer rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_12px_#33CCCC,0_0_12px_#33CCCC] shadow-blue-500 border-blue-400'>Contact</button></a>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default ResponsiveMenu