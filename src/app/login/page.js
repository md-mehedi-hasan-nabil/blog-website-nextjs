import Image from "next/image";
import React from "react";
import loginImage from "../../../public/login.jpg";
import logo from "../../../public/logo.png";
import Link from "next/link";

export default function Login() {
  return (
    <section className="container grid grid-cols-12 gap-4 h-screen items-center">
      <div className="col-span-12 md:col-span-8 flex justify-center items-center">
        <Image
          className="w-4/5 mx-auto"
          src={loginImage}
          width="1080"
          height="1080"
          alt="login banner"
        />
      </div>

      <div
        className="col-span-11 md:col-span-4 bg-white
        flex items-center justify-center py-5"
      >
        <div className="w-full h-100">
          <Link href="/">
            <Image
              src={logo}
              width={500}
              height={280}
              alt="logo"
              className="w-28"
            />
          </Link>
          <h1 className="text-xl md:text-3xl font-bold leading-tight mt-3">
            Log in to your account
          </h1>

          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                minlength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Log In
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
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>

          <p className="mt-8">
            Need an account?{" "}
            <Link
              href="/create-account"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
