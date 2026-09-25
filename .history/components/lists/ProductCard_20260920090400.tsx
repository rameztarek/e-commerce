"use client"

import Link from "next/link"
import { ProductType } from "../types"
import Image from "next/image"

const ProductCard = ({product}: {product:ProductType}) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden '>
      <Link href={`product ${product.id}`}>
      <div className="">
        <Image src={product.images{}}/>
      </div>
      </Link>
    </div>
  )
}

export default ProductCard