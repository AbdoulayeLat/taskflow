"use client"
import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from "react";

export default function Home() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, showError] = useState(false);
  const [usernameTextWarning, setusernameTextWarning] = useState('');
  const [passwordTextWarning, setPasswordTextWarning] = useState('');
  const router = useRouter();
  
  const logUserIn = () =>{
    if (username === ''){
      setusernameTextWarning('text-red-500');
    }else if (password === ''){
      setPasswordTextWarning('text-red-500')
    }else if(password==='password'){
      router.push(`/tasks/${username}`)
    }else{
      showError(true);
    }
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <main  className="w-fit h-fit rounded-lg flex flex-col items-center bg-white shadow">  
        <p className="font-extrabold text-[50px] text-violet-500">TaskFlow</p>
        <section className="flex flex-col gap-10 px-5 py-5 items-center">
          <h1 className="font-light text-[30px]">Welcome!</h1>
          <div>
            <p className={`font-bold ${usernameTextWarning}`}>Username</p>
            <Input onChange={(e:any)=>setusername(e.target.value)} type="text" placeholder="Enter your username..." />
          </div>
          <div>
            <p className={`font-bold ${passwordTextWarning}`}>Password</p>
            <Input onChange={(e:any)=>setPassword(e.target.value)} type="password" placeholder="Enter your password..." />
          </div>
          <p className={`text-red-500 ${error === false ? 'hidden' : ''} text-[15px]`}>Wrong combination of username and password. Please try again!</p>
          <Button onClick={()=>logUserIn()} title="Sign In" />
          <Link href='/register' className="underline text-blue-600 cu">{`Don't have an account yet? Sign up!`}</Link>
        </section>
      </main>
    </div>
  );
}
