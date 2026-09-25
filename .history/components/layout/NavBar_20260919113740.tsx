import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='w-full flex items-center ju'>
      {/* LEFT */}
      <Link href='/' className='flex items-center '>
        <Image src="/products/logo.png" alt="logo" width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />
        <p className='text-md font-medium tracking-wider'>TREND</p>
      </Link>
      {/* RIGHT */}
      <div>
        right
      </div>
    </nav>
  )
}

export default NavBar
