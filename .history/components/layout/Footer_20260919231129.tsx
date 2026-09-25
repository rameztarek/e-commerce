import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row md:items-center bg-gray-800 p-4 rounded-lg'>
      <div className=''>
        <Link href='/' className='flex items-center '>
          <Image src="/products/logo.png" alt="logo" width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />
          <p className='text-md font-medium tracking-wider'>TREND</p>
        </Link>
        <p>@</p>
      </div>
    </div>
  )
}

export default Footer
