import Image from "next/image"


const Home = () => {
  return (
    <section className=''>
      <div className="relative aspect-3/1 mt-12">
        <Image src="/products/featured.png" alt="" fill />
      </div>
    </section>
  )
}

export default Home