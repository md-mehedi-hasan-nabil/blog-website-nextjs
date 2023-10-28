"use client";

import Image from "next/image";
import React from "react";
import loginImage from "../../../public/login.jpg";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { username, email, password } = data;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME}/api/auth/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container grid grid-cols-12 gap-4 h-screen items-center">
      <div
        className="col-span-12 md:col-span-4 bg-white w-full
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-3xl font-bold leading-tight mt-12">
            Create your account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mt-4">
              <label htmlFor="username" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                username
                {...register("username", { required: true })}
                placeholder="Enter Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password", { required: true })}
                placeholder="Enter Password"
                minlength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="retypePassword" className="block text-gray-700">
                Retype Password
              </label>
              <input
                type="password"
                name="retypePassword"
                id="retypePassword"
                placeholder="Enter Same Password"
                minlength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Submit
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <Image
                className="w-8"
                src="/google.png"
                alt="google"
                width={96}
                height={96}
              />
              <span className="ml-4">SignUp with Google</span>
            </div>
          </button>

          <p className="mt-8">
            Don't have an Account?{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Login Now!
            </Link>
          </p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 flex justify-center items-center">
        <Image
          className="w-3/5 mx-auto"
          src={loginImage}
          width="1080"
          height="1080"
          alt="login banner"
        />
      </div>
    </section>
  );
}
