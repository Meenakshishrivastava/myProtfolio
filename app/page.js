"use client"
import React from 'react'
import Header from '@/Components/Header'
import Home from '@/Components/Home'
import About from '@/Components/About'
import Skills from '@/Components/Skills'
import Work from '@/Components/Work'
import Contact from '@/Components/Contact'

const page = () => {
  return (
    <div>

    <Header/>
    <Home/>
    <About/>
    <Skills/>
     <Work/>
     <Contact/>
    </div>
  )
}

export default page