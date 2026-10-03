import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminHeader from "../components/admin-header";

const Categories = () => {
    const navigate = useNavigate();

    const [categoryName, setCategoryName] = useState("");
    const [slug, setSlug] = useState("");
    const [parentCategory, setParentCategory] = useState("None");
    const [description, setDescription] = useState("");
    const [search, setSearch] = useState("");

    const API_URL = "http://localhost:5000";
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/api/categories`);
            if (!response.ok) throw new Error("Failed to fetch categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Fetch Categories Error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/api/categories`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: categoryName,
                    slug,
                    parentCategory,
                    description,
                    status: "Active",
                }),
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message || "Failed to create category");

            setCategories((prev) => [...prev, result.category]);
            setCategoryName("");
            setSlug("");
            setParentCategory("None");
            setDescription("");
        } catch (error) {
            console.error("Create Category Error:", error);
            alert(error.message);
        }
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this category?"
        );

        if (confirmed) {
            try {
                const response = await fetch(`${API_URL}/api/categories/${id}`, {
                    method: "DELETE",
                });

                const result = await response.json();
                if (!response.ok) throw new Error(result.message || "Failed to delete category");

                setCategories((prev) =>
                    prev.filter((category) => category._id !== id)
                );
            } catch (error) {
                console.error("Delete Category Error:", error);
                alert(error.message);
            }
        }
    };

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalCategories = categories.length;

    const activeCategories = categories.filter(
        (category) => category.status === "Active"
    ).length;

    const hiddenCategories = categories.filter(
        (category) => category.status !== "Active"
    ).length;

    return (
        <AdminHeader
            title="Categories"
            subtitle="Manage your product categories"
        >
            <main className="p-8">

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Total Categories
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {totalCategories}
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Active
                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">
                            {activeCategories}
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Hidden
                        </p>

                        <h2 className="text-4xl font-bold text-yellow-500 mt-3">
                            {hiddenCategories}
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-gray-500">
                            Products
                        </p>

                        <h2 className="text-4xl font-bold text-amber-500 mt-3">
                            890
                        </h2>
                    </div>

                </div>

                {/* Add Category + Category Table */}
                <div className="grid lg:grid-cols-3 gap-8 mt-8">

                    {/* Add Category */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold mb-6">
                            Add Category
                        </h3>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            <input
                                type="text"
                                name="name"
                                value={categoryName}
                                onChange={(e) =>
                                    setCategoryName(e.target.value)
                                }
                                placeholder="Category Name"
                                className="w-full border rounded-xl px-5 py-4"
                                required
                            />

                            <input
                                type="text"
                                name="slug"
                                value={slug}
                                onChange={(e) =>
                                    setSlug(e.target.value)
                                }
                                placeholder="Slug"
                                className="w-full border rounded-xl px-5 py-4"
                                required
                            />

                            <div className="relative">

                                <select
                                    name="parentCategory"
                                    value={parentCategory}
                                    onChange={(e) =>
                                        setParentCategory(e.target.value)
                                    }
                                    className="appearance-none w-full border rounded-xl px-5 py-3 pr-12"
                                >
                                    <option value="None">
                                        None
                                    </option>

                                    <option value="Men">
                                        Men
                                    </option>

                                    <option value="Women">
                                        Women
                                    </option>
                                </select>

                                <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>

                            </div>

                            <textarea
                                name="description"
                                rows="4"
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                                placeholder="Description"
                                className="w-full border rounded-xl px-5 py-4"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition"
                            >
                                Create Category
                            </button>

                        </form>

                    </div>

                    {/* Categories Table */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow overflow-hidden">

                        <div className="flex justify-between items-center p-6 border-b">

                            <h3 className="text-2xl font-bold">
                                Category List
                            </h3>

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search..."
                                className="border rounded-xl px-4 py-2"
                            />

                        </div>

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                <thead className="bg-gray-50">

                                    <tr>

                                        <th className="text-left px-6 py-4">
                                            Category
                                        </th>

                                        <th className="px-6 py-4">
                                            Products
                                        </th>

                                        <th className="px-6 py-4">
                                            Status
                                        </th>

                                        <th className="px-6 py-4">
                                            Action
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredCategories.length > 0 ? (
                                        filteredCategories.map(
                                            (category) => (
                                                <tr
                                                    key={category._id}
                                                    className="border-t"
                                                >

                                                    <td className="px-6 py-5">
                                                        {category.name}
                                                    </td>

                                                    <td className="text-center px-6 py-5">
                                                        0
                                                    </td>

                                                    <td className="text-center px-6 py-5">

                                                        {category.status ===
                                                            "Active" ? (
                                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                                                Active
                                                            </span>
                                                        ) : (
                                                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                                                Hidden
                                                            </span>
                                                        )}

                                                    </td>

                                                    <td className="text-center px-6 py-5">

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    category._id
                                                                )
                                                            }
                                                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                                                        >
                                                            Delete
                                                        </button>

                                                    </td>

                                                </tr>
                                            )
                                        )
                                    ) : (
                                        <tr>

                                            <td
                                                colSpan="4"
                                                className="text-center py-10 text-gray-500"
                                            >
                                                No categories found.
                                            </td>

                                        </tr>
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

                {/* Popular Categories */}
                <div className="mt-10">

                    <h3 className="text-2xl font-bold mb-6">
                        Popular Categories
                    </h3>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                        {/* Men Fashion */}
                        <div className="bg-white rounded-2xl shadow overflow-hidden">

                            <img
                                src="https://picsum.photos/400/250?101"
                                alt="Men Fashion"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">

                                <h4 className="text-xl font-bold">
                                    Men Fashion
                                </h4>

                                <p className="text-gray-500 mt-2">
                                    220 Products
                                </p>

                                <Link
                                    to="/admin/products"
                                    className="block text-center w-full mt-5 bg-black text-white py-3 rounded-xl"
                                >
                                    Manage
                                </Link>

                            </div>

                        </div>

                        {/* Women Fashion */}
                        <div className="bg-white rounded-2xl shadow overflow-hidden">

                            <img
                                src="https://picsum.photos/400/250?102"
                                alt="Women Fashion"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">

                                <h4 className="text-xl font-bold">
                                    Women Fashion
                                </h4>

                                <p className="text-gray-500 mt-2">
                                    310 Products
                                </p>

                                <Link
                                    to="/admin/products"
                                    className="block text-center w-full mt-5 bg-black text-white py-3 rounded-xl"
                                >
                                    Manage
                                </Link>

                            </div>

                        </div>

                        {/* Shoes */}
                        <div className="bg-white rounded-2xl shadow overflow-hidden">

                            <img
                                src="https://picsum.photos/400/250?103"
                                alt="Shoes"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">

                                <h4 className="text-xl font-bold">
                                    Shoes
                                </h4>

                                <p className="text-gray-500 mt-2">
                                    125 Products
                                </p>

                                <Link
                                    to="/admin/products"
                                    className="block text-center w-full mt-5 bg-black text-white py-3 rounded-xl"
                                >
                                    Manage
                                </Link>

                            </div>

                        </div>

                        {/* Accessories */}
                        <div className="bg-white rounded-2xl shadow overflow-hidden">

                            <img
                                src="https://picsum.photos/400/250?104"
                                alt="Accessories"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">

                                <h4 className="text-xl font-bold">
                                    Accessories
                                </h4>

                                <p className="text-gray-500 mt-2">
                                    98 Products
                                </p>

                                <Link
                                    to="/admin/products"
                                    className="block text-center w-full mt-5 bg-black text-white py-3 rounded-xl"
                                >
                                    Manage
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </AdminHeader>
    );
};

export default Categories;