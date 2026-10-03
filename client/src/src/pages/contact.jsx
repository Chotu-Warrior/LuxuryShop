import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Contact = () => {
    return (
        <>
            <Header />

            {/* HERO */}
            <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold">Contact Us</h1>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                        Have questions about your order or our products?
                        Our support team is always ready to help you.
                    </p>
                </div>
            </section>

            {/* CONTACT */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl shadow p-8">
                                <div className="text-4xl">📍</div>
                                <h3 className="text-2xl font-bold mt-5">Our Office</h3>
                                <p className="text-gray-500 mt-4 leading-8">
                                    LuxuryShop Pvt Ltd<br />
                                    MG Road<br />
                                    Indore, Madhya Pradesh<br />
                                    India - 452001
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl shadow p-8">
                                <div className="text-4xl">📞</div>
                                <h3 className="text-2xl font-bold mt-5">Call Us</h3>
                                <p className="text-gray-500 mt-4">+91 9876543210</p>
                                <p className="text-gray-500">+91 9876500000</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow p-8">
                                <div className="text-4xl">✉️</div>
                                <h3 className="text-2xl font-bold mt-5">Email</h3>
                                <p className="text-gray-500 mt-4">support@luxuryshop.com</p>
                                <p className="text-gray-500">sales@luxuryshop.com</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow p-10">
                                <h2 className="text-4xl font-bold">Send Message</h2>
                                <p className="text-gray-500 mt-3">We&apos;ll reply within 24 hours.</p>
                                <form className="mt-10 space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <input type="text" placeholder="First Name"
                                            className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none" />
                                        <input type="text" placeholder="Last Name"
                                            className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <input type="email" placeholder="Email Address"
                                            className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none" />
                                        <input type="tel" placeholder="Phone Number"
                                            className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none" />
                                    </div>
                                    <input type="text" placeholder="Subject"
                                        className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none" />
                                    <textarea rows="7" placeholder="Write your message..."
                                        className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none"></textarea>
                                    <button
                                        className="bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-xl font-semibold transition">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 text-center">
                            <div className="text-5xl">🚚</div>
                            <h3 className="text-2xl font-bold mt-5">Free Shipping</h3>
                            <p className="text-gray-500 mt-4">Free delivery on eligible orders.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 text-center">
                            <div className="text-5xl">🔒</div>
                            <h3 className="text-2xl font-bold mt-5">Secure Payment</h3>
                            <p className="text-gray-500 mt-4">100% safe payment methods.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 text-center">
                            <div className="text-5xl">💬</div>
                            <h3 className="text-2xl font-bold mt-5">24/7 Support</h3>
                            <p className="text-gray-500 mt-4">Friendly customer support anytime.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow overflow-hidden">
                        <div className="h-96 flex items-center justify-center bg-gray-200">
                            <span className="text-2xl text-gray-500">🗺️ Google Map Here</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default Contact