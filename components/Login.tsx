"use client";
import Image from 'next/image'
import {signIn} from 'next-auth/react'

const Login = () => {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center'>
        <Image src="/chat-gpt.png" height={300} width={300} alt="" />
        <button onClick={() => signIn('google')} className='border-2 p-3 rounded-lg text-white font-bold text-3xl animate-pulse'>Sign In to use ChatGPT</button>
    </div>
  )
}
export default Login