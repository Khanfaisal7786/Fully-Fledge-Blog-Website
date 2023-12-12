import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../container/Container';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-black border border-t-2 border-t-gray">
        <Container>
        <div className="-m-6 flex flex-wrap">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center justify-center">
                                <Logo width="250px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by Quick Blog.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-7 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-sm font-semibold uppercase bg-gradient-to-r from-green-400 via-blue-500 to-yellow-500 text-transparent bg-clip-text">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-sm font-semibold uppercase bg-gradient-to-r from-green-400 via-blue-500 to-yellow-500 inline-block text-transparent bg-clip-text">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-sm font-semibold uppercase bg-gradient-to-r from-green-400 via-blue-500 to-yellow-500 inline-block text-transparent bg-clip-text">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium text-white bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-md"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>
            
        </section>
  )
}

export default Footer