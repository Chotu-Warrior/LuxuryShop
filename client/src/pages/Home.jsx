import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = ({ products = [] }) => {
    return (
        <>
            {/* ================= HERO ================= */}
            <Header />

            <section className="bg-gradient-to-r from-gray-900 to-black text-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-2 items-center gap-16">

                        <div>
                            <span className="bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                                NEW COLLECTION
                            </span>

                            <h1 className="text-6xl font-bold leading-tight mt-8">
                                Luxury Fashion
                                <br />
                                For Modern
                                <br />
                                Lifestyle
                            </h1>

                            <p className="text-gray-300 mt-8 text-lg">
                                Discover premium clothing, watches, shoes and accessories
                                with modern luxury design.
                            </p>

                            <div className="flex gap-5 mt-10">
                                <Link
                                    to="/shop"
                                    className="bg-amber-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-amber-400"
                                >
                                    Shop Now
                                </Link>

                                <Link
                                    to="/shop"
                                    className="border border-white px-8 py-4 rounded-lg"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>

                        <div>
                            <img
                                className="rounded-3xl shadow-2xl w-full"
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900"
                                alt="Luxury Fashion"
                            />
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= CATEGORIES ================= */}

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">
                        Shop Categories
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

                        <Link
                            to="/shop?category=Men"
                            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition"
                        >
                            <div className="text-5xl">👕</div>

                            <h3 className="text-xl font-semibold mt-5">
                                Men Fashion
                            </h3>
                        </Link>

                        <Link
                            to="/shop?category=Women"
                            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition"
                        >
                            <div className="text-5xl">👗</div>

                            <h3 className="text-xl font-semibold mt-5">
                                Women
                            </h3>
                        </Link>

                        <Link
                            to="/shop?category=Shoes"
                            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition"
                        >
                            <div className="text-5xl">👟</div>

                            <h3 className="text-xl font-semibold mt-5">
                                Shoes
                            </h3>
                        </Link>

                        <Link
                            to="/shop?category=Watches"
                            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition"
                        >
                            <div className="text-5xl">⌚</div>

                            <h3 className="text-xl font-semibold mt-5">
                                Watches
                            </h3>
                        </Link>

                    </div>
                </div>
            </section>


            {/* ================= FEATURED PRODUCTS ================= */}

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">
                        Featured Products
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

                        {products.length > 0 ? (

                            products
                                .filter((product) => product.best_seller)
                                .slice(0, 4)
                                .map((product) => (

                                    <div
                                        key={product._id}
                                        className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
                                    >

                                        {/* IMAGE */}

                                        {product.primary_image ? (
                                            <img
                                                src={`/uploads/${product.primary_image}`}
                                                alt={product.product_name}
                                                className="h-72 w-full object-cover"
                                            />
                                        ) : (
                                            <div className="h-72 w-full bg-gray-100 flex items-center justify-center">
                                                <span className="text-gray-400">
                                                    No Image
                                                </span>
                                            </div>
                                        )}

                                        {/* DETAILS */}

                                        <div className="p-6">

                                            <h3 className="font-semibold text-xl">
                                                {product.product_name}
                                            </h3>

                                            <p className="text-amber-500 font-bold mt-2">
                                                ₹{product.discount_price}
                                            </p>

                                            <Link
                                                to={`/product/${product._id}`}
                                                className="block text-center w-full mt-5 bg-black text-white py-3 rounded-lg"
                                            >
                                                View Product
                                            </Link>

                                        </div>

                                    </div>

                                ))

                        ) : (

                            <div className="col-span-full text-center text-gray-400 py-10">
                                No featured products available.
                            </div>

                        )}

                    </div>

                </div>
            </section>


            {/* ================= OFFER ================= */}

            <section className="bg-black text-white py-24">

                <div className="max-w-6xl mx-auto text-center px-6">

                    <h2 className="text-5xl font-bold">
                        Summer Sale 50% OFF
                    </h2>

                    <p className="mt-6 text-gray-300">
                        Grab exclusive offers before they're gone.
                    </p>

                    <Link
                        to="/shop"
                        className="inline-block mt-8 bg-amber-500 px-8 py-4 rounded-lg text-black font-bold"
                    >
                        Shop Sale
                    </Link>

                </div>

            </section>
            <Footer />
        </>
    );
};

export default Home;
