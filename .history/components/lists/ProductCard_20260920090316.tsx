"use client"

import Link from "next/link"
import { ProductType } from "../types"

const ProductCard = ({product}: {product:ProductType}) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden '>
      <Link href={`product ${product.id}`}>
      <div></div>
      </Link>
    </div>
  )
}

export default ProductCard