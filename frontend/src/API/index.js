// import useStorePackage from "../store";
import handleApiError from "./handleApiError";

// const { accessToken: token } = useStorePackage.getState();
// console.log("token", token);

const getAuthorizationHeader = (token) => ({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
});

export const fetchProducts = async (token) => {
  try {
    const res = await fetch("http://localhost:3001/products", {
      method: "GET",
      headers: getAuthorizationHeader(token),
    });
    return handleApiError(res);
  } catch (err) {
    console.error('Error fetching products:', err);
    throw new Error('Error fetching products');
  }
};

export const getProduct = async (token, id) => {
  try {
    const res = await fetch(`http://localhost:3001/products/${id}`, {
      method: "GET",
      headers: getAuthorizationHeader(token),
    });
    return handleApiError(res);
  } catch (err) {
    console.error('Error fetching product:', err);
    throw new Error('Error fetching product');
  }
};

export const postProduct = async (token, productData) => {
  try {
    const res = await fetch("http://localhost:3001/products", {
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

export const updateProduct = async (token, id, productData) => {
  try {
    const res = await fetch("http://localhost:3001/products", {
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

export const deleteProduct = async (token, id) => {
  try {
    const res = await fetch("http://localhost:3001/products", {
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


// Users
export const fetchUsers = async (token) => {
  try {
    const res = await fetch("http://localhost:3001/users", {
      method: "GET",
      headers: getAuthorizationHeader(token),
    });
    return handleApiError(res);
  } catch (err) {
    console.error('Error fetching users:', err);
    throw new Error('Error fetching users');
  }
};

export const getUser = async (token, id) => {
  try {
    const res = await fetch(`http://localhost:3001/users/${id}`, {
      method: "GET",
      headers: getAuthorizationHeader(token),
    });
    return handleApiError(res);
  } catch (err) {
    console.error('Error fetching user:', err);
    throw new Error('Error fetching user');
  }
};

export const updateUserRole = async (token, id, role) => {
  try {
    const res = await fetch("http://localhost:3001/users", {
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

export const updateUserInfo = async (token, id, userInfo) => {
  try {
    const res = await fetch("http://localhost:3001/users", {
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

export const deleteUser = async (token, id) => {
  try {
    const res = await fetch("http://localhost:3001/users", {
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

export const signInUser = async (token, userData) => {
  try {
    const res = await fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: getAuthorizationHeader(token),
      body: JSON.stringify(userData),
    });
    return handleApiError(res);
  } catch (err) {
    console.error('Error signing user in:', err);
    throw new Error('Error signing user in');
  }
}

export const signUpUser = async (token, userData) => {
  try {
    const res = await fetch("http://localhost:3001/signup", {
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