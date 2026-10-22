import { ProductType } from "../types";

const TshertProduct = async () => {
  const req = await fetch(`https://dummyjson.com/products/category/mens-shirts`)
  const res:ProductType[] = await req.json()
  console.log(res)
  return (
    <div className=''>{products.map()}</div>
  )
}

export default TshertProduct