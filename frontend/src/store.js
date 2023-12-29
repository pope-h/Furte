import { create } from "zustand";
import Cookies from "js-cookie";

const expirationTime = new Date();
expirationTime.setTime(expirationTime.getTime() + 10 * 60 * 1000); // 10 minutes

// Retrieve cart data from localStorage, if available
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const useStorePackage = create((set) => ({
  accessToken: Cookies.get("accessToken") || "",
  userRole: localStorage.getItem("userRole") || "",
  userName: localStorage.getItem("userName") || "",
  userId: "",
  searchQuery: "",
  cart: initialCart,
  cartCount: initialCart.length,
  cartProductIds: initialCart.map((product) => product._id),

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((p) => p._id === product._id);

      if (existingProduct) {
        const updatedCart = state.cart.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return {
          cart: updatedCart,
          cartCount: updatedCart.length,
          cartProductIds: updatedCart.map((p) => p._id),
        };
      }

      const updatedCart = [...state.cart, { ...product, quantity: 1 }];
      const updatedProductIds = [...state.cartProductIds, product._id];

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        cart: updatedCart,
        cartCount: updatedCart.length,
        cartProductIds: updatedProductIds,
      };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedProductIds = state.cartProductIds.filter(
        (id) => id !== productId
      );

      // Save the updated cart and counts to localStorage
      localStorage.setItem(
        "cart",
        JSON.stringify(state.cart.filter((p) => p._id !== productId))
      );

      return {
        cart: state.cart.filter((p) => p._id !== productId),
        cartCount: state.cartCount - 1,
        cartProductIds: updatedProductIds,
      };
    }),

  clearCart: () =>
    set(() => {
      // Clear the cart data from localStorage
      localStorage.removeItem("cart");

      return {
        cart: [],
        cartCount: 0,
        cartProductIds: [],
      };
    }),

  login: (accessToken, role, userName, userId) => {
    console.log("User logged in", accessToken, role, userName, userId);
    set({ accessToken, userRole: role, userName, userId });
    Cookies.set("accessToken", accessToken, {
      expires: expirationTime,
      sameSite: "Lax", // set to None if using https
    });
    localStorage.setItem("userRole", role);
    localStorage.setItem("userName", userName);
  },

  logout: () => {
    set({ accessToken: "", userRole: "", userName: "", userId: "" });
    Cookies.remove("accessToken", { sameSite: "Lax" });
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
  },

  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));

export default useStorePackage;
