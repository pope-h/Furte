export const fetchProducts = async () => {
  try {
    const res = await fetch('http://localhost:3001/products', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VyTmFtZSI6ImVkd2FyZCIsImVtYWlsIjoiZWRpbmlrb0BtYWlsLmNvbSIsInJvbGUiOiJVc2VyIn0sImlhdCI6MTcwMTA0NDE0OSwiZXhwIjoxNzAxMDQ0NzQ5fQ.aSXnK7F-_qZmZX8zGgTz8_qgVAzNH5xClW9ca72Ym40',
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