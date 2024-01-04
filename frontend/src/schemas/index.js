import * as yup from "yup";

const phoneRegExp = /^\+\d{7,}$/;

export const createProductSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, "Username must be at least 5 characters long")
    .required("Required"),
  description: yup
    .string()
    .min(10, "Username must be at least 10 characters long")
    .required("Required"),
  category: yup
    .string()
    .oneOf(
      [
        "livingroom",
        "bedroom",
        "dining",
        "kitchen",
        "workplace",
        "outdoor",
        "other",
      ],
      "Invalid Job Type"
    )
    .required("Required"),
  price: yup
    .number()
    .min(1, "Price must be at least one digit")
    .required("Required"),
  quantity: yup
    .number()
    .min(1, "Quantity must be at least one digit")
    .required("Required"),
  imageUrl: yup.string().url("Please enter a valid URL").required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please double check your information before submitting"),
});

export const updateUserSchema = yup.object().shape({
  userName: yup
    .string()
    .min(5, "Username must be at least 4 characters long")
    .required("Required"),
  role: yup
    .string()
    .oneOf(["Admin", "User"], "Invalid Role")
    .required("Required"),
  firstName: yup
    .string()
    .min(2, "First name must be at least 2 characters long")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  address: yup
    .string()
    .min(5, "Address must be at least 10 characters long")
    .required("Required"),
  country: yup
    .string()
    .min(5, "Country must be at least 5 characters long")
    .required("Required"),
  phoneNumber: yup
    .string()
    .matches(
      phoneRegExp,
      "Phone number must start with + and shouldcontain only digits"
    )
    .min(10, "Phone number must be at least 7 digits")
    .required("Phone number is required"),
  acceptedTos: yup.boolean().oneOf([true], "Please check the box to continue"),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Invalid password")
    .required("Password is required"),
  rememberMe: yup.boolean().oneOf([true], "Please check the box to continue"),
});

export const signUpSchema = yup.object().shape({
  userName: yup
    .string()
    .min(5, "Username must be at least 5 characters")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Required"),
  agreeCheckbox: yup
    .boolean()
    .oneOf([true], "Please check the box to continue"),
});

export const personalDataSchema = yup.object().shape({
  userName: yup
    .string()
    .min(5, "Please input your username")
    .required("Required"),
  firstName: yup
    .string()
    .min(2, "Please input your first name")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Please input your last name")
    .required("Required"),
});

export const shippingAddressSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Please input your first name")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Please input your last name")
    .required("Required"),
  country: yup
    .string()
    .min(5, "Please input your country")
    .required("Required"),
  address: yup
    .string()
    .min(5, "Please input your address")
    .required("Required"),
  phoneNumber: yup
    .string()
    .matches(
      phoneRegExp,
      "Phone number must start with + and should contain only digits"
    )
    .min(7, "Phone number must be at least 7 digits")
    .required("Phone number is required"),
});

export const checkoutSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Please input your first name")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Please input your last name")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  country: yup
    .string()
    .min(5, "Please input your country")
    .required("Required"),
  address: yup
    .string()
    .min(5, "Please input your address")
    .required("Required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number must start with + and shouldcontain only digits")
    .min(10, "Phone number must be at least 7 digits")
    .required("Phone number is required"),
  notes: yup.string(),
  coupon: yup.string(),
});

export const contactUsSchema = yup.object().shape({
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters long")
    .required("Required"),
  productName: yup.string().required("Required"),
  remark: yup
    .string()
    .oneOf(
      [
        "Satisfied with the product",
        "Quality exceeded expectations",
        "Delivery was prompt",
        "Issue with product received",
        "Product suggestions",
        "Other feedback",
      ],
      "Invalid remark"
    )
    .required("Required"),
  salutation: yup
    .string()
    .oneOf(["Mr", "Mrs", "Ms", "Dr", "Prof", "Rev"], "Invalid Salutation")
    .required("Required"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  address: yup.string().required("Required"),
  city: yup.string().required("Required"),
  postCode: yup.string().required("Required"),
  phoneNumber: yup
    .string()
    .matches(
      phoneRegExp,
      "Phone number must start with + and shouldcontain only digits"
    )
    .min(10, "Phone number must be at least 7 digits")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  country: yup.string().required("Required"),
});
