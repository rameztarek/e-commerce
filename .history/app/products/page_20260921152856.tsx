const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
  const category = (await searchParams).category
  return (
    <div className=''>
      
    </div>
  )
}

export default ProductsPage