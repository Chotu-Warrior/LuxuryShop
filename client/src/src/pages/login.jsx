import React from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "../components/header-login";
import FooterLogin from "../components/footer-login";

const Login = () => {
    return (
        <>
            <HeaderLogin />

            {/* Login */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

                        {/* Left */}
                        <div className="hidden lg:flex bg-black text-white p-16 flex-col justify-center">
                            <span className="text-amber-500 font-semibold uppercase tracking-widest">
                                Welcome Back
                            </span>
                            <h1 className="text-5xl font-bold leading-tight mt-6">
                                Luxury Shopping Starts Here
                            </h1>
                            <p className="text-gray-300 mt-6 leading-8">
                                Sign in to access your orders, wishlist, saved addresses, exclusive offers and premium
                                shopping experience.
                            </p>
                            <div className="mt-10 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-amber-500">&#10003;</span>
                                    Premium Products
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-amber-500">&#10003;</span>
                                    Secure Payments
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-amber-500">&#10003;</span>
                                    Fast Delivery
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="p-10 lg:p-14">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold">Login</h2>
                                <p className="text-gray-500 mt-3">Sign in to your account</p>
                            </div>

                            <form className="mt-10 space-y-6">
                                <div>
                                    <label className="font-medium">Email Address</label>
                                    <input type="email" placeholder="Enter your email"
                                        className="w-full mt-2 border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none" />
                                </div>
                                <div>
                                    <label className="font-medium">Password</label>
                                    <input type="password" placeholder="Enter your password"
                                        className="w-full mt-2 border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none" />
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" />
                                        Remember Me
                                    </label>
                                    <Link to="/forgot-password" className="text-amber-500 hover:underline">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <button
                                    className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold duration-300">
                                    Login
                                </button>
                            </form>

                            <div className="relative my-8">
                                <hr />
                                <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-gray-400">
                                    OR
                                </span>
                            </div>

                            <div className="grid gap-4">
                                <button className="border rounded-xl py-4 hover:bg-gray-50">
                                    Continue with Google
                                </button>
                                <button className="border rounded-xl py-4 hover:bg-gray-50">
                                    Continue with Facebook
                                </button>
                            </div>

                            <p className="text-center mt-8 text-gray-600">
                                Don&apos;t have an account?{" "}
                                <Link to="/register" className="text-amber-500 font-semibold">
                                    Create Account
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <FooterLogin />
        </>
    )
}
export default Login