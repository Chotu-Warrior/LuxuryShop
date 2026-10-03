import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductSingle = ({ product, relatedProducts = [] }) => {
    const [mainImage, setMainImage] = useState(
        product?.primary_image
            ? `/uploads/${product.primary_image}`
            : product?.images?.length > 0
                ? `/uploads/${product.images[0]}`
                : null
    );

    const [quantity, setQuantity] = useState(1);

    // Reset state when navigating to a different product
    useEffect(() => {
        setMainImage(
            product?.primary_image
                ? `/uploads/${product.primary_image}`
                : product?.images?.length > 0
                    ? `/uploads/${product.images[0]}`
                    : null
        );
        setQuantity(1);
    }, [product?._id]);

    if (!product) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold">Product Not Found</h2>
            </div>
        );
    }

    const isAvailable =
        product.stock > 0 && product.status !== "Out of Stock";

    const galleryImages = [
        ...(product.primary_image ? [product.primary_image] : []),
        ...(product.images || []),
    ];

    const handleQuantity = (value) => {
        const qty = Number(value);

        if (qty >= 1 && qty <= product.stock) {
            setQuantity(qty);
        }
    };

    return (
        <>
            {/* BREADCRUMB */}
            <section className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl font-bold">Product Details</h1>

                    <p className="text-gray-300 mt-4">
                        Home / Shop / {product.product_name}
                    </p>
                </div>
            </section>

            {/* PRODUCT */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* LEFT - IMAGE */}
                        <div>
                            {mainImage ? (
                                <img
                                    src={mainImage}
                                    alt={product.product_name}
                                    className="rounded-2xl shadow-lg w-full h-[650px] object-cover"
                                />
                            ) : (
                                <div className="w-full h-[650px] bg-gray-100 rounded-2xl flex items-center justify-center">
                                    <span className="text-gray-400">
                                        No Image Available
                                    </span>
                                </div>
                            )}

                            {/* GALLERY */}
                            {galleryImages.length > 0 && (
                                <div className="flex gap-4 mt-5 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
                                    {galleryImages.map((image, index) => {
                                        const imageUrl = `/uploads/${image}`;

                                        return (
                                            <img
                                                key={`${image}-${index}`}
                                                src={imageUrl}
                                                alt={product.product_name}
                                                onClick={() => setMainImage(imageUrl)}
                                                className={`rounded-lg cursor-pointer flex-shrink-0 w-24 h-24 object-cover snap-start border-2 ${mainImage === imageUrl
                                                    ? "border-amber-500"
                                                    : "border-transparent"
                                                    }`}
                                            />
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* RIGHT - DETAILS */}
                        <div>

                            {/* BEST SELLER */}
                            {product.best_seller && (
                                <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm">
                                    Best Seller
                                </span>
                            )}

                            {/* NAME */}
                            <h2 className="text-5xl font-bold mt-5">
                                {product.product_name}
                            </h2>

                            {/* PRICE */}
                            <p className="text-4xl text-amber-500 font-bold mt-6">
                                ₹{product.discount_price}

                                {product.original_price &&
                                    product.original_price > product.discount_price && (
                                        <span className="text-2xl line-through text-gray-400 ml-2">
                                            ₹{product.original_price}
                                        </span>
                                    )}
                            </p>

                            {/* SUMMARY */}
                            {product.product_summary && (
                                <p className="text-gray-600 mt-8 leading-8">
                                    {product.product_summary}
                                </p>
                            )}

                            {/* SIZE */}
                            {product.size && (
                                <div className="mt-10">
                                    <h3 className="font-semibold mb-3">Size</h3>

                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            className="bg-black text-white px-5 py-2 rounded-lg"
                                        >
                                            {product.size}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* QUANTITY + BUTTONS */}
                            <div className="flex items-center gap-5 mt-10">
                                <input
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    max={product.stock}
                                    disabled={!isAvailable}
                                    onChange={(e) => handleQuantity(e.target.value)}
                                    className="w-24 border rounded-lg px-4 py-3"
                                />

                                {isAvailable ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                console.log("Add To Cart", {
                                                    productId: product._id,
                                                    quantity,
                                                })
                                            }
                                            className="bg-black text-white px-8 py-3 rounded-lg"
                                        >
                                            Add To Cart
                                        </button>

                                        <button
                                            onClick={() =>
                                                console.log("Buy Now", {
                                                    productId: product._id,
                                                    quantity,
                                                })
                                            }
                                            className="bg-amber-500 px-8 py-3 rounded-lg font-semibold"
                                        >
                                            Buy Now
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        disabled
                                        className="bg-gray-400 text-white px-8 py-3 rounded-lg cursor-not-allowed"
                                    >
                                        Out of Stock
                                    </button>
                                )}
                            </div>

                            {/* PRODUCT INFORMATION */}
                            <div className="mt-8 space-y-3">
                                <p>
                                    <strong>Category :</strong>{" "}
                                    {product.categories}
                                </p>

                                <p>
                                    <strong>Availability :</strong>{" "}
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
                                    <strong>Stock :</strong> {product.stock}
                                </p>

                                <p>
                                    <strong>Status :</strong> {product.status}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DESCRIPTION */}
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

            {/* RELATED PRODUCTS */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-10">
                        Related Products
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.length > 0 ? (
                            relatedProducts.map((item) => (
                                <div
                                    key={item._id}
                                    className="bg-white rounded-xl overflow-hidden shadow"
                                >
                                    {item.primary_image ? (
                                        <img
                                            src={`/uploads/${item.primary_image}`}
                                            alt={item.product_name}
                                            className="h-72 w-full object-cover"
                                        />
                                    ) : (
                                        <div className="h-72 bg-gray-100 flex items-center justify-center">
                                            <span className="text-gray-400">
                                                No Image
                                            </span>
                                        </div>
                                    )}

                                    <div className="p-5">
                                        <h3 className="font-semibold">
                                            {item.product_name}
                                        </h3>

                                        <p className="text-amber-500 font-bold mt-3">
                                            ₹{item.discount_price}
                                        </p>

                                        <Link
                                            to={`/product/${item._id}`}
                                            className="block text-center w-full mt-5 bg-black text-white py-3 rounded-lg"
                                        >
                                            View Product
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400">
                                No related products available.
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductSingle;