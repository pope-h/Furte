import { create } from "zustand";
import Cookies from "js-cookie";

/**
 * Represents the store package for managing state in the application.
 * @typedef {Object} StorePackage
 * @property {string} accessToken - The access token of the user.
 * @property {string} userRole - The role of the user.
 * @property {string} userName - The name of the user.
 * @property {string} userId - The ID of the user.
 * @property {string} searchQuery - The search query.
 * @property {Array} cart - The cart items.
 * @property {number} cartCount - The count of items in the cart.
 * @property {Array} cartProductIds - The IDs of products in the cart.
 * @property {Function} addToCart - Adds a product to the cart.
 * @property {Function} removeOneItemFromCart - Removes one item from the cart.
 * @property {Function} removeProduct - Removes a product from the cart.
 * @property {Function} clearCart - Clears the cart.
 * @property {Function} login - Logs in the user.
 * @property {Function} logout - Logs out the user.
 * @property {Function} setSearchQuery - Sets the search query.
 */

const expirationTime = new Date();
expirationTime.setTime(expirationTime.getTime() + 10 * 60 * 1000); // 10 minutes

// Retrieve cart data from localStorage, if available
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const refreshTokenEndpoint = "https://furte-server.vercel.app/refresh";

/**
 * Creates a store package using Zustand.
 * @param {Function} set - The set function provided by Zustand.
 * @returns {StorePackage} The store package.
 */
const useStorePackage = create((set) => ({
  accessToken: Cookies.get("accessToken") || "",
  userRole: localStorage.getItem("userRole") || "",
  userName: localStorage.getItem("userName") || "",
  userId: Cookies.get("userId") || "",
  searchQuery: "",
  cart: initialCart,
  cartCount: initialCart.length,
  cartProductIds: initialCart.map((product) => product._id),

  /**
   * Adds a product to the cart.
   * @param {Object} product - The product to be added.
   */
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

  /**
   * Removes one item from the cart.
   * @param {string} productId - The ID of the product to be removed.
   */
  removeOneItemFromCart: (productId) =>
    set((state) => {
      const productToRemove = state.cart.find((p) => p._id === productId);

      if (!productToRemove) {
        // If the product is not in the cart, do nothing
        return state;
      }

      // Check if the quantity is greater than 1, then decrement the quantity
      if (productToRemove.quantity > 1) {
        const updatedCart = state.cart.map((p) =>
          p._id === productId ? { ...p, quantity: p.quantity - 1 } : p
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return {
          ...state,
          cart: updatedCart,
          cartCount: state.cartCount - 1,
        };
      } else {
        // If the quantity is 1, remove the product from the cart
        const updatedCart = state.cart.filter((p) => p._id !== productId);

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return {
          ...state,
          cart: updatedCart,
          cartCount: state.cartCount - 1,
          cartProductIds: state.cartProductIds.filter((id) => id !== productId),
        };
      }
    }),

  /**
   * Removes a product from the cart.
   * @param {string} productId - The ID of the product to be removed.
   */
  removeProduct: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (product) => product._id !== productId
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
        cartCount: state.cartCount - 1,
        cartProductIds: state.cartProductIds.filter((id) => id !== productId),
      };
    }),

  /**
   * Clears the cart.
   */
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

  /**
   * Refreshes the access token.
   */
  refreshToken: async () => {
    console.log("Refreshing token...");
    try {
      const refreshToken = Cookies.get("refreshToken");

      if (!refreshToken) {
        throw new Error("Refresh token not available");
      }

      const response = await fetch(refreshTokenEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
        // You may include additional body parameters if required by your server
        // body: JSON.stringify({}),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }

      const data = await response.json();

      // Update the state with the new access token
      set({
        accessToken: data.accessToken,
        userRole: data.role,
        userName: data.userName,
        userId: data.userId,
      });
      console.log("Access token refreshed successfully");
    } catch (error) {
      // Handle the error differently for refresh token expiration or invalidity
      if (
        error.message.includes("Refresh token expired") ||
        error.message.includes("Invalid refresh token")
      ) {
        // Trigger a logout or redirect to the login page
        // Clear cookies, local storage, and reset the state

        // Clear cookies
        Cookies.remove("accessToken", { sameSite: "None" });
        Cookies.remove("userId", { sameSite: "None" });

        // Clear local storage
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");

        // Reset the state
        set({
          accessToken: "",
          userRole: "",
          userName: "",
          userId: "",
        });

        // Redirect to the login page (adjust the route based on your routing setup)
        // You can use the appropriate navigation method based on your setup (e.g., React Router)
        window.location.href = "/signin"; // Replace with your login page route
      } else {
        console.error("Error refreshing token:", error);
        throw error;
      }
    }
  },

  /**
   * Logs in the user.
   * @param {string} accessToken - The access token of the user.
   * @param {string} role - The role of the user.
   * @param {string} userName - The name of the user.
   * @param {string} userId - The ID of the user.
   */
  login: (accessToken, role, userName, userId) => {
    console.log("User logged in", accessToken, role, userName, userId);
    set({ accessToken, userRole: role, userName, userId });
    Cookies.set("accessToken", accessToken, {
      expires: expirationTime,
      sameSite: "None", // set to None if using https
    });
    Cookies.set("userId", userId, { sameSite: "None" });
    localStorage.setItem("userRole", role);
    localStorage.setItem("userName", userName);
  },

  /**
   * Logs out the user.
   */
  logout: () => {
    set({ accessToken: "", userRole: "", userName: "", userId: "" });
    Cookies.remove("accessToken", { sameSite: "None" });
    Cookies.remove("userId", { sameSite: "None" });
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
  },

  /**
   * Sets the search query.
   * @param {string} searchQuery - The search query.
   */
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));

export default useStorePackage;
