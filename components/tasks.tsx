"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import db from '../db.json'
import BoardError from './boardError';


function Tasks() {
    const params = useParams<{ board: string }>();
    const boardName = decodeURI(params.board);
    const tasks = db.tasks.filter(task => task.boardID === boardName);

    const boardExist = () => {
        for (let index = 0; index < db.boards.length; index++) {
            if(db.boards[index].title === boardName){
                return true
            }
        }
        return false;
    }

    return (
        <div className='w-[90vw] bg-gray-900 h-full flex items-center justify-center'>
            {
                !boardExist() ? <BoardError /> : 
                
                <div className='w-full h-full grid grid-flow-col p-2 gap-5'>
                    <section className='w-full h-full flex flex-col items-center'>
                        <div className='flex gap-1 items-center'>
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12C3 16.9706 7.02944 21 12 21V3C7.02944 3 3 7.02944 3 12Z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h1 className='font-bold text-[30px]'>Not Started</h1>
                        </div>
                        <ul className='flex flex-col p-1 gap-3 w-full h-[90%] overflow-y-auto rounded-md'>
                            {
                                db.tasks.filter(task => task.status === "Not Started").map((task, index) => 
                                    <li key={index} className='group p-1 bg-white/10 rounded hover:bg-white/30 transition-all duration-300 ease-in-out cursor-pointer'>
                                        <h1 className='font-bold text-[20px] transition-all duration-300 ease-in-out group-hover:text-black'>{task.title}</h1>
                                        <p className='opacity-50 text-[18px] line-clamp-1'>{task.description}</p>
                                    </li>    
                                )
                            }
                        </ul>
                    </section>

                    <section className='w-full h-full flex flex-col items-center'>
                        <div className='flex gap-1 items-center'>
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12H12V3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#FFFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h1 className='font-bold text-[30px]'>In Progress</h1>
                        </div>
                        <ul className='flex flex-col p-1 gap-3 w-full h-[90%] overflow-y-auto rounded-md'>
                            {
                                db.tasks.filter(task => task.status === "Not Started").map((task, index) => 
                                    <li key={index} className='group p-1 bg-white/10 rounded hover:bg-white/30 transition-all duration-300 ease-in-out cursor-pointer'>
                                        <h1 className='font-bold text-[20px] transition-all duration-300 ease-in-out group-hover:text-black'>{task.title}</h1>
                                        <p className='opacity-50 text-[18px] line-clamp-1'>{task.description}</p>
                                    </li>    
                                )
                            }
                        </ul>
                    </section>
                    
                    <section className='w-full h-full flex flex-col items-center'>
                        <div className='flex gap-1 items-center'>
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#008000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h1 className='font-bold text-[30px]'>Completed</h1>
                        </div>
                        <ul className='flex flex-col p-1 gap-3 w-full h-[90%] overflow-y-auto rounded-md'>
                            {
                                db.tasks.filter(task => task.status === "Not Started").map((task, index) => 
                                    <li key={index} className='group p-1 bg-white/10 rounded hover:bg-white/30 transition-all duration-300 ease-in-out cursor-pointer'>
                                        <h1 className='font-bold text-[20px] transition-all duration-300 ease-in-out group-hover:text-black'>{task.title}</h1>
                                        <p className='opacity-50 text-[18px] line-clamp-1'>{task.description}</p>
                                    </li>    
                                )
                            }
                        </ul>
                    </section>
                </div>
            }
        </div>
    )
}

export default Tasks