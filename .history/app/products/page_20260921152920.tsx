const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
  const category = (await searchParams).category
  return (
    <div className=''>
      <ProductLis category={category} params="homepage" />

    </div>
  )
}

export default ProductsPage