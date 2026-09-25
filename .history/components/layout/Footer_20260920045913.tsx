import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row gap- md:items-center md:justify-between bg-gray-800 p-8 rounded-lg'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link href='/' className='flex items-center '>
          <Image src="/products/logo.png" alt="logo" width={36} height={36} />
          <p className=' hidden md:block text-md font-medium tracking-wider text-white'>TREND</p>
        </Link>
        <p className='text-sm text-gray-400 '>2025 Trend</p>
        <p className='text-sm text-gray-400 '>All Right Reserved.</p>
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start' >
        <p className='text-sm text-amber-50'>
          Link
        </p>
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start' >
        <p className='text-sm text-amber-50'>
          Link
        </p>
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start' >
        <p className='text-sm text-amber-50'>
          Link
        </p>
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer
