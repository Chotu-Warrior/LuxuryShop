import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminHeader from "../components/admin-header";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const recentOrders = [
        {
            id: "#1001",
            customer: "John Doe",
            product: "Nike Shoes",
            total: "₹5,999",
            status: "Delivered",
        },
        {
            id: "#1002",
            customer: "Emma",
            product: "Hoodie",
            total: "₹2,499",
            status: "Pending",
        },
        {
            id: "#1003",
            customer: "Michael",
            product: "Watch",
            total: "₹8,999",
            status: "Shipped",
        },
    ];

    const getStatusClass = (status) => {
        if (status === "Delivered") {
            return "bg-green-100 text-green-700";
        }

        if (status === "Pending") {
            return "bg-yellow-100 text-yellow-700";
        }

        return "bg-blue-100 text-blue-700";
    };

    const handleViewOrder = (orderId) => {
        navigate(`/admin/orders/${orderId.replace("#", "")}`);
    };

    return (
        <AdminHeader
            title="Dashboard"
            subtitle="Welcome back to your admin panel"
        >
            <main className="p-8">

                {/* Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Total Sales
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            ₹8.6L
                        </h2>

                        <p className="text-green-600 mt-3">
                            +18% This Month
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Orders
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            1,284
                        </h2>

                        <p className="text-blue-600 mt-3">
                            156 Pending
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Customers
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            5,640
                        </h2>

                        <p className="text-green-600 mt-3">
                            +320 New
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Products
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            890
                        </h2>

                        <p className="text-amber-500 mt-3">
                            32 Out of Stock
                        </p>
                    </div>

                </div>

                {/* Charts */}
                <div className="grid lg:grid-cols-3 gap-8 mt-8">

                    {/* Sales Analytics */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold">
                            Sales Analytics
                        </h3>

                        <div className="mt-8 h-80 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">

                            <span className="text-gray-400 text-xl">
                                📈 Chart Placeholder
                            </span>

                        </div>

                    </div>

                    {/* Revenue */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold">
                            Revenue
                        </h3>

                        <div className="mt-8 space-y-6">

                            {/* January */}
                            <div>

                                <div className="flex justify-between">
                                    <span>January</span>
                                    <span>₹90K</span>
                                </div>

                                <div className="w-full bg-gray-200 h-3 rounded-full mt-2">

                                    <div className="bg-amber-500 h-3 rounded-full w-4/5"></div>

                                </div>

                            </div>

                            {/* February */}
                            <div>

                                <div className="flex justify-between">
                                    <span>February</span>
                                    <span>₹75K</span>
                                </div>

                                <div className="w-full bg-gray-200 h-3 rounded-full mt-2">

                                    <div className="bg-green-500 h-3 rounded-full w-3/4"></div>

                                </div>

                            </div>

                            {/* March */}
                            <div>

                                <div className="flex justify-between">
                                    <span>March</span>
                                    <span>₹1.2L</span>
                                </div>

                                <div className="w-full bg-gray-200 h-3 rounded-full mt-2">

                                    <div className="bg-blue-500 h-3 rounded-full w-full"></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-2xl shadow mt-8 overflow-hidden">

                    <div className="flex justify-between items-center p-6 border-b">

                        <h3 className="text-2xl font-bold">
                            Recent Orders
                        </h3>

                        <Link
                            to="/admin/orders"
                            className="bg-black text-white px-5 py-3 rounded-lg"
                        >
                            View All
                        </Link>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="text-left px-6 py-4">
                                        Order ID
                                    </th>

                                    <th>
                                        Customer
                                    </th>

                                    <th>
                                        Product
                                    </th>

                                    <th>
                                        Total
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                    <th>
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {recentOrders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="border-t"
                                    >

                                        <td className="px-6 py-5">
                                            {order.id}
                                        </td>

                                        <td className="text-center">
                                            {order.customer}
                                        </td>

                                        <td className="text-center">
                                            {order.product}
                                        </td>

                                        <td className="text-center">
                                            {order.total}
                                        </td>

                                        <td className="text-center">

                                            <span
                                                className={`${getStatusClass(
                                                    order.status
                                                )} px-3 py-1 rounded-full text-sm`}
                                            >
                                                {order.status}
                                            </span>

                                        </td>

                                        <td className="text-center">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleViewOrder(order.id)
                                                }
                                                className="bg-black text-white px-4 py-2 rounded-lg"
                                            >
                                                View
                                            </button>

                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Latest Activity + Quick Actions */}
                <div className="grid lg:grid-cols-2 gap-8 mt-8">

                    {/* Latest Activities */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold">
                            Latest Activities
                        </h3>

                        <div className="space-y-5 mt-8">

                            <div className="flex gap-4">

                                <div className="text-2xl">
                                    🛒
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        New Order Received
                                    </p>

                                    <p className="text-gray-500">
                                        5 Minutes Ago
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="text-2xl">
                                    👤
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        New Customer Registered
                                    </p>

                                    <p className="text-gray-500">
                                        20 Minutes Ago
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="text-2xl">
                                    📦
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Product Updated
                                    </p>

                                    <p className="text-gray-500">
                                        1 Hour Ago
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold">
                            Quick Actions
                        </h3>

                        <div className="grid grid-cols-2 gap-5 mt-8">

                            <Link
                                to="/admin/products"
                                className="text-center bg-black text-white py-5 rounded-xl"
                            >
                                + Add Product
                            </Link>

                            <Link
                                to="/admin/categories"
                                className="text-center bg-amber-500 py-5 rounded-xl font-semibold"
                            >
                                + Category
                            </Link>

                            <Link
                                to="/admin/orders"
                                className="text-center bg-blue-600 text-white py-5 rounded-xl"
                            >
                                View Orders
                            </Link>

                            <Link
                                to="/admin/customers"
                                className="text-center bg-green-600 text-white py-5 rounded-xl"
                            >
                                Customers
                            </Link>

                        </div>

                    </div>

                </div>

            </main>
        </AdminHeader>
    );
};

export default AdminDashboard;