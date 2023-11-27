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
        .oneOf([true], "Please accept the terms of service"),
});