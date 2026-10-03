import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const faqs = [
    {
        q: "How long does shipping take?",
        a: "Standard delivery takes 3–7 business days depending on your location."
    },
    {
        q: "Can I return a product?",
        a: "Yes. You can return eligible products within 7 days of delivery."
    },
    {
        q: "Which payment methods are accepted?",
        a: "We accept Credit Cards, Debit Cards, UPI, Net Banking and Cash on Delivery."
    },
    {
        q: "How can I track my order?",
        a: "Login to your account and open the Orders section to track your shipment."
    },
    {
        q: "Is my payment secure?",
        a: "Yes. All transactions are protected using secure SSL encryption."
    },
    {
        q: "Do you offer free shipping?",
        a: "Yes. Free shipping is available on selected orders and promotional offers."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <>
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-r from-black to-gray-900 text-white py-24">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h1 className="text-5xl lg:text-6xl font-bold">Frequently Asked Questions</h1>
                    <p className="text-gray-300 mt-6">
                        Find answers to the most common questions about orders, shipping, payments and returns.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="bg-white rounded-2xl shadow">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-8 py-6 flex justify-between items-center"
                                >
                                    <h3 className="font-semibold text-lg">{faq.q}</h3>
                                    <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                                </button>
                                {isOpen && (
                                    <div className="px-8 pb-6 text-gray-600">{faq.a}</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Support */}
            <section className="bg-white py-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold">Still Have Questions?</h2>
                    <p className="text-gray-500 mt-5">Our support team is available 24/7 to assist you.</p>
                    <Link to="/contact"
                        className="inline-block mt-10 bg-black text-white px-10 py-4 rounded-xl hover:bg-gray-800">
                        Contact Support
                    </Link>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl shadow p-8 text-center">
                            <div className="text-5xl">🚚</div>
                            <h3 className="text-xl font-bold mt-5">Free Shipping</h3>
                            <p className="text-gray-500 mt-4">Fast delivery across India.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-8 text-center">
                            <div className="text-5xl">🔒</div>
                            <h3 className="text-xl font-bold mt-5">Secure Checkout</h3>
                            <p className="text-gray-500 mt-4">Safe and encrypted payment.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-8 text-center">
                            <div className="text-5xl">💬</div>
                            <h3 className="text-xl font-bold mt-5">24/7 Support</h3>
                            <p className="text-gray-500 mt-4">Friendly customer assistance.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default Faq