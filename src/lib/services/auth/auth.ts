import { Auth } from "@/lib/features/authSlice";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface RegisterUser extends LoginUser {
  name: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    timeout: 10000,
  }),
  endpoints: (build) => ({
    login: build.mutation<Auth, LoginUser>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    // login: build.mutation({
    //   query: (body) => ({
    //     url: "auth/login",
    //     method: "POST",
    //     body,
    //   }),
    // }),

    register: build.mutation<Auth, RegisterUser>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
