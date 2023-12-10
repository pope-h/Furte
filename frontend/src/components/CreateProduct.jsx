import { Form, Formik } from 'formik'
import CustomInput from './CustomInput'
import FormStyles from './FormStyles'
import { createProductSchema } from '../schemas'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox'
import { postProduct } from '../API'

const onSubmit = async (values, actions) => {
  try {
    await postProduct(values);
    actions.resetForm();
    alert('Product added successfully!');
  } catch (err) {
    console.error('Error submitting form:', err);
    alert('Error submitting form!');
    actions.setSubmitting(false);
}
};

const CreateProduct = () => {
  return (
    <section className="bg-neutral-800" style={FormStyles.app}>
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
          <>
            <h1 className="text-white font-bold text-4xl mb-8">
              Add New Product
            </h1>
            <Form style={FormStyles.form}>
              <CustomInput
                id="name"
                label="Name"
                name="name"
                type="text"
                placeholder="Enter product name"
                autoComplete="on"
              />
              <CustomInput
                id="description"
                autoComplete="on"
                label="Description"
                name="description"
                as="textarea"
                placeholder="Enter product description"
              />
              <CustomSelect
                id="category"
                label="Category"
                name="category"
                placeholder="Select product category"
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
                id="price"
                autoComplete="off"
                label="Price"
                name="price"
                type="number"
                placeholder="Enter product price"
              />
              <CustomInput
                id="quantity"
                autoComplete="off"
                label="Quantity"
                name="quantity"
                type="number"
                placeholder="Enter product quantity"
              />
              <CustomInput
                id="imageUrl"
                autoComplete="on"
                label="Image URL"
                name="imageUrl"
                type="text"
                placeholder="Enter product image URL"
              />
              <CustomCheckbox type="checkbox" name="acceptedTos" />
              {/* <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            name="name"
                        /> */}
              <button
                type="submit"
                style={{
                  ...FormStyles.button,
                  ...(isSubmitting ? FormStyles.buttonDisabled : {}),
                }}
              >
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
}

export default CreateProduct