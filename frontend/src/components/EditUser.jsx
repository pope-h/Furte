import { Form, Formik } from 'formik'
import CustomInput from './CustomInput'
import FormStyles from './FormStyles'
import { createUserSchema } from '../schemas'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox'
import { useEffect, useState } from 'react'
import { getUser, updateProduct } from '../API'
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const { id: userId } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
           try {
            const userData = await getUser(userId);
            setUser(userData);
           } catch (err) {
               console.error('Error fetching user details:', err);
               alert('Could not fetch user details. Please try again.');
            //    navigate('/error-page'); // Redirect to an error page
           }
        };

        fetchUserDetails();
    }, [userId]);

    const onSubmit = async (values, actions) => {
    try {
      await updateProduct(userId, values);
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
        {user && (
            <Formik
                initialValues={{
                    userName: user.userName,
                    role: user.role,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    address: user.address,
                    city: user.city,
                    country: user.country,
                    phoneNumber: user.phoneNumber,
                    acceptedTos: false
                }}
                validationSchema={createUserSchema}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <>
                        <h1 className='text-white font-bold text-4xl mb-8'>Edit User Info</h1>
                        <Form style={FormStyles.form}>
                            <CustomSelect 
                                label="Role"
                                name="role"
                            >
                                <option value="">{user.role}</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </CustomSelect>
                            <CustomInput
                                label="Username"
                                name="userName"
                                type="text"
                            />
                            <CustomInput
                                label="First Name"
                                name="firstName"
                                type="text"
                            />
                            <CustomInput
                                label="Last Name"
                                name="lastName"
                                type="text"
                            />
                            <CustomInput
                                label="Email"
                                name="email"
                                type="email"
                            />
                            <CustomInput
                                label="Address"
                                name="address"
                                as="textarea"
                            />
                            <CustomInput
                                label="City"
                                name="city"
                                type="text"
                            />
                            <CustomInput
                                label="Country"
                                name="country"
                                type="text"
                            />
                            <CustomInput
                                label="Phone Number"
                                name="phoneNumber"
                                type="number"
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

export default EditUser;