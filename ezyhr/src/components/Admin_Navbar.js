import React, { useEffect, useState } from 'react'
import './components_Style/navbar.css'


//icons
import user from '../icons/currentuser.svg'
import jobprofile from '../icons/bag.svg'
import vacancy from '../icons/vacancy.svg'
import notifications from '../icons/notification.svg'
import applicant from '../icons/applicant.svg'
import arrow from '../icons/arrow.svg'
import dashboard from '../icons/dashboard.svg'
import achieve from '../icons/achievements.svg'
//import applications from '../icons/applications.svg'
export default function Admin_navbar() {
  const [expand, setexpand] = useState(false)
  const [click, setclick] = useState(0)

  return (
    <div>
      <div className={`${expand ? "w-72" : "w-24"} bg-gray-100 duration-300 shadow-1xl h-screen align-middle relative px-6 py-7`}>
        <img src={arrow} alt="expand" className={`${expand ? "rotate-180" : "rotate-0"} w-8 absolute -right-3 top-6 cursor-pointer`} onClick={() => setexpand(!expand)} />

        <div className='h-2 flex gap-x-1'>
          <img src={user} alt="role" className={`w-8 h-8`} />
          <span className={`${!expand && "scale-0"} text-gray-900 font-bold align-middle py-1 duration-300 origin-left text-2xl`}>HR Manager</span>
        </div>
        <br />
        <div className={` ${click==0 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 mt-8 px-2 py-1  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(0)}>
          <img src={dashboard} className="w-8 h-8" />
          <span className={`${!expand && "scale-0"}  pl-4 font-bold align-middle py-1 duration-300 origin-left text-xl`}>Dashboard</span>
        </div>



        <div className={`${click==1 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(1)}>
          <img src={notifications} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Notifications</span>
        </div>
        
        <div className={`${click==2 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(2)}>
          <img src={vacancy} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Vacancy</span>
        </div>

        <div className={`${click==3 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(3)}>
          <img src={applicant} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Applicants</span>
        </div>

        <div className={`${click==4 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 h-10 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(4)}>
          <img src={jobprofile} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Attandance </span>
        </div>

        <div className={`${click==5 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 h-10 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(5)}>
          <img src={jobprofile} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Bonus $Increments</span>
        </div>        

        <div className={`${click==6 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(6)}>
          <img src={jobprofile} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Peformance</span>
        </div>

        <div className={`${click==7 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(7)}>
          <img src={jobprofile} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Meetings</span>
        </div>

        <div className={`${click==8 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(8)}>
          <img src={user} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Profiles</span>
        </div>

        <div className={`${click==9 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 h-10 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(9)}>
          <img src={achieve} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Goals & Targets</span>
        </div>

        <div className={`${click==10 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(10)}>
          <img src={jobprofile} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Reports</span>
        </div>

        <div className={`${click==11 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(11)}>
          <img src={jobprofile} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Evaluations</span>
        </div>

        <div className={`${click==12 ? "text-blue-700 bg-gray-200":"text-gray-700"} flex gap-x-0 h-10 mt-4 px-2 py-0  hover:bg-gray-200 cursor-pointer rounded-lg`} onClick={()=> setclick(12)}>
          <img src={jobprofile} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-semibold align-middle  duration-300 origin-left text-xl`}>Password change</span>
        </div>

        <div className={`${click==13 ? "text-red-700 bg-gray-200":"text-red-700"} flex gap-x-0 h-10 mt-4 px-2 py-0  hover:bg-red-100 cursor-pointer rounded-lg`} onClick={()=> setclick(13)}>
          <img src={jobprofile} className={`w-7 h-7 my-1`} />
          <span className={`${!expand && "scale-0"}  pl-4 py-1 font-bold align-middle  duration-300 origin-left text-xl`}>Sign Out</span>
        </div>






      </div>
    </div>
  )
}
