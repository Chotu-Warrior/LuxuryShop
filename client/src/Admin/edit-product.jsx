import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../components/admin-header";

const API_URL = "http://localhost:5000";

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // =========================================
    // REFS
    // =========================================
    const primaryInputRef = useRef(null);
    const galleryInputRef = useRef(null);

    // =========================================
    // PRODUCT STATE
    // =========================================
    const [product, setProduct] = useState({
        product_name: "",
        categories: "",
        original_price: "",
        discount_price: "",
        stock: "",
        status: "Active",
        best_seller: false,
        size: "S",
        primary_image: "",
        images: [],
        product_summary: "",
        description: "",
    });

    // =========================================
    // FILE STATES
    // =========================================
    const [primaryImage, setPrimaryImage] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);

    // =========================================
    // MAIN IMAGE
    // React version of changeImage()
    // =========================================
    const [selectedMainImage, setSelectedMainImage] = useState("");

    // =========================================
    // LOADING STATES
    // =========================================
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState("");

    // =========================================
    // FETCH PRODUCT
    // =========================================
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `${API_URL}/api/products/${id}`
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to fetch product"
                    );
                }

                const productData = {
                    product_name: data.product_name || "",
                    categories: data.categories || "",
                    original_price: data.original_price ?? "",
                    discount_price: data.discount_price ?? "",
                    stock: data.stock ?? "",
                    status: data.status || "Active",
                    best_seller: Boolean(data.best_seller),
                    size: data.size || "S",
                    primary_image: data.primary_image || "",
                    images: Array.isArray(data.images)
                        ? data.images
                        : [],
                    product_summary: data.product_summary || "",
                    description: data.description || "",
                };

                setProduct(productData);

                // Main image initially primary image
                if (productData.primary_image) {
                    setSelectedMainImage(
                        `${API_URL}/uploads/${productData.primary_image}`
                    );
                } else if (productData.images.length > 0) {
                    setSelectedMainImage(
                        `${API_URL}/uploads/${productData.images[0]}`
                    );
                }
            } catch (err) {
                console.error(
                    "Fetch Product Error:",
                    err
                );

                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    // =========================================
    // INPUT CHANGE
    // =========================================
    const handleChange = (e) => {
        const {
            name,
            value,
            type,
            checked,
        } = e.target;

        setProduct((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));
    };

    // =========================================
    // PRIMARY IMAGE
    // React version of updatePrimaryImage()
    // =========================================
    const handlePrimaryImage = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            setPrimaryImage(file);
        } else {
            setPrimaryImage(null);
        }
    };

    // =========================================
    // REMOVE PRIMARY IMAGE
    // React version of removePrimaryImage()
    // =========================================
    const removePrimaryImage = () => {
        setPrimaryImage(null);

        if (primaryInputRef.current) {
            primaryInputRef.current.value = "";
        }
    };

    // =========================================
    // GALLERY IMAGES
    // React version of updateGalleryFiles()
    // =========================================
    const handleGalleryImages = (e) => {
        const files = Array.from(
            e.target.files || []
        );

        setGalleryImages(files);
    };

    // =========================================
    // REMOVE GALLERY IMAGE
    // React version of removeGalleryFile()
    // =========================================
    const removeGalleryImage = (index) => {
        const currentFiles = Array.from(
            galleryInputRef.current?.files || []
        );

        currentFiles.splice(index, 1);

        const dataTransfer = new DataTransfer();

        currentFiles.forEach((file) => {
            dataTransfer.items.add(file);
        });

        if (galleryInputRef.current) {
            galleryInputRef.current.files =
                dataTransfer.files;
        }

        setGalleryImages(currentFiles);
    };

    // =========================================
    // CHANGE MAIN PRODUCT IMAGE
    // React version of changeImage()
    // =========================================
    const changeImage = (imageUrl) => {
        setSelectedMainImage(imageUrl);
    };

    // =========================================
    // UPDATE PRODUCT
    // =========================================
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setUpdating(true);
            setError("");

            const formData = new FormData();

            formData.append(
                "product_name",
                product.product_name
            );

            formData.append(
                "categories",
                product.categories
            );

            formData.append(
                "original_price",
                product.original_price
            );

            formData.append(
                "discount_price",
                product.discount_price || 0
            );

            formData.append(
                "stock",
                product.stock
            );

            formData.append(
                "status",
                product.status
            );

            formData.append(
                "best_seller",
                String(product.best_seller)
            );

            formData.append(
                "size",
                product.size
            );

            formData.append(
                "product_summary",
                product.product_summary
            );

            formData.append(
                "description",
                product.description
            );

            // =====================================
            // PRIMARY IMAGE
            // =====================================
            if (primaryImage) {
                formData.append(
                    "primary_image",
                    primaryImage
                );
            }

            // =====================================
            // GALLERY IMAGES
            // =====================================
            galleryImages.forEach((file) => {
                formData.append(
                    "images",
                    file
                );
            });

            const response = await fetch(
                `${API_URL}/api/products/${id}`,
                {
                    method: "PUT",
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to update product"
                );
            }

            console.log(
                "Updated Product:",
                data.product
            );

            alert(
                "Product updated successfully!"
            );

            navigate("/admin/Addproducts");
        } catch (err) {
            console.error(
                "Update Product Error:",
                err
            );

            setError(err.message);

            alert(
                err.message ||
                "Failed to update product"
            );
        } finally {
            setUpdating(false);
        }
    };

    // =========================================
    // DELETE PRODUCT
    // =========================================
    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            setDeleting(true);
            setError("");

            const response = await fetch(
                `${API_URL}/api/products/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to delete product"
                );
            }

            alert(
                "Product deleted successfully!"
            );

            navigate("/admin/Addproducts");
        } catch (err) {
            console.error(
                "Delete Product Error:",
                err
            );

            setError(err.message);

            alert(
                err.message ||
                "Failed to delete product"
            );
        } finally {
            setDeleting(false);
        }
    };

    // =========================================
    // LOADING
    // =========================================
    if (loading) {
        return (
            <AdminHeader
                title="Edit Product"
                subtitle="Update product information"
            >
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="bg-white rounded-2xl p-10 text-center">
                        <p className="text-gray-500">
                            Loading product...
                        </p>
                    </div>
                </div>
            </AdminHeader>
        );
    }

    // =========================================
    // ERROR
    // =========================================
    if (
        error &&
        !product.product_name
    ) {
        return (
            <AdminHeader
                title="Edit Product"
                subtitle="Update product information"
            >
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="bg-white rounded-2xl p-10 text-center">
                        <p className="text-red-500 mb-5">
                            {error}
                        </p>

                        <Link
                            to="/admin/Addproducts"
                            className="bg-black text-white px-6 py-3 rounded-xl"
                        >
                            Back to Products
                        </Link>
                    </div>
                </div>
            </AdminHeader>
        );
    }

    return (
        <AdminHeader
            title="Edit Product"
            subtitle="Update product information"
        >
            <div className="max-w-6xl mx-auto px-4 py-8">

                {/* ================================= */}
                {/* HEADER */}
                {/* ================================= */}
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
                        to="/admin/Addproducts"
                        className="bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded-xl font-medium transition"
                    >
                        Back to Products
                    </Link>
                </div>

                {/* ================================= */}
                {/* ERROR */}
                {/* ================================= */}
                {error && (
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-xl">
                        {error}
                    </div>
                )}

                {/* ================================= */}
                {/* FORM */}
                {/* ================================= */}
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
                                <option value="Men">
                                    Men
                                </option>

                                <option value="Women">
                                    Women
                                </option>

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
                                placeholder="0"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                required
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
                                placeholder="0"
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
                                required
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
                                    checked={
                                        product.best_seller
                                    }
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
                                <option value="S">
                                    S
                                </option>

                                <option value="M">
                                    M
                                </option>

                                <option value="L">
                                    L
                                </option>

                                <option value="XL">
                                    XL
                                </option>
                            </select>
                        </div>

                        {/* ================================= */}
                        {/* PRIMARY IMAGE */}
                        {/* ================================= */}
                        <div>
                            <label className="font-medium block mb-2">
                                Primary Image
                            </label>

                            {/* Existing Primary Image */}
                            {product.primary_image && (
                                <div className="mb-4">

                                    <p className="text-xs text-gray-500 mb-2">
                                        Current Image
                                    </p>

                                    <img
                                        src={
                                            `${API_URL}/uploads/${product.primary_image}`
                                        }
                                        className="w-24 h-24 object-cover rounded-xl border"
                                        alt="Current Primary"
                                    />

                                </div>
                            )}

                            {/* New Selected Primary File Name */}
                            {primaryImage && (
                                <div className="mb-3">

                                    <div className="flex items-center justify-between text-sm text-amber-600 font-medium">

                                        <span className="truncate">
                                            {primaryImage.name}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={
                                                removePrimaryImage
                                            }
                                            className="ml-2 text-red-500 hover:text-red-700 font-bold text-xl"
                                        >
                                            &times;
                                        </button>

                                    </div>

                                </div>
                            )}

                            {/* Primary File Input */}
                            <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl px-5 py-6 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition">

                                <span className="text-gray-500 text-sm text-center">
                                    Choose New Primary Image
                                </span>

                                <input
                                    ref={
                                        primaryInputRef
                                    }
                                    type="file"
                                    name="primary_image"
                                    accept="image/*"
                                    onChange={
                                        handlePrimaryImage
                                    }
                                    className="hidden"
                                />

                            </label>
                        </div>

                        {/* ================================= */}
                        {/* GALLERY */}
                        {/* ================================= */}
                        <div>
                            <label className="font-medium block mb-2">
                                Gallery Photos
                            </label>

                            {/* Existing Gallery */}
                            {product.images?.length > 0 && (
                                <div className="mb-5">

                                    <p className="text-xs text-gray-500 mb-2">
                                        Current Gallery
                                    </p>

                                    <div className="flex flex-wrap gap-3">

                                        {/* Primary Image Thumbnail */}
                                        {product.primary_image && (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    changeImage(
                                                        `${API_URL}/uploads/${product.primary_image}`
                                                    )
                                                }
                                                className={`rounded-xl ${selectedMainImage ===
                                                        `${API_URL}/uploads/${product.primary_image}`
                                                        ? "ring-2 ring-amber-500"
                                                        : ""
                                                    }`}
                                            >
                                                <img
                                                    src={
                                                        `${API_URL}/uploads/${product.primary_image}`
                                                    }
                                                    className="w-20 h-20 object-cover rounded-xl border"
                                                    alt="Primary"
                                                />
                                            </button>
                                        )}

                                        {/* Gallery Thumbnails */}
                                        {product.images.map(
                                            (
                                                image,
                                                index
                                            ) => {
                                                const imageUrl =
                                                    `${API_URL}/uploads/${image}`;

                                                return (
                                                    <button
                                                        type="button"
                                                        key={
                                                            index
                                                        }
                                                        onClick={() =>
                                                            changeImage(
                                                                imageUrl
                                                            )
                                                        }
                                                        className={`rounded-xl ${selectedMainImage ===
                                                                imageUrl
                                                                ? "ring-2 ring-amber-500"
                                                                : ""
                                                            }`}
                                                    >
                                                        <img
                                                            src={
                                                                imageUrl
                                                            }
                                                            className="w-20 h-20 object-cover rounded-xl border"
                                                            alt={`Gallery ${index +
                                                                1
                                                                }`}
                                                        />
                                                    </button>
                                                );
                                            }
                                        )}

                                    </div>

                                    {/* Main Image Preview */}
                                    {selectedMainImage && (
                                        <div className="mt-4">

                                            <p className="text-xs text-gray-500 mb-2">
                                                Selected Image
                                            </p>

                                            <img
                                                src={
                                                    selectedMainImage
                                                }
                                                className="w-40 h-40 object-cover rounded-xl border"
                                                alt="Selected Product"
                                            />

                                        </div>
                                    )}

                                </div>
                            )}

                            {/* Selected Gallery File Names */}
                            {galleryImages.length > 0 && (
                                <div className="mb-4">

                                    <p className="text-xs text-gray-500 mb-2">
                                        Selected Gallery Files
                                    </p>

                                    <div className="space-y-1">

                                        {galleryImages.map(
                                            (
                                                file,
                                                index
                                            ) => (
                                                <div
                                                    key={`${file.name}-${index}`}
                                                    className="flex items-center justify-between text-sm text-amber-600 font-medium"
                                                >

                                                    <span className="truncate">
                                                        {index +
                                                            1}
                                                        .{" "}
                                                        {
                                                            file.name
                                                        }
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeGalleryImage(
                                                                index
                                                            )
                                                        }
                                                        className="ml-2 text-red-500 hover:text-red-700 font-bold text-xl"
                                                    >
                                                        &times;
                                                    </button>

                                                </div>
                                            )
                                        )}

                                    </div>

                                    <p className="text-xs text-amber-600 mt-3">
                                        New gallery images will replace the current gallery.
                                    </p>

                                </div>
                            )}

                            {/* Gallery File Input */}
                            <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl px-5 py-6 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition">

                                <span className="text-gray-500 text-sm text-center">
                                    Choose New Gallery Photos
                                </span>

                                <input
                                    ref={
                                        galleryInputRef
                                    }
                                    type="file"
                                    name="images"
                                    accept="image/*"
                                    multiple
                                    onChange={
                                        handleGalleryImages
                                    }
                                    className="hidden"
                                />

                            </label>
                        </div>

                        {/* ================================= */}
                        {/* PRODUCT SUMMARY */}
                        {/* ================================= */}
                        <div className="md:col-span-2">

                            <label className="font-medium block mb-2">
                                Product Summary
                            </label>

                            <textarea
                                name="product_summary"
                                rows="3"
                                value={
                                    product.product_summary
                                }
                                onChange={handleChange}
                                placeholder="Enter product summary"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />

                        </div>

                        {/* ================================= */}
                        {/* DESCRIPTION */}
                        {/* ================================= */}
                        <div className="md:col-span-2">

                            <label className="font-medium block mb-2">
                                Description
                            </label>

                            <textarea
                                name="description"
                                rows="5"
                                value={
                                    product.description
                                }
                                onChange={handleChange}
                                placeholder="Enter product description"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />

                        </div>

                        {/* ================================= */}
                        {/* BUTTONS */}
                        {/* ================================= */}
                        <div className="md:col-span-2 flex flex-wrap gap-3">

                            <button
                                type="submit"
                                disabled={
                                    updating ||
                                    deleting
                                }
                                className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white px-8 py-4 rounded-xl font-semibold transition"
                            >
                                {updating
                                    ? "Updating..."
                                    : "Update Product"}
                            </button>

                            <Link
                                to="/admin/Addproducts"
                                className="bg-gray-200 hover:bg-gray-300 px-8 py-4 rounded-xl font-semibold transition"
                            >
                                Cancel
                            </Link>

                            <button
                                type="button"
                                onClick={
                                    handleDelete
                                }
                                disabled={
                                    updating ||
                                    deleting
                                }
                                className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white px-8 py-4 rounded-xl font-semibold transition"
                            >
                                {deleting
                                    ? "Deleting..."
                                    : "Delete Product"}
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </AdminHeader>
    );
};

export default EditProduct;