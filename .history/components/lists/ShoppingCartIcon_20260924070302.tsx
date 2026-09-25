"use client "

import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {
  return (
    <Link href="/cart" className=''>
      <ShoppingCart className="w-4 h-4 "/>
    </Link>
  )
}

export default ShoppingCartIcon