import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Temporary demo login
        if (
            email === "admin@luxuryshop.com" &&
            password === "admin123"
        ) {
            console.log("Remember Me:", rememberMe);
            navigate("/admin/dashboard");
        } else {
            alert("Invalid email or password!");
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 min-h-screen">

            <section className="min-h-screen flex items-center justify-center p-6">

                <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

                    {/* Left Section */}
                    <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-16">

                        <span className="uppercase tracking-[6px] text-amber-400 font-semibold">
                            LuxuryShop Admin
                        </span>

                        <h1 className="text-5xl font-bold mt-6 leading-tight">
                            Manage Your
                            <br />
                            Store Easily
                        </h1>

                        <p className="mt-8 text-gray-300 leading-8">
                            Welcome to the LuxuryShop Administration Panel.
                            Manage products, customers, orders, categories,
                            analytics and settings from one powerful dashboard.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mt-12">

                            <div className="bg-white/10 rounded-xl p-6">
                                <h2 className="text-3xl font-bold text-amber-400">
                                    5000+
                                </h2>
                                <p className="mt-2 text-gray-300">
                                    Products
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-xl p-6">
                                <h2 className="text-3xl font-bold text-amber-400">
                                    50K+
                                </h2>
                                <p className="mt-2 text-gray-300">
                                    Customers
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-xl p-6">
                                <h2 className="text-3xl font-bold text-amber-400">
                                    12K+
                                </h2>
                                <p className="mt-2 text-gray-300">
                                    Orders
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-xl p-6">
                                <h2 className="text-3xl font-bold text-amber-400">
                                    99%
                                </h2>
                                <p className="mt-2 text-gray-300">
                                    Success Rate
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Login Section */}
                    <div className="p-10 lg:p-16">

                        {/* Login Header */}
                        <div className="text-center">

                            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto text-4xl">
                                🛡️
                            </div>

                            <h2 className="text-4xl font-bold mt-6">
                                Admin Login
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Login to your dashboard
                            </p>

                        </div>

                        {/* Login Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 mt-10"
                        >

                            {/* Email */}
                            <div>
                                <label className="font-medium block">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="admin@luxuryshop.com"
                                    className="w-full mt-2 border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="font-medium block">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter Password"
                                    className="w-full mt-2 border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none"
                                    required
                                />
                            </div>

                            {/* Remember + Forgot */}
                            <div className="flex justify-between items-center">

                                <label className="flex items-center gap-2 text-sm cursor-pointer">

                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) =>
                                            setRememberMe(e.target.checked)
                                        }
                                        className="w-4 h-4"
                                    />

                                    Remember Me

                                </label>

                                <Link
                                    to="/admin/forgot-password"
                                    className="text-amber-500 text-sm hover:underline"
                                >
                                    Forgot Password?
                                </Link>

                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition"
                            >
                                Login
                            </button>

                        </form>

                        {/* OR */}
                        <div className="relative my-10">

                            <hr />

                            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-gray-400">
                                OR
                            </span>

                        </div>

                        {/* Google Login */}
                        <button
                            type="button"
                            className="w-full border py-4 rounded-xl hover:bg-gray-100 transition"
                        >
                            Login with Google
                        </button>

                        {/* Demo Credentials */}
                        <div className="mt-10 bg-gray-50 rounded-xl p-6">

                            <h3 className="font-semibold">
                                Demo Credentials
                            </h3>

                            <div className="mt-4 space-y-2 text-gray-600">
                                <p>
                                    Email : admin@luxuryshop.com
                                </p>

                                <p>
                                    Password : admin123
                                </p>
                            </div>

                        </div>

                        {/* Back To Website */}
                        <div className="text-center mt-8">

                            <Link
                                to="/"
                                className="text-amber-500 font-semibold hover:underline"
                            >
                                ← Back To Website
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default AdminLogin;