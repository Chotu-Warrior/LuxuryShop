import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Dashboard = () => {
    return (
        <>
            <Header />

            {/* Dashboard */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-4 gap-8">

                        {/* Sidebar */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <div className="text-center">
                                <img src="https://i.pravatar.cc/200?img=12" className="w-28 h-28 rounded-full mx-auto" />
                                <h2 className="font-bold text-xl mt-4">John Doe</h2>
                                <p className="text-gray-500">john@example.com</p>
                            </div>
                            <hr className="my-6" />
                            <nav className="space-y-3">
                                <a href="#" className="block bg-black text-white px-5 py-3 rounded-lg">🏠 Dashboard</a>
                                <a href="#" className="block hover:bg-gray-100 px-5 py-3 rounded-lg">📦 My Orders</a>
                                <a href="#" className="block hover:bg-gray-100 px-5 py-3 rounded-lg">❤️ Wishlist</a>
                                <a href="#" className="block hover:bg-gray-100 px-5 py-3 rounded-lg">📍 Address</a>
                                <a href="#" className="block hover:bg-gray-100 px-5 py-3 rounded-lg">⚙ Account Settings</a>
                                <a href="#" className="block hover:bg-red-50 text-red-500 px-5 py-3 rounded-lg">🚪 Logout</a>
                            </nav>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3">

                            {/* Welcome */}
                            <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl text-white p-10">
                                <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
                                <p className="mt-4 text-gray-300">
                                    Manage your account, orders, wishlist and profile.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
                                <div className="bg-white rounded-xl shadow p-6">
                                    <p className="text-gray-500">Total Orders</p>
                                    <h2 className="text-4xl font-bold mt-3">24</h2>
                                </div>
                                <div className="bg-white rounded-xl shadow p-6">
                                    <p className="text-gray-500">Wishlist</p>
                                    <h2 className="text-4xl font-bold mt-3">15</h2>
                                </div>
                                <div className="bg-white rounded-xl shadow p-6">
                                    <p className="text-gray-500">Pending</p>
                                    <h2 className="text-4xl font-bold mt-3">3</h2>
                                </div>
                                <div className="bg-white rounded-xl shadow p-6">
                                    <p className="text-gray-500">Reward Points</p>
                                    <h2 className="text-4xl font-bold mt-3 text-amber-500">520</h2>
                                </div>
                            </div>

                            {/* Recent Orders */}
                            <div className="bg-white rounded-xl shadow mt-8 overflow-hidden">
                                <div className="p-6 border-b">
                                    <h2 className="text-2xl font-bold">Recent Orders</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-4 text-left">Order ID</th>
                                                <th>Date</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-6 py-5">#LS1001</td>
                                                <td>05 Aug 2026</td>
                                                <td>₹2,499</td>
                                                <td>
                                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="bg-black text-white px-4 py-2 rounded-lg">View</button>
                                                </td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-6 py-5">#LS1002</td>
                                                <td>02 Aug 2026</td>
                                                <td>₹5,999</td>
                                                <td>
                                                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                                                        Processing
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="bg-black text-white px-4 py-2 rounded-lg">View</button>
                                                </td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-6 py-5">#LS1003</td>
                                                <td>30 Jul 2026</td>
                                                <td>₹3,299</td>
                                                <td>
                                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                                        Shipped
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="bg-black text-white px-4 py-2 rounded-lg">View</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Account Info */}
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-white rounded-xl shadow p-6">
                                    <h2 className="text-xl font-bold mb-5">Profile Information</h2>
                                    <div className="space-y-3">
                                        <p><strong>Name:</strong> John Doe</p>
                                        <p><strong>Email:</strong> john@example.com</p>
                                        <p><strong>Phone:</strong> +91 9876543210</p>
                                        <p><strong>Member Since:</strong> Jan 2026</p>
                                    </div>
                                    <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">Edit Profile</button>
                                </div>
                                <div className="bg-white rounded-xl shadow p-6">
                                    <h2 className="text-xl font-bold mb-5">Default Address</h2>
                                    <p className="leading-8 text-gray-600">
                                        John Doe<br />
                                        123 MG Road,<br />
                                        Indore,<br />
                                        Madhya Pradesh,<br />
                                        India - 452001
                                    </p>
                                    <button className="mt-6 bg-amber-500 px-6 py-3 rounded-lg font-semibold">
                                        Manage Address
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default Dashboard