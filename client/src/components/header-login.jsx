import React from "react";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
    return (
        <>
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="text-3xl font-bold">
                            Luxury<span className="text-amber-500">Shop</span>
                        </Link>
                        <nav className="hidden lg:flex gap-8 font-medium">
                            <Link to="/" className="hover:text-amber-500">Home</Link>
                            <Link to="/shop" className="hover:text-amber-500">Shop</Link>
                            <Link to="/login" className="hover:text-amber-500">Login</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};
export default HeaderLogin