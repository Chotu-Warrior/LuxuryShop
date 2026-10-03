import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const API_URL = "http://localhost:5000/api";

const Shop = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [search, setSearch] = useState(
        searchParams.get("search") || ""
    );

    const [category, setCategory] = useState(
        searchParams.get("category") || ""
    );

    const [sort, setSort] = useState(
        searchParams.get("sort") || ""
    );

    const [currentPage, setCurrentPage] = useState(
        Number(searchParams.get("page")) || 1
    );

    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // ==========================================
    // FETCH SHOP PRODUCTS
    // ==========================================

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                setLoading(true);
                setError("");

                const query = new URLSearchParams();

                if (search.trim()) {
                    query.set("search", search.trim());
                }

                if (category) {
                    query.set("category", category);
                }

                if (sort) {
                    query.set("sort", sort);
                }

                query.set("page", currentPage);


                const response = await fetch(
                    `${API_URL}/shop?${query.toString()}`
                );


                if (!response.ok) {

                    throw new Error(
                        `Server Error: ${response.status}`
                    );

                }


                const data = await response.json();

                console.log("SHOP API:", data);


                setProducts(
                    Array.isArray(data.products)
                        ? data.products
                        : []
                );


                setCategories(
                    Array.isArray(data.categories)
                        ? data.categories
                        : []
                );


                setTotalProducts(
                    Number(data.totalProducts) || 0
                );


                setTotalPages(
                    Number(data.totalPages) || 1
                );


            } catch (error) {

                console.error("Shop Error:", error);

                setError(
                    "Products load nahi ho pa rahe hain."
                );

                setProducts([]);

            } finally {

                setLoading(false);

            }

        };


        fetchProducts();

    }, [
        search,
        category,
        sort,
        currentPage
    ]);


    // ==========================================
    // UPDATE FILTERS + URL
    // ==========================================

    const updateFilters = (newValues = {}) => {

        const newSearch =
            newValues.search !== undefined
                ? newValues.search
                : search;

        const newCategory =
            newValues.category !== undefined
                ? newValues.category
                : category;

        const newSort =
            newValues.sort !== undefined
                ? newValues.sort
                : sort;

        const newPage =
            newValues.page !== undefined
                ? Number(newValues.page)
                : 1;


        const params = new URLSearchParams();


        if (newSearch.trim()) {
            params.set("search", newSearch.trim());
        }

        if (newCategory) {
            params.set("category", newCategory);
        }

        if (newSort) {
            params.set("sort", newSort);
        }

        params.set("page", newPage);


        setSearchParams(params);

        setSearch(newSearch);
        setCategory(newCategory);
        setSort(newSort);
        setCurrentPage(newPage);

    };


    // ==========================================
    // SEARCH
    // ==========================================

    const handleSearch = (e) => {

        e.preventDefault();

        updateFilters({
            search,
            page: 1
        });

    };


    // ==========================================
    // CATEGORY
    // ==========================================

    const handleCategoryChange = (value) => {

        updateFilters({
            category: value,
            page: 1
        });

    };


    // ==========================================
    // SORT
    // ==========================================

    const handleSortChange = (value) => {

        updateFilters({
            sort: value,
            page: 1
        });

    };


    // ==========================================
    // RESET
    // ==========================================

    const resetFilters = () => {

        updateFilters({
            search: "",
            category: "",
            sort: "",
            page: 1
        });

    };


    // ==========================================
    // IMAGE URL
    // ==========================================

    const getProductImage = (product) => {

        if (product.primary_image) {

            return `${API_URL.replace(
                "/api",
                ""
            )}/uploads/${product.primary_image}`;

        }


        if (
            product.images &&
            Array.isArray(product.images) &&
            product.images.length > 0
        ) {

            return `${API_URL.replace(
                "/api",
                ""
            )}/uploads/${product.images[0]}`;

        }


        return null;

    };


    // ==========================================
    // LOADING
    // ==========================================

    if (loading) {

        return (
            <>
                <Header />

                <section className="bg-black text-white py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h1 className="text-5xl font-bold">
                            Shop
                        </h1>

                        <p className="mt-4 text-gray-300">
                            Home / Shop
                        </p>
                    </div>
                </section>

                <section className="py-20">

                    <div className="max-w-7xl mx-auto px-6 text-center">

                        <div className="text-5xl mb-5">
                            ⏳
                        </div>

                        <h2 className="text-2xl font-bold">
                            Loading Products...
                        </h2>

                    </div>

                </section>

                <Footer />
            </>
        );

    }


    return (
        <>
            <Header />


            {/* ======================================
                PAGE TITLE
            ====================================== */}

            <section className="bg-black text-white py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold">
                        Shop
                    </h1>

                    <p className="mt-4 text-gray-300">
                        Home / Shop
                    </p>

                </div>

            </section>


            {/* ======================================
                SHOP
            ====================================== */}

            <section className="py-12">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-4 gap-8">


                        {/* ==================================
                            SIDEBAR
                        ================================== */}

                        <aside className="bg-white rounded-xl p-6 shadow h-fit">

                            <h2 className="text-xl font-bold mb-6">
                                Filters
                            </h2>


                            {/* SEARCH */}

                            <form onSubmit={handleSearch}>

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    placeholder="Search products..."
                                    className="w-full border rounded-lg px-4 py-3 mb-6 outline-none focus:ring-2 focus:ring-amber-400"
                                />

                            </form>


                            {/* CATEGORY */}

                            <div>

                                <h3 className="font-semibold mb-3">
                                    Categories
                                </h3>


                                <div className="space-y-3">


                                    {/* ALL */}

                                    <label className="flex gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="category"
                                            checked={category === ""}
                                            onChange={() =>
                                                handleCategoryChange("")
                                            }
                                        />

                                        <span>
                                            All Products
                                        </span>

                                    </label>


                                    {/* CATEGORIES */}

                                    {categories.map((cat) => (

                                        <label
                                            key={cat}
                                            className="flex gap-2 cursor-pointer"
                                        >

                                            <input
                                                type="radio"
                                                name="category"
                                                checked={category === cat}
                                                onChange={() =>
                                                    handleCategoryChange(cat)
                                                }
                                            />

                                            <span>
                                                {cat}
                                            </span>

                                        </label>

                                    ))}

                                </div>

                            </div>


                            {/* RESET */}

                            {(search || category || sort) && (

                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                                >
                                    Clear Filters
                                </button>

                            )}

                        </aside>


                        {/* ==================================
                            PRODUCTS
                        ================================== */}

                        <div className="lg:col-span-3">


                            {/* ERROR */}

                            {error && (

                                <div className="bg-red-100 text-red-700 p-5 rounded-xl mb-8">

                                    {error}

                                    <button
                                        onClick={() =>
                                            window.location.reload()
                                        }
                                        className="ml-4 underline font-semibold"
                                    >
                                        Reload
                                    </button>

                                </div>

                            )}


                            {/* TOP BAR */}

                            <div className="bg-white p-5 rounded-xl shadow flex flex-col md:flex-row gap-4 justify-between items-center mb-8">


                                <p className="text-gray-600">

                                    Showing{" "}

                                    <span className="font-semibold text-black">
                                        {products.length}
                                    </span>{" "}

                                    of{" "}

                                    <span className="font-semibold text-black">
                                        {totalProducts}
                                    </span>{" "}

                                    Products

                                </p>


                                {/* SORT */}

                                <div className="relative">

                                    <select
                                        value={sort}
                                        onChange={(e) =>
                                            handleSortChange(
                                                e.target.value
                                            )
                                        }
                                        className="appearance-none border rounded-lg px-4 py-3 pr-12 min-w-[220px]"
                                    >

                                        <option value="">
                                            Default Sorting
                                        </option>

                                        <option value="newest">
                                            Newest
                                        </option>

                                        <option value="low">
                                            Price: Low to High
                                        </option>

                                        <option value="high">
                                            Price: High to Low
                                        </option>

                                    </select>

                                    <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />

                                </div>

                            </div>


                            {/* ==================================
                                PRODUCTS GRID
                            ================================== */}

                            {products.length > 0 ? (

                                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

                                    {products.map((product) => {

                                        const image =
                                            getProductImage(product);


                                        const isOutOfStock =
                                            Number(product.stock) <= 0 ||
                                            product.status === "Out of Stock";


                                        return (

                                            <div
                                                key={product._id}
                                                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl duration-300 group"
                                            >


                                                {/* IMAGE */}

                                                <div className="relative overflow-hidden">

                                                    <Link
                                                        to={`/product/${product._id}`}
                                                    >

                                                        {image ? (

                                                            <img
                                                                src={image}
                                                                alt={
                                                                    product.product_name ||
                                                                    "Product"
                                                                }
                                                                className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
                                                                onError={(e) => {
                                                                    e.currentTarget.style.display =
                                                                        "none";
                                                                }}
                                                            />

                                                        ) : (

                                                            <div className="h-72 w-full bg-gray-100 flex items-center justify-center">

                                                                <span className="text-gray-400">
                                                                    No Image
                                                                </span>

                                                            </div>

                                                        )}

                                                    </Link>


                                                    {/* BEST SELLER */}

                                                    {product.best_seller && (

                                                        <span className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-semibold">

                                                            Best Seller

                                                        </span>

                                                    )}


                                                    {/* OUT OF STOCK */}

                                                    {isOutOfStock && (

                                                        <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">

                                                            Out of Stock

                                                        </span>

                                                    )}

                                                </div>


                                                {/* CONTENT */}

                                                <div className="p-5">


                                                    {/* CATEGORY */}

                                                    <span className="text-sm text-gray-500">

                                                        {product.categories ||
                                                            "Uncategorized"}

                                                    </span>


                                                    {/* NAME */}

                                                    <h3 className="text-xl font-semibold mt-2">

                                                        <Link
                                                            to={`/product/${product._id}`}
                                                            className="hover:text-amber-500 transition"
                                                        >

                                                            {product.product_name}

                                                        </Link>

                                                    </h3>


                                                    {/* PRICE */}

                                                    <div className="flex justify-between items-center mt-4 gap-3">

                                                        <div>

                                                            <p className="text-amber-500 text-xl font-bold">

                                                                ₹
                                                                {Number(
                                                                    product.discount_price ||
                                                                    0
                                                                ).toLocaleString(
                                                                    "en-IN"
                                                                )}

                                                            </p>


                                                            {product.original_price &&
                                                                Number(
                                                                    product.original_price
                                                                ) >
                                                                Number(
                                                                    product.discount_price
                                                                ) && (

                                                                    <p className="text-sm text-gray-400 line-through">

                                                                        ₹
                                                                        {Number(
                                                                            product.original_price
                                                                        ).toLocaleString(
                                                                            "en-IN"
                                                                        )}

                                                                    </p>

                                                                )}

                                                        </div>


                                                        {/* ADD */}

                                                        {!isOutOfStock ? (

                                                            <Link
                                                                to={`/product/${product._id}`}
                                                                className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
                                                            >

                                                                Add

                                                            </Link>

                                                        ) : (

                                                            <button
                                                                type="button"
                                                                disabled
                                                                className="bg-gray-300 text-gray-500 px-5 py-2 rounded-lg cursor-not-allowed"
                                                            >

                                                                Sold Out

                                                            </button>

                                                        )}

                                                    </div>

                                                </div>

                                            </div>

                                        );

                                    })}

                                </div>

                            ) : (

                                /* ==================================
                                    NO PRODUCTS
                                ================================== */

                                <div className="bg-white rounded-2xl shadow p-12 text-center">

                                    <div className="text-5xl mb-5">
                                        🛍️
                                    </div>

                                    <h3 className="text-2xl font-bold">
                                        No Products Found
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        Try changing your search or category filter.
                                    </p>

                                    <button
                                        onClick={resetFilters}
                                        className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg"
                                    >
                                        View All Products
                                    </button>

                                </div>

                            )}


                            {/* ==================================
                                PAGINATION
                            ================================== */}

                            {totalPages > 1 && (

                                <div className="flex justify-center gap-3 mt-12 flex-wrap">

                                    {/* PREVIOUS */}

                                    <button
                                        disabled={currentPage === 1}
                                        onClick={() =>
                                            updateFilters({
                                                page: currentPage - 1
                                            })
                                        }
                                        className="px-4 h-12 rounded-lg bg-white shadow disabled:opacity-40"
                                    >
                                        ←
                                    </button>


                                    {/* PAGES */}

                                    {Array.from(
                                        {
                                            length: totalPages
                                        },
                                        (_, index) => index + 1
                                    ).map((page) => (

                                        <button
                                            key={page}
                                            onClick={() =>
                                                updateFilters({
                                                    page
                                                })
                                            }
                                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${currentPage === page
                                                    ? "bg-black text-white"
                                                    : "bg-white shadow hover:bg-gray-100"
                                                }`}
                                        >

                                            {page}

                                        </button>

                                    ))}


                                    {/* NEXT */}

                                    <button
                                        disabled={
                                            currentPage === totalPages
                                        }
                                        onClick={() =>
                                            updateFilters({
                                                page: currentPage + 1
                                            })
                                        }
                                        className="px-4 h-12 rounded-lg bg-white shadow disabled:opacity-40"
                                    >
                                        →
                                    </button>

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* ======================================
                NEWSLETTER
            ====================================== */}

            <section className="bg-black py-20">

                <div className="max-w-4xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold text-white">
                        Subscribe Newsletter
                    </h2>

                    <p className="text-gray-300 mt-5">
                        Get latest products and exclusive discounts.
                    </p>


                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thank you for subscribing!");
                        }}
                        className="flex flex-col md:flex-row mt-8 gap-4"
                    >

                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="flex-1 rounded-lg px-5 py-4"
                        />

                        <button
                            type="submit"
                            className="bg-amber-500 px-8 py-4 rounded-lg font-semibold"
                        >
                            Subscribe
                        </button>

                    </form>

                </div>

            </section>


            <Footer />

        </>
    );
};


export default Shop;