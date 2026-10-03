import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const RefundPolicy = () => {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Hero */}
            <section className="bg-black text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold">
                        Refund <span className="text-amber-500">Policy</span>
                    </h1>

                    <p className="mt-5 text-gray-300 max-w-3xl mx-auto">
                        We want you to shop with confidence. Please read our refund and
                        return policy carefully before making a purchase.
                    </p>
                </div>
            </section>

            {/* Policy */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-lg p-10 space-y-10">

                        {/* 1 */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                1. Return Eligibility
                            </h2>

                            <p className="text-gray-600 leading-8">
                                Products can be returned within{" "}
                                <strong>7 days</strong> of delivery if they are unused,
                                undamaged, and in their original packaging with all tags
                                attached.
                            </p>
                        </div>

                        {/* 2 */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                2. Non-Returnable Items
                            </h2>

                            <ul className="list-disc pl-6 space-y-3 text-gray-600">
                                <li>Gift Cards</li>
                                <li>Personal Care Products</li>
                                <li>Customized or Personalized Products</li>
                                <li>Digital Downloads</li>
                                <li>Items marked as Final Sale</li>
                            </ul>
                        </div>

                        {/* 3 */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                3. Refund Process
                            </h2>

                            <p className="text-gray-600 leading-8">
                                Once we receive and inspect your returned item, we'll notify
                                you about the approval or rejection of your refund. Approved
                                refunds are processed to your original payment method.
                            </p>
                        </div>

                        {/* 4 */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                4. Refund Timeline
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6 mt-6">

                                <div className="bg-gray-100 rounded-2xl p-6 text-center">
                                    <h3 className="text-4xl font-bold text-amber-500">
                                        1-2
                                    </h3>
                                    <p className="mt-3">
                                        Return Inspection
                                    </p>
                                </div>

                                <div className="bg-gray-100 rounded-2xl p-6 text-center">
                                    <h3 className="text-4xl font-bold text-amber-500">
                                        3-5
                                    </h3>
                                    <p className="mt-3">
                                        Refund Approval
                                    </p>
                                </div>

                                <div className="bg-gray-100 rounded-2xl p-6 text-center">
                                    <h3 className="text-4xl font-bold text-amber-500">
                                        5-10
                                    </h3>
                                    <p className="mt-3">
                                        Bank Processing Days
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* 5 */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                5. Exchange Policy
                            </h2>

                            <p className="text-gray-600 leading-8">
                                If you received a damaged, defective, or incorrect product,
                                you may request a replacement instead of a refund, subject to
                                stock availability.
                            </p>
                        </div>

                        {/* 6 */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                6. Cancellation Policy
                            </h2>

                            <p className="text-gray-600 leading-8">
                                Orders can be cancelled before they are shipped. Once
                                dispatched, cancellation requests cannot be accepted, but you
                                may request a return after delivery if eligible.
                            </p>
                        </div>

                        {/* 7 */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                7. Shipping Charges
                            </h2>

                            <p className="text-gray-600 leading-8">
                                Shipping charges are generally non-refundable unless the
                                return is due to our mistake, such as a damaged or incorrect
                                product.
                            </p>
                        </div>

                        {/* 8 */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                8. Need Assistance?
                            </h2>

                            <div className="bg-gray-100 rounded-2xl p-6 space-y-3">
                                <p>
                                    <strong>📧 Email:</strong>{" "}
                                    support@luxuryshop.com
                                </p>

                                <p>
                                    <strong>📞 Phone:</strong>{" "}
                                    +91 98765 43210
                                </p>

                                <p>
                                    <strong>🕒 Support Hours:</strong>{" "}
                                    Monday - Saturday, 9:00 AM - 8:00 PM
                                </p>

                                <p>
                                    <strong>📍 Address:</strong>{" "}
                                    MG Road, Indore, Madhya Pradesh, India
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black py-16">
                <div className="max-w-4xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold text-white">
                        Need Help With a Return?
                    </h2>

                    <p className="text-gray-300 mt-4">
                        Our customer support team is always ready to help you with
                        returns, refunds, and exchanges.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <a
                            href="/support"
                            className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-semibold transition"
                        >
                            Support Center
                        </a>

                        <a
                            href="/contact"
                            className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition"
                        >
                            Contact Us
                        </a>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default RefundPolicy;

