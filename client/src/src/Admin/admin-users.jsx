import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminHeader from "../components/admin-header";

const AdminUsers = () => {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure?");

        if (confirmed) {
            navigate(`/admin/admin_users/delete/${id}`);
        }
    };

    const admins = [
        {
            id: 1,
            name: "Admin One",
            email: "admin1@luxuryshop.com",
            role: "Super Admin",
            status: "Active",
            lastLogin: "09 Aug 2026",
        },
        {
            id: 2,
            name: "Admin Two",
            email: "admin2@luxuryshop.com",
            role: "Admin",
            status: "Active",
            lastLogin: "08 Aug 2026",
        },
        {
            id: 3,
            name: "Admin Three",
            email: "admin3@luxuryshop.com",
            role: "Admin",
            status: "Inactive",
            lastLogin: "05 Aug 2026",
        },
        {
            id: 4,
            name: "Admin Four",
            email: "admin4@luxuryshop.com",
            role: "Editor",
            status: "Active",
            lastLogin: "01 Aug 2026",
        },
    ];

    const getRoleClass = (role) => {
        if (role === "Super Admin") {
            return "bg-amber-100 text-amber-700";
        }

        if (role === "Admin") {
            return "bg-blue-100 text-blue-700";
        }

        return "bg-green-100 text-green-700";
    };

    const getStatusClass = (status) => {
        return status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700";
    };

    return (
        <AdminHeader
            title="Admin Users"
            subtitle="Manage your admin users"
        >
            <main className="p-8">

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Total Admin Users
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            4
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Super Admin
                        </p>
                        <h2 className="text-4xl font-bold mt-3 text-amber-500">
                            1
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Admin
                        </p>
                        <h2 className="text-4xl font-bold mt-3 text-blue-500">
                            2
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Editor
                        </p>
                        <h2 className="text-4xl font-bold mt-3 text-green-500">
                            1
                        </h2>
                    </div>

                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow mt-8 p-6">

                    <div className="grid lg:grid-cols-5 gap-4">

                        <input
                            type="text"
                            placeholder="Search admin..."
                            className="border rounded-xl px-5 py-3"
                        />

                        <div className="relative">
                            <select className="appearance-none border rounded-xl px-5 py-3 pr-12 w-full">
                                <option>Role</option>
                                <option>Super Admin</option>
                                <option>Admin</option>
                                <option>Editor</option>
                            </select>

                            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                        </div>

                        <div className="relative">
                            <select className="appearance-none border rounded-xl px-5 py-3 pr-12 w-full">
                                <option>Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>

                            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                        </div>

                        <input
                            type="date"
                            className="border rounded-xl px-5 py-3"
                        />

                        <button
                            type="button"
                            className="bg-amber-500 rounded-xl font-semibold"
                        >
                            Apply Filter
                        </button>

                    </div>

                </div>

                {/* Admin Users Table */}
                <div className="bg-white rounded-2xl shadow mt-8 overflow-hidden">

                    <div className="p-6 border-b">
                        <h3 className="text-2xl font-bold">
                            All Admin Users
                        </h3>
                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left px-6 py-4">#</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Role</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Last Login</th>
                                    <th className="px-6 py-4">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {admins.map((admin) => (
                                    <tr
                                        key={admin.id}
                                        className="border-t"
                                    >

                                        <td className="px-6 py-5">
                                            {admin.id}
                                        </td>

                                        <td className="text-center px-6 py-5">
                                            {admin.name}
                                        </td>

                                        <td className="text-center px-6 py-5">
                                            {admin.email}
                                        </td>

                                        <td className="text-center px-6 py-5">
                                            <span
                                                className={`${getRoleClass(
                                                    admin.role
                                                )} px-3 py-1 rounded-full`}
                                            >
                                                {admin.role}
                                            </span>
                                        </td>

                                        <td className="text-center px-6 py-5">
                                            <span
                                                className={`${getStatusClass(
                                                    admin.status
                                                )} px-3 py-1 rounded-full`}
                                            >
                                                {admin.status}
                                            </span>
                                        </td>

                                        <td className="text-center px-6 py-5">
                                            {admin.lastLogin}
                                        </td>

                                        <td className="text-center px-6 py-5 whitespace-nowrap">

                                            <Link
                                                to={`/admin/admin_users/edit/${admin.id}`}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(admin.id)
                                                }
                                                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </main>
        </AdminHeader>
    );
};

export default AdminUsers;