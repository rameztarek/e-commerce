const TshertProduct = async () => {
  const res = await fetch(`https://dummyjson.com/products/category/mens-shirts`)
  
  return (
    <div className=''>TshertProduct</div>
  )
}

export default TshertProduct