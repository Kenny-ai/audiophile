import * as Yup from "yup";

export const checkoutSchema = Yup.object({
  name: Yup.string()
    .max(20, "Name must be 20 characters or less")
    .required("Please enter a valid name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter a valid email address"),
  phone: Yup.number().required("Please enter a valid phone number"),
  address: Yup.string().required("Please enter a valid address"),
  zip: Yup.number().required("Please enter a zip code"),
  country: Yup.string().required("Please select a country"),
  paymentMethod: Yup.string().required("Please select a payment method"),
});
