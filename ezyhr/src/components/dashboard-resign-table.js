import React from 'react'

export default function Dashboardresigntable() {
  return (
    <div>
      <table className='w-auto text-center mt-4'>
                <tr className='border-b-2 border-gray-200 h-12'>
                  <th className='px-2 w-36'>Name</th>
                  <th className='px-2 w-28'>Employee ID</th>
                  <th className='px-2 w-32'>Position</th>
                  <th className='px-2 w-40'>Reason</th>
                  <th className='px-2 w-36'>Noticed Date</th>
                  <th className='px-2 w-36'>Resigning Date</th>
                  <th className='px-2 w-32' >Status</th>
                  <th className='px-2 w-32'>Action</th>
                </tr>

                <tr className='text-c16 h-12'>
                    <td className='px-2 w-36'>Shammi Silva</td>
                    <td className='px-2 w-28'>4151429</td>
                    <td className='px-2 w-32'>Regional Manager</td>
                    <td className='px-2 w-40'>Personal Reason</td>
                    <td className='px-2 w-36'>15-05-2024</td>
                    <td className='px-2 w-36'>15-08-2024</td>
                    <td className='px-2 w-32 text-green-700 font-semibold' >Approved</td>
                    <td className='px-2 w-32 text-green-700 font-semibold'>Taken</td>
                </tr>
                <tr className='text-c16 h-12'>
                    <td className='px-2 w-36'>A Fernando</td>
                    <td className='px-2 w-28'>5552229</td>
                    <td className='px-2 w-32'>Developer</td>
                    <td className='px-2 w-40'>Abroad</td>
                    <td className='px-2 w-36'>01-05-2024</td>
                    <td className='px-2 w-36'>01-08-2024</td>
                    <td className='px-2 w-32 text-red-700 font-semibold' >Pending</td>
                    <td className='px-2 w-32 text-orange-400 font-semibold'>Reviewed</td>
                </tr>
                <tr className='text-c16 h-12'>
                    <td className='px-2 w-36'>Jhone Doe</td>
                    <td className='px-2 w-28'>4141526</td>
                    <td className='px-2 w-32'>UI/UX Designer</td>
                    <td className='px-2 w-40'>Low Salary</td>
                    <td className='px-2 w-36'>03-04-2024</td>
                    <td className='px-2 w-36'>03-07-2024</td>
                    <td className='px-2 w-32 text-red-700 font-semibold' >Pending</td>
                    <td className='px-2 w-32 text-red-700 font-semibold'>Pending</td>
                </tr>
                <tr className='text-c16 h-12'>
                    <td className='px-2 w-36'>Jack Sparrow</td>
                    <td className='px-2 w-28'>2836954</td>
                    <td className='px-2 w-32'>Software Engineer</td>
                    <td className='px-2 w-40'>Personal Reason</td>
                    <td className='px-2 w-36'>25-03-2024</td>
                    <td className='px-2 w-36'>28-06-2024</td>
                    <td className='px-2 w-32 text-red-700 font-semibold' >Rejected</td>
                    <td className='px-2 w-32 text-green-700 font-semibold'>Taken</td>
                </tr>
              </table>
    </div>
  )
}
