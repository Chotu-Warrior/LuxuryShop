import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const API_URL = "http://localhost:5000";

const ProductSingle = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const [mainImage, setMainImage] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // ==========================================
    // FETCH PRODUCT
    // ==========================================

    useEffect(() => {

        const fetchProduct = async () => {

            try {

                setLoading(true);
                setError("");

                console.log(
                    "Fetching product:",
                    `${API_URL}/api/products/${id}`
                );

                const response = await fetch(
                    `${API_URL}/api/products/${id}`
                );

                if (!response.ok) {

                    if (response.status === 404) {
                        throw new Error("Product not found");
                    }

                    throw new Error(
                        `Server Error: ${response.status}`
                    );
                }

                const data = await response.json();

                console.log(
                    "PRODUCT SINGLE RESPONSE:",
                    data
                );

                setProduct(data);

            } catch (err) {

                console.error(
                    "Product Fetch Error:",
                    err
                );

                setError(
                    err.message ||
                    "Failed to load product"
                );

                setProduct(null);

            } finally {

                setLoading(false);

            }

        };


        if (id) {
            fetchProduct();
        }

    }, [id]);


    // ==========================================
    // SET MAIN IMAGE
    // ==========================================

    useEffect(() => {

        if (!product) {
            return;
        }

        if (product.primary_image) {

            setMainImage(
                `${API_URL}/uploads/${product.primary_image}`
            );

        } else if (
            Array.isArray(product.images) &&
            product.images.length > 0
        ) {

            setMainImage(
                `${API_URL}/uploads/${product.images[0]}`
            );

        } else {

            setMainImage(null);

        }

        setQuantity(1);

    }, [product]);


    // ==========================================
    // FETCH RELATED PRODUCTS
    // ==========================================

    useEffect(() => {

        const fetchRelatedProducts = async () => {

            try {

                const response = await fetch(
                    `${API_URL}/api/products`
                );

                if (!response.ok) {
                    return;
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    return;
                }


                // Same category products
                const related = data
                    .filter(
                        (item) =>
                            item._id !== id &&
                            item.categories ===
                            product?.categories
                    )
                    .slice(0, 4);


                setRelatedProducts(related);

            } catch (err) {

                console.error(
                    "Related Products Error:",
                    err
                );

            }

        };


        if (product) {
            fetchRelatedProducts();
        }

    }, [product, id]);


    // ==========================================
    // QUANTITY
    // ==========================================

    const handleQuantity = (value) => {

        const qty = Number(value);

        if (!Number.isFinite(qty)) {
            return;
        }

        if (qty < 1) {
            setQuantity(1);
            return;
        }

        if (qty > Number(product.stock)) {

            setQuantity(
                Number(product.stock)
            );

            return;
        }

        setQuantity(qty);

    };


    // ==========================================
    // ADD TO CART
    // ==========================================

    const handleAddToCart = () => {

        console.log("Add To Cart", {
            productId: product._id,
            quantity: quantity
        });

        alert(
            `${product.product_name} added to cart`
        );

    };


    // ==========================================
    // BUY NOW
    // ==========================================

    const handleBuyNow = () => {

        console.log("Buy Now", {
            productId: product._id,
            quantity: quantity
        });

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
                            Product Details
                        </h1>

                        <p className="text-gray-300 mt-4">
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
                            Loading Product...
                        </h2>

                    </div>

                </section>

                <Footer />
            </>
        );

    }


    // ==========================================
    // ERROR / NOT FOUND
    // ==========================================

    if (!product) {

        return (
            <>
                <Header />

                <section className="py-24">

                    <div className="max-w-7xl mx-auto px-6 text-center">

                        <div className="text-6xl mb-6">
                            🛍️
                        </div>

                        <h2 className="text-3xl font-bold">
                            {error ||
                                "Product Not Found"}
                        </h2>

                        <p className="text-gray-500 mt-3">
                            The product you are looking
                            for does not exist.
                        </p>

                        <Link
                            to="/shop"
                            className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-lg"
                        >
                            Back To Shop
                        </Link>

                    </div>

                </section>

                <Footer />
            </>
        );

    }


    // ==========================================
    // PRODUCT DATA
    // ==========================================

    const isAvailable =
        Number(product.stock) > 0 &&
        product.status !== "Out of Stock";


    const galleryImages = [

        ...(product.primary_image
            ? [product.primary_image]
            : []),

        ...(Array.isArray(product.images)
            ? product.images
            : [])

    ];


    return (
        <>
            <Header />


            {/* ==========================================
                BREADCRUMB
            ========================================== */}

            <section className="bg-black text-white py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold">
                        Product Details
                    </h1>

                    <p className="text-gray-300 mt-4">
                        Home / Shop /{" "}
                        {product.product_name}
                    </p>

                </div>

            </section>


            {/* ==========================================
                PRODUCT
            ========================================== */}

            <section className="py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-12">


                        {/* ==================================
                            LEFT - IMAGE
                        ================================== */}

                        <div>

                            {mainImage ? (

                                <img
                                    src={mainImage}
                                    alt={
                                        product.product_name
                                    }
                                    className="rounded-2xl shadow-lg w-full h-[650px] object-cover"
                                    onError={(e) => {

                                        console.error(
                                            "Image failed:",
                                            mainImage
                                        );

                                        e.currentTarget.style.display =
                                            "none";

                                    }}
                                />

                            ) : (

                                <div className="w-full h-[650px] bg-gray-100 rounded-2xl flex items-center justify-center">

                                    <span className="text-gray-400">
                                        No Image Available
                                    </span>

                                </div>

                            )}


                            {/* ==================================
                                GALLERY
                            ================================== */}

                            {galleryImages.length > 0 && (

                                <div className="flex gap-4 mt-5 overflow-x-auto pb-2">

                                    {galleryImages.map(
                                        (image, index) => {

                                            const imageUrl =
                                                `${API_URL}/uploads/${image}`;


                                            return (

                                                <button
                                                    type="button"
                                                    key={`${image}-${index}`}
                                                    onClick={() =>
                                                        setMainImage(
                                                            imageUrl
                                                        )
                                                    }
                                                    className={`flex-shrink-0 rounded-lg border-2 ${mainImage ===
                                                            imageUrl
                                                            ? "border-amber-500"
                                                            : "border-transparent"
                                                        }`}
                                                >

                                                    <img
                                                        src={
                                                            imageUrl
                                                        }
                                                        alt={
                                                            product.product_name
                                                        }
                                                        className="w-24 h-24 object-cover rounded-lg"
                                                    />

                                                </button>

                                            );

                                        }
                                    )}

                                </div>

                            )}

                        </div>


                        {/* ==================================
                            RIGHT - DETAILS
                        ================================== */}

                        <div>


                            {/* BEST SELLER */}

                            {product.best_seller && (

                                <span className="inline-block bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">

                                    Best Seller

                                </span>

                            )}


                            {/* PRODUCT NAME */}

                            <h2 className="text-5xl font-bold mt-5">

                                {product.product_name}

                            </h2>


                            {/* PRICE */}

                            <div className="mt-6">

                                <span className="text-4xl text-amber-500 font-bold">

                                    ₹
                                    {Number(
                                        product.discount_price || 0
                                    ).toLocaleString(
                                        "en-IN"
                                    )}

                                </span>


                                {Number(
                                    product.original_price || 0
                                ) >
                                    Number(
                                        product.discount_price || 0
                                    ) && (

                                        <span className="text-2xl line-through text-gray-400 ml-3">

                                            ₹
                                            {Number(
                                                product.original_price
                                            ).toLocaleString(
                                                "en-IN"
                                            )}

                                        </span>

                                    )}

                            </div>


                            {/* SUMMARY */}

                            {product.product_summary && (

                                <p className="text-gray-600 mt-8 leading-8">

                                    {product.product_summary}

                                </p>

                            )}


                            {/* SIZE */}

                            {product.size && (

                                <div className="mt-10">

                                    <h3 className="font-semibold mb-3">
                                        Size
                                    </h3>

                                    <button
                                        type="button"
                                        className="bg-black text-white px-5 py-2 rounded-lg"
                                    >

                                        {product.size}

                                    </button>

                                </div>

                            )}


                            {/* ==================================
                                QUANTITY + BUTTONS
                            ================================== */}

                            <div className="flex items-center gap-5 mt-10 flex-wrap">


                                <input
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    max={product.stock}
                                    disabled={
                                        !isAvailable
                                    }
                                    onChange={(e) =>
                                        handleQuantity(
                                            e.target.value
                                        )
                                    }
                                    className="w-24 border rounded-lg px-4 py-3"
                                />


                                {isAvailable ? (

                                    <>

                                        <button
                                            type="button"
                                            onClick={
                                                handleAddToCart
                                            }
                                            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
                                        >
                                            Add To Cart
                                        </button>


                                        <button
                                            type="button"
                                            onClick={
                                                handleBuyNow
                                            }
                                            className="bg-amber-500 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
                                        >
                                            Buy Now
                                        </button>

                                    </>

                                ) : (

                                    <button
                                        type="button"
                                        disabled
                                        className="bg-gray-400 text-white px-8 py-3 rounded-lg cursor-not-allowed"
                                    >
                                        Out of Stock
                                    </button>

                                )}

                            </div>


                            {/* ==================================
                                PRODUCT INFORMATION
                            ================================== */}

                            <div className="mt-8 space-y-3">

                                <p>
                                    <strong>
                                        Category :
                                    </strong>{" "}
                                    {product.categories ||
                                        "N/A"}
                                </p>


                                <p>
                                    <strong>
                                        Availability :
                                    </strong>{" "}

                                    {isAvailable ? (

                                        <span className="text-green-600">
                                            In Stock
                                        </span>

                                    ) : (

                                        <span className="text-red-600">
                                            Out of Stock
                                        </span>

                                    )}

                                </p>


                                <p>
                                    <strong>
                                        Stock :
                                    </strong>{" "}
                                    {product.stock}
                                </p>


                                <p>
                                    <strong>
                                        Status :
                                    </strong>{" "}
                                    {product.status}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==========================================
                DESCRIPTION
            ========================================== */}

            <section className="py-16 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl font-bold">
                        Product Description
                    </h2>


                    {product.description ? (

                        <p className="mt-8 text-gray-600 leading-8 whitespace-pre-line">

                            {product.description}

                        </p>

                    ) : (

                        <p className="mt-8 text-gray-400">
                            No description available.
                        </p>

                    )}

                </div>

            </section>


            {/* ==========================================
                RELATED PRODUCTS
            ========================================== */}

            <section className="py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-10">
                        Related Products
                    </h2>


                    {relatedProducts.length > 0 ? (

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                            {relatedProducts.map(
                                (item) => {

                                    const image =
                                        item.primary_image
                                            ? `${API_URL}/uploads/${item.primary_image}`
                                            : item.images?.length
                                                ? `${API_URL}/uploads/${item.images[0]}`
                                                : null;


                                    return (

                                        <div
                                            key={
                                                item._id
                                            }
                                            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
                                        >


                                            {/* IMAGE */}

                                            <Link
                                                to={`/product/${item._id}`}
                                            >

                                                {image ? (

                                                    <img
                                                        src={
                                                            image
                                                        }
                                                        alt={
                                                            item.product_name
                                                        }
                                                        className="h-72 w-full object-cover"
                                                    />

                                                ) : (

                                                    <div className="h-72 bg-gray-100 flex items-center justify-center">

                                                        <span className="text-gray-400">
                                                            No Image
                                                        </span>

                                                    </div>

                                                )}

                                            </Link>


                                            {/* CONTENT */}

                                            <div className="p-5">

                                                <p className="text-sm text-gray-500">
                                                    {item.categories}
                                                </p>


                                                <h3 className="font-semibold text-lg mt-2">

                                                    {item.product_name}

                                                </h3>


                                                <p className="text-amber-500 font-bold mt-3">

                                                    ₹
                                                    {Number(
                                                        item.discount_price ||
                                                        0
                                                    ).toLocaleString(
                                                        "en-IN"
                                                    )}

                                                </p>


                                                <Link
                                                    to={`/product/${item._id}`}
                                                    className="block text-center w-full mt-5 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                                                >
                                                    View Product
                                                </Link>

                                            </div>

                                        </div>

                                    );

                                }
                            )}

                        </div>

                    ) : (

                        <p className="text-gray-400">
                            No related products available.
                        </p>

                    )}

                </div>

            </section>


            <Footer />

        </>
    );
};

export default ProductSingle;