import React from 'react'
import Link from 'next/link'
//props stores data in find of object
const Header = () => {
  return ( 
    <div
    className='w-full h-16 left-0 top-0 fixed px-5 text-white bg-black flex items-center justify-between'>
      <h2>Logo</h2>
      <div className='flex gap-8 text-white'>
        <Link href="/">Home</Link>
        <Link href="/Instagram">Instagram Gallery</Link>
        <Link href="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
