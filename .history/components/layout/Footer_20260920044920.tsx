import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row md:items-center bg-gray-800 p-4 rounded-lg'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link href='/' className='flex items-center '>
          <Image src="/products/logo.png" alt="logo" width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />
          <p className='text-md font-medium tracking-wider text-white'>TREND</p>
        </Link>
        <p className='text-sm text-gray-400 '>2025 Trend</p>
        <p className='text-sm text-gray-400 '>All Right Reserved.</p>
      </div>
      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start' >
        <p className='text-sm text-amber-50'>
          <Link href="/">Homepage</Link>
<Link href="/contact">Contact</Link>
<Link href="/terms">Terms of Service</Link>
<Link href="/privacy">Privacy Policy</Link>

        </p>
      </div>
    </div>
  )
}

export default Footer
