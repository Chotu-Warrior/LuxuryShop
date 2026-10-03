import React, {
    useEffect,
    useMemo,
    useState,
} from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin-header";

const API_URL = "http://localhost:5000";

const initialFormData = {
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
};

const Addproducts = () => {
    // ===============================
    // PRODUCTS & CATEGORIES
    // ===============================
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    // ===============================
    // LOADING STATES
    // ===============================
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    // ===============================
    // FILTERS
    // ===============================
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [sortBy, setSortBy] = useState("");

    // ===============================
    // FORM
    // ===============================
    const [formData, setFormData] =
        useState(initialFormData);

    // ===============================
    // IMAGE STATES
    // ===============================
    const [primaryImage, setPrimaryImage] =
        useState(null);

    const [galleryImages, setGalleryImages] =
        useState([]);

    // ===============================
    // FETCH PRODUCTS
    // ===============================
    const fetchProducts = async (
        showFullLoader = false
    ) => {
        try {
            if (showFullLoader) {
                setLoading(true);
            } else {
                setRefreshing(true);
            }

            setError("");

            const response = await fetch(
                `${API_URL}/api/products`,
                {
                    cache: "no-store",
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch products"
                );
            }

            const data =
                await response.json();

            setProducts(
                Array.isArray(data)
                    ? data
                    : []
            );
        } catch (error) {
            console.error(
                "Fetch Products Error:",
                error
            );

            setError(
                "Products load nahi ho paaye."
            );
        } finally {
            if (showFullLoader) {
                setLoading(false);
            } else {
                setRefreshing(false);
            }
        }
    };

    // ===============================
    // FETCH CATEGORIES
    // ===============================
    const fetchCategories = async () => {
        try {
            const response = await fetch(
                `${API_URL}/api/categories`,
                {
                    cache: "no-store",
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch categories"
                );
            }

            const data =
                await response.json();

            setCategories(
                Array.isArray(data)
                    ? data
                    : []
            );
        } catch (error) {
            console.error(
                "Fetch Categories Error:",
                error
            );
        }
    };

    // ===============================
    // INITIAL LOAD
    // ===============================
    useEffect(() => {
        fetchProducts(true);
        fetchCategories();
    }, []);

    // ===============================
    // FORM CHANGE
    // ===============================
    const handleChange = (e) => {
        const {
            name,
            value,
            type,
            checked,
        } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));
    };

    // ===============================
    // PRIMARY IMAGE
    // ===============================
    const handlePrimaryImage = (e) => {
        const file =
            e.target.files?.[0];

        if (!file) {
            return;
        }

        setPrimaryImage(file);
    };

    // ===============================
    // REMOVE PRIMARY IMAGE
    // ===============================
    const removePrimaryImage = () => {
        setPrimaryImage(null);

        const input =
            document.querySelector(
                'input[name="primary_image"]'
            );

        if (input) {
            input.value = "";
        }
    };

    // ===============================
    // GALLERY IMAGES
    // ===============================
    const handleGalleryImages = (e) => {
        const files = Array.from(
            e.target.files || []
        );

        if (!files.length) {
            return;
        }

        setGalleryImages(files);
    };

    // ===============================
    // REMOVE GALLERY IMAGE
    // ===============================
    const removeGalleryImage = (
        index
    ) => {
        setGalleryImages((prev) =>
            prev.filter(
                (_, imageIndex) =>
                    imageIndex !== index
            )
        );
    };

    // ===============================
    // RESET FORM
    // ===============================
    const resetForm = () => {
        setFormData({
            ...initialFormData,
        });

        setPrimaryImage(null);
        setGalleryImages([]);

        const primaryInput =
            document.querySelector(
                'input[name="primary_image"]'
            );

        const galleryInput =
            document.querySelector(
                'input[name="images"]'
            );

        if (primaryInput) {
            primaryInput.value = "";
        }

        if (galleryInput) {
            galleryInput.value = "";
        }
    };

    // ===============================
    // ADD PRODUCT
    // ===============================
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (submitting) {
            return;
        }

        try {
            setSubmitting(true);
            setError("");

            // ===============================
            // VALIDATION
            // ===============================
            if (
                !formData.product_name.trim()
            ) {
                throw new Error(
                    "Product name required hai."
                );
            }

            if (!formData.categories) {
                throw new Error(
                    "Please select category."
                );
            }

            if (
                formData.original_price === ""
            ) {
                throw new Error(
                    "Original price required hai."
                );
            }

            if (formData.stock === "") {
                throw new Error(
                    "Stock required hai."
                );
            }

            // ===============================
            // FORM DATA
            // ===============================
            const data =
                new FormData();

            data.append(
                "product_name",
                formData.product_name.trim()
            );

            data.append(
                "categories",
                formData.categories
            );

            data.append(
                "original_price",
                formData.original_price
            );

            data.append(
                "discount_price",
                formData.discount_price ||
                    0
            );

            data.append(
                "stock",
                formData.stock
            );

            data.append(
                "status",
                formData.status
            );

            data.append(
                "best_seller",
                String(
                    formData.best_seller
                )
            );

            data.append(
                "size",
                formData.size
            );

            data.append(
                "product_summary",
                formData.product_summary
            );

            data.append(
                "description",
                formData.description
            );

            // ===============================
            // PRIMARY IMAGE
            // ===============================
            if (primaryImage) {
                data.append(
                    "primary_image",
                    primaryImage
                );
            }

            // ===============================
            // GALLERY IMAGES
            // ===============================
            galleryImages.forEach(
                (file) => {
                    data.append(
                        "images",
                        file
                    );
                }
            );

            // ===============================
            // API REQUEST
            // ===============================
            const response =
                await fetch(
                    `${API_URL}/api/products`,
                    {
                        method: "POST",
                        body: data,
                    }
                );

            // ===============================
            // RESPONSE TYPE
            // ===============================
            const contentType =
                response.headers.get(
                    "content-type"
                );

            let result;

            if (
                contentType?.includes(
                    "application/json"
                )
            ) {
                result =
                    await response.json();
            } else {
                const text =
                    await response.text();

                console.error(
                    "Non JSON Response:",
                    text
                );

                throw new Error(
                    `Server error (${response.status}). Backend JSON response nahi de raha.`
                );
            }

            // ===============================
            // API ERROR
            // ===============================
            if (!response.ok) {
                throw new Error(
                    result?.message ||
                        "Product add nahi hua."
                );
            }

            // ===============================
            // IMPORTANT FIX
            // ===============================
            // Backend already returns:
            // result.product
            //
            // Isliye directly React state
            // update karenge.
            if (result?.product) {
                setProducts((prev) => [
                    result.product,
                    ...prev,
                ]);
            } else {
                // Fallback:
                // Agar backend product return
                // nahi kare to API se refresh.
                await fetchProducts(false);
            }

            // ===============================
            // RESET FORM
            // ===============================
            resetForm();

            // ===============================
            // SUCCESS
            // ===============================
            alert(
                "Product added successfully!"
            );
        } catch (error) {
            console.error(
                "Add Product Error:",
                error
            );

            setError(
                error.message ||
                    "Something went wrong."
            );

            alert(
                error.message ||
                    "Something went wrong."
            );
        } finally {
            setSubmitting(false);
        }
    };

    // ===============================
    // DELETE PRODUCT
    // ===============================
    const handleDelete = async (
        id
    ) => {
        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this product?"
            );

        if (!confirmDelete) {
            return;
        }

        try {
            const response =
                await fetch(
                    `${API_URL}/api/products/${id}`,
                    {
                        method: "DELETE",
                    }
                );

            const contentType =
                response.headers.get(
                    "content-type"
                );

            let data;

            if (
                contentType?.includes(
                    "application/json"
                )
            ) {
                data =
                    await response.json();
            } else {
                throw new Error(
                    "Server returned invalid response."
                );
            }

            if (!response.ok) {
                throw new Error(
                    data?.message ||
                        "Failed to delete product"
                );
            }

            // ===============================
            // IMMEDIATE UI UPDATE
            // ===============================
            setProducts((prev) =>
                prev.filter(
                    (product) =>
                        product._id !== id
                )
            );

            alert(
                "Product deleted successfully!"
            );
        } catch (error) {
            console.error(
                "Delete Error:",
                error
            );

            alert(
                error.message ||
                    "Delete failed."
            );
        }
    };

    // ===============================
    // FILTER + SORT
    // ===============================
    const filteredProducts =
        useMemo(() => {
            let result = [
                ...products,
            ];

            // SEARCH
            if (search.trim()) {
                const searchValue =
                    search
                        .trim()
                        .toLowerCase();

                result =
                    result.filter(
                        (product) =>
                            product.product_name
                                ?.toLowerCase()
                                .includes(
                                    searchValue
                                )
                    );
            }

            // CATEGORY
            if (category) {
                result =
                    result.filter(
                        (product) =>
                            product.categories ===
                            category
                    );
            }

            // STATUS
            if (status) {
                result =
                    result.filter(
                        (product) =>
                            product.status ===
                            status
                    );
            }

            // NEWEST
            if (
                sortBy === "Newest"
            ) {
                result.sort(
                    (a, b) =>
                        new Date(
                            b.createdAt ||
                                0
                        ) -
                        new Date(
                            a.createdAt ||
                                0
                        )
                );
            }

            // PRICE
            if (
                sortBy === "Price"
            ) {
                result.sort(
                    (a, b) =>
                        Number(
                            a.discount_price ||
                                0
                        ) -
                        Number(
                            b.discount_price ||
                                0
                        )
                );
            }

            return result;
        }, [
            products,
            search,
            category,
            status,
            sortBy,
        ]);

    // ===============================
    // STATS
    // ===============================
    const totalProducts =
        products.length;

    const activeProducts =
        products.filter(
            (product) =>
                product.status ===
                "Active"
        ).length;

    const outOfStockProducts =
        products.filter(
            (product) =>
                product.status ===
                "Out of Stock"
        ).length;

    const draftProducts =
        products.filter(
            (product) =>
                product.status ===
                "Draft"
        ).length;

    // ===============================
    // IMAGE PREVIEW URL
    // ===============================
    const primaryPreview =
        primaryImage
            ? URL.createObjectURL(
                  primaryImage
              )
            : "";

    // ===============================
    // INITIAL LOADING
    // ===============================
    if (loading) {
        return (
            <AdminHeader
                title="Add Products"
                subtitle="Manage your store products"
            >
                <main className="p-8">
                    <div className="text-center py-20">
                        <p className="text-gray-500">
                            Loading Products...
                        </p>
                    </div>
                </main>
            </AdminHeader>
        );
    }

    return (
        <AdminHeader
            title="Add Products"
            subtitle="Manage your store products"
        >
            <main className="p-8">

                {/* ===============================
                    ERROR
                =============================== */}
                {error && (
                    <div className="bg-red-100 border border-red-200 text-red-700 p-4 rounded-xl mb-6 flex items-center justify-between">
                        <span>
                            {error}
                        </span>

                        <button
                            type="button"
                            onClick={() =>
                                setError("")
                            }
                            className="font-bold text-red-600"
                        >
                            &times;
                        </button>
                    </div>
                )}

                {/* ===============================
                    REFRESHING
                =============================== */}
                {refreshing && (
                    <div className="mb-4 text-sm text-gray-500">
                        Updating products...
                    </div>
                )}

                {/* ===============================
                    STATS
                =============================== */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <p className="text-gray-500">
                            Total Products
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {
                                totalProducts
                            }
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <p className="text-gray-500">
                            Active
                        </p>

                        <h2 className="text-4xl font-bold mt-3 text-green-600">
                            {
                                activeProducts
                            }
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <p className="text-gray-500">
                            Out Of Stock
                        </p>

                        <h2 className="text-4xl font-bold mt-3 text-red-500">
                            {
                                outOfStockProducts
                            }
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <p className="text-gray-500">
                            Draft
                        </p>

                        <h2 className="text-4xl font-bold mt-3 text-yellow-500">
                            {
                                draftProducts
                            }
                        </h2>
                    </div>

                </div>

                {/* ===============================
                    FILTERS
                =============================== */}
                <div className="bg-white rounded-2xl shadow mt-8 p-6">

                    <div className="grid lg:grid-cols-5 gap-4">

                        <input
                            type="text"
                            placeholder="Search..."
                            value={
                                search
                            }
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                        />

                        <select
                            value={
                                category
                            }
                            onChange={(e) =>
                                setCategory(
                                    e.target.value
                                )
                            }
                            className="border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">
                                Select Category
                            </option>

                            {categories.map(
                                (item) => (
                                    <option
                                        key={
                                            item._id
                                        }
                                        value={
                                            item.name
                                        }
                                    >
                                        {
                                            item.name
                                        }
                                    </option>
                                )
                            )}
                        </select>

                        <select
                            value={
                                status
                            }
                            onChange={(e) =>
                                setStatus(
                                    e.target.value
                                )
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
                            value={
                                sortBy
                            }
                            onChange={(e) =>
                                setSortBy(
                                    e.target.value
                                )
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
                            className="bg-amber-500 hover:bg-amber-600 rounded-xl font-semibold transition"
                        >
                            Clear Filter
                        </button>

                    </div>
                </div>

                {/* ===============================
                    ADD PRODUCT FORM
                =============================== */}
                <div className="bg-white rounded-2xl shadow mt-8 p-6">

                    <h3 className="text-2xl font-bold mb-6">
                        Add New Product
                    </h3>

                    <form
                        onSubmit={
                            handleSubmit
                        }
                        className="grid md:grid-cols-2 gap-6"
                    >

                        {/* PRODUCT NAME */}
                        <div>
                            <label className="font-medium block mb-2">
                                Product Name
                            </label>

                            <input
                                name="product_name"
                                type="text"
                                value={
                                    formData.product_name
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="Enter product name"
                                required
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* CATEGORY */}
                        <div>
                            <label className="font-medium block mb-2">
                                Category
                            </label>

                            <select
                                name="categories"
                                value={
                                    formData.categories
                                }
                                onChange={
                                    handleChange
                                }
                                required
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="">
                                    Select Category
                                </option>

                                {categories.map(
                                    (item) => (
                                        <option
                                            key={
                                                item._id
                                            }
                                            value={
                                                item.name
                                            }
                                        >
                                            {
                                                item.name
                                            }
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        {/* ORIGINAL PRICE */}
                        <div>
                            <label className="font-medium block mb-2">
                                Original Price (₹)
                            </label>

                            <input
                                name="original_price"
                                type="number"
                                value={
                                    formData.original_price
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="0.00"
                                min="0"
                                required
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* DISCOUNT PRICE */}
                        <div>
                            <label className="font-medium block mb-2">
                                Discount Price (₹)
                            </label>

                            <input
                                name="discount_price"
                                type="number"
                                value={
                                    formData.discount_price
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="0.00"
                                min="0"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* STOCK */}
                        <div>
                            <label className="font-medium block mb-2">
                                Stock
                            </label>

                            <input
                                name="stock"
                                type="number"
                                value={
                                    formData.stock
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="0"
                                min="0"
                                required
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* STATUS */}
                        <div>
                            <label className="font-medium block mb-2">
                                Status
                            </label>

                            <select
                                name="status"
                                value={
                                    formData.status
                                }
                                onChange={
                                    handleChange
                                }
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

                        {/* BEST SELLER */}
                        <div>
                            <label className="flex items-center gap-2 cursor-pointer mt-6">
                                <input
                                    name="best_seller"
                                    type="checkbox"
                                    checked={
                                        formData.best_seller
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-5 h-5 text-amber-500 rounded"
                                />

                                <span className="font-medium">
                                    Best Seller
                                </span>
                            </label>
                        </div>

                        {/* SIZE */}
                        <div>
                            <label className="font-medium block mb-2">
                                Size
                            </label>

                            <select
                                name="size"
                                value={
                                    formData.size
                                }
                                onChange={
                                    handleChange
                                }
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

                        {/* PRIMARY IMAGE */}
                        <div>
                            <label className="font-medium block mb-2">
                                Primary Image
                            </label>

                            <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl px-5 py-6 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition">
                                <span className="text-gray-500 text-sm">
                                    Choose Primary Image
                                </span>

                                <input
                                    type="file"
                                    name="primary_image"
                                    accept="image/*"
                                    onChange={
                                        handlePrimaryImage
                                    }
                                    className="hidden"
                                />
                            </label>

                            {primaryImage && (
                                <div className="mt-3 flex items-center gap-3 bg-amber-50 rounded-xl p-3">

                                    <img
                                        src={
                                            primaryPreview
                                        }
                                        alt="Primary Preview"
                                        className="w-14 h-14 rounded-lg object-cover border"
                                    />

                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-amber-600 font-medium truncate">
                                            {
                                                primaryImage.name
                                            }
                                        </p>

                                        <p className="text-xs text-gray-500 mt-1">
                                            {(
                                                primaryImage.size /
                                                1024
                                            ).toFixed(
                                                1
                                            )}{" "}
                                            KB
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={
                                            removePrimaryImage
                                        }
                                        className="w-8 h-8 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white font-bold transition"
                                    >
                                        &times;
                                    </button>

                                </div>
                            )}
                        </div>

                        {/* GALLERY */}
                        <div>
                            <label className="font-medium block mb-2">
                                Gallery Photos
                            </label>

                            <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl px-5 py-6 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition">
                                <span className="text-gray-500 text-sm">
                                    Choose Gallery Photos
                                </span>

                                <input
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

                            {galleryImages.length >
                                0 && (
                                    <div className="mt-3 space-y-2">

                                        {galleryImages.map(
                                            (
                                                file,
                                                index
                                            ) => (
                                                <div
                                                    key={`${file.name}-${index}`}
                                                    className="flex items-center gap-3 bg-amber-50 rounded-xl p-3"
                                                >

                                                    <img
                                                        src={URL.createObjectURL(
                                                            file
                                                        )}
                                                        alt={`Gallery ${index + 1}`}
                                                        className="w-12 h-12 rounded-lg object-cover border"
                                                    />

                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm text-amber-600 font-medium truncate">
                                                            {index +
                                                                1}
                                                            .{" "}
                                                            {
                                                                file.name
                                                            }
                                                        </p>

                                                        <p className="text-xs text-gray-500">
                                                            {(
                                                                file.size /
                                                                1024
                                                            ).toFixed(
                                                                1
                                                            )}{" "}
                                                            KB
                                                        </p>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeGalleryImage(
                                                                index
                                                            )
                                                        }
                                                        className="w-8 h-8 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white font-bold transition"
                                                    >
                                                        &times;
                                                    </button>

                                                </div>
                                            )
                                        )}

                                    </div>
                                )}
                        </div>

                        {/* SUMMARY */}
                        <div className="md:col-span-2">
                            <label className="font-medium block mb-2">
                                Product Summary
                            </label>

                            <textarea
                                name="product_summary"
                                rows="3"
                                value={
                                    formData.product_summary
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="Enter product summary"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* DESCRIPTION */}
                        <div className="md:col-span-2">
                            <label className="font-medium block mb-2">
                                Description
                            </label>

                            <textarea
                                name="description"
                                rows="4"
                                value={
                                    formData.description
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="Enter product description"
                                className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* SUBMIT */}
                        <div className="md:col-span-2">

                            <button
                                type="submit"
                                disabled={
                                    submitting
                                }
                                className={`px-8 py-4 rounded-xl font-semibold transition text-white ${
                                    submitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-black hover:bg-gray-800"
                                }`}
                            >
                                {submitting
                                    ? "Adding Product..."
                                    : "Add Product"}
                            </button>

                        </div>

                    </form>
                </div>

                {/* ===============================
                    PRODUCT TABLE
                =============================== */}
                <div className="bg-white rounded-2xl shadow mt-8 overflow-hidden">

                    <div className="p-6 border-b flex items-center justify-between">

                        <div>
                            <h3 className="text-2xl font-bold">
                                All Products
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {
                                    filteredProducts.length
                                }{" "}
                                products found
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                fetchProducts(
                                    false
                                )
                            }
                            disabled={
                                refreshing
                            }
                            className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
                        >
                            {refreshing
                                ? "Refreshing..."
                                : "Refresh"}
                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left px-6 py-4">
                                        Image
                                    </th>

                                    <th>
                                        Name
                                    </th>

                                    <th>
                                        Category
                                    </th>

                                    <th>
                                        Original /
                                        Discount
                                    </th>

                                    <th>
                                        Stock
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

                                {filteredProducts.length >
                                0 ? (
                                    filteredProducts.map(
                                        (
                                            product
                                        ) => (
                                            <tr
                                                key={
                                                    product._id
                                                }
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

                                                <td className="text-center font-medium">
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
                                                    {
                                                        product.stock
                                                    }
                                                </td>

                                                <td className="text-center">

                                                    {product.status ===
                                                        "Active" && (
                                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                                            Active
                                                        </span>
                                                    )}

                                                    {product.status ===
                                                        "Draft" && (
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

                                                </td>

                                                <td className="text-center whitespace-nowrap space-x-2">

                                                    <Link
                                                        to={`/admin/Addproducts/edit/${product._id}`}
                                                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
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
                                            {search ||
                                            category ||
                                            status
                                                ? "No matching products found."
                                                : "No Products found."}
                                        </td>
                                    </tr>
                                )}

                            </tbody>

                        </table>

                    </div>
                </div>

                {/* ===============================
                    PRODUCT CARDS
                =============================== */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

                    {filteredProducts.map(
                        (product) => (
                            <div
                                key={
                                    product._id
                                }
                                className="bg-white rounded-2xl shadow overflow-hidden"
                            >

                                {product.primary_image ? (
                                    <img
                                        src={`${API_URL}/uploads/${product.primary_image}`}
                                        alt={
                                            product.product_name
                                        }
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
                                        {
                                            product.product_name
                                        }
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {
                                            product.categories
                                        }
                                    </p>

                                    <div className="mt-3">

                                        <span className="line-through text-gray-400 mr-2">
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

                                    <p className="text-sm text-gray-500 mt-2">
                                        Stock:{" "}
                                        {
                                            product.stock
                                        }
                                    </p>

                                    <div className="mt-3">

                                        {product.status ===
                                            "Active" && (
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                                Active
                                            </span>
                                        )}

                                        {product.status ===
                                            "Draft" && (
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
                        )
                    )}

                </div>

            </main>
        </AdminHeader>
    );
};

export default Addproducts;