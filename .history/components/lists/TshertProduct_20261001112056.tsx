import { ProductType } from "../types";

const TshertProduct = async () => {
  const req = await fetch(`https://dummyjson.com/products/category/mens-shirts`)
  const res:ProductType[] = await req.json()
  return (
    <div className=''>TshertProduct</div>
  )
}

export default TshertProduct