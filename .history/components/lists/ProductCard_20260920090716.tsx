"use client"

import Link from "next/link"
import { ProductType } from "../types"
import Image from "next/image"

const ProductCard = ({product}: {product:ProductType}) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden '>
      <Link href={`product ${product.id}`}>
      <div className="relative aspect-2/3">
        <Image src={products.images[product.colors[0]]} alt={product.name} fill className="object-cover"/>
      </div>
      </Link>
    </div>
  )
}

export default ProductCard