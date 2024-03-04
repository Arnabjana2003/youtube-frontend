import React from 'react'

function Loader({children}) {
  return (
    <div className='fixed bg-slate-300 opacity-70 w-screen h-screen z-50 flex justify-center items-center'>
        <div className='p-3 bg-slate-300 rounded-md'>
            {children}
        </div>
    </div>
  )
}

export default Loader