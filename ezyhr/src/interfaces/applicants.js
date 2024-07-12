import React,{useEffect} from 'react'
import Applicantstable from '../components/Applicantstable'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Applicants() {

    useEffect(() => {
        AOS.init({
          duration: 500, // You can adjust this value for animation duration
        });
      }, []);
    
    return (

        <div className='flex flex-col text-left mt-4 bg-slate-100 rounded-xl' data-aos="fade-up">

            <div className='pl-4 pt-4 text-gray-600'>
                <span className='text-gray-700 font-c17 font-semibold'>Applicants &gt;</span>
                <span className='font-semibold font-c17'></span>
            </div>




            <div className=' ml-4 pl-8 mb-4 pt-8 mt-12 w-cw95 rounded-xl bg-white'>
                <span className='text-2xl  font-semibold'>All Applicants</span>
                <button className=' float-right mr-32 bg-blue-600 text-white text-c17 py-2 px-4 rounded-xl hover:bg-blue-700 hover:scale-105 duration-300'>Sort by Vacancy</button>
                <Applicantstable/>
       
            </div>

        </div>


    )
}
