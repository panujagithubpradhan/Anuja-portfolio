import React from 'react'
import profile from '../assets/profile.jpg'
import { FaChevronRight } from "react-icons/fa";

function About() {
  return (
    <div id='about' className='py-20 bg-black text-gray-300 z-50'>
        <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
            <div className='flex flex-col md:flex-row gap-20 items-center'>
            {/* Img Section */}
                <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_10px_8px_rgba(0,0,0,0.3)] shadow-blue-500'>
                    <img src={profile} alt="" className='w-[300px] md:w-[800px] rounded-full border-blue-600 border shadow-blue-500' />
                </div>
            {/* Paragraph Section */}
                <div className='p-5 md:p-10 bg-black rounded-md shadow-[0px_0px_10px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
                    <p className='text-lg leading-7 mb-6'>Hi! I'm Anuja Pradhan ,
                     a passionate MERN Full-Stack Developer with expertise in MERN stack .
                      With a strong foundation in mordern web development and an eye for details . 
                      I created elegant , user-friendly website to meet client need.
                    </p>
                    <p className='text-lg leading-7 mb-6'>
                        I am comming to IT background , I've embraced every challenge to prove my skills in development , problem-solving and team work . 
                        I'm always eager to learn and explore new technologies to deliver cutting-edge web experience.  
                    </p>
                    <p className='text-lg leading-7'></p>
                    <div className='mt-5'>
                        <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
                        <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>MS-Word , Excle , Power-Point</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>HTML</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>CSS</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>JavaScript</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>React.js</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Express.js</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Node.js</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>MongoDB</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>SQL</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Redux</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Github</p>
                            <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Tailwind css</p>
                        </div>
                        <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact<FaChevronRight /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About