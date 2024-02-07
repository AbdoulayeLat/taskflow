"use client"
import React from 'react'
import {motion} from 'framer-motion'

function Button({title, onClick}:{title:string, onClick:any}) {
  return (
    <div> 
      <motion.button onClick={onClick} whileHover={{backgroundColor: 'rgb(139 92 246)', color:'white'}} transition={{duration:0.5}} className={`flex items-center gap-1 font-semibold text-[20px] bg-black/20 px-10 py-2 rounded-lg`}>{title}</motion.button>
    </div>
  )
}

export default Button