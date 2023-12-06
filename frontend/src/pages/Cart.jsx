import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom";
import { getProduct } from "../API";

const Cart = () => {
    const [count, setCount] = useState(1);
    const { id: productId } = useParams();
    const [product, setProduct] = useState(null);

    const addCount = () => {
        setCount(count + 1);
    }

    const minusCount = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            Navigate("/emptyCart");
        }
    }

    // Calculate delivery dates
    const currentDate = new Date();
    // const deliveryStartDate = new Date(currentDate);
    const deliveryEndDate = new Date(currentDate);
    deliveryEndDate.setDate(deliveryEndDate.getDate() + 6);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productFromServer = await getProduct(productId);
                setProduct(productFromServer);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProduct();
    });

    const removeFromCart = () => {
        // Remove product from cart
        alert("Product will be removed from cart and state will be updated");
    }

    const addToWishlist = () => {
        // Add product to wishlist
        alert("Product will be added to wishlist");
    }

  return (
    <div className="padding flex flex-col my-12 gap-[100px] max-sm:gap-[50px]">
        <h1 className="font-palanquin text-center font-thin text-[55px] text-neutral-800">Your Cart</h1>
        <div className="flex justify-between gap-16 max-lg:flex-col max-sm:items-center">
            <div className="flex-1 flex gap-8 max-sm:flex-col max-sm:items-center">
                <img
                    key={product?._id}
                    src={product?.imageUrl}
                    alt={product?.name}
                    className="h-40 w-40 rounded-md object-cover my-1"
                />
                <div className="flex-1 flex flex-col justify-between max-sm:gap-8">
                    <div className="flex justify-between">
                        <h3 className="font-bold font-palanquin text-2xl">{product?.name}</h3>
                        <div className="flex gap-4 cursor-pointer">
                            <i className='bx bx-heart bx-sm hover:text-coral-red' onClick={addToWishlist}></i>
                            <i className='bx bx-trash bx-sm hover:text-coral-red' onClick={removeFromCart}></i>
                        </div>
                    </div>
                    <div className="flex justify-between max-sm:flex-col max-sm:gap-8">
                        <div className="flex flex-col gap-2">
                            <p className="font-thin font-palanquin text-lg text-gray-400">Delivery Time</p>
                            <p>{`${currentDate.toDateString()} - ${deliveryEndDate.toDateString()}`}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-thin font-palanquin text-lg text-gray-400">Quantity</p>
                            <div className="flex justify-between text-lg font-bold">
                                <button onClick={minusCount} className="hover:text-coral-red">-</button>
                                <p>{count}</p>
                                <button onClick={addCount} className="hover:text-coral-red">+</button>
                            </div>
                        </div>
                        <div className="flex flex-col md:text-right gap-2">
                            <p className="font-thin font-palanquin text-lg text-gray-400">Total</p>
                            <p>${(product?.price * count).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between max-lg:gap-8">
                <div className="flex justify-between gap-44">
                    <p className="font-palanquin font-thin text-lg text-gray-600">Subtotal</p>
                    <p className="font-palanquin font-thin text-lg text-gray-600">${(product?.price * count).toFixed(2)}</p>
                </div>
                <div className="flex justify-between gap-44">
                    <p className="font-palanquin font-thin text-lg text-gray-600">Shipping</p>
                    <p className="font-palanquin font-thin text-lg text-gray-600">Free</p>
                </div>
                <div className="flex justify-between gap-44">
                    <p className="font-palanquin font-bold text-lg text-gray-600">Total</p>
                    <p className="font-palanquin font-bold text-lg text-gray-600">${(product?.price * count).toFixed(2)}</p>
                </div>
                <button className="bg-neutral-800 hover:bg-neutral-600 text-white-400 h-12 w-full">CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default Cart