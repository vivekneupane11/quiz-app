"use client"
import { useQuizConfig } from '@/store'
import React from 'react'


export default function InputBox() {
    const addQuestionNumber = useQuizConfig((state:any)=>state.addQuestionNumber)

  return (
<><div className="relative">
    <input type="number" defaultValue={10} max={50} min={10} onChange={(e:React.FormEvent<HTMLInputElement>)=>addQuestionNumber(e.currentTarget.value??'')} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-1 border-gray-300 appearance-none dark:text-gray-50 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Number of questions</label>
</div></>  )
}
