import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

export default function Attendance() {
  const [view, setview] = useState('Previous Attendance records')
  const [log, setlog] = useState(true)
  const [today, settoday] = useState(false)
  const [tleave, settleave] = useState(false)
  const [lman, setlman] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 500, // You can adjust this value for animation duration
    });
  }, []);
  const [active, setactive] = useState(1)
  const activeate = (K) => {
    setlog(false)
    settoday(false)
    settleave(false)
    setlman(false)
    setactive(K)
    if (K === 1) { setview('Previous Attendance records'); setlog(true) }
    else if (K === 2) { setview('Today Attendance'); settoday(true) }
    else if (K === 3) { setview('Today Leaves'); settleave(true) }
    else { setview('Leave Management'); setlman(true) }


  }
  const Percentage = 81
  return (
    <div>
      <div className='flex flex-col bg-slate-100 text-left mt-4 rounded-xl w-cw98 pb-4 h-auto' data-aos="fade-up">
        <div className='pl-4 pt-4 text-gray-600'>
          <span className='text-gray-700 font-c17 font-semibold'>Attendance &gt; </span>
          <span className='font-semibold font-c17'>{view}</span>
        </div>
        <div className='pt-0 ml-4 text-4xl '>
          <span>Today Attendance : </span>
          <span className='px-8 text-7xl'  >{Percentage} %</span>
        </div>
        <div className='mt-4 bg-blue-700 mx-4 py-4 text-white rounded-xl text-2xl text-center cursor-pointer'>
          <span className={`${active === 1 ? "pb-6 font-semibold" : "pb-4"} px-16  duration-300 bg-blue-700  rounded-xl`} onClick={() => activeate(1)} >Previous Attendance Records</span>
          <span className={`${active === 2 ? "pb-6 font-semibold" : "pb-4"} px-16  duration-300 bg-blue-700  rounded-xl`} onClick={() => activeate(2)} >Today Attendance</span>
          <span className={`${active === 3 ? "pb-6 font-semibold" : "pb-4"} px-16  duration-300 bg-blue-700  rounded-xl`} onClick={() => activeate(3)} >Today Leaves</span>
          <span className={`${active === 4 ? "pb-6 font-semibold" : "pb-4"} px-16 duration-300 bg-blue-700  rounded-xl`} onClick={() => activeate(4)} >Leave request Management</span>
        </div>

      </div>
      <div className='my-4 py-4 bg-slate-100 w-cw98 h-lvh relative rounded-xl text-left'>
        <div className={`${!log && " scale-0"} mt-4 ml-8 duration-200 absolute bg-white w-cw96 rounded-xl py-2 px-4`}>
          <div className='text-2xl font-semibold py-4 '>Attendance Log View</div>



        </div>
        <div className={`${!today && " scale-0"} mt-4 ml-8 duration-200 absolute bg-white w-cw96 rounded-xl py-2 px-4`}>
          <div className='text-2xl font-semibold  '>Today Attendance View</div>
        </div>
        <div className={`${!tleave && " scale-0"} mt-4 ml-8 duration-200 absolute bg-white w-cw96 rounded-xl py-2 px-4`}>
          <div className='text-2xl font-semibold  '>Today Leaves </div>
        </div>
        <div className={`${!lman && " scale-0"} mt-4 ml-8 duration-200 absolute bg-white w-cw96 rounded-xl py-2 px-4`}>
          <div className='text-2xl font-semibold  '>Leave Manager</div>
        </div>

      </div>

    </div>
  )
}
