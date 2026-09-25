import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      {/* LEFT */}
      <Link href={}>
      <Image src="/logo.png" alt="logo" width={36} height={36} className='w-6 h-6 md:w-' />
      </Link>
      {/* RIGHT */}
    </div>
  )
}

export default Footer
