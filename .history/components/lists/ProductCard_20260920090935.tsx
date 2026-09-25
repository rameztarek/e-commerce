"use client"

import Link from "next/link"
import { useState } from "react"
import { ProductType } from "../types"
import Image from "next/image"

const ProductCard = ({product}: {product:ProductType}) => {
  const fallbackImage = "/products/featured.png"
  const [imageSrc, setImageSrc] = useState(product.images[product.colors[0]])

  return (
    <div className='shadow-lg rounded-lg overflow-hidden '>
      <Link href={`product ${product.id}`}>
      <div className="relative aspect-2/3">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover"
          onError={() => setImageSrc(fallbackImage)}
        />
      </div>
      </Link>
    </div>
  )
}

export default ProductCard