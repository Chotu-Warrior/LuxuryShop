
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const _404 = () => {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-br py-4 from-gray-900 via-black to-gray-800 min-h-screen text-white">

                <div className="min-h-screen flex items-center justify-center px-6">

                    <div className="max-w-3xl text-center">

                        <div
                            className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-white/10 backdrop-blur-xl border border-white/10">

                            <span className="text-7xl">
                                🚫
                            </span>

                        </div>

                        <h1 className="text-[120px] md:text-[180px] font-extrabold text-amber-400 leading-none mt-8">

                            404

                        </h1>

                        <h2 className="text-4xl md:text-5xl font-bold mt-4">

                            Oops! Page Not Found

                        </h2>

                        <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl mx-auto">

                            The page you are looking for might have been removed,
                            renamed, or is temporarily unavailable.

                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

                            <a href="index.html"
                                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-10 py-4 rounded-xl transition">

                                🏠 Back To Home

                            </a>

                            <a href="shop.html"
                                className="border border-white/30 hover:bg-white hover:text-black px-10 py-4 rounded-xl transition">

                                🛍 Continue Shopping

                            </a>

                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-20">

                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">

                                <div className="text-4xl">

                                    🔍

                                </div>

                                <h3 className="font-bold text-xl mt-4">

                                    Search Products

                                </h3>

                                <p className="text-gray-400 mt-3">

                                    Find your favorite fashion collection.

                                </p>

                            </div>

                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">

                                <div className="text-4xl">

                                    📦

                                </div>

                                <h3 className="font-bold text-xl mt-4">

                                    Track Orders

                                </h3>

                                <p className="text-gray-400 mt-3">

                                    Check your recent orders anytime.

                                </p>

                            </div>

                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">

                                <div className="text-4xl">

                                    💬

                                </div>

                                <h3 className="font-bold text-xl mt-4">

                                    Need Help?

                                </h3>

                                <p className="text-gray-400 mt-3">

                                    Our support team is always here.

                                </p>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Footer />

        </>
    );
};
export default _404;

