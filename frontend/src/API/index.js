const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VyTmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiJ9LCJpYXQiOjE3MDE5OTQ1NDcsImV4cCI6MTcwMTk5NTE0N30.5aCyEY_yEyb_PGNMlDvR5VIrFN4HilmWRdWlm9yjOLg";

export const fetchProducts = async () => {
  try {
    const res = await fetch('http://localhost:3001/products', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    const products = await res.json();
    return products;
  } catch (err) {
    console.error('Error fetching products:', err);
    throw new Error('Error fetching products');
  }
};

export const getProduct = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    const product = await res.json();
    return product;
  } catch (err) {
    console.error('Error fetching product:', err);
    throw new Error('Error fetching product');
  }
};

export const postProduct = async (productData) => {
  try {
    const res = await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(productData),
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    const product = await res.json();
    return product;
  } catch (err) {
    console.error('Error posting product:', err);
    throw new Error('Error fetching product');
  }
}

export const updateProduct = async (id, productData) => {
  try {
    const res = await fetch('http://localhost:3001/products', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      // here the id is passed in the body insteads of the params because the backend is expecting the id in the body
      body: JSON.stringify({ id, ...productData }),
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    const product = await res.json();
    return product;
  } catch (err) {
    console.error('Error updating product:', err);
    throw new Error('Error fetching product');
  }
}

export const deleteProduct = async (id) => {
  try {
    const res = await fetch('http://localhost:3001/products', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    return;
  } catch (err) {
    console.error('Error deleting product:', err);
    throw new Error('Error fetching product');
  }
}


// Users
export const fetchUsers = async () => {
  try {
    const res = await fetch('http://localhost:3001/users', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    const users = await res.json();
    return users;
  } catch (err) {
    console.error('Error fetching users:', err);
    throw new Error('Error fetching users');
  }
};

export const getUser = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    const user = await res.json();
    return user;
  } catch (err) {
    console.error('Error fetching user:', err);
    throw new Error('Error fetching user');
  }
};

export const updateUserRole = async (id, role) => {
  try {
    const res = await fetch('http://localhost:3001/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({ id, role }),
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    const user = await res.json();
    return user;
  } catch (err) {
    console.error('Error updating user role:', err);
    throw new Error('Error updating user role');
  }
};

export const updateUserInfo = async (id, userInfo) => {
  try {
    const res = await fetch('http://localhost:3001/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({ id, ...userInfo }),
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    const user = await res.json();
    return user;
  } catch (err) {
    console.error('Error updating user info:', err);
    throw new Error('Error updating user info');
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await fetch('http://localhost:3001/users', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    return;
  } catch (err) {
    console.error('Error deleting user:', err);
    throw new Error('Error deleting user');
  }
};

export const postUser = async (userData) => {
  try {
    const res = await fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      alert(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error posting user:', err);
    throw new Error('Error posting user');
  }
}