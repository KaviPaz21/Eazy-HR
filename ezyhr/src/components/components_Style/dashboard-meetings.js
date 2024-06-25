import React from 'react'

export default function Dashboardmeetings() {
  return (
    <div>
      <table className='w-auto text-center mt-4'>
        <tr className='border-b-2 border-gray-200 h-12'>
          <th className='px-2 w-40' >Meeting Name</th>
          <th className='px-2 w-44' >Time</th>
          <th className='px-2 w-28' >Mode</th>
        </tr>
        <tr className='text-c16 h-12'>
        <td className='px-2 w-36'>Project meeting</td>
        <td className='w-32'> <span className='mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</span> </td>
        <td className='px-2 w-28 text-blue-600 font-semibold' > Online</td>
        </tr>

        <tr className='text-c16 h-12'>
        <td className='px-2 w-36'>Project meeting</td>
        <td className='w-32'> <span className='mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</span> </td>
        <td className='px-2 w-28 text-green-600 font-semibold' > Physical</td>
        </tr>

        <tr className='text-c16 h-12'>
        <td className='px-2 w-36'>Project meeting</td>
        <td className='w-32'> <span className='mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</span> </td>
        <td className='px-2 w-28 text-blue-600 font-semibold' > Online</td>
        </tr>

        <tr className='text-c16 h-12'>
        <td className='px-2 w-36'>Project meeting</td>
        <td className='w-32'> <span className='mt-7 p-0 px-2 border-2 border-blue-600 rounded-2xl text-blue-600 font-medium'> 09.30-10.00</span> </td>
        <td className='px-2 w-28 text-blue-600 font-semibold' > Online</td>
        </tr>

      </table>
      
    </div>
  )
}
