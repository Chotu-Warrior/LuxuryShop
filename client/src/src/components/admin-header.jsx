import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = ({
    title = "Admin Panel",
    subtitle = "",
    children,
}) => {
    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}
            <aside className="w-72 bg-black text-white hidden lg:block">

                <div className="p-8 border-b border-gray-800">
                    <Link to="/">
                        <h1 className="text-3xl font-bold">
                            Luxury<span className="text-amber-400">Shop</span>
                        </h1>
                    </Link>

                    <p className="text-gray-400 mt-2">
                        Admin Panel
                    </p>
                </div>

                <nav className="mt-8 space-y-2 px-5">

                    <Link
                        to="/admin/dashboard"
                        className="flex items-center gap-4 hover:bg-gray-800 px-5 py-4 rounded-xl transition"
                    >
                        🏠 Dashboard
                    </Link>

                    <Link
                        to="/admin/admin_users"
                        className="flex items-center gap-4 hover:bg-gray-800 px-5 py-4 rounded-xl transition"
                    >
                        👥 Admin Users
                    </Link>

                    <Link
                        to="/admin/products"
                        className="flex items-center gap-4 hover:bg-gray-800 px-5 py-4 rounded-xl transition"
                    >
                        📦 Products
                    </Link>

                    <Link
                        to="/admin/categories"
                        className="flex items-center gap-4 hover:bg-gray-800 px-5 py-4 rounded-xl transition"
                    >
                        📂 Categories
                    </Link>

                    <Link
                        to="/admin/orders"
                        className="flex items-center gap-4 hover:bg-gray-800 px-5 py-4 rounded-xl transition"
                    >
                        🛒 Orders
                    </Link>

                    <Link
                        to="/admin/customers"
                        className="flex items-center gap-4 hover:bg-gray-800 px-5 py-4 rounded-xl transition"
                    >
                        👥 Customers
                    </Link>

                    <Link
                        to="/admin/settings"
                        className="flex items-center gap-4 hover:bg-gray-800 px-5 py-4 rounded-xl transition"
                    >
                        ⚙ Settings
                    </Link>

                    <Link
                        to="/admin/login"
                        className="flex items-center gap-4 hover:bg-red-600 px-5 py-4 rounded-xl transition"
                    >
                        🚪 Logout
                    </Link>

                </nav>
            </aside>

            {/* Right Side */}
            <div className="flex-1">

                {/* Header */}
                <header className="bg-white shadow">
                    <div className="flex justify-between items-center px-8 py-5">

                        <div>
                            <h2 className="text-3xl font-bold">
                                {title}
                            </h2>

                            {subtitle && (
                                <p className="text-gray-500 mt-1">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        <button
                            type="button"
                            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
                        >
                            Save Changes
                        </button>

                    </div>
                </header>

                {/* Page Content */}
                <main>
                    {children}
                </main>

            </div>
        </div>
    );
};

export default AdminHeader;