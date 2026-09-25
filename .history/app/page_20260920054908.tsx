import Image from "next/image"


const Home = () => {
  return (
    <section className=''>
      <div className="relative aspect-[3/1] mt-">
        <Image src="/proudact/featured.png" alt="" fill />
      </div>
    </section>
  )
}

export default Home