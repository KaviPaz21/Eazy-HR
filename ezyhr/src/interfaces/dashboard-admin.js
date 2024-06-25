import React from 'react'
import { format } from 'date-fns';
import Admin_navbar from '../components/Admin_Navbar'
import { now } from 'three/examples/jsm/libs/tween.module.js'
import CountUp from 'react-countup'
import './styles.css'

import Dashboardresigntable from '../components/dashboard-resign-table';
import Dashboardleavetable from '../components/dashboard-leave-table';
import Dashboardmeetings from '../components/components_Style/dashboard-meetings';

export default function Dashboardadmin() {
  const date = Date()
  const formattedDate = format(date, 'EEE MMM dd yyyy')
  const attendance_percentage= ((101/142)*100).toFixed(1)
  return (
    <div className='flex text-center h-screen overflow-hidden'>
      <Admin_navbar className="left-0 fixed" />
      <div className={`ml-0 my-4 top-5 bg-slate-50 rounded-xl w-10/12 h-auto overflow-y-auto hide-scrollbar`} >


        <div id='line-01' className=' mt-4 flex gap-x-96 pl-4'>
          <div id='welcome_msg' className='pt-8 text-left'>
            <span className='text-black-800 text-2xl font-thin font-serif'>Welcome Back, Pasindu...</span><br />
            <div className='pt-2 text-18nv text-gray-600 font-serif'>Here is an overview of your dashboard today</div>
          </div>

          <div className=' text-right ml-48'>
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
            <div className='pl-5 flex text-left gap-x-14'>
              <div className='text-c17 font-medium pt-5 text-gray-800'>
                <ul>
                  <li className='p-1 '>Pasindu Kavinda <br /> <div className='text-sm text-gray-500 font-normal'>AI Engineer</div></li>
                  <li className='p-1'>JK Fernando <br /> <div className='text-sm text-gray-500 font-normal'>UI/UX Designer</div></li>
                  <li className='p-1'>Asitha Perera <br /> <div className='text-sm text-gray-500 font-normal'>UI/UX Designer</div></li>
                  <li className='p-1'>Ashoka Pathirana<br /> <div className='text-sm text-gray-500 font-normal'>UI/UX Designer</div> </li>
                </ul>
              </div>

              <div className='text-c16 font-normal pt-5 text-'>
                <ul className='ml-10'>
                  <li className=' mt-2 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium hover:bg-blue-600 hover:text-white duration-300'> 09.00-09.30</li>
                  <li className=' mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</li>
                  <li className=' mt-6 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</li>
                  <li className=' mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</li>
                </ul>
              </div>
            </div>
            <button className='py-1 ml-6 px-2 mt-9 bg-blue-600 text-white font-normal rounded-md hover:scale-105 duration-300'>See More...</button>
          </div>


          <div id='resignations' className='ml-2 bg-white rounded-xl p-5 text-left'>
            <span className='text-c20 font-bold text-black text-left'>Submitted Resignations</span>
            <div>
              <Dashboardresigntable />
            </div>
            <button className='py-1 ml-6 px-2 mt-3 bg-blue-600 text-white font-normal rounded-md hover:scale-105 duration-300'>See More...</button>

          </div>

        </div>


        <div id='line3' className=' mt-12 flex flex-auto gap-x-2 mx-2 rounded-xl h-32 w-auto'>

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
