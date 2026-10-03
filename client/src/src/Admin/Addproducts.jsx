import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin-header";

const API_URL = "http://localhost:5000";

const Addproducts = () => {
    const [Addproducts, setAddproducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Filters
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [sortBy, setSortBy] = useState("");

    // Add Product Form
    const [formData, setFormData] = useState({
        product_name: "",
        categories: "",
        original_price: "",
        discount_price: "",
        stock: "",
        status: "Active",
        best_seller: false,
        size: "S",
        product_summary: "",
        description: "",
    });

    const [primaryImage, setPrimaryImage] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);

    // ===============================
    // FETCH Addproducts
    // ===============================
    const fetchAddproducts = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(`${API_URL}/api/products`);

            if (!response.ok) {
                throw new Error("Failed to fetch Addproducts");
            }

            const data = await response.json();

            setAddproducts(data);
        } catch (error) {
            console.error("Fetch Addproducts Error:", error);
            setError("Addproducts load nahi ho paaye.");
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch(`${API_URL}/api/categories`);

            if (!response.ok) {
                throw new Error("Failed to fetch categories");
            }

            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Fetch Categories Error:", error);
        }
    };

    useEffect(() => {
        fetchAddproducts();
        fetchCategories();
    }, []);

    // ===============================
    // FORM CHANGE
    // ===============================
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // ===============================
    // PRIMARY IMAGE
    // ===============================
    const handlePrimaryImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setPrimaryImage(file);
        }
    };

    // ===============================
    // GALLERY IMAGES
    // ===============================
    const handleGalleryImages = (e) => {
        const files = Array.from(e.target.files);

        setGalleryImages(files);
    };

    // ===============================
    // ADD PRODUCT
    // ===============================
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();

            data.append("product_name", formData.product_name);
            data.append("categories", formData.categories);
            data.append("original_price", formData.original_price);
            data.append("discount_price", formData.discount_price || 0);
            data.append("stock", formData.stock);
            data.append("status", formData.status);
            data.append("best_seller", formData.best_seller);
            data.append("size", formData.size);
            data.append("product_summary", formData.product_summary);
            data.append("description", formData.description);

            // Primary image
            if (primaryImage) {
                data.append("primary_image", primaryImage);
            }

            // Gallery images
            galleryImages.forEach((file) => {
                data.append("images", file);
            });

            const response = await fetch(`${API_URL}/products`, {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Failed to add product"
                );
            }

            alert("Product added successfully!");

            // Reset form
            setFormData({
                product_name: "",
                categories: "",
                original_price: "",
                discount_price: "",
                stock: "",
                status: "Active",
                best_seller: false,
                size: "S",
                product_summary: "",
                description: "",
            });

            setPrimaryImage(null);
            setGalleryImages([]);

            // MongoDB se fresh products lao
            fetchAddproducts();

        } catch (error) {
            console.error("Add Product Error:", error);
            alert(error.message);
        }
    };
    // ===============================
    // DELETE PRODUCT
    // ===============================
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch(
                `${API_URL}/api/products/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to delete product"
                );
            }

            setAddproducts((prev) =>
                prev.filter((product) => product._id !== id)
            );

            alert("Product deleted successfully!");
        } catch (error) {
            console.error("Delete Error:", error);
            alert(error.message);
        }
    };

    // ===============================
    // FILTER + SORT
    // ===============================
    const filteredAddproducts = useMemo(() => {
        let result = [...Addproducts];

        // Search
        if (search.trim()) {
            result = result.filter((product) =>
                product.product_name
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
            );
        }

        // Category
        if (category) {
            result = result.filter(
                (product) => product.categories === category
            );
        }

        // Status
        if (status) {
            result = result.filter(
                (product) => product.status === status
            );
        }

        // Sort
        if (sortBy === "Newest") {
            result.sort(
                (a, b) =>
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
            );
        }

        if (sortBy === "Price") {
            result.sort(
                (a, b) =>
                    Number(a.discount_price) -
                    Number(b.discount_price)
            );
        }

        return result;
    }, [Addproducts, search, category, status, sortBy]);

    // ===============================
    // STATS
    // ===============================
    const totalAddproducts = Addproducts.length;

    const activeAddproducts = Addproducts.filter(
        (product) => product.status === "Active"
    ).length;

    const outOfStockAddproducts = Addproducts.filter(
        (product) => product.status === "Out of Stock"
    ).length;

    const draftAddproducts = Addproducts.filter(
        (product) => product.status === "Draft"
    ).length;

    // ===============================
    // LOADING
    // ===============================
    if (loading) {
        return (
            <AdminHeader
                title="Addproducts"
                subtitle="Manage your store Addproducts"
            >
                <main className="p-8">
                    <div className="text-center py-20">
                        <p className="text-gray-500">
                            Loading Addproducts...
                        </p>
                    </div>
                </main>
            </AdminHeader>
        );
    }

    return (
        <AdminHeader
            title="Addproducts"
            subtitle="Manage your store Addproducts"
        >
            <main className="p-8">

                {/* ERROR */}
                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-xl mb-6">
                        {error}
                    </div>
                )}

                {/* ================= STATS ================= */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <p className="text-gray-500">
                            Total Addproducts
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {totalAddproducts}
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <p className="text-gray-500">
                            Active
                        </p>

                        <h2 className="text-4xl font-bold mt-3 text-green-600">
                            {activeAddproducts}
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <p className="text-gray-500">
                            Out Of Stock
                        </p>

                        <h2 className="text-4xl font-bold mt-3 text-red-500">
                            {outOfStockAddproducts}
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <p className="text-gray-500">
                            Draft
                        </p>

                        <h2 className="text-4xl font-bold mt-3 text-yellow-500">
                            {draftAddproducts}
                        </h2>
                    </div>

                </div>

                {/* ================= FILTERS ================= */}
                <div className="bg-white rounded-2xl shadow mt-8 p-6">

                    <div className="grid lg:grid-cols-5 gap-4">

                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                        />

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                            className="border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">
                                Select Category
                            </option>

                            {categories.map((item) => (
                                <option
                                    key={item._id}
                                    value={item.name}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>

                        <select
                            value={status}
                            onChange={(e) =>
                                setStatus(e.target.value)
                            }
                            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">
                                Status
                            </option>

                            <option value="Active">
                                Active
                            </option>

                            <option value="Draft">
                                Draft
                            </option>

                            <option value="Out of Stock">
                                Out of Stock
                            </option>
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value)
                            }
                            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">
                                Sort By
                            </option>

                            <option value="Newest">
                                Newest
                            </option>

                            <option value="Price">
                                Price
                            </option>
                        </select>

                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setCategory("");
                                setStatus("");
                                setSortBy("");
                            }}
                            className="bg-amber-500 hover:bg-amber-600 rounded-xl font-semibold"
                        >
                            Clear Filter
                        </button>

                    </div>

                </div>

                {/* ================= ADD PRODUCT ================= */}
                <div className="bg-white rounded-2xl shadow mt-8 p-6">

                    <h3 className="text-2xl font-bold mb-6">
                        Add New Product
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-6"
                    >

                        {/* Product Name */}
                        <div>
                            <label className="font-medium block mb-2">
                                Product Name
                            </label>

                            <input
                                name="product_name"
                                type="text"
                                value={formData.product_name}
                                onChange={handleChange}
                                placeholder="Enter product name"
                                required
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="font-medium block mb-2">
                                Category
                            </label>

                            <select
                                name="categories"
                                value={formData.categories}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="">
                                    Select Category
                                </option>

                                {categories.map((item) => (
                                    <option
                                        key={item._id}
                                        value={item.name}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Original Price */}
                        <div>
                            <label className="font-medium block mb-2">
                                Original Price (₹)
                            </label>

                            <input
                                name="original_price"
                                type="number"
                                value={formData.original_price}
                                onChange={handleChange}
                                placeholder="0.00"
                                min="0"
                                required
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Discount Price */}
                        <div>
                            <label className="font-medium block mb-2">
                                Discount Price (₹)
                            </label>

                            <input
                                name="discount_price"
                                type="number"
                                value={formData.discount_price}
                                onChange={handleChange}
                                placeholder="0.00"
                                min="0"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="font-medium block mb-2">
                                Stock
                            </label>

                            <input
                                name="stock"
                                type="number"
                                value={formData.stock}
                                onChange={handleChange}
                                placeholder="0"
                                min="0"
                                required
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Status */}
                        <div>
                            <label className="font-medium block mb-2">
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="Active">
                                    Active
                                </option>

                                <option value="Draft">
                                    Draft
                                </option>

                                <option value="Out of Stock">
                                    Out of Stock
                                </option>
                            </select>
                        </div>

                        {/* Best Seller */}
                        <div>
                            <label className="flex items-center gap-2 cursor-pointer mt-6">
                                <input
                                    name="best_seller"
                                    type="checkbox"
                                    checked={formData.best_seller}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-amber-500 rounded"
                                />

                                <span className="font-medium">
                                    Best Seller
                                </span>
                            </label>
                        </div>

                        {/* Size */}
                        <div>
                            <label className="font-medium block mb-2">
                                Size
                            </label>

                            <select
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>

                        {/* Primary Image */}
                        <div>
                            <label className="font-medium block mb-2">
                                Primary Image
                            </label>

                            <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl px-5 py-6 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition">

                                <span className="text-gray-500 text-sm">
                                    {primaryImage
                                        ? primaryImage.name
                                        : "Choose Primary Image"}
                                </span>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePrimaryImage}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Gallery */}
                        <div>
                            <label className="font-medium block mb-2">
                                Gallery Photos
                            </label>

                            <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl px-5 py-6 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition">

                                <span className="text-gray-500 text-sm">
                                    {galleryImages.length > 0
                                        ? `${galleryImages.length} files selected`
                                        : "Choose files"}
                                </span>

                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleGalleryImages}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Summary */}
                        <div className="md:col-span-2">
                            <label className="font-medium block mb-2">
                                Product Summary
                            </label>

                            <textarea
                                name="product_summary"
                                rows="3"
                                value={formData.product_summary}
                                onChange={handleChange}
                                placeholder="Enter product summary"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="font-medium block mb-2">
                                Description
                            </label>

                            <textarea
                                name="description"
                                rows="4"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter product description"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                            >
                                Add Product
                            </button>
                        </div>

                    </form>
                </div>

                {/* ================= PRODUCT TABLE ================= */}
                <div className="bg-white rounded-2xl shadow mt-8 overflow-hidden">

                    <div className="p-6 border-b">
                        <h3 className="text-2xl font-bold">
                            All Addproducts
                        </h3>
                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left px-6 py-4">
                                        Image
                                    </th>

                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Original / Discount</th>
                                    <th>Stock</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {filteredAddproducts.length > 0 ? (
                                    filteredAddproducts.map(
                                        (product) => (
                                            <tr
                                                key={product._id}
                                                className="border-t"
                                            >
                                                <td className="px-6 py-4">
                                                    {product.primary_image ? (
                                                        <img
                                                            src={`${API_URL}/uploads/${product.primary_image}`}
                                                            alt={
                                                                product.product_name
                                                            }
                                                            className="w-16 h-16 object-cover rounded-lg"
                                                        />
                                                    ) : (
                                                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                                            <span className="text-gray-400 text-xs">
                                                                No Image
                                                            </span>
                                                        </div>
                                                    )}
                                                </td>

                                                <td className="text-center">
                                                    {
                                                        product.product_name
                                                    }
                                                </td>

                                                <td className="text-center">
                                                    {
                                                        product.categories
                                                    }
                                                </td>

                                                <td className="text-center">
                                                    <div className="flex flex-col items-center">
                                                        <span className="line-through text-gray-400">
                                                            ₹
                                                            {
                                                                product.original_price
                                                            }
                                                        </span>

                                                        <span className="font-semibold">
                                                            ₹
                                                            {
                                                                product.discount_price
                                                            }
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="text-center">
                                                    {product.stock}
                                                </td>

                                                <td className="text-center">
                                                    {product.status ===
                                                        "Active" && (
                                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                                                Active
                                                            </span>
                                                        )}

                                                    {product.status ===
                                                        "Draft" && (
                                                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                                                Draft
                                                            </span>
                                                        )}

                                                    {product.status ===
                                                        "Out of Stock" && (
                                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                                                                Out of Stock
                                                            </span>
                                                        )}
                                                </td>

                                                <td className="space-x-2 text-center whitespace-nowrap">

                                                    <Link
                                                        to={`/admin/Addproducts/edit/${product._id}`}
                                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleDelete(
                                                                product._id
                                                            )
                                                        }
                                                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
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
                                            colSpan="7"
                                            className="text-center py-10 text-gray-500"
                                        >
                                            No Addproducts found.
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>

                    </div>
                </div>

                {/* ================= PRODUCT CARDS ================= */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

                    {filteredAddproducts.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-2xl shadow overflow-hidden"
                        >

                            {product.primary_image ? (
                                <img
                                    src={`${API_URL}/uploads/${product.primary_image}`}
                                    alt={product.product_name}
                                    className="w-full h-56 object-cover"
                                />
                            ) : (
                                <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400">
                                        No Image
                                    </span>
                                </div>
                            )}

                            <div className="p-5">

                                <h3 className="font-bold text-lg">
                                    {product.product_name}
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    {product.categories}
                                </p>

                                <div className="mt-3">
                                    <span className="line-through text-gray-400 mr-2">
                                        ₹{product.original_price}
                                    </span>

                                    <span className="font-semibold">
                                        ₹{product.discount_price}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-500 mt-2">
                                    Stock: {product.stock}
                                </p>

                                <div className="mt-3">

                                    {product.status === "Active" && (
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                            Active
                                        </span>
                                    )}

                                    {product.status === "Draft" && (
                                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                                            Draft
                                        </span>
                                    )}

                                    {product.status ===
                                        "Out of Stock" && (
                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                                                Out of Stock
                                            </span>
                                        )}

                                </div>

                                <div className="flex justify-between mt-5">

                                    <Link
                                        to={`/admin/Addproducts/edit/${product._id}`}
                                        className="bg-black text-white px-4 py-2 rounded-lg"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDelete(
                                                product._id
                                            )
                                        }
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </main>
        </AdminHeader>
    );
};

export default Addproducts;