import React from 'react'
import { reference } from 'three/examples/jsm/nodes/Nodes.js'
import { useNavigate } from 'react-router-dom'

export default function Applicantstable() {
    const navigate = useNavigate()
    const vacancy = [
        [ "Mahen Jecob","UI/UX Engineer" , "2024-05-12",'004600'],
        ["Abdul Razik","Marketing Manager" ,"2024-06-01",'004599'],
        ["Jayalalitha Jayaram","Accountant" , "2024-16-12",'004596'],
        ["Emmanuel Macrow","Security Officer" ,  "2024-16-12" ,'004595'],
        ["Xie Jin ping","Software Engineer" ,  "2024-16-12" ,'004590'],
        ["Virat Knoji","Field Manager" , "2024-16-12",'004589'],
        ["Bhoris Jhonson","Graphic Desugner" , "2024-16-12",'004588'],
    ]

    const Seemore = (Reference)=>{
        navigate("/Applicants/ApplicantInfo" , {state:Reference})
    }
   
    return (
        <div className='mt-12'>

            <table className='ml-28'>
                    <tr className='mt-2 h-20 border-b-2 border-gray-400'>
                        <th className='w-80'>Name </th>
                        <th className='w-60'>Position</th>
                        <th className='w-52 text-center'> Applied Date</th>
                        <th className='w-52 text-center'> Reference</th>
                        <th className='w-60 text-center'>interview</th>
                        <th className='w-60 text-center'>Details</th>
                    </tr>


                {(() => {
                    const elements = [];
                    for (let i = 0; i < vacancy.length; i++) {
            
                        const sublist = vacancy[i]
                        elements.push(
                         
                            <tr className='text-nv18 h-28 border-b-2 border-gray-100 '>
                                <td className='text-xl font-semibold w-60' >{i+1} {sublist[0]}</td>
                                <td className={`${sublist[6]===1?"text-green-600":"text-gray-600"} font-semibold w-48`}>{sublist[1]}</td>
                                <td className={`${sublist[7]===1?"text-green-600":"text-gray-600"} font-semibold w-32 text-center`}>{sublist[2]}</td>
                                <td className={`${sublist[7]===1?"text-green-600":"text-gray-600"} font-semibold w-32 text-center`}>{sublist[3]}</td>
                                
                                <td className=' w-40 text-center'>
                                    <button className='px-5 py-1 bg-green-600 text-white font-semibold rounded-2xl duration-300 hover:scale-105 hover:bg-green-700'>Call Interview</button>
                                </td>
                                <td className=' w-40 text-center'>
                                    <button className='px-5 py-1 bg-blue-600 text-white font-semibold rounded-2xl duration-300 hover:scale-105 hover:bg-blue-700' onClick={()=>Seemore(sublist[3])}>About Applicant</button>
                                </td>
                            </tr>
                        )
                    }
                    return elements
                })()}

            </table>

        </div>
    )
}
