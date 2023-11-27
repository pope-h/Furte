export const fetchProducts = async () => {
  try {
    const res = await fetch('http://localhost:3001/products', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VyTmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiJ9LCJpYXQiOjE3MDExMjM4NjgsImV4cCI6MTcwMTEyNDQ2OH0.HbD_OYC4TBze2rOs1Jgs0yS_147BmmYfpcZUdiPHAkY',
      },
    });
    if (!res.ok) {
      throw Error('Could not fetch the products from database');
    }
    const products = await res.json();
    return products;
  } catch (err) {
    console.error('Error fetching products:', err);
    throw err;
  }
};

export const postProduct = async (productData) => {
  try {
    const res = await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VyTmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiJ9LCJpYXQiOjE3MDExMjM4NjgsImV4cCI6MTcwMTEyNDQ2OH0.HbD_OYC4TBze2rOs1Jgs0yS_147BmmYfpcZUdiPHAkY',
      },
      body: JSON.stringify(productData),
    });
    if (!res.ok) {
      throw Error('Could not post the product to database');
    }
    const product = await res.json();
    return product;
  } catch (err) {
    console.error('Error posting product:', err);
    throw err;
  }
}