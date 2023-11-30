import * as yup from "yup";

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
        .oneOf(["livingroom", "bedroom", "dining", "kitchen", "workplace", "outdoor", "other"], "Invalid Job Type")
        .required("Required"),
    price: yup
        .number()
        .min(1, "Price must be at least one digit")
        .required("Required"),
    quantity: yup
        .number()
        .min(1, "Quantity must be at least one digit")
        .required("Required"),
    imageUrl: yup
        .string()
        .url("Please enter a valid URL")
        .required("Required"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "Please double check your information before submitting"),
});

export const createUserSchema = yup.object().shape({
    userName: yup
        .string()
        .min(5, "Username must be at least 4 characters long")
        .required("Required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .required("Required"),
    role: yup
        .string()
        .oneOf(["admin", "user"], "Invalid Role")
        .required("Required"),
    firstName: yup
        .string()
        .min(2, "First name must be at least 2 characters long")
        .required("Required"),
    lastName: yup
        .string()
        .min(2, "Last name must be at least 2 characters long")
        .required("Required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
    address: yup
        .string()
        .min(5, "Address must be at least 10 characters long")
        .required("Required"),
    city: yup
        .string()
        .min(5, "City must be at least 4 characters long")
        .required("Required"),
    country: yup
        .string()
        .min(5, "Country must be at least 5 characters long")
        .required("Required"),
    phoneNumber: yup
        .string()
        .min(5, "Phone number must be at least 5 characters long")
        .required("Required"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "I the user's permission to make this changes and understand tthis activity will be logged in my name"),
});