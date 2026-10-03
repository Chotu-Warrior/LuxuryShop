
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "../components/header-login";
import FooterLogin from "../components/footer-login";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!formData.terms) {
            alert("Please accept the Terms & Conditions and Privacy Policy.");
            return;
        }

        console.log("Registration Data:", formData);

        // Backend API yahan connect kar sakte ho
    };

    return (
        <>
            {/* Header */}
            <HeaderLogin />

            {/* Register */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

                        {/* Left */}
                        <div className="hidden lg:flex bg-gradient-to-br from-black to-gray-900 text-white p-16 flex-col justify-center">

                            <span className="uppercase tracking-[5px] text-amber-400 font-semibold">
                                Join LuxuryShop
                            </span>

                            <h1 className="text-5xl font-bold mt-6 leading-tight">
                                Create Your
                                <br />
                                Shopping Account
                            </h1>

                            <p className="text-gray-300 mt-8 leading-8">
                                Join thousands of happy customers and enjoy exclusive
                                discounts, premium fashion collections, wishlist, order
                                tracking and secure shopping.
                            </p>

                            <div className="space-y-5 mt-10">

                                <div className="flex items-center gap-3">
                                    <span className="text-amber-400 text-xl">
                                        &#10003;
                                    </span>
                                    Exclusive Member Offers
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-amber-400 text-xl">
                                        &#10003;
                                    </span>
                                    Fast Checkout
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-amber-400 text-xl">
                                        &#10003;
                                    </span>
                                    Track Your Orders
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-amber-400 text-xl">
                                        &#10003;
                                    </span>
                                    Wishlist & Rewards
                                </div>

                            </div>
                        </div>

                        {/* Right */}
                        <div className="p-10 lg:p-14">

                            <div className="text-center">
                                <h2 className="text-4xl font-bold">
                                    Create Account
                                </h2>

                                <p className="text-gray-500 mt-3">
                                    Please fill in your details
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-10 space-y-6"
                            >

                                {/* First & Last Name */}
                                <div className="grid md:grid-cols-2 gap-5">

                                    <div>
                                        <label className="font-medium">
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="John"
                                            required
                                            className="w-full mt-2 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-medium">
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Doe"
                                            required
                                            className="w-full mt-2 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                                        />
                                    </div>

                                </div>

                                {/* Email */}
                                <div>
                                    <label className="font-medium">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@email.com"
                                        required
                                        className="w-full mt-2 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="font-medium">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 9876543210"
                                        required
                                        className="w-full mt-2 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="font-medium">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create Password"
                                        required
                                        className="w-full mt-2 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <label className="font-medium">
                                        Confirm Password
                                    </label>

                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        required
                                        className="w-full mt-2 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                </div>

                                {/* Terms */}
                                <label className="flex items-start gap-3 cursor-pointer">

                                    <input
                                        type="checkbox"
                                        name="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />

                                    <span className="text-sm text-gray-600">
                                        I agree to the{" "}
                                        <Link
                                            to="/terms"
                                            className="text-amber-500 font-medium"
                                        >
                                            Terms & Conditions
                                        </Link>{" "}
                                        and{" "}
                                        <Link
                                            to="/privacy-policy"
                                            className="text-amber-500 font-medium"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </span>

                                </label>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold duration-300"
                                >
                                    Create Account
                                </button>

                            </form>

                            {/* OR */}
                            <div className="relative my-8">

                                <hr />

                                <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-gray-400">
                                    OR
                                </span>

                            </div>

                            {/* Social Login */}
                            <div className="grid gap-4">

                                <button
                                    type="button"
                                    className="border rounded-xl py-4 hover:bg-gray-50 duration-300"
                                >
                                    Continue with Google
                                </button>

                                <button
                                    type="button"
                                    className="border rounded-xl py-4 hover:bg-gray-50 duration-300"
                                >
                                    Continue with Facebook
                                </button>

                            </div>

                            {/* Login */}
                            <p className="text-center mt-8 text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-amber-500 font-semibold"
                                >
                                    Login Now
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <FooterLogin />
        </>
    );
};

export default Register;

