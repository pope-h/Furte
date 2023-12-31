// import useStorePackage from "../store";
import Cookies from "js-cookie";
import handleApiError from "./handleApiError";

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
    ? `https://furte-server.vercel.app/products?search=${encodeURIComponent(
        searchQuery
      )}`
    : "https://furte-server.vercel.app/products";

  try {
    console.log("first")
    const res = await fetch(apiUrl, {
      method: "GET",
      headers: getAuthorizationHeader(token),
    });

    if (res.status === 401 || res.status === 403) {
      console.log("second")
      console.log(res.status)
      // Token expired or unauthorized, attempt to refresh the token
      await refreshToken();
      // Retry the request with the new token
      const newToken = Cookies.get("accessToken");
      const retryRes = await fetch(apiUrl, {
        method: "GET",
        headers: getAuthorizationHeader(newToken),
      });
      return handleApiError(retryRes);
    } else {
      console.log("third")
      return handleApiError(res);
    }
  } catch (err) {
    console.log("fourth")
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
    console.error('Error fetching product:', err);
    throw new Error('Error fetching product');
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
    console.error('Error posting product:', err);
    throw new Error('Error fetching product');
  }
}

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
    console.error('Error updating product:', err);
    throw new Error('Error fetching product');
  }
}

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
    console.error('Error deleting product:', err);
    throw new Error('Error fetching product');
  }
}

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
    console.error('Error fetching users:', err);
    throw new Error('Error fetching users');
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
    console.error('Error fetching user:', err);
    throw new Error('Error fetching user');
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
    console.error('Error updating user role:', err);
    throw new Error('Error updating user role');
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
    console.error('Error updating user info:', err);
    throw new Error('Error updating user info');
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
    console.error('Error deleting user:', err);
    throw new Error('Error deleting user');
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
    const res = await fetch("https://furte-server.vercel.app/signin", {
      method: "POST",
      headers: getAuthorizationHeader(token),
      body: JSON.stringify(userData),
    });
    return handleApiError(res, userData);
  } catch (err) {
    console.error('Error signing user in:', err);
    throw new Error('Error signing user in');
  }
}

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
    console.error('Error signing user up:', err);
    throw new Error('Error signing user up');
  }
}

export const refreshToken = async () => {
  try {
    console.log("refresh token function");
    const res = await fetch("https://furte-server.vercel.app/refresh", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    console.log("res", res);

    if (!res.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await res.json();
    console.log("data");

    // Update the access token and its expiration time in cookies
    Cookies.set("accessToken", data.accessToken, {
      expires: new Date(data.expiresIn),
      sameSite: "None", // set to None if using https
    });
    console.log("New access token", data.accessToken);

    Cookies.set("expirationTime", new Date(data.expiresIn).getTime(), {
      sameSite: "None",
    });

    console.log("Token successfully refreshed", data);
  } catch (err) {
    console.error("Error refreshing token:", err);
    throw new Error(`Failed to refresh token: ${err}`);
  }
};
