"use client"

import Link from "next/link"
import { ProductType } from "../types"
import Image from "next/image"
import { Button } from "@base-ui/react"

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden '>
      <Link href={`product ${product.id}`}>
        <div className="relative aspect-2/3">
          <Image src={product.images[product.colors[0]]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300" />
        </div>
      </Link>
      {/* PRODUCT DETAILS */}
      <div className="flex flex-col p-4 gap-4">
        <h1 className=" font-medium ">{product.name}</h1>
        <p className="text-gray-500 text-sm">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-xs">
          {/* SIZE */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1">
              {product.sizes.map(size => (
                <option value={size} key={size}>{size.toUpperCase()}</option>
              ))}
            </select>
          </div>
          {/* COLOR */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map(color => (
                <div className="" key={color}>
                  <div className="w-3.5 h-3.5 rounded-full " style={{ background: color }} />
                </div>
              ))}
            </div>
          </div>
          {/* PRICE AND ADD TO CARD */}
          <div className="flex items-center justify-between">
            <p className="font-medium">{product.price.toFixed(2)}$</p>
            <Button className="ring-1 ring-gray-500 rounded-md px-2 py-1 text-sm cursor-pointer ">Add To Card</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard