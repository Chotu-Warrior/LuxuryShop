import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Terms = () => {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Terms <span className="text-amber-500">& Conditions</span>
          </h1>

          <p className="mt-5 text-gray-300 max-w-3xl mx-auto">
            Please read these Terms & Conditions carefully before using
            LuxuryShop. By accessing or purchasing from our website, you agree
            to these terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-lg p-10 space-y-10">

            {/* 1 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                1. Acceptance of Terms
              </h2>

              <p className="text-gray-600 leading-8">
                By using LuxuryShop, you confirm that you have read,
                understood, and accepted these Terms & Conditions. If you
                disagree with any part of these terms, please do not use our
                website.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                2. User Accounts
              </h2>

              <p className="text-gray-600 leading-8">
                You are responsible for maintaining the confidentiality of
                your account credentials and all activities performed under
                your account.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                3. Orders & Payments
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>All orders are subject to product availability.</li>
                <li>Prices may change without prior notice.</li>
                <li>Orders are confirmed only after successful payment.</li>
                <li>
                  LuxuryShop reserves the right to cancel suspicious orders.
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                4. Shipping & Delivery
              </h2>

              <p className="text-gray-600 leading-8">
                Delivery times are estimates and may vary depending on
                location, courier services, and unforeseen circumstances.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                5. Returns & Refunds
              </h2>

              <p className="text-gray-600 leading-8">
                Products can be returned according to our Return Policy.
                Refunds are processed after successful inspection of returned
                items.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                6. Intellectual Property
              </h2>

              <p className="text-gray-600 leading-8">
                All website content including logos, product images, graphics,
                and text are the intellectual property of LuxuryShop and may
                not be copied without permission.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                7. Limitation of Liability
              </h2>

              <p className="text-gray-600 leading-8">
                LuxuryShop is not responsible for indirect, incidental, or
                consequential damages arising from the use of our website or
                products.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                8. Changes to Terms
              </h2>

              <p className="text-gray-600 leading-8">
                We reserve the right to update these Terms & Conditions at any
                time. Continued use of the website after updates constitutes
                acceptance of the revised terms.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                9. Contact Information
              </h2>

              <div className="bg-gray-100 rounded-2xl p-6 space-y-3">
                <p>
                  <strong>Email:</strong> support@luxuryshop.com
                </p>

                <p>
                  <strong>Phone:</strong> +91 98765 43210
                </p>

                <p>
                  <strong>Address:</strong> MG Road, Indore, Madhya Pradesh,
                  India
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white">
            Thank You for Choosing LuxuryShop
          </h2>

          <p className="text-gray-300 mt-4">
            We appreciate your trust and are committed to providing a secure
            and premium shopping experience.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-8 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-xl transition"
          >
            Continue Shopping
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Terms;