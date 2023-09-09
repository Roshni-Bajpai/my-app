"use-client"
import React from 'react'
import Head from 'next/head'
import Hero from './Hero/page'
import Instagram from './Instagram/page'
import contact from './Contact/page'
import Header from '@/Components/Header'
const page = () => {
  return (
    <div>
      <Hero heading='Random Snap Captures' message='I capture random moments and keep them alive.' />
    </div>
  )
}

export default page
