import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Privacy = () => {
    return (
        <>
            <Header />

            {/* Hero */}
            <section className="bg-black text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold">
                        Privacy <span className="text-amber-500">Policy</span>
                    </h1>
                    <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
                        Your privacy is important to us. This page explains how LuxuryShop collects, uses, and protects
                        your personal information.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-lg p-10 space-y-12">

                        <div>
                            <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>
                            <p className="text-gray-600 leading-8">
                                We collect personal information such as your name, email address, phone number,
                                shipping address, billing information, and purchase history to process orders
                                and improve your shopping experience.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-4">2. How We Use Your Information</h2>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Process and deliver your orders.</li>
                                <li>• Provide customer support.</li>
                                <li>• Improve our website and services.</li>
                                <li>• Send promotional offers (with your consent).</li>
                                <li>• Prevent fraud and enhance security.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-4">3. Cookies</h2>
                            <p className="text-gray-600 leading-8">
                                LuxuryShop uses cookies to remember your preferences, improve website
                                performance, and provide personalized recommendations.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-4">4. Data Security</h2>
                            <p className="text-gray-600 leading-8">
                                We implement modern security practices to protect your information from
                                unauthorized access, alteration, or disclosure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-4">5. Third-Party Services</h2>
                            <p className="text-gray-600 leading-8">
                                Payment gateways, shipping providers, and analytics services may collect
                                limited information necessary to complete their services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-4">6. Your Rights</h2>
                            <p className="text-gray-600 leading-8">
                                You can request access, correction, or deletion of your personal information
                                by contacting our support team.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-4">7. Contact Us</h2>
                            <div className="bg-gray-100 rounded-2xl p-6">
                                <p className="mb-2"><strong>Email:</strong> support@luxuryshop.com</p>
                                <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                                <p><strong>Address:</strong> MG Road, Indore, Madhya Pradesh, India</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black py-16">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white">Have Questions?</h2>
                    <p className="text-gray-300 mt-4">Our support team is always ready to help you.</p>
                    <Link to="/contact"
                        className="inline-block mt-8 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-semibold">
                        Contact Us
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default Privacy