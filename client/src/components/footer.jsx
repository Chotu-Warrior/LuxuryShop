import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300">

            {/* =========================
                Top Footer
            ========================= */}
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* =========================
                        Logo & About
                    ========================= */}
                    <div>

                        <Link
                            to="/"
                            className="text-3xl font-extrabold text-white"
                        >
                            Luxury<span className="text-amber-500">Shop</span>
                        </Link>

                        <p className="mt-6 leading-8 text-gray-400">
                            LuxuryShop is a premium online shopping destination
                            offering fashion, accessories, footwear, electronics
                            and lifestyle products with fast delivery and secure
                            payments.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-8">

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"
                            >
                                📘
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"
                            >
                                📷
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"
                            >
                                🐦
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"
                            >
                                ▶️
                            </a>

                        </div>
                    </div>

                    {/* =========================
                        Shop
                    ========================= */}
                    <div>

                        <h3 className="text-xl font-semibold text-white mb-6">
                            Shop
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link
                                    to="/shop"
                                    className="hover:text-amber-500 transition"
                                >
                                    Men Fashion
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop"
                                    className="hover:text-amber-500 transition"
                                >
                                    Women Fashion
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop"
                                    className="hover:text-amber-500 transition"
                                >
                                    Footwear
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop"
                                    className="hover:text-amber-500 transition"
                                >
                                    Accessories
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop"
                                    className="hover:text-amber-500 transition"
                                >
                                    New Arrivals
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* =========================
                        Quick Links
                    ========================= */}
                    <div>

                        <h3 className="text-xl font-semibold text-white mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-amber-500 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-amber-500 transition"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-amber-500 transition"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/faq"
                                    className="hover:text-amber-500 transition"
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/login"
                                    className="hover:text-amber-500 transition"
                                >
                                    My Account
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* =========================
                        Contact
                    ========================= */}
                    <div>

                        <h3 className="text-xl font-semibold text-white mb-6">
                            Contact
                        </h3>

                        <div className="space-y-5">

                            <p>
                                📍 MG Road, Indore, Madhya Pradesh
                            </p>

                            <p>
                                📞 +91 98765 43210
                            </p>

                            <p>
                                ✉ support@luxuryshop.com
                            </p>

                            <p>
                                🕒 Mon - Sat : 9:00 AM - 8:00 PM
                            </p>

                        </div>
                    </div>

                </div>
            </div>

            {/* =========================
                Newsletter
            ========================= */}
            <div className="border-t border-gray-800">

                <div className="max-w-7xl mx-auto px-6 py-10">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                        <div>

                            <h3 className="text-2xl font-bold text-white">
                                Subscribe Newsletter
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Get updates about latest collections & exclusive offers.
                            </p>

                        </div>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
                        >

                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 text-white outline-none focus:border-amber-500 w-full sm:w-80"
                            />

                            <button
                                type="submit"
                                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-xl transition"
                            >
                                Subscribe
                            </button>

                        </form>

                    </div>
                </div>
            </div>

            {/* =========================
                Bottom Footer
            ========================= */}
            <div className="border-t border-gray-800">

                <div className="max-w-7xl mx-auto px-6 py-6">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                        <p className="text-gray-500 text-center md:text-left">
                            © 2026 LuxuryShop. All Rights Reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">

                            <Link
                                to="/privacy"
                                className="hover:text-amber-500 transition"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/terms"
                                className="hover:text-amber-500 transition"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                to="/refund-policy"
                                className="hover:text-amber-500 transition"
                            >
                                Refund Policy
                            </Link>

                        </div>

                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

