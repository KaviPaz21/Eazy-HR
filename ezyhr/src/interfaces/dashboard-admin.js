import React from 'react'
import { format } from 'date-fns';
import Admin_navbar from '../components/Admin_Navbar'
import { now } from 'three/examples/jsm/libs/tween.module.js'
export default function Dashboardadmin() {
  const date = Date()
  const formattedDate = format(date, 'EEE MMM dd yyyy')
  return (
    <div className='flex text-center'>
      <Admin_navbar className="left-0" />
      <div className={`ml-0 mt-4 top-5 bg-slate-50 rounded-xl w-10/12`} >
        

        <div id='line-01' className=' mt-4 flex gap-x-72 pl-4'>
          <div id='welcome_msg' className='pt-8 text-left'>
            <span className='text-black-800 text-3xl font-thin font-serif'>Welcome Back, Pasindu...</span><br />
            <div className='pt-2 text-xl text-gray-600 font-serif'>Here is an overview of your dashboard today</div>
          </div>
          <div id='welcome_msg' className='pt-6 text-center' >
            <span className='text-xl font-sans text-gray-500'>Today - {formattedDate}</span><br />
            <button className='text-white bg-blue-700 px-10 mt-2 py-2 rounded-xl text-nv18 font-sans font-semibold hover:scale-105 hover:bg-blue-600 duration-300'> Add Reminders</button>
          </div>
          <div className='pt-8 origin-center'>
            <button className='text-white bg-blue-700 px-5 mx-1 py-3 rounded-xl text-nv18 font-sans font-semibold hover:scale-105 hover:bg-blue-600 duration-300'> Schedule Meeting</button>
            <button className='text-white bg-red-800 px-5 mx-1 py-3 rounded-xl text-nv18 font-sans font-semibold hover:scale-105 hover:bg-red-600 duration-300'> Cancel Meeting</button>
          </div>

        </div>



        <div id='line-02' className=' mt-12 flex flex-auto gap-x-7 mx-8 rounded-xl h-32 w-auto'>
          <div className='bg-blue-800 w-72  py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'>12</div>
            <span className='mt-4 text-xl '>Total Employees</span>
          </div>
          <div className='bg-blue-800 w-72 py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'>12</div>
            <span className='mt-4 text-xl '>Attendance On Today</span>
          </div>
          <div className='bg-blue-800 w-72 py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'>12</div>
            <span className='mt-4 text-xl '>Recent Applications</span>
          </div>
          <div className='bg-blue-800 w-72 py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'>12</div>
            <span className='mt-4 text-xl '>Pending Leaves</span>
          </div>
          <div className='bg-blue-800 w-72 py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'>12</div>
            <span className='mt-4 text-xl '>Employees on Leave</span>
          </div>


        </div>



      </div>
    </div>
  )
}
