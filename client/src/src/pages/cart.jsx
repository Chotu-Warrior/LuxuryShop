import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Cart = () => {
    return (
        <>
            <Header />
            <section className="bg-black text-white py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold">
                        Shopping Cart
                    </h1>

                    <p className="text-gray-300 mt-3">
                        Home / Cart
                    </p>

                </div>

            </section>

            {/* <!-- Cart --> */}

            <section className="py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* <!-- Left --> */}

                        <div className="lg:col-span-2">

                            <div className="bg-white rounded-xl shadow overflow-hidden">

                                <table className="w-full">

                                    <thead className="bg-gray-50">

                                        <tr>

                                            <th className="text-left px-6 py-5">Product</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                            <th></th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {/* <!-- Item --> */}

                                        <tr className="border-t">

                                            <td className="px-6 py-6">

                                                <div className="flex items-center gap-5">

                                                    <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200"
                                                        className="w-24 h-24 rounded-lg object-cover" />

                                                    <div>

                                                        <h3 className="font-semibold">

                                                            Premium Hoodie

                                                        </h3>

                                                        <p className="text-gray-500 text-sm">

                                                            Men Fashion

                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="text-center font-semibold">

                                                ₹2,499

                                            </td>

                                            <td className="text-center">

                                                <input type="number" value="1" className="border rounded-lg w-20 py-2 text-center" />

                                            </td>

                                            <td className="text-center font-bold text-amber-500">

                                                ₹2,499

                                            </td>

                                            <td className="text-center text-red-500 text-xl">

                                                ✕

                                            </td>

                                        </tr>

                                        {/* <!-- Item --> */}

                                        <tr className="border-t">

                                            <td className="px-6 py-6">

                                                <div className="flex items-center gap-5">

                                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200"
                                                        className="w-24 h-24 rounded-lg object-cover" />

                                                    <div>

                                                        <h3 className="font-semibold">

                                                            Running Shoes

                                                        </h3>

                                                        <p className="text-gray-500 text-sm">

                                                            Shoes

                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="text-center font-semibold">

                                                ₹5,999

                                            </td>

                                            <td className="text-center">

                                                <input type="number" value="1" className="border rounded-lg w-20 py-2 text-center" />

                                            </td>

                                            <td className="text-center font-bold text-amber-500">

                                                ₹5,999

                                            </td>

                                            <td className="text-center text-red-500 text-xl">

                                                ✕

                                            </td>

                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                            {/* <!-- Coupon --> */}

                            <div className="flex flex-col md:flex-row gap-4 mt-8">

                                <input type="text" placeholder="Coupon Code" className="flex-1 border rounded-lg px-5 py-4" />

                                <button className="bg-black text-white px-8 rounded-lg">

                                    Apply Coupon

                                </button>

                                <button className="bg-amber-500 px-8 rounded-lg font-semibold">

                                    Update Cart

                                </button>

                            </div>

                        </div>

                        {/* <!-- Right --> */}

                        <div>

                            <div className="bg-white rounded-xl shadow p-8 sticky top-28">

                                <h2 className="text-2xl font-bold mb-8">

                                    Cart Summary

                                </h2>

                                <div className="space-y-5">

                                    <div className="flex justify-between">

                                        <span>Subtotal</span>

                                        <span>₹8,498</span>

                                    </div>

                                    <div className="flex justify-between">

                                        <span>Shipping</span>

                                        <span>Free</span>

                                    </div>

                                    <div className="flex justify-between">

                                        <span>Discount</span>

                                        <span className="text-green-600">

                                            -₹500

                                        </span>

                                    </div>

                                    <hr />

                                    <div className="flex justify-between text-2xl font-bold">

                                        <span>Total</span>

                                        <span className="text-amber-500">

                                            ₹7,998

                                        </span>

                                    </div>

                                </div>

                                <button
                                    className="w-full mt-8 bg-amber-500 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 duration-300">

                                    Proceed To Checkout

                                </button>

                                <Link to="/shop" className="block text-center mt-5 border py-4 rounded-lg hover:bg-gray-100">

                                    Continue Shopping

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section >

            {/* <!-- Recommended --> */}

            <section className="py-16 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-10">

                        You May Also Like

                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-gray-50 rounded-xl shadow overflow-hidden">

                            <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500"
                                className="h-64 w-full object-cover" />

                            <div className="p-5">

                                <h3 className="font-semibold">

                                    Luxury Watch

                                </h3>

                                <p className="text-amber-500 font-bold mt-2">

                                    ₹7,499

                                </p>

                                <button className="w-full mt-4 bg-black text-white py-3 rounded-lg">

                                    Add To Cart

                                </button>

                            </div>

                        </div>

                        <div className="bg-gray-50 rounded-xl shadow overflow-hidden">

                            <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500"
                                className="h-64 w-full object-cover" />

                            <div className="p-5">

                                <h3 className="font-semibold">

                                    Leather Bag

                                </h3>

                                <p className="text-amber-500 font-bold mt-2">

                                    ₹4,499

                                </p>

                                <button className="w-full mt-4 bg-black text-white py-3 rounded-lg">

                                    Add To Cart

                                </button>

                            </div>

                        </div>

                        <div className="bg-gray-50 rounded-xl shadow overflow-hidden">

                            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500"
                                className="h-64 w-full object-cover" />

                            <div className="p-5">

                                <h3 className="font-semibold">

                                    Women's Jacket

                                </h3>

                                <p className="text-amber-500 font-bold mt-2">

                                    ₹3,299

                                </p>

                                <button className="w-full mt-4 bg-black text-white py-3 rounded-lg">

                                    Add To Cart

                                </button>

                            </div>

                        </div>

                        <div className="bg-gray-50 rounded-xl shadow overflow-hidden">

                            <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500"
                                className="h-64 w-full object-cover" />

                            <div className="p-5">

                                <h3 className="font-semibold">

                                    Classic T-Shirt

                                </h3>

                                <p className="text-amber-500 font-bold mt-2">

                                    ₹1,999

                                </p>

                                <button className="w-full mt-4 bg-black text-white py-3 rounded-lg">

                                    Add To Cart

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section >
            <Footer />
        </>
    )
}
export default Cart