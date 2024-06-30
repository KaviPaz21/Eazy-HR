import React from 'react'

export default function Applicantstable() {
    const vacancy = [
        ["UI/UX Engineer" , "Full Time" ,"Permenent", "Remote" , "2024-05-12" , "25" ,1,1,0],
        ["Marketing Manager" , "Full Time","Intern" , "On Site","2024-06-01","23",1,0,1],
        ["Accountant" , "Full Time" , "Permenent","On Site", "2024-16-12","2",1,1,1],
        ["Security Officer" , "Full Time" , "Permenent","On Site", "2024-16-12","41",1,1,1],
        ["Software Engineer" , "Half" , "Agreements","Remote", "2024-16-12","33",0,0,0],
        ["Field Manager" , "Full Time" , "Agreements","On Site", "2024-16-12","25",1,0,1],
        ["Graphic Desugner" , "Full Time" , "Permenent","Remote", "2024-16-12","25",1,1,0],
    ]
   
    return (
        <div className='mt-12'>

            <table className='ml-28'>
                    <tr className='mt-2 h-20 border-b-2 border-gray-400'>
                        <th className='w-60'>Job Position</th>
                        <th className='w48'>Duration</th>
                        <th className='w-32 text-center'>Type</th>
                        <th className='w-36 text-center'>Mode</th>
                        <th className='w-36 text-center'> Published Date</th>
                        <th className='w-40 text-center'>Applications</th>
                        <th className='w-40 text-center'>End Callings</th>
                        <th className='w-40 text-center'>Details</th>
                    </tr>


                {(() => {
                    const elements = [];
                    for (let i = 0; i < vacancy.length; i++) {
            
                        const sublist = vacancy[i]
                        elements.push(
                         
                            <tr className='text-nv18 h-28 border-b-2 border-gray-100 '>
                                <td className='text-xl font-semibold w-60' >{i+1} {sublist[0]}</td>
                                <td className={`${sublist[6]===1?"text-green-600":"text-red-600"} font-semibold w-48`}>{sublist[1]}</td>
                                <td className={`${sublist[7]===1?"text-green-600":"text-red-600"} font-semibold w-32 text-center`}>{sublist[2]}</td>
                                <td className={`${sublist[8]===1?"text-green-600":"text-blue-600"} font-semibold  w-36 text-center`}>{sublist[3]} </td>
                                <td className='w-36 text-center'> {sublist[4]} </td>
                                <td className='text-c20 text-center font-semibold w-40'>{sublist[5]} </td>
                                <td className=' w-40 text-center'>
                                    <button className='px-5 py-1 bg-red-600 text-white font-semibold rounded-2xl duration-300 hover:scale-105 hover:bg-red-600'>Close</button>
                                </td>
                                <td className=' w-40 text-center'>
                                    <button className='px-5 py-1 bg-blue-600 text-white font-semibold rounded-2xl duration-300 hover:scale-105 hover:bg-blue-600'>See More</button>
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
