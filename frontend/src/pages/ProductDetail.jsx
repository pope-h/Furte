import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../API";

const ProductDetail = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productFromServer = await getProduct(productId);
                setProduct(productFromServer);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProduct();
    }, [productId]);

  return (
    <main className="padding">
        {loading ? (
            <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        ) : (
            <div className="flex max-lg:flex-col gap-4 lg:h-[580px] max-lg:items-center pt-8 max-sm:pt-16">
                <div className="lg:w-3/5 max-lg:w-full max-lg:h-[500px]">
                    <img
                    key={product._id}
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-fill h-full w-full rounded-2xl"
                    />
                </div>
                <section className="lg:pl-8 flex flex-col gap-4 max-lg:gap-2 lg:w-2/5 max-lg:w-[85%] justify-center items-center">
                    <h2 className="font-palanquin xl:text-4xl md:text-4xl lg:text-[33px] max-sm:text-[35px] text-neutral-800 font-semibold">{product.name}</h2>
                    <p className="font-semibold text-2xl text-neutral-500 mb-8">{product.category}</p>
                    <p className="leading-normal font-montserrat text-neutral-800">{product.description}</p>
                    <p className="text-neutral-800 mt-8 font-medium">${product.price}</p>
                    <button className="bg-neutral-800 text-white-400 h-12 w-fit px-12">ADD TO CART</button>
                </section>
            </div>
        )}
    </main>
  )
}

export default ProductDetail