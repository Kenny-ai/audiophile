/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "@/utils/validation/auth";
import Link from "next/link";
import { LoginUser, useLoginMutation } from "@/lib/services/auth/auth";
import { useAppDispatch } from "@/lib/hooks";
import { Auth, setUser } from "@/lib/features/authSlice";
import { Notify } from "@/utils/toast";
import { useRouter } from "next/navigation";

interface Error {
  status: number;
  data: { message: string };
}

const Login = () => {
  const initialValues = { email: "", password: "" };

  const dispatch = useAppDispatch();

  const router = useRouter();

  const [login, { isLoading, isError, isSuccess, error, data }] =
    useLoginMutation();

  const handleSubmit = async (values: LoginUser) => {
    await login(values);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      const { user, token } = data as Auth;
      dispatch(setUser({ user, token }));
      Notify("success", "Login successful");
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
          validationSchema={loginSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-6 text-color-purple">
                Login
              </h3>

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
                title={"Login"}
                className="bg-clr-accent text-white hover:bg-clr-darker-accent w-full mb-6"
                type="submit"
                isLoading={isLoading}
              />
            </div>

            <p className="text-gray-700 font-bold mb-2">
              {`Don't have an account? `}
              <Link
                href={"/register"}
                className="text-clr-accent duration-150 hover:underline cursor-pointer"
              >
                Register
              </Link>
            </p>
          </Form>
        </Formik>
      </main>
    </div>
  );
};

export default Login;
