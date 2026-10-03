import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin-header";

const Customers = () => {
    const [customerType, setCustomerType] = useState("All Customers");

    const customers = [
        {
            id: 1,
            name: "John Doe",
            email: "john@email.com",
            orders: 18,
            spent: "₹45,600",
            status: "Active",
            image: "https://i.pravatar.cc/60?img=11",
        },
        {
            id: 2,
            name: "Emma Watson",
            email: "emma@email.com",
            orders: 11,
            spent: "₹18,500",
            status: "Active",
            image: "https://i.pravatar.cc/60?img=25",
        },
        {
            id: 3,
            name: "David Lee",
            email: "david@email.com",
            orders: 6,
            spent: "₹9,700",
            status: "Inactive",
            image: "https://i.pravatar.cc/60?img=32",
        },
        {
            id: 4,
            name: "Sophia Brown",
            email: "sophia@email.com",
            orders: 25,
            spent: "₹72,000",
            status: "Premium",
            image: "https://i.pravatar.cc/60?img=18",
        },
    ];

    const filteredCustomers =
        customerType === "All Customers"
            ? customers
            : customers.filter(
                (customer) => customer.status === customerType
            );

    return (
        <AdminHeader
            title="Customers"
            subtitle="Manage your store customers"
        >
            <main className="p-8">

                {/* Cards */}
                <div className="grid md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Total Customers
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            5,640
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            New This Month
                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">
                            320
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Premium Members
                        </p>

                        <h2 className="text-4xl font-bold text-amber-500 mt-3">
                            640
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Inactive
                        </p>

                        <h2 className="text-4xl font-bold text-red-500 mt-3">
                            84
                        </h2>
                    </div>

                </div>

                {/* Customer Table */}
                <div className="bg-white rounded-2xl shadow mt-8 overflow-hidden">

                    <div className="flex justify-between items-center p-6 border-b">

                        <h3 className="text-2xl font-bold">
                            Customer List
                        </h3>

                        <div className="relative">

                            <select
                                value={customerType}
                                onChange={(e) =>
                                    setCustomerType(e.target.value)
                                }
                                className="appearance-none border rounded-xl px-4 py-2 pr-12 w-full"
                            >
                                <option>
                                    All Customers
                                </option>

                                <option>
                                    Premium
                                </option>

                                <option>
                                    Regular
                                </option>

                                <option>
                                    Active
                                </option>

                                <option>
                                    Inactive
                                </option>
                            </select>

                            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>

                        </div>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="text-left px-6 py-4">
                                        Customer
                                    </th>

                                    <th>
                                        Email
                                    </th>

                                    <th>
                                        Orders
                                    </th>

                                    <th>
                                        Spent
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

                                {filteredCustomers.map((customer) => (
                                    <tr
                                        key={customer.id}
                                        className="border-t"
                                    >

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-3">

                                                <img
                                                    src={customer.image}
                                                    alt={customer.name}
                                                    className="w-12 h-12 rounded-full"
                                                />

                                                <span>
                                                    {customer.name}
                                                </span>

                                            </div>

                                        </td>

                                        <td className="text-center">
                                            {customer.email}
                                        </td>

                                        <td className="text-center">
                                            {customer.orders}
                                        </td>

                                        <td className="text-center">
                                            {customer.spent}
                                        </td>

                                        <td className="text-center">

                                            {customer.status === "Active" && (
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                                    Active
                                                </span>
                                            )}

                                            {customer.status === "Inactive" && (
                                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                                    Inactive
                                                </span>
                                            )}

                                            {customer.status === "Premium" && (
                                                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                                                    Premium
                                                </span>
                                            )}

                                        </td>

                                        <td className="text-center">

                                            <Link
                                                to={`/admin/customers/view/${customer.id}`}
                                                className="bg-black text-white px-4 py-2 rounded-lg"
                                            >
                                                View
                                            </Link>

                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Recent Customers */}
                <div className="grid lg:grid-cols-2 gap-8 mt-8">

                    {/* Recent Signups */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold">
                            Recent Signups
                        </h3>

                        <div className="space-y-5 mt-8">

                            <div className="flex justify-between">

                                <div>
                                    <p className="font-semibold">
                                        Alex Johnson
                                    </p>

                                    <p className="text-gray-500">
                                        Joined Today
                                    </p>
                                </div>

                                <span className="text-green-600">
                                    New
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <div>
                                    <p className="font-semibold">
                                        Olivia Smith
                                    </p>

                                    <p className="text-gray-500">
                                        Yesterday
                                    </p>
                                </div>

                                <span className="text-green-600">
                                    New
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <div>
                                    <p className="font-semibold">
                                        Michael Lee
                                    </p>

                                    <p className="text-gray-500">
                                        2 Days Ago
                                    </p>
                                </div>

                                <span className="text-gray-500">
                                    Regular
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Customer Overview */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold">
                            Customer Overview
                        </h3>

                        <div className="space-y-6 mt-8">

                            {/* Active */}
                            <div>

                                <div className="flex justify-between">
                                    <span>Active Users</span>
                                    <span>82%</span>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">

                                    <div className="bg-green-500 h-3 rounded-full w-4/5"></div>

                                </div>

                            </div>

                            {/* Premium */}
                            <div>

                                <div className="flex justify-between">
                                    <span>Premium Members</span>
                                    <span>12%</span>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">

                                    <div className="bg-amber-500 h-3 rounded-full w-1/4"></div>

                                </div>

                            </div>

                            {/* Inactive */}
                            <div>

                                <div className="flex justify-between">
                                    <span>Inactive</span>
                                    <span>6%</span>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">

                                    <div className="bg-red-500 h-3 rounded-full w-1/6"></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </AdminHeader>
    );
};

export default Customers;