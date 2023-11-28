import { Form, Formik } from 'formik'
import CustomInput from './CustomInput'
import FormStyles from './FormStyles'
import { createProductSchema } from '../schemas'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox'
import { useEffect, useState } from 'react'
import { getProduct, updateProduct } from '../API'
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductDetails = async () => {
           try {
            const productData = await getProduct(productId);
            setProduct(productData);
           } catch (err) {
               console.error('Error fetching product details:', err);
               alert('Could not fetch product details. Please try again.');
            //    navigate('/error-page'); // Redirect to an error page
           }
        };

        fetchProductDetails();
    }, [productId]);

    const onSubmit = async (values, actions) => {
    try {
      await updateProduct(productId, values);
      actions.resetForm();
        alert('Product updated successfully!');
        navigate('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
        alert('Error updating product!');
    }
  };

  return (
    <section className='bg-neutral-800' style={FormStyles.app}>
        {product && (
            <Formik
                initialValues={{
                    name: product.name,
                    description: product.description,
                    category: product.category,
                    price: product.price,
                    quantity: product.quantity,
                    imageUrl: product.imageUrl,
                    acceptedTos: false
                }}
                validationSchema={createProductSchema}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <>
                        <h1 className='text-white font-bold text-4xl mb-8'>Edit Product</h1>
                        <Form style={FormStyles.form}>
                            <CustomInput
                                label="Name"
                                name="name"
                                type="text"
                            />
                            <CustomInput
                                label="Description"
                                name="description"
                                as="textarea"
                            />
                            <CustomSelect 
                                label="Category"
                                name="category"
                            >
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
                                label="Price"
                                name="price"
                                type="number"
                            />
                            <CustomInput
                                label="Quantity"
                                name="quantity"
                                type="number"
                            />
                            <CustomInput
                                label="Image URL"
                                name="imageUrl"
                                type="text"
                            />
                            <CustomCheckbox type="checkbox" name="acceptedTos" />
                            <button
                                type="submit"
                                style={{
                                    ...FormStyles.button,
                                    ...(isSubmitting ? FormStyles.buttonDisabled : {})
                                }}
                            >
                                Submit
                            </button>
                        </Form>
                    </>
                )}
            </Formik>
        )}
    </section>
  )
}

export default EditProduct;