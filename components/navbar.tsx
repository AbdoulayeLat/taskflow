"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Button from './button';
import Image from 'next/image';

function Navbar() {
    const params = useParams<{ user: any }>();
    const user = params.user;

    return (
        <div className='bg-violet-500/70 border-b border-white/50 text-white flex items-center justify-between w-full h-[10vh] p-2'>
            <h1 className="font-extrabold text-[30px] text-white">TaskFlow</h1>
            <div className='flex items-center gap-5'>
                <div className='group flex items-center cursor-pointer'>
                    <p className='group-hover:text-black transition-all duration-300 ease-in-out'>Create a task</p>
                    <svg className='rounded p-1' width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='group-hover:stroke-black transition-all duration-300 ease-in-out' d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                        <path className='group-hover:stroke-black transition-all duration-300 ease-in-out' d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className='group flex items-center cursor-pointer'>
                    <p className='group-hover:text-black transition-all duration-300 ease-in-out'>About</p>
                    <svg className='rounded p-1' width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='group-hover:stroke-black transition-all duration-300 ease-in-out' d="M12 17V11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle className='group-hover:fill-black transition-all duration-300 ease-in-out' cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#fff"/>
                        <path className='group-hover:stroke-black transition-all duration-300 ease-in-out' d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
                <h2 className='font-medium text-[20px] border-l pl-5'>{user}</h2>
            </div>
        </div>
    )
}

export default Navbar