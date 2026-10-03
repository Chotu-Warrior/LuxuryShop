
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Support = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Support Request:", formData);

        alert("Your message has been sent successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <>
            {/* Header */}
            <Header />

            {/* Hero */}
            <section className="bg-black text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold">
                        Support <span className="text-amber-500">Center</span>
                    </h1>

                    <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
                        Need help? We're here to assist you with orders, returns,
                        payments, shipping, and technical issues.
                    </p>

                </div>
            </section>

            {/* Quick Support */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Track Order */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

                            <div className="text-5xl">
                                📦
                            </div>

                            <h3 className="text-2xl font-bold mt-5">
                                Track Order
                            </h3>

                            <p className="text-gray-500 mt-3">
                                Track your shipment in real-time.
                            </p>

                            <Link
                                to="/orders"
                                className="inline-block mt-6 text-amber-500 font-semibold"
                            >
                                Learn More →
                            </Link>

                        </div>

                        {/* Returns */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

                            <div className="text-5xl">
                                ↩️
                            </div>

                            <h3 className="text-2xl font-bold mt-5">
                                Returns
                            </h3>

                            <p className="text-gray-500 mt-3">
                                Easy return and refund process.
                            </p>

                            <Link
                                to="/refund-policy"
                                className="inline-block mt-6 text-amber-500 font-semibold"
                            >
                                Learn More →
                            </Link>

                        </div>

                        {/* Payments */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

                            <div className="text-5xl">
                                💳
                            </div>

                            <h3 className="text-2xl font-bold mt-5">
                                Payments
                            </h3>

                            <p className="text-gray-500 mt-3">
                                Payment and billing assistance.
                            </p>

                            <Link
                                to="/payments"
                                className="inline-block mt-6 text-amber-500 font-semibold"
                            >
                                Learn More →
                            </Link>

                        </div>

                        {/* Live Support */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

                            <div className="text-5xl">
                                🎧
                            </div>

                            <h3 className="text-2xl font-bold mt-5">
                                Live Support
                            </h3>

                            <p className="text-gray-500 mt-3">
                                Talk with our support experts.
                            </p>

                            <a
                                href="#contact-support"
                                className="inline-block mt-6 text-amber-500 font-semibold"
                            >
                                Contact →
                            </a>

                        </div>

                    </div>

                </div>
            </section>

            {/* FAQ */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-5">

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold text-xl">
                                How can I track my order?
                            </h3>

                            <p className="text-gray-600 mt-3">
                                After placing an order, you'll receive an email with your
                                tracking ID and shipping details.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold text-xl">
                                How long does delivery take?
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Orders are usually delivered within 3–7 business days
                                depending on your location.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold text-xl">
                                Can I cancel my order?
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Yes, you can cancel your order before it is shipped from
                                our warehouse.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold text-xl">
                                How do I request a refund?
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Go to My Orders, choose the product, and click
                                "Request Refund."
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Contact */}
            <section
                id="contact-support"
                className="bg-white py-20"
            >
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Information */}
                        <div>

                            <h2 className="text-4xl font-bold">
                                Contact Support
                            </h2>

                            <p className="text-gray-500 mt-4">
                                Our support team is available Monday to Saturday,
                                9:00 AM to 8:00 PM.
                            </p>

                            <div className="mt-10 space-y-6">

                                <div>
                                    <h4 className="font-semibold">
                                        📧 Email
                                    </h4>

                                    <p className="text-gray-600">
                                        support@luxuryshop.com
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        📞 Phone
                                    </h4>

                                    <p className="text-gray-600">
                                        +91 98765 43210
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        📍 Address
                                    </h4>

                                    <p className="text-gray-600">
                                        MG Road, Indore, Madhya Pradesh, India
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Support Form */}
                        <div className="bg-gray-50 rounded-3xl p-8 shadow">

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >

                                {/* Full Name */}
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-400 outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-400 outline-none"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Support subject"
                                        required
                                        className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-400 outline-none"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Message
                                    </label>

                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message..."
                                        required
                                        className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-400 outline-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-amber-500 hover:bg-amber-400 py-4 rounded-xl font-semibold text-black transition"
                                >
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Support;

