import React from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "../components/header-login";
import FooterLogin from "../components/footer-login";

const ForgotPassword = () => {
    return (
        <>
            <HeaderLogin />

            {/* Forgot Password */}
            <section className="py-24">
                <div className="max-w-md mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-2xl p-10">

                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-4xl">
                                🔒
                            </div>
                            <h1 className="text-3xl font-bold mt-6">Forgot Password?</h1>
                            <p className="text-gray-500 mt-4 leading-7">
                                Enter your registered email address and we&apos;ll send you a password reset link.
                            </p>
                        </div>

                        <form className="mt-10 space-y-6">
                            <div>
                                <label className="font-medium">Email Address</label>
                                <input type="email" placeholder="Enter your email"
                                    className="w-full mt-2 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                            <button
                                className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition">
                                Send Reset Link
                            </button>
                        </form>

                        <div className="text-center mt-8">
                            <Link to="/login" className="text-amber-500 font-semibold hover:underline">
                                ← Back To Login
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <FooterLogin />
        </>
    )
}
export default ForgotPassword