import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteProduct, fetchProducts } from '../API';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsFromServer = await fetchProducts();
        setProducts(productsFromServer);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');

    if (confirmDelete) {
      try {
        await deleteProduct(id);
        setProducts(products.filter((product) => product._id !== id));
      } catch (err) {
        console.error('Error deleting product:', err);
      }
    }
	
  }

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center mb-3">
        <strong className="text-gray-700 font-medium">Products</strong>
        {/* Link to the page for adding a new product */}
        <Link to="/admin/create-product" className="text-green-500 hover:text-green-700">
          + Create
        </Link>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        {loading ? (
          // Show loading spinner while data is being fetched
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          // Show table once data is loaded
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td>
                    <Link to={`/admin/${product.id}`}>#{product._id}</Link>
                  </td>
                  <td>
                    <Link to={`/admin/${product.product_id}`}>{product.name}</Link>
                  </td>
                  <td>
                    <Link to={`/admin/${product.customer_id}`}>{product.category}</Link>
                  </td>
                  <td>${product.price}</td>
                  <td>{product.quantity} Units</td>
                  <td>{format(new Date(product.createdAt), 'dd MMM yyyy')}</td>
                  <td>
                    <Link to={`/admin/edit/${product._id}`} className="text-blue-500 hover:text-coral-red">
                      Edit
                    </Link>
                  </td>
                  <td>
                    <i className='bx bx-trash text-coral-red cursor-pointer' onClick={() => handleDelete(product._id)} ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
