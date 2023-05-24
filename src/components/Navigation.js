"use client"

import React from 'react'
import logo from "../assets/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { Button, Navbar } from 'flowbite-react'


export default function Navigation() {
    return (
        <Navbar
            className=' top-0 z-50'
        >
            <Link href="/" className="flex items-center">
                <Image width={66} height={48} src={logo} className="mr-3" alt="Logo" />
            </Link>
            <div className="flex md:order-2">
                <Link href="/login">
                    <button className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                        Login
                    </button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='md:pl-8 md:mr-auto'>
                <Link
                    href="/"
                    active={true}
                >
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/membership">
                    Membership
                </Link>
            </Navbar.Collapse>
        </Navbar>

    )
}
