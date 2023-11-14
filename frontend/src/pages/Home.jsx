// import Nav from "../components/Nav"
import { Footer } from "../sections"
import CarouselHero from "../sections/CarouselHero"

const Home = () => {
  return (
    <main className="relative bg-white-400">
        {/* <Nav /> */}
        <section className="xl:padding-l wide:padding-r padding-b">
            <CarouselHero />
        </section>
        <section>
            <h1>Products</h1>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
            <Footer />
        </section>
    </main>
  )
}

export default Home