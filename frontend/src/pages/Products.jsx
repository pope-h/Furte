import ProductsCarousel from "../sections/ProductsCarousel"
import ProductsPage from "../sections/ProductsPage"

const Products = () => {
  return (
    <main className="max-sm:my-12 mt-2 mb-24">
      <section className="pb-12 padding-t max-md:pt-12">
        <ProductsCarousel />
      </section>
      <section className="max-sm:mx-8 mx-16">
        <ProductsPage />
      </section>
    </main>
  )
}

export default Products