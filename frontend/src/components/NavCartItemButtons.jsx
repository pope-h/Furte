import { Link } from "react-router-dom";

const NavCartItemButtons = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Link
        to="/check-out"
        className="bg-white-400 hover:bg-neutral-800 border-y-2 border-neutral-800 hover:text-white-400 text-neutral-800 h-12 hover:no-underline pt-[12px] w-full text-center"
      >
        TO CHECKOUT
      </Link>
      <Link
        to="/cart"
        className="bg-neutral-800 hover:bg-neutral-600 text-white-400 h-12 hover:no-underline pt-[14px] w-full text-center"
      >
        TO SHOPPING CART
      </Link>
    </div>
  );
}

export default NavCartItemButtons