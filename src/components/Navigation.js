"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png"
import { Navbar } from "flowbite-react";

export default function Navigation() {
  return (
    <Navbar className=" top-0 z-50">
      <Link href="/" className="flex items-center">
        <Image
          width={500}
          height={280}
          src={logo}
          className="w-28"
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-4 md:order-2">
        <Link className="font-semibold hover:text-red-600" href="/write-blog">
          Write Blog
        </Link>
        <Link href="/login">
          <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Login
          </button>
        </Link>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="md:pl-8 md:mr-auto">
        <Link href="/" active={true}>
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/membership">Membership</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
