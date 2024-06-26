import React, { useState } from 'react'
import PublishedVacancies from '../components/Published-vacancies'
import AddVacancy from '../components/AddVacancy'

export default function Vacancies() {

    const [current, setcurrent] = useState("")
    const [add, setadd]= useState(false)
    
    const viewAddVacancy=()=>{
        setcurrent("Publish Vacancy")
        setadd(!add)
    }
    return (
        <div className='flex flex-col text-left mt-4 bg-slate-100 rounded-xl'>

            <div className='pl-4 pt-4 text-gray-600'>
                <span className='text-gray-700 font-c17 font-semibold'>Vacancies &gt;</span>
                <span className='font-semibold font-c17'>{current}</span>
            </div>

            <div className={`${add && "scale-0"} w-cw92 ml-4 pl-8 mt-8 py-4 rounded-xl bg-white duration-300`}>
                <span className=' font-sans font-semibold text-nv18 pr-12'>Publish New Job Vacancy :</span>
                <button className='bg-blue-700 text-white px-8 rounded-xl py-2 duration-300 hover:scale-105 hover:bg-blue-800' onClick={viewAddVacancy}> Add +</button>
            </div>  

            <div className={`${add? "block":"hidden"} pl-8 mt-12 pt-8 ml-4 rounded-xl bg-white w-cw92`} >
            <span className='text-2xl font-semibold'>Call New Vacancy</span>
                <AddVacancy/>

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