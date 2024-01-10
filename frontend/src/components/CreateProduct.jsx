import { Form, Formik } from 'formik'
import { createProductSchema } from '../schemas'
import CustomCheckbox from './CustomCheckbox'
import useStorePackage from '../store'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import axios from '../API/axios'
import handleApiError from '../API/handleApiError'

/**
 * Component for creating a new product.
 * @returns {JSX.Element} The CreateProduct component.
 */
const CreateProduct = () => {
  const store = useStorePackage();
  const token = store.accessToken;

  /**
   * Handles form submission.
   * @param {Object} values - The form values.
   * @param {Object} actions - The form actions.
   * @returns {Promise<void>} A promise that resolves when the product is successfully added.
   */
  const onSubmit = async (values, actions) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post("/products", values, config);
      await handleApiError(response);
      actions.resetForm();
      alert("Product added successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form!");
      actions.setSubmitting(false);
    }
  };

  return (
    <section>
      <Formik
        initialValues={{
          name: "",
          description: "",
          category: "",
          price: "",
          quantity: "",
          imageUrl: "",
          acceptedTos: false,
        }}
        validationSchema={createProductSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <div className="mx-16">
            <h1 className="font-bold text-4xl mb-8 text-center">
              Add New Product
            </h1>
            <Form>
              <CustomInput
                id="name"
                label="Name"
                name="name"
                type="text"
                autoComplete="on"
              />
              <CustomInput
                id="description"
                autoComplete="on"
                label="Description"
                name="description"
                as="textarea"
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
                autoComplete="off"
                label="Price"
                name="price"
                type="number"
              />
              <CustomInput
                id="quantity"
                autoComplete="off"
                label="Quantity"
                name="quantity"
                type="number"
              />
              <CustomInput
                id="imageUrl"
                autoComplete="on"
                label="Image URL"
                name="imageUrl"
                type="text"
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
          </div>
        )}
      </Formik>
    </section>
  );
}

export default CreateProduct