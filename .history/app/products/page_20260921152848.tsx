const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
  const category = (await searchParams).category
  return (
    <div className=''>ProductsPage</div>
  )
}

export default ProductsPage