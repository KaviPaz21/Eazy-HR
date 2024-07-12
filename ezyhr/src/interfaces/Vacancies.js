import React, { useState , useEffect} from 'react'
import PublishedVacancies from '../components/Published-vacancies'
import AddVacancy from '../components/AddVacancy'
import { Link } from 'react-router-dom'
import  AOS  from 'aos'
import 'aos/dist/aos.css';

export default function Vacancies() {

    const [current, setcurrent] = useState("")
    const [add, setadd]= useState(false)
    useEffect(() => {
      AOS.init({
        duration: 500, // You can adjust this value for animation duration
      });
    }, []);
    
    return (
        <div className='flex flex-col text-left mt-4 bg-slate-100 rounded-xl' data-aos="fade-up">

            <div className='pl-4 pt-4 text-gray-600'>
                <span className='text-gray-700 font-c17 font-semibold'>Vacancies &gt;</span>
                <span className='font-semibold font-c17'>{current}</span>
            </div>

            <div className={`${add && "scale-0"} w-cw95 ml-4 pl-8 mt-8 py-12 rounded-xl bg-white duration-300`}>
                <span className=' font-sans font-semibold text-c20 pr-12'>Publish a New Job Vacancy :</span>
                <Link to='/Vacancy/Publish_Vacancy'> <span className='bg-blue-700 w-32 text-white px-8 rounded-xl py-2 duration-300 hover:scale-105 hover:bg-blue-800'> Add +</span></Link>
            </div>  

            

            <div className=' ml-4 pl-8 pt-8 mt-12 w-cw95 rounded-xl bg-white'>
                <span className='text-2xl  font-semibold'>Published Vacancies</span>
                <PublishedVacancies/>
            </div>

        </div>
    )
}
/*<h1>My Two-Dimensional List</h1>
      <ul>
        {(() => {
          const elements = [];
          for (let i = 0; i < twoDimensionalList.length; i++) {
            const sublist = twoDimensionalList[i];
            
              elements.push(<li >{sublist}</li>);
            
          }
          return elements;
        })()}
      </ul>
        </div>
    )*/