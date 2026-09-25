import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4  '>
      {/* LEFT */}
      <Link href='/' className='flex items-center '>
        <Image src="/products/logo.png" alt="logo" width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />
        <p className='text-md font-medium tracking-wider'>TREND</p>
      </Link>
      {/* RIGHT */}
      <div>
        <SearchBar/>
        <Link href="/">
        <Image/ >
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
