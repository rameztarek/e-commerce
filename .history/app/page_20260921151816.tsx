import ProductList from "@/components/lists/ProductList"
import Image from "next/image"


const Home = ({searchParams}:{searchParams:Pro} ) => {
  return (
    <section className=''>
      <div className="relative aspect-3/1 mt-12">
        <Image src="/products/featured.png" alt="" fill />
      </div>
      <ProductList category={} />
    </section>
  )
}

export default Home