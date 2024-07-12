import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function ApplicantInfo() {
  useEffect(() => {
    AOS.init({
      duration: 500, // You can adjust this value for animation duration
    });
  }, []);
  const location = useLocation()
  const Ref = location.state || {}

  return (
    <div className='  text-left mt-4 bg-slate-100 rounded-xl h-95' data-aos="fade-up">
      <div className='pl-4 pt-4 text-gray-600'>
        <span className='text-gray-700 font-c17 font-semibold'>Applicants &gt; </span>
        <span className='font-semibold font-c17'>Applicant Info</span>
        <Link to="/Applicants"><span className=' float-right mr-32 rounded-xl bg-blue-600 text-white w-32 text-center px-6 py-2 duration-300 hover:bg-blue-700' >Back</span></Link>
      </div>
      <div className='flex w-auto'>
        <div className=' bg-white w-7/12  ml-8 mt-12 text-center rounded-xl py-4 mb-2'>
          <div className=' text-left pl-8 text-2xl font-semibold'>Basic info :</div>
          <div className='text-gray-900 font-bold text-5xl pt-4'>{Ref[0]}</div>
          <div className='text-slate-600 font-semibold text-xl py-4'>Reference ID - {Ref[3]}</div>
          <div className='bg-gray-300 w-96 h-96 ml-24 rounded-full'>
            <img src="" alt="" />
          </div>
          <div className='pt-10 text-2xl '>Looking Position - {Ref[1]}</div>
          <div className='pt-4 text-xl'>Applied On - {Ref[2]}</div>

        </div>
        <div className=' bg-white w-cw95 h-ch800 ml-8 mt-12 mb-2  rounded-xl overflow-auto'>
          <div className='pt-4 text-left pl-8 text-2xl font-semibold'>Qualification Info :</div>
          <div className='pt-4 text-left pl-8'>
            <div className='bg-gray-100 mx-4 rounded-xl py-2 my-2'>``
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Experience In Field :</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; 2 Years</div>
            </div>

            <div className='bg-gray-100 mx-4 rounded-xl py-2 mt-4'>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Experience and Previous Worked Companies:</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; XYZ technologies - QA</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; 98z - Java Developer</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; Worked  2 Years as a  Visiting Lecturer at Sliit</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; Worked on 3 major Projects at freelancer</div>
            </div>

            <div className='bg-gray-100 mx-4 rounded-xl py-2 mt-4'>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Education :</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; GCE A/L at Royal College, Colombo</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; Deploma In English</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; BSc. Hon's in IT at University Of Moratuwa</div>
            </div>

            <div className='bg-gray-100 mx-4 rounded-xl py-2 mt-4'>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Skills :</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; Java</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; Web development(React)</div>
              <div className='text-c16 pl-36 text-gray-600 pt-2'>&#8226; Mobile App Development</div>
            </div>
            <div className='bg-gray-100 mx-4 rounded-xl py-2 mt-4'>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Submissions :</div>
              <div className='ml-36 bg-blue-600 w-40 text-center text-white py-2 rounded-xl hover:bg-blue-700 hover:scale-105 duration-300 my-2'>Download CV</div>
            </div>

          </div>
          <div className='pt-12 text-left pl-8 text-2xl font-semibold'>Personal Info :</div>
          <div className='pt-4 text-left pl-8'>
            <div className='bg-gray-100 mx-4 rounded-xl py-2 mt-4 '>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Location:</div>
              <div className='text-c16 pl-24 text-gray-600 pt-2'>&#8226; Katubadda, Moratuwa Sri Lanka</div>
            </div>

            <div className='bg-gray-100 mx-4 rounded-xl py-2 mt-4 '>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Date Of Birth:</div>
              <div className='text-c16 pl-24 text-gray-600 pt-2'>&#8226; 5  June 1999 (25 Years old)</div>
            </div>

            <div className='bg-gray-100 mx-4 rounded-xl py-2 mt-4 '>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>NIC or Psspoirt ID:</div>
              <div className='text-c16 pl-24 text-gray-600 pt-2'>&#8226; 200*********</div>
            </div>
          </div>

          <div className='pt-12 text-left pl-8 text-2xl font-semibold'>Contact Info :</div>
          <div className='pt-4 text-left pl-8'>
            <div className='bg-gray-100 mx-4 rounded-xl py-2 mt-4 '>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Phone :</div>
              <div className='text-c16 pl-24 text-gray-600 pt-2'>&#8226; 071-444-3333</div>
              <div className='text-c16 pl-24 text-gray-600 pt-2'>&#8226; 077-555-9988</div>
            </div>

            <div className='bg-gray-100 mx-4 rounded-xl py-2 mt-4 '>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Email:</div>
              <div className='text-c16 pl-24 text-gray-600 pt-2'>&#8226;  personapply@gmail.com</div>
            </div>

            <div className='bg-gray-100 mx-4 rounded-xl py-2 my-4 '>
              <div className='text-c20 font-semibold text-gray-800 pl-4'>Linked In:</div>
              <div className='text-c16 pl-24 text-gray-600 pt-2 '>&#8226; LinkedIn/#person</div>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}
