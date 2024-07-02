import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ApplicantInfo() {
    const location = useLocation()
    const Ref = location.state || {}
    
  return (
    <div className='flex flex-col text-left mt-4 bg-slate-100 rounded-xl h-screen'>
        <div>
            
        </div>
        <div>

        </div>
    </div>
  )
}
