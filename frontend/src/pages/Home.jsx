import Nav from "../components/Nav"
import { Footer } from "../sections"
import CarouselHero from "../sections/CarouselHero"
import Intro from "../sections/Intro"

const Home = () => {
  return (
    <main className="relative bg-white-400">
        <Nav />
        <section className="sm:pb-12 pb-6 padding-t">
            <CarouselHero />
        </section>
        <section>
          <Intro />
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