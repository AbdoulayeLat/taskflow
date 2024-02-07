import Sidebar from '@/components/sidebar'
import React from 'react'
import Tasks from '@/components/tasks'


function Page() {
    return (
        <div className='text-white flex w-full h-[90vh]'>
            <Sidebar />
            <Tasks />
        </div>
    )
}

export default Page