import Sidebar from '@/components/sidebar'
import React from 'react'

function Page() {
  return (
    <div className='text-white flex w-full h-[90vh]'>
        <Sidebar />
        <div className='flex items-center justify-center w-[80vw] h-full'>
          <h1 className='text-[40px] text-white/50'>No Board Selected</h1>
        </div>
    </div>
  )
}

export default Page