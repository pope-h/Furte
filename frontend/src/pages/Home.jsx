import Nav from "../components/Nav"
import { Footer } from "../sections"
import CarouselHero from "../sections/CarouselHero"
import Intro from "../sections/Intro"
import ProductCategory from "../sections/ProductCategory"

const Home = () => {
  return (
    <main className="relative bg-white-400">
        <Nav />
        <section className="sm:pb-12 pb-6 padding-t max-md:pt-24">
          <CarouselHero />
        </section>
        <section className="xl:padding-l wide:padding-r">
          <Intro />
        </section>
        <section className="padding-x py-12">
          <ProductCategory />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
    </main>
  )
}

export default Home