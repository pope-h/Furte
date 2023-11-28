const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VyTmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiJ9LCJpYXQiOjE3MDExNzQwMjAsImV4cCI6MTcwMTE3NDYyMH0.0vS8Y3O9deE7drwg-vH27Q6Ii0oHEqOlqUKMV8ZEYJw";

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