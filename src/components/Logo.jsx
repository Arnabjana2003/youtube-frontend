import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate("/")}>
        <h1 className='text-lg font-bold text-red-600'>Video
        <span className='bg-red-500 text-white px-1 rounded-lg'>Tube</span></h1>
    </div>
  )
}

export default Logo