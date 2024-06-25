import React from 'react'
import { format } from 'date-fns';
import Admin_navbar from '../components/Admin_Navbar'
import { now } from 'three/examples/jsm/libs/tween.module.js'
import CountUp from 'react-countup'
import './styles.css'

import Dashboardresigntable from '../components/dashboard-resign-table';
import Dashboardleavetable from '../components/dashboard-leave-table';
import Dashboardmeetings from '../components/components_Style/dashboard-meetings';
import Dashboardinterviewstable from '../components/components_Style/dashboard-interviews-table';

export default function Dashboardadmin() {
  const date = Date()
  const formattedDate = format(date, 'EEE MMM dd yyyy')
  const attendance_percentage= ((101/142)*100).toFixed(1)
  return (
    <div >
      
      <div className={`ml-0 pl-2 my-4 top-5 bg-slate-100 rounded-xl  h-auto overflow-y-auto hide-scrollbar`} >


        <div id='line-01' className=' mt-4 flex gap-x-96 pl-4'>
          <div id='welcome_msg' className='pt-8 text-left'>
            <span className='text-black-800 text-2xl font-thin font-serif'>Welcome Back, Pasindu...</span><br />
            <div className='pt-2 text-18nv text-gray-600 font-serif'>Here is an overview of your dashboard today</div>
          </div>

          <div className=' text-right ml-96'>
            <span className='font-semibold text-2xl'>Employee attendance :</span>
            <span className='text-8xl font-sans font-bold'><CountUp end={attendance_percentage} duration={3}/>%</span>
          </div>   
         
          {/*<div className='pt-8 origin-center'>
            <button className='text-white bg-blue-700 px-4 mx-1 py-2 rounded-xl text-nv18 font-sans font-semibold hover:scale-105 hover:bg-blue-600 duration-300'> Schedule Meeting</button>
            <button className='text-white bg-red-800 px-4 mx-1 py-2 rounded-xl text-nv18 font-sans font-semibold hover:scale-105 hover:bg-red-600 duration-300'> Cancel Meeting</button>
          </div>*/}

        </div>



        <div id='line-02' className=' mt-12 flex flex-auto gap-x-7 mx-8 rounded-xl h-32 w-auto'>
          <div className='bg-blue-800 w-72  py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'> <CountUp end={142} duration={3} /> </div>
            <span className='mt-4 text-xl '>Total Employees</span>
          </div>
          <div className='bg-blue-800 w-72 py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'><CountUp end={101} duration={3} /></div>
            <span className='mt-4 text-xl '>Attendance On Today</span>
          </div>
          <div className='bg-blue-800 w-72 py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'><CountUp end={12} duration={3} /></div>
            <span className='mt-4 text-xl '>Recent Applications</span>
          </div>
          <div className='bg-blue-800 w-72 py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'><CountUp end={24} duration={3} /></div>
            <span className='mt-4 text-xl '>Pending Leaves</span>
          </div>
          <div className='bg-blue-800 w-72 py-6 px-8 text-center text-white font-sans rounded-2xl'>
            <div className='text-6xl font-bold'><CountUp end={41} duration={3} /></div>
            <span className='mt-4 text-xl '>Employees on Leave</span>
          </div>
        </div>

        <div id='line3' className='w-auto mt-12 flex gap-x-1 ml-2'>
          <div className='ml-2 bg-white rounded-xl p-5 text-left'>
            <span className='text-c20 font-bold text-black text-left'>Upcoming Interviews</span>
            <Dashboardinterviewstable/>
            <button className='py-1 ml-6 px-2 mt-2 bg-blue-600 text-white font-normal rounded-md hover:scale-105 duration-300'>See More...</button>
          </div>


          <div id='resignations' className='ml-2 bg-white rounded-xl p-5 h-auto text-left'>
            <span className='text-c20 font-bold text-black text-left'>Submitted Resignations</span>
            <div>
              <Dashboardresigntable />
            </div>
            <button className='py-1 ml-6 px-2 mt-3 bg-blue-600 text-white font-normal rounded-md hover:scale-105 duration-300'>See More...</button>

          </div>

        </div>


        <div id='line3' className=' mt-12 flex flex-auto gap-x-2 mx-2 rounded-xl h-auto w-auto'>

          <div id='Leaves' className='ml-2 bg-white rounded-xl p-5 text-left'>
            <span className='text-c20 font-bold text-black text-left'>Leave Requests</span>
            <div>
              <Dashboardleavetable />
            </div>
            <button className='py-1 ml-6 px-2 mt-3 bg-blue-600 text-white font-normal rounded-md hover:scale-105 duration-300'>See More...</button>

          </div>

          <div id='Leaves' className='ml-4 bg-white rounded-xl p-5 text-left'>
            <span className='text-c20 font-bold text-black text-left'>Upcoming Meetings</span>
            <div>
              <Dashboardmeetings />
            </div>
            <button className='py-1 ml-6 px-2 mt-3 bg-blue-600 text-white font-normal rounded-md hover:scale-105 duration-300'>See More...</button>

          </div>

        </div>





      </div>
    </div>
  )
}
