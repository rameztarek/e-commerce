
const ProductPage = async ({params , searchParams}:{params:Promise<id:string>;searchParams:Promise<{color:string; size:string}>}) => {
  return (
    <div className='flex flex-col gap-4 lg:flex-row md:gap-12 mt-14'>
      {/* IMAGE */}
      <div className="w-full lg:w-5/12"></div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12"></div>
    </div>
  )
}

export default ProductPage