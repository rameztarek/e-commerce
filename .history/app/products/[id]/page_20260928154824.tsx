import Image from "next/image";

const ProductPage = async ({params , searchParams}:{params:Promise<{id:string}>;searchParams:Promise<{color:string; size:string}>}) => {

  const {size , color} = await searchParams

  const selectedSize = (size)
  const selectedColor = (color)
  return (
    <div className='flex flex-col gap-4 lg:flex-row md:gap-12 mt-14'>
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-2/3">
      <Image src={`/products/${selectedColor}.jpg`} alt="Color" fill className="object-contain rounded-md  "  />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
      <h1></h1>
      </div>
    </div>
  )
}

export default ProductPage