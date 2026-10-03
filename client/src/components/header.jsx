import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const closeMobileMenu = () => {
        setMobileMenu(false);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-wide"
                    >
                        Luxury<span className="text-amber-500">Shop</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

                        <li>
                            <Link
                                to="/"
                                className="hover:text-amber-500 transition"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/shop"
                                className="hover:text-amber-500 transition"
                            >
                                Shop
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="hover:text-amber-500 transition"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-amber-500 transition"
                            >
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/faq"
                                className="hover:text-amber-500 transition"
                            >
                                FAQ
                            </Link>
                        </li>

                    </ul>

                    {/* Search */}
                    <div className="hidden xl:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-72">

                        <input
                            type="text"
                            placeholder="Search products..."
                            className="bg-transparent w-full outline-none text-sm"
                        />

                        <button className="text-lg">
                            🔍
                        </button>

                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-5">

                        {/* Login */}
                        <Link
                            to="/login"
                            className="hidden md:block hover:text-amber-500 text-xl"
                        >
                            👤
                        </Link>

                        {/* Wishlist */}
                        <Link
                            to="/wishlist"
                            className="hidden md:block hover:text-red-500 text-xl"
                        >
                            ❤️
                        </Link>

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="relative text-xl hover:text-amber-500"
                        >
                            🛒

                            <span className="absolute -top-2 -right-3 bg-amber-500 text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                3
                            </span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="lg:hidden text-3xl"
                        >
                            ☰
                        </button>

                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenu && (
                <div className="lg:hidden border-t bg-white">

                    <div className="px-6 py-5 space-y-5">

                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            className="block hover:text-amber-500"
                        >
                            Home
                        </Link>

                        <Link
                            to="/shop"
                            onClick={closeMobileMenu}
                            className="block hover:text-amber-500"
                        >
                            Shop
                        </Link>

                        <Link
                            to="/about"
                            onClick={closeMobileMenu}
                            className="block hover:text-amber-500"
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            onClick={closeMobileMenu}
                            className="block hover:text-amber-500"
                        >
                            Contact
                        </Link>

                        <Link
                            to="/faq"
                            onClick={closeMobileMenu}
                            className="block hover:text-amber-500"
                        >
                            FAQ
                        </Link>

                        <hr />

                        <Link
                            to="/login"
                            onClick={closeMobileMenu}
                            className="block"
                        >
                            👤 Login
                        </Link>

                        <Link
                            to="/register"
                            onClick={closeMobileMenu}
                            className="block"
                        >
                            📝 Register
                        </Link>

                        <Link
                            to="/cart"
                            onClick={closeMobileMenu}
                            className="block"
                        >
                            🛒 Cart
                        </Link>

                    </div>
                </div>
            )}

        </nav>
    );
};

export default Header;

