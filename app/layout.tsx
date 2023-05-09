"use client"
import { configType, useQuizConfig } from '@/store'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
  quiz
}: {
  children: React.ReactNode,
  quiz:React.ReactNode,

}) {
  const config = useQuizConfig((state:any)=>state.config)
  let render = config.status ? quiz : children;
  return (
    <html lang="en">
      <body className={inter.className}>{render }</body>
    </html>
  )
}
