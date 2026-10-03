import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin-header";

const Orders = () => {
    const [customerName, setCustomerName] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [orderDate, setOrderDate] = useState("");

    const orders = [
        {
            id: "1001",
            customer: "John Doe",
            date: "2026-08-08",
            displayDate: "08 Aug 2026",
            total: 5999,
            payment: "Paid",
            status: "Shipped",
        },
        {
            id: "1002",
            customer: "Emma Watson",
            date: "2026-08-07",
            displayDate: "07 Aug 2026",
            total: 2450,
            payment: "Pending",
            status: "Processing",
        },
        {
            id: "1003",
            customer: "David Lee",
            date: "2026-08-06",
            displayDate: "06 Aug 2026",
            total: 9499,
            payment: "Paid",
            status: "Delivered",
        },
        {
            id: "1004",
            customer: "Sophia",
            date: "2026-08-05",
            displayDate: "05 Aug 2026",
            total: 1299,
            payment: "Failed",
            status: "Cancelled",
        },
    ];

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const customerMatch = order.customer
                .toLowerCase()
                .includes(customerName.toLowerCase());

            const statusMatch =
                !orderStatus || order.status === orderStatus;

            const paymentMatch =
                !paymentStatus || order.payment === paymentStatus;

            const dateMatch =
                !orderDate || order.date === orderDate;

            return (
                customerMatch &&
                statusMatch &&
                paymentMatch &&
                dateMatch
            );
        });
    }, [customerName, orderStatus, paymentStatus, orderDate]);

    const clearFilters = () => {
        setCustomerName("");
        setOrderStatus("");
        setPaymentStatus("");
        setOrderDate("");
    };

    const getPaymentClass = (payment) => {
        if (payment === "Paid") {
            return "bg-green-100 text-green-700";
        }

        if (payment === "Pending") {
            return "bg-yellow-100 text-yellow-700";
        }

        return "bg-red-100 text-red-700";
    };

    const getStatusClass = (status) => {
        if (status === "Delivered") {
            return "bg-green-100 text-green-700";
        }

        if (status === "Processing" || status === "Pending") {
            return "bg-yellow-100 text-yellow-700";
        }

        if (status === "Shipped") {
            return "bg-blue-100 text-blue-700";
        }

        return "bg-red-100 text-red-700";
    };

    return (
        <AdminHeader
            title="Orders"
            subtitle="Manage and track customer orders"
        >
            <main className="p-8">

                {/* Summary */}
                <div className="grid md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Total Orders
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            1,284
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Pending
                        </p>

                        <h2 className="text-4xl font-bold text-yellow-500 mt-3">
                            156
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Delivered
                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">
                            980
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Cancelled
                        </p>

                        <h2 className="text-4xl font-bold text-red-500 mt-3">
                            148
                        </h2>
                    </div>

                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow mt-8 p-6">

                    <div className="grid lg:grid-cols-5 gap-4">

                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) =>
                                setCustomerName(e.target.value)
                            }
                            placeholder="Customer Name"
                            className="border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                        />

                        <select
                            value={orderStatus}
                            onChange={(e) =>
                                setOrderStatus(e.target.value)
                            }
                            className="appearance-none border rounded-xl px-5 py-3 w-full outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">
                                Order Status
                            </option>

                            <option value="Pending">
                                Pending
                            </option>

                            <option value="Processing">
                                Processing
                            </option>

                            <option value="Shipped">
                                Shipped
                            </option>

                            <option value="Delivered">
                                Delivered
                            </option>

                            <option value="Cancelled">
                                Cancelled
                            </option>
                        </select>

                        <select
                            value={paymentStatus}
                            onChange={(e) =>
                                setPaymentStatus(e.target.value)
                            }
                            className="appearance-none border rounded-xl px-5 py-3 w-full outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">
                                Payment
                            </option>

                            <option value="Paid">
                                Paid
                            </option>

                            <option value="Pending">
                                Pending
                            </option>

                            <option value="Failed">
                                Failed
                            </option>
                        </select>

                        <input
                            type="date"
                            value={orderDate}
                            onChange={(e) =>
                                setOrderDate(e.target.value)
                            }
                            className="border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                        />

                        <div className="flex gap-2">

                            <button
                                type="button"
                                onClick={() => { }}
                                className="flex-1 bg-amber-500 hover:bg-amber-600 rounded-xl font-semibold transition"
                            >
                                Apply Filter
                            </button>

                            <button
                                type="button"
                                onClick={clearFilters}
                                className="px-4 bg-gray-200 hover:bg-gray-300 rounded-xl font-semibold transition"
                            >
                                Clear
                            </button>

                        </div>

                    </div>

                </div>

                {/* Orders Table */}
                <div className="bg-white rounded-2xl shadow mt-8 overflow-hidden">

                    <div className="flex justify-between items-center p-6 border-b">

                        <h3 className="text-2xl font-bold">
                            Order List
                        </h3>

                        <span className="text-gray-500">
                            {filteredOrders.length} Orders
                        </span>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-gray-50">

                                <tr>
                                    <th className="text-left px-6 py-4">
                                        Order ID
                                    </th>

                                    <th className="text-center px-6 py-4">
                                        Customer
                                    </th>

                                    <th className="text-center px-6 py-4">
                                        Date
                                    </th>

                                    <th className="text-center px-6 py-4">
                                        Total
                                    </th>

                                    <th className="text-center px-6 py-4">
                                        Payment
                                    </th>

                                    <th className="text-center px-6 py-4">
                                        Status
                                    </th>

                                    <th className="text-center px-6 py-4">
                                        Action
                                    </th>
                                </tr>

                            </thead>

                            <tbody>

                                {filteredOrders.length > 0 ? (
                                    filteredOrders.map((order) => (
                                        <tr
                                            key={order.id}
                                            className="border-t hover:bg-gray-50 transition"
                                        >

                                            <td className="px-6 py-5 font-medium">
                                                #{order.id}
                                            </td>

                                            <td className="text-center">
                                                {order.customer}
                                            </td>

                                            <td className="text-center">
                                                {order.displayDate}
                                            </td>

                                            <td className="text-center font-medium">
                                                ₹{order.total.toLocaleString("en-IN")}
                                            </td>

                                            <td className="text-center">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-medium ${getPaymentClass(
                                                        order.payment
                                                    )}`}
                                                >
                                                    {order.payment}
                                                </span>
                                            </td>

                                            <td className="text-center">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(
                                                        order.status
                                                    )}`}
                                                >
                                                    {order.status}
                                                </span>
                                            </td>

                                            <td className="text-center">

                                                <Link
                                                    to={`/admin/orders/view/${order.id}`}
                                                    className="inline-block bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
                                                >
                                                    View
                                                </Link>

                                            </td>

                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center py-12 text-gray-500"
                                        >
                                            No orders found.
                                        </td>
                                    </tr>
                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Recent Activities */}
                <div className="grid lg:grid-cols-2 gap-8 mt-8">

                    {/* Latest Orders */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold">
                            Latest Orders
                        </h3>

                        <div className="space-y-6 mt-8">

                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold">
                                        #1005 - Michael
                                    </p>

                                    <p className="text-gray-500">
                                        ₹4,299
                                    </p>
                                </div>

                                <span className="text-green-600">
                                    Paid
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold">
                                        #1006 - Olivia
                                    </p>

                                    <p className="text-gray-500">
                                        ₹2,999
                                    </p>
                                </div>

                                <span className="text-yellow-500">
                                    Pending
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold">
                                        #1007 - Alex
                                    </p>

                                    <p className="text-gray-500">
                                        ₹8,999
                                    </p>
                                </div>

                                <span className="text-blue-600">
                                    Shipped
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* Order Status */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold">
                            Order Status
                        </h3>

                        <div className="space-y-6 mt-8">

                            <div>
                                <div className="flex justify-between">
                                    <span>Delivered</span>
                                    <span>76%</span>
                                </div>

                                <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                                    <div className="bg-green-500 h-3 rounded-full w-3/4"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <span>Processing</span>
                                    <span>14%</span>
                                </div>

                                <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                                    <div className="bg-yellow-500 h-3 rounded-full w-1/4"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <span>Cancelled</span>
                                    <span>10%</span>
                                </div>

                                <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                                    <div className="bg-red-500 h-3 rounded-full w-1/5"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </AdminHeader>
    );
};

export default Orders;