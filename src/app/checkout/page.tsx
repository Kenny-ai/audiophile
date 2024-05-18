"use client";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import AppLayout from "@/layouts/AppLayout";
import { checkoutSchema } from "@/utils/validation/auth";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    country: "",
    paymentMethod: "",
    // eNum: "",
    // ePin: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    // router.push("/orders");
  };

  return (
    <AppLayout>
      <div className="px-8 sm:px-12 md:px-32 xl:px-52 py-12 bg-clr-grey">
        <button
          className="text-clr-dark opacity-75 hover:text-clr-accent w-fit mb-8"
          onClick={goBack}
        >
          Go Back
        </button>
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form className="flex flex-col gap-8 xl:flex-row">
            <div className="xl:w-3/5">
              <CheckoutForm />
            </div>
            <div className="xl:w-2/5">
              <CheckoutSummary />
            </div>
          </Form>
        </Formik>
      </div>
    </AppLayout>
  );
};

export default Page;
