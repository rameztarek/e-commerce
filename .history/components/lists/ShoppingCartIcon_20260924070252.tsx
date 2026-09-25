"use client "

import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {
  return (
    <Link href="/cart" className=''>
      <ShoppingCart
    </Link>
  )
}

export default ShoppingCartIcon