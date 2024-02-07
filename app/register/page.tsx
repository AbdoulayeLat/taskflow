"use client"
import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <main  className="w-fit h-fit rounded-lg flex flex-col items-center bg-white shadow">  
        <p className="font-extrabold text-[50px] text-violet-500">TaskFlow</p>
        <section className="flex flex-col gap-10 px-5 py-5 items-center">
          <h1 className="font-light text-[30px]">Create an account</h1>
          <div>
            <p className="font-bold">Username</p>
            <Input onChange={()=>''} type="text" placeholder="Enter your username..." />
          </div>
          <div>
            <p className="font-bold">Password</p>
            <Input onChange={()=>''} type="password" placeholder="Enter your password..." />
          </div>
          <Button onClick={()=>''} title="Sign In" />
          <Link href='/' className="underline text-blue-600">{`Already have an account? Sign in!`}</Link>
        </section>
      </main>
    </div>
  );
}
