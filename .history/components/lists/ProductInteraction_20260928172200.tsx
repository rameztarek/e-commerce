"use client"

import { ProductType } from "../types";

const ProductInteraction = ({product , selectedColor , selectedSize}:{product:ProductType; selectedColor:string; selectedSize:string}) => {
  return (
    <div className='flex flex-col gap-4 mt-4'>
      {/* SIZE */}
      <di className="flex felx-col"></div> 
      {/* COLOR */}
      <div></div>
      {/* QUANTITY */}
      <div></div>
    </div>
  )
}

export default ProductInteraction