import Image from "next/image"


const Home = () => {
  return (
    <section className=''>
      <div className="relative aspect-[312]">
        <Image src="/proudact/featured.png" alt="" fill />
      </div>
    </section>
  )
}

export default Home