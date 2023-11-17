import Nav from "../components/Nav"
import { CustomerReviews, Footer, Services, Subscribe } from "../sections"
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
        <section className="padding-x pt-12">
          <ProductCategory />
        </section>
        <section className="padding-x py-12">
          <Services />
        </section>
        <section className="bg-pale-blue padding-x">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-12 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-12">
          <Footer />
        </section>
    </main>
  )
}

export default Home