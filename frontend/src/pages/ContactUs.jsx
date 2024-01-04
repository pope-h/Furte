/**
 * ContactUs component for the contact us page.
 * Renders a form for users to submit their contact information and message.
 * Uses Formik for form handling and validation.
 *
 * @component
 * @example
 * return (
 *   <ContactUs />
 * )
 */
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";
import PagesCarousel from "../sections/PagesCarousel";
import { Form, Formik } from "formik";
import { contactUsSchema } from "../schemas";

const ContactUs = () => {
  const salutationOptions = [
    "Select as appropriate",
    "Mr",
    "Mrs",
    "Ms",
    "Dr",
    "Prof",
    "Rev",
  ];

  const remarkOptions = [
    "Select as appropriate",
    "Satisfied with the product",
    "Quality exceeded expectations",
    "Delivery was prompt",
    "Issue with product received",
    "Product suggestions",
    "Other feedback",
  ];


  const carouselImage = [
    {
      src: "https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045380_1280.jpg",
      title: "Contact Us",
    },
  ];

  const initialValues = {
    message: "",
    productName: "",
    remark: "",
    salutation: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    phoneNumber: "",
    email: "",
    country: "",
  };

  const [user, setUser] = useState({ initialValues });
  const [displayUserDetails, setDisplayUserDetails] = useState(false);

  const onSubmit = async (values, actions) => {
    try {
      setUser(values);

      if (userClickedSend()) {
        setDisplayUserDetails(true);
      }
      console.log("values", values);
      alert("This information will not be saved!");
    } catch (error) {
      console.error("Error Placing Order:", error);
      alert("Error Placing Order!");
      actions.setSubmitting(false);
    }
  };

  const userClickedSend = () => {
    return true;
  };

  return (
    <div className="max-sm:my-12 mt-2 mb-24 overflow-hidden">
      <section className="pb-12 padding-t max-md:pt-12">
        <PagesCarousel imageInfo={carouselImage} />
      </section>
      <div className="flex flex-col gap-8 max-md:gap-10 py-16 px-4">
        <h2 className="text-4xl font-light text-center">Contact Us</h2>
        <p className="text-center font-light text-xl leading-6 text-gray-700 flex-wrap">
          You can contact us via telephone, email or with the service ticket
          below.
        </p>
        {user && (
          <Formik
            initialValues={initialValues}
            validationSchema={contactUsSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <div>
                <Form>
                  <div className="flex max-lg:flex-col gap-8 max-lg:gap-1 items-center justify-between">
                    <div className="lg:w-1/4 w-full">
                      <CustomInput
                        label="Your Message"
                        name="message"
                        type="message"
                        as="textarea"
                        id="message"
                        height="h-60"
                      />
                    </div>
                    <div className="lg:w-2/4 w-full grid grid-cols-2 max-lg:grid-cols-1 gap-x-2">
                      <CustomInput
                        label="Product Name"
                        name="productName"
                        type="productName"
                        id="productName"
                        margin="my-3"
                      />
                      <CustomSelect
                        label="Remark"
                        name="remark"
                        type="remark"
                        id="remark"
                        margin="my-3"
                      >
                        {remarkOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </CustomSelect>
                      <CustomSelect
                        label="Salutation"
                        name="salutation"
                        type="salutation"
                        id="salutation"
                        margin="my-3"
                      >
                        {salutationOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </CustomSelect>
                      <CustomInput
                        label="First Name"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        margin="my-3"
                      />
                      <CustomInput
                        label="Last Name"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        margin="my-3"
                      />

                      <CustomInput
                        label="Address"
                        name="address"
                        type="address"
                        as="textarea"
                        id="address"
                        margin="my-3"
                      />
                      <CustomInput
                        label="City"
                        name="city"
                        type="city"
                        id="city"
                        margin="my-3"
                      />
                      <CustomInput
                        label="Post Code"
                        name="postCode"
                        type="postCode"
                        id="postCode"
                        margin="my-3"
                      />
                    </div>
                    <div className="flex flex-col lg:w-1/4 w-full">
                      <CustomInput
                        label="Phone Number"
                        name="phoneNumber"
                        type="phoneNumber"
                        id="phoneNumber"
                        margin="my-3"
                      />
                      <CustomInput
                        label="Email"
                        name="email"
                        type="email"
                        id="email"
                        margin="my-3"
                      />
                      <CustomInput
                        label="Country"
                        name="country"
                        type="country"
                        id="country"
                        margin="my-3"
                      />
                    </div>
                  </div>
                  {displayUserDetails && (
                    <p className="leading-6 font-light text-gray-600 flex-wrap">
                      The message from {user.salutation} {user.firstName}{" "}
                      {user.lastName} reads {user.message}. <br />
                      {user.salutation} {user.firstName} can be reached on{" "}
                      {user.phoneNumber} or {user.email}. <br />
                      {user.salutation} {user.firstName} lives in {user.address}
                      , {user.city}, {user.country} with postal code{" "}
                      {user.postCode}. <br />
                      {user.salutation} {user.firstName} is interested in{" "}
                      {user.productName}. <br />
                      {user.salutation} {user.firstName} remark on{" "}
                      {user.productName} is: {user.remark}.
                    </p>
                  )}
                  <div className="flex justify-center mb-8">
                    <button
                      className={`lg:w-[25%] w-1/3 mt-8 max-md:w-full bg-neutral-800 hover:bg-neutral-600 text-white h-12 ${
                        isSubmitting && "opacity-50 cursor-not-allowed"
                      }`}
                      type="submit"
                    >
                      SEND
                    </button>
                  </div>
                  <p className="leading-6 font-light text-gray-600 flex-wrap">
                    Data protection:
                  </p>
                  <p className="leading-6 font-light pl-4 text-gray-600 flex-wrap">
                    We prioritize your privacy. Your input is not stored,
                    ensuring complete data security. If needed, we can provide
                    verification by showing the database upon request.
                  </p>
                  <div className="flex gap-2 justify-center items-center py-2">
                    <i className="bx bx-phone-call bx-sm"></i>
                    <p className="text-2xl font-thin text-gray-600 flex-wrap hover:text-coral-red hover:underline hover:cursor-pointer">
                      +234 7086681344
                    </p>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
