import React from 'react'

export default function Dashboardinterviewstable() {
    return (
        <div>
            <table className='w-auto text-center mt-4 h-auto'>
                <tr className='border-b-2 border-gray-200 h-12'>
                    <th className='px-2 w-48 text-left' >Applicant</th>
                    <th className='px-2 w-44' >Time</th>
                </tr>
                <tr className='text-c16 h-12'>
                    <td className='p-1 text-left'>Pasindu Kavinda <br /> <div className='text-sm text-gray-500 font-normal'>AI Engineer</div></td>
                    <td className='w-32'> <span className='mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</span> </td>

                </tr>

                <tr className='text-c16 h-12'>
                    <td className='p-1 text-left'>JK Fernando <br /> <div className='text-sm text-gray-500 font-normal'>UI/UX Designer</div></td>
                    <td className='w-32'> <span className='mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</span> </td>

                </tr>

                <tr className='text-c16 h-12'>
                    <td className='p-1 text-left'>Asitha Perera <br /> <div className='text-sm text-gray-500 font-normal'>UI/UX Designer</div></td>
                    <td className='w-32'> <span className='mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</span> </td>

                </tr>

                <tr className='text-c16 h-12'>
                    <td className='p-1 text-left'>Ashoka Pathirana<br /> <div className='text-sm text-gray-500 font-normal'>UI/UX Designer</div> </td>
                    <td className='w-32'> <span className='mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</span> </td>

                </tr>

            </table>
        </div>
    )
}
