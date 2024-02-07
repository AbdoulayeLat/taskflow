import React from 'react'

function Input({type, placeholder, onChange}: {type:string, placeholder:string, onChange:any}) {
  return (
    <div>
        <input 
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className="block w-[400px] px-3 py-2 text-base text-black placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-violet-300"
        />
    </div>
  )
}

export default Input