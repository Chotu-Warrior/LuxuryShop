import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const About = () => {
    return (
        <>
            <Header />
            <section className="bg-gradient-to-r from-black to-gray-900 text-white py-24">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl lg:text-6xl font-bold">

                        About LuxuryShop

                    </h1>

                    <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">

                        LuxuryShop is link premium online fashion destination offering carefully selected clothing, footwear,
                        accessories, and lifestyle products with link modern shopping experience.

                    </p>

                </div>

            </section>

            {/* <!-- About --> */}

            <section className="py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        <div>

                            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
                                className="rounded-3xl shadow-xl w-full" />

                        </div>

                        <div>

                            <span className="uppercase tracking-widest text-amber-500 font-semibold">

                                Who We Are

                            </span>

                            <h2 className="text-5xl font-bold mt-5">

                                Modern Fashion
                                For Everyone

                            </h2>

                            <p className="text-gray-600 leading-8 mt-8">

                                LuxuryShop was created with one mission — to provide premium quality fashion at affordable
                                prices while delivering an exceptional online shopping experience.

                            </p>

                            <p className="text-gray-600 leading-8 mt-6">

                                Our collections are inspired by global fashion trends and designed for people who value quality,
                                comfort, and elegance.

                            </p>

                            <div className="grid grid-cols-2 gap-6 mt-10">

                                <div>

                                    <h3 className="text-4xl font-bold text-amber-500">

                                        50K+

                                    </h3>

                                    <p className="text-gray-600 mt-2">

                                        Happy Customers

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-4xl font-bold text-amber-500">

                                        5K+

                                    </h3>

                                    <p className="text-gray-600 mt-2">

                                        Premium Products

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* <!-- Features --> */}

            <section className="bg-white py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center">

                        <h2 className="text-5xl font-bold">

                            Why Choose Us

                        </h2>

                        <p className="text-gray-500 mt-5">

                            Premium Shopping Experience

                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                        <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">

                            <div className="text-5xl">

                                🚚

                            </div>

                            <h3 className="font-bold text-xl mt-6">

                                Free Shipping

                            </h3>

                            <p className="text-gray-500 mt-4">

                                Fast delivery across India.

                            </p>

                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">

                            <div className="text-5xl">

                                🔒

                            </div>

                            <h3 className="font-bold text-xl mt-6">

                                Secure Payment

                            </h3>

                            <p className="text-gray-500 mt-4">

                                100% Safe payment methods.

                            </p>

                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">

                            <div className="text-5xl">

                                ⭐

                            </div>

                            <h3 className="font-bold text-xl mt-6">

                                Premium Quality

                            </h3>

                            <p className="text-gray-500 mt-4">

                                Carefully selected products.

                            </p>

                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">

                            <div className="text-5xl">

                                💬

                            </div>

                            <h3 className="font-bold text-xl mt-6">

                                24/7 Support

                            </h3>

                            <p className="text-gray-500 mt-4">

                                Always ready to help you.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* <!-- Team --> */}

            <section className="py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center">

                        <h2 className="text-5xl font-bold">

                            Meet Our Team

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                        <div className="bg-white rounded-2xl shadow overflow-hidden">

                            <img src="https://i.pravatar.cc/400?img=11" className="w-full h-80 object-cover" />

                            <div className="p-6 text-center">

                                <h3 className="font-bold text-xl">

                                    John Smith

                                </h3>

                                <p className="text-amber-500 mt-2">

                                    Founder

                                </p>

                            </div>

                        </div>

                        <div className="bg-white rounded-2xl shadow overflow-hidden">

                            <img src="https://i.pravatar.cc/400?img=32" className="w-full h-80 object-cover" />

                            <div className="p-6 text-center">

                                <h3 className="font-bold text-xl">

                                    Emily Watson

                                </h3>

                                <p className="text-amber-500 mt-2">

                                    Creative Director

                                </p>

                            </div>

                        </div>

                        <div className="bg-white rounded-2xl shadow overflow-hidden">

                            <img src="https://i.pravatar.cc/400?img=15" className="w-full h-80 object-cover" />

                            <div className="p-6 text-center">

                                <h3 className="font-bold text-xl">

                                    David Lee

                                </h3>

                                <p className="text-amber-500 mt-2">

                                    Marketing

                                </p>

                            </div>

                        </div>

                        <div className="bg-white rounded-2xl shadow overflow-hidden">

                            <img src="https://i.pravatar.cc/400?img=25" className="w-full h-80 object-cover" />

                            <div className="p-6 text-center">

                                <h3 className="font-bold text-xl">

                                    Sophia Brown

                                </h3>

                                <p className="text-amber-500 mt-2">

                                    Support Lead

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* <!-- CTA --> */}

            <section className="bg-black text-white py-20">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h2 className="text-5xl font-bold">

                        Start Shopping Today

                    </h2>

                    <p className="text-gray-300 mt-6">

                        Explore thousands of premium products and enjoy an exceptional shopping experience.

                    </p>

                    <link to="/shop"
                        className="inline-block mt-10 bg-amber-500 text-black px-10 py-4 rounded-xl font-bold hover:bg-amber-400">

                        Explore Collection

                    </link>

                </div>

            </section>

            <Footer />
        </>
    );
};

export default About;

