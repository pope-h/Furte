/**
 * EditProduct component for editing a product.
 *
 * @component
 * @example
 * // Usage
 * import EditProduct from './EditProduct';
 * <EditProduct />
 */
import { Form, Formik } from 'formik'
import { createProductSchema } from '../schemas'
import CustomCheckbox from './CustomCheckbox'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useStorePackage from '../store'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import axios from '../API/axios'
import handleApiError from '../API/handleApiError'

const EditProduct = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const token = useStorePackage().accessToken;

    useEffect(() => {
        const fetchProductDetails = async () => {
           try {
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            };

            const response = await axios.get(`/products/${productId}`, config);
            const data = await handleApiError(response);
            setProduct(data);
           } catch (err) {
               console.error('Error fetching product details:', err);
               alert('Could not fetch product details. Please try again.');
            //    navigate('/error-page'); // Redirect to an error page
           }
        };

        fetchProductDetails();
    }, [productId, token]);

    const onSubmit = async (values, actions) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        `/products/${productId}`,
        { ...values, id: productId },
        config
      );
      await handleApiError(response);
      actions.resetForm();
        alert('Product updated successfully!');
        navigate('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
        alert('Error updating product!');
    }
  };

  return (
    <section className="mx-16">
      {product && (
        <Formik
          initialValues={{
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            quantity: product.quantity,
            imageUrl: product.imageUrl,
            acceptedTos: false,
          }}
          validationSchema={createProductSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <>
              <h1 className="font-bold text-4xl mb-8 text-center">
                Edit Product
              </h1>
              <Form>
                <CustomInput
                  id="name"
                  label="Name"
                  name="name"
                  type="text"
                  autoComplete="off"
                />
                <CustomInput
                  id="description"
                  label="Description"
                  name="description"
                  as="textarea"
                  autoComplete="off"
                  type="text"
                  height="h-36"
                />
                <CustomSelect id="category" label="Category" name="category">
                  <option value="">Select product category</option>
                  <option value="livingroom">Living Room</option>
                  <option value="bedroom">Bedroom</option>
                  <option value="dining">Dining</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="workplace">Workplace</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="other">Other</option>
                </CustomSelect>
                <CustomInput
                  id="price"
                  label="Price"
                  name="price"
                  type="number"
                  autoComplete="off"
                />
                <CustomInput
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  type="number"
                  autoComplete="off"
                />
                <CustomInput
                  id="imageUrl"
                  label="Image URL"
                  name="imageUrl"
                  type="text"
                  autoComplete="off"
                />
                <CustomCheckbox type="checkbox" name="acceptedTos" />
                <div className="flex justify-center mb-8">
                  <button
                    className={`lg:w-[45%] w-1/3 mt-8 max-md:w-full bg-neutral-800 hover:bg-neutral-600 text-white h-12 ${
                      isSubmitting && "opacity-50 cursor-not-allowed"
                    }`}
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      )}
    </section>
  );
}

export default EditProduct;