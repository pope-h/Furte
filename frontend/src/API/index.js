import axios from "axios";
import Cookies from "js-cookie";
import handleApiError from "./handleApiError";
import useStorePackage from "../store";
import { jwtDecode } from "jwt-decode";

// Separate axios instance for refresh requests to avoid circular dependency
const axiosRefresh = axios.create({
  baseURL: 'https://furte-server.vercel.app',
});

const axiosJWT = axios.create({
  baseURL: 'https://furte-server.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

// let token;
// useStorePackage.subscribe((state) => {
//   token = state.accessToken;
// });

// Set a request interceptor to include the authorization header for all requests
axiosJWT.interceptors.request.use(
  async (config) => {
    console.log("axiosJWT interceptor");
    const { accessToken: token } = useStorePackage.getState(); // Get latest token
    console.log("accessToken and entering getAuthorizationHeader", token)
    config.headers = getAuthorizationHeader(token);
    console.log("back from getAuthorizationHeader", config.headers)

    const currentTime = new Date().getTime();
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < currentTime) {
      console.log("token expired and entering refreshToken");
      const newAccessToken = await refreshToken(axiosRefresh); // Use separate instance
      console.log("back from refreshToken", newAccessToken);
      config.headers = getAuthorizationHeader(newAccessToken);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Get the authorization header with the provided token.
 * @param {string} token - The access token.
 * @returns {Object} - The authorization header.
 */
const getAuthorizationHeader = (token) => ({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
});

/**
 * Fetch products from the API.
 * @param {string} token - The access token.
 * @param {string} searchQuery - The search query for filtering products (optional).
 * @returns {Promise} - A promise that resolves to the fetched products.
 * @throws {Error} - If there is an error fetching the products.
 */
export const fetchProducts = async (token, searchQuery) => {
  console.log("entry point", token);
  const apiUrl = searchQuery
    ? `/products?search=${encodeURIComponent(searchQuery)}`
    : "/products";

  try {
    console.log("about to make request");
    const res = await axiosJWT.get(apiUrl, { withCredentials: true });
    console.log("response received", res)
    return handleApiError(res);
  } catch (err) {
    console.log("final fetch error");
    console.error("Error fetching products:", err);
    throw new Error("Error fetching products");
  }
};

/**
 * Fetch a product from the API.
 * @param {string} token - The access token.
 * @param {string} id - The ID of the product.
 * @returns {Promise} - A promise that resolves to the fetched product.
 * @throws {Error} - If there is an error fetching the product.
 */
export const getProduct = async (token, id) => {
  try {
    const res = await fetch(`https://furte-server.vercel.app/products/${id}`, {
      method: "GET",
      headers: getAuthorizationHeader(token),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error fetching product:", err);
    throw new Error("Error fetching product");
  }
};

/**
 * Post a new product to the API.
 * @param {string} token - The access token.
 * @param {Object} productData - The data of the product to be posted.
 * @returns {Promise} - A promise that resolves to the posted product.
 * @throws {Error} - If there is an error posting the product.
 */
export const postProduct = async (token, productData) => {
  try {
    const res = await fetch("https://furte-server.vercel.app/products", {
      method: "POST",
      headers: getAuthorizationHeader(token),
      body: JSON.stringify(productData),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error posting product:", err);
    throw new Error("Error fetching product");
  }
};

/**
 * Update a product in the API.
 * @param {string} token - The access token.
 * @param {string} id - The ID of the product to be updated.
 * @param {Object} productData - The updated data of the product.
 * @returns {Promise} - A promise that resolves to the updated product.
 * @throws {Error} - If there is an error updating the product.
 */
export const updateProduct = async (token, id, productData) => {
  try {
    const res = await fetch("https://furte-server.vercel.app/products", {
      method: "PUT",
      headers: getAuthorizationHeader(token),
      // here the id is passed in the body insteads of the params because the backend is expecting the id in the body
      body: JSON.stringify({ id, ...productData }),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error updating product:", err);
    throw new Error("Error fetching product");
  }
};

/**
 * Delete a product from the API.
 * @param {string} token - The access token.
 * @param {string} id - The ID of the product to be deleted.
 * @returns {Promise} - A promise that resolves when the product is deleted.
 * @throws {Error} - If there is an error deleting the product.
 */
export const deleteProduct = async (token, id) => {
  try {
    const res = await fetch("https://furte-server.vercel.app/products", {
      method: "DELETE",
      headers: getAuthorizationHeader(token),
      body: JSON.stringify({ id }),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error deleting product:", err);
    throw new Error("Error fetching product");
  }
};

/**
 * Fetch users from the API.
 * @param {string} token - The access token.
 * @returns {Promise} - A promise that resolves to the fetched users.
 * @throws {Error} - If there is an error fetching the users.
 */
export const fetchUsers = async (token) => {
  try {
    const res = await fetch("https://furte-server.vercel.app/users", {
      method: "GET",
      headers: getAuthorizationHeader(token),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error("Error fetching users");
  }
};

/**
 * Fetch a user from the API.
 * @param {string} token - The access token.
 * @param {string} id - The ID of the user.
 * @returns {Promise} - A promise that resolves to the fetched user.
 * @throws {Error} - If there is an error fetching the user.
 */
export const getUser = async (token, id) => {
  try {
    const res = await fetch(`https://furte-server.vercel.app/users/${id}`, {
      method: "GET",
      headers: getAuthorizationHeader(token),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error fetching user:", err);
    throw new Error("Error fetching user");
  }
};

/**
 * Update a user's role in the API.
 * @param {string} token - The access token.
 * @param {string} id - The ID of the user to be updated.
 * @param {string} role - The updated role of the user.
 * @returns {Promise} - A promise that resolves to the updated user.
 * @throws {Error} - If there is an error updating the user's role.
 */
export const updateUserRole = async (token, id, role) => {
  try {
    const res = await fetch("https://furte-server.vercel.app/users", {
      method: "PUT",
      headers: getAuthorizationHeader(token),
      body: JSON.stringify({ id, role }),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error updating user role:", err);
    throw new Error("Error updating user role");
  }
};

/**
 * Update a user's info in the API.
 * @param {string} token - The access token.
 * @param {string} id - The ID of the user to be updated.
 * @param {Object} userInfo - The updated information of the user.
 * @returns {Promise} - A promise that resolves to the updated user.
 * @throws {Error} - If there is an error updating the user's info.
 */
export const updateUserInfo = async (token, id, userInfo) => {
  try {
    const res = await fetch("https://furte-server.vercel.app/users", {
      method: "PUT",
      headers: getAuthorizationHeader(token),
      body: JSON.stringify({ id, ...userInfo }),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error updating user info:", err);
    throw new Error("Error updating user info");
  }
};

/**
 * Delete a user from the API.
 * @param {string} token - The access token.
 * @param {string} id - The ID of the user to be deleted.
 * @returns {Promise} - A promise that resolves when the user is deleted.
 * @throws {Error} - If there is an error deleting the user.
 */
export const deleteUser = async (token, id) => {
  try {
    const res = await fetch("https://furte-server.vercel.app/users", {
      method: "DELETE",
      headers: getAuthorizationHeader(token),
      body: JSON.stringify({ id }),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error deleting user:", err);
    throw new Error("Error deleting user");
  }
};

/**
 * Sign in a user to the API.
 * @param {string} token - The access token.
 * @param {Object} userData - The data of the user to be signed in.
 * @returns {Promise} - A promise that resolves to the signed-in user.
 * @throws {Error} - If there is an error signing in the user.
 */
export const signInUser = async (token, userData) => {
  try {
    const res = await axiosJWT.post("/signin", userData, { withCredentials: true });
    console.log("Response from /signin:", res);
    return handleApiError(res);
  } catch (err) {
    console.error("Error signing user in:", err);
    throw new Error("Error signing user in");
  }
};

/**
 * Sign up a new user to the API.
 * @param {string} token - The access token.
 * @param {Object} userData - The data of the user to be signed up.
 * @returns {Promise} - A promise that resolves to the signed-up user.
 * @throws {Error} - If there is an error signing up the user.
 */
export const signUpUser = async (token, userData) => {
  try {
    const res = await fetch("https://furte-server.vercel.app/signup", {
      method: "POST",
      headers: getAuthorizationHeader(token),
      body: JSON.stringify(userData),
    });
    return handleApiError(res);
  } catch (err) {
    console.error("Error signing user up:", err);
    throw new Error("Error signing user up");
  }
};

export const refreshToken = async (axiosInstance = axios) => {
  try {
    console.log("entered refresh token function")
    const res = await axiosInstance.post("/refresh", { withCredentials: true });
    console.log("back from the server")

    if (!res.ok) {
      console.log("e don cast")
      throw new Error("Failed to refresh token");
    }

    const data = await res.json();
    console.log("data", data)
    Cookies.set("accessToken", data.accessToken, {
      expires: new Date(data.expiresIn),
      sameSite: "None",
    });
    Cookies.set("expirationTime", new Date(data.expiresIn).getTime(), {
      sameSite: "None",
    });

    return data.accessToken;
  } catch (err) {
    throw new Error(`Failed to refresh token: ${err.message}`); // Preserve error details
  }
};

// Define the handleRefresh function
export const handleRefresh = async () => {
  try {
    // Call your refreshToken function to get the new access token
    const newAccessToken = await refreshToken();
    console.log("newAccessToken", newAccessToken);
    return newAccessToken;
  } catch (err) {
    console.error("Error handling refresh:", err);
    throw new Error(`Failed to handle refresh: ${err}`);
  }
};
