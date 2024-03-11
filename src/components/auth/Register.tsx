/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { registerSchema } from "@/utils/validation/auth";
import Link from "next/link";
import { useAppDispatch } from "@/lib/hooks";
import { RegisterUser, useRegisterMutation } from "@/lib/services/auth/auth";
import { Auth, setUser } from "@/lib/features/authSlice";
import { Notify } from "@/utils/toast";
import { useRouter } from "next/navigation";

interface Error {
  status: number;
  data: { message: string };
}

const Register = () => {
  const initialValues = { name: "", email: "", password: "" };

  const dispatch = useAppDispatch();

  const router = useRouter();

  const [register, { isLoading, isError, isSuccess, error, data }] =
    useRegisterMutation();

  const handleSubmit = async (values: RegisterUser) => {
    await register(values);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      const { user, token } = data as Auth;
      dispatch(setUser({ user, token }));
      Notify("success", "Account successfully created");
      router.push("/");
    }
    if (isError) {
      if (typeof (error as any).status === "number") {
        Notify("error", (error as Error).data.message);
      } else {
        Notify("error", "Oops! something went wrong");
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 bg-clr-grey">
      <header>
        <Icon
          src="/assets/shared/desktop/dark-logo.svg"
          alt="audiophile-logo"
        />
      </header>

      <main className="w-full max-w-[400px] bg-white shadow-md rounded-lg p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-6 text-color-purple">
                Register
              </h3>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <Field
                  // required
                  autoComplete="name"
                  placeholder="Your name"
                  id="name"
                  name="name"
                  type="text"
                  className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => (
                    <span className="text-red-600 text-sm font-bold">
                      {msg}
                    </span>
                  )}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <Field
                  // required
                  autoComplete="email"
                  placeholder="Your email"
                  id="email"
                  name="email"
                  type="email"
                  className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <span className="text-red-600 text-sm font-bold">
                      {msg}
                    </span>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <Field
                  // required
                  autoComplete="current-password"
                  placeholder="Your password"
                  id="password"
                  name="password"
                  type="password"
                  className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
                />
                <ErrorMessage
                  name="password"
                  render={(msg) => (
                    <span className="text-red-600 text-sm font-bold">
                      {msg}
                    </span>
                  )}
                />
              </div>
              <Button
                title={`Create an account`}
                className="bg-clr-accent text-white hover:bg-clr-darker-accent w-full mb-6"
                type="submit"
                isLoading={isLoading}
              />
            </div>

            <p className="text-gray-700 font-bold mb-2">
              {`Already have an account?`}
              <Link
                href={"/login"}
                className="text-clr-accent duration-150 hover:underline cursor-pointer ml-1"
              >
                Login
              </Link>
            </p>
          </Form>
        </Formik>
      </main>
    </div>
  );
};

export default Register;
