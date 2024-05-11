import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(5, "Password must be 5 characters or more")
    .required("Required"),
});

export const registerSchema = Yup.object({
  name: Yup.string()
    .max(20, "Name must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(5, "Password must be 5 characters or less")
    .required("Required"),
});

export const checkoutSchema = Yup.object({
  name: Yup.string()
    .max(20, "Name must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string().email("Invalid email address").required("Required"),
  address: Yup.string().required("Required"),
});
