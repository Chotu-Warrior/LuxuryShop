import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Checkout = () => {
    return (
        <>
            <Header />

            {/* Hero */}
            <section className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl font-bold">Checkout</h1>
                    <p className="text-gray-300 mt-3">Home / Checkout</p>
                </div>
            </section>

            {/* Checkout */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* Billing */}
                        <div className="lg:col-span-2 bg-white rounded-xl shadow p-8">
                            <h2 className="text-3xl font-bold mb-8">Billing Details</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="First Name" className="border rounded-lg px-5 py-4 w-full" />
                                    <input type="text" placeholder="Last Name" className="border rounded-lg px-5 py-4 w-full" />
                                </div>
                                <input type="email" placeholder="Email Address" className="border rounded-lg px-5 py-4 w-full" />
                                <input type="tel" placeholder="Phone Number" className="border rounded-lg px-5 py-4 w-full" />
                                <input type="text" placeholder="Company (Optional)" className="border rounded-lg px-5 py-4 w-full" />
                                <input type="text" placeholder="Street Address" className="border rounded-lg px-5 py-4 w-full" />
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="City" className="border rounded-lg px-5 py-4" />
                                    <input type="text" placeholder="State" className="border rounded-lg px-5 py-4" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Postal Code" className="border rounded-lg px-5 py-4" />
                                    <div className="relative">
                                        <select className="appearance-none border rounded-lg px-5 py-4 pr-12 w-full">
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                            <option>Canada</option>
                                        </select>
                                        <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                                    </div>
                                </div>
                                <textarea rows="5" placeholder="Order Notes" className="border rounded-lg px-5 py-4 w-full"></textarea>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div>
                            <div className="bg-white rounded-xl shadow p-8 sticky top-28">
                                <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
                                <div className="space-y-5">
                                    <div className="flex justify-between">
                                        <span>Premium Hoodie</span>
                                        <span>₹2,499</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Running Shoes</span>
                                        <span>₹5,999</span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>₹8,498</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span className="text-green-600">FREE</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span>₹850</span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between text-2xl font-bold">
                                        <span>Total</span>
                                        <span className="text-amber-500">₹9,348</span>
                                    </div>
                                </div>

                                {/* Payment */}
                                <div className="mt-10">
                                    <h3 className="font-bold text-lg mb-4">Payment Method</h3>
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-3">
                                            <input type="radio" name="payment" defaultChecked />
                                            Credit / Debit Card
                                        </label>
                                        <label className="flex items-center gap-3">
                                            <input type="radio" name="payment" />
                                            UPI Payment
                                        </label>
                                        <label className="flex items-center gap-3">
                                            <input type="radio" name="payment" />
                                            Net Banking
                                        </label>
                                        <label className="flex items-center gap-3">
                                            <input type="radio" name="payment" />
                                            Cash On Delivery
                                        </label>
                                    </div>
                                </div>

                                <button className="w-full mt-10 bg-amber-500 hover:bg-amber-400 py-4 rounded-lg font-bold text-lg">
                                    Place Order
                                </button>
                                <Link to="/cart" className="block text-center mt-5 border rounded-lg py-4 hover:bg-gray-100">
                                    Back To Cart
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="text-5xl mb-4">🔒</div>
                            <h3 className="font-bold text-xl">Secure Payment</h3>
                            <p className="text-gray-500 mt-3">100% encrypted payment gateway.</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="text-5xl mb-4">🚚</div>
                            <h3 className="font-bold text-xl">Free Delivery</h3>
                            <p className="text-gray-500 mt-3">Fast & free shipping on eligible orders.</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="text-5xl mb-4">↩️</div>
                            <h3 className="font-bold text-xl">Easy Returns</h3>
                            <p className="text-gray-500 mt-3">7 Days hassle-free return policy.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default Checkout