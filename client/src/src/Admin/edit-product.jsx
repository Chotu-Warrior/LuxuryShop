import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../components/admin-header";

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Temporary product data
    // Baad me API/backend se product fetch kar sakte ho.
    const [product, setProduct] = useState({
        product_name: "Nike Shoes",
        categories: "Footwear",
        original_price: 6999,
        discount_price: 5999,
        stock: 25,
        status: "Active",
        best_seller: true,
        size: "M",
        primary_image: "",
        images: [],
        product_summary: "Premium quality Nike shoes.",
        description: "Comfortable and stylish shoes for everyday use.",
    });

    const [primaryImage, setPrimaryImage] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setProduct((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handlePrimaryImage = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            setPrimaryImage(file);
        }
    };

    const handleGalleryImages = (e) => {
        const files = Array.from(e.target.files || []);
        setGalleryImages(files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Backend API yahan connect kar sakte ho.
        console.log("Product ID:", id);
        console.log("Updated Product:", product);
        console.log("Primary Image:", primaryImage);
        console.log("Gallery Images:", galleryImages);

        alert("Product updated successfully!");

        navigate("/admin/products");
    };

    return (
        <AdminHeader
            title="Edit Product"
            subtitle="Update product information"
        >
            <div className="max-w-6xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Edit Product
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Update product information
                        </p>
                    </div>

                    <Link
                        to="/admin/products"
                        className="bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded-xl font-medium transition"
                    >
                        Back to Products
                    </Link>
                </div>

                {/* Edit Product Form */}
                <div className="bg-white rounded-2xl shadow p-6">

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
                                value={product.product_name}
                                onChange={handleChange}
                                placeholder="Enter product name"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="font-medium block mb-2">
                                Category
                            </label>

                            <select
                                name="categories"
                                value={product.categories}
                                onChange={handleChange}
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Accessories">
                                    Accessories
                                </option>
                                <option value="Footwear">
                                    Footwear
                                </option>
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
                                value={product.original_price}
                                onChange={handleChange}
                                placeholder="0.00"
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
                                value={product.discount_price}
                                onChange={handleChange}
                                placeholder="0.00"
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
                                value={product.stock}
                                onChange={handleChange}
                                placeholder="0"
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
                                value={product.status}
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
                            <label className="flex items-center gap-2 cursor-pointer mt-8">
                                <input
                                    name="best_seller"
                                    type="checkbox"
                                    checked={product.best_seller}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-amber-500 rounded focus:ring-amber-500"
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
                                value={product.size}
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

                            {product.primary_image && (
                                <div className="mb-3">
                                    <img
                                        src={`/uploads/${product.primary_image}`}
                                        className="w-24 h-24 object-cover rounded-xl border"
                                        alt="Primary"
                                    />
                                </div>
                            )}

                            {primaryImage && (
                                <div className="mb-3">
                                    <img
                                        src={URL.createObjectURL(primaryImage)}
                                        className="w-24 h-24 object-cover rounded-xl border"
                                        alt="New Primary"
                                    />
                                </div>
                            )}

                            <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl px-5 py-6 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition">
                                <span className="text-gray-500 text-sm">
                                    {primaryImage
                                        ? primaryImage.name
                                        : "Choose New Primary Image"}
                                </span>

                                <input
                                    type="file"
                                    name="primary_image"
                                    accept="image/*"
                                    onChange={handlePrimaryImage}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Gallery Photos */}
                        <div>
                            <label className="font-medium block mb-2">
                                Gallery Photos
                            </label>

                            {product.images?.length > 0 && (
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {product.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={`/uploads/${image}`}
                                            className="w-20 h-20 object-cover rounded-xl border"
                                            alt={`Gallery ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}

                            {galleryImages.length > 0 && (
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {galleryImages.map((file, index) => (
                                        <img
                                            key={index}
                                            src={URL.createObjectURL(file)}
                                            className="w-20 h-20 object-cover rounded-xl border"
                                            alt={`New Gallery ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}

                            <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl px-5 py-6 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition">
                                <span className="text-gray-500 text-sm text-center">
                                    {galleryImages.length > 0
                                        ? `${galleryImages.length} image(s) selected`
                                        : "Choose New Gallery Photos"}
                                </span>

                                <input
                                    type="file"
                                    name="images"
                                    accept="image/*"
                                    multiple
                                    onChange={handleGalleryImages}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Product Summary */}
                        <div className="md:col-span-2">
                            <label className="font-medium block mb-2">
                                Product Summary
                            </label>

                            <textarea
                                name="product_summary"
                                rows="3"
                                value={product.product_summary}
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
                                rows="5"
                                value={product.description}
                                onChange={handleChange}
                                placeholder="Enter product description"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 flex gap-3">

                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                            >
                                Update Product
                            </button>

                            <Link
                                to="/admin/products"
                                className="bg-gray-200 hover:bg-gray-300 px-8 py-4 rounded-xl font-semibold transition"
                            >
                                Cancel
                            </Link>

                        </div>

                    </form>
                </div>
            </div>
        </AdminHeader>
    );
};

export default EditProduct;