import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Reset email:", email);

        // Yahan baad me backend API connect kar sakte ho.
        alert("Password reset link has been sent!");
    };

    return (
        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 min-h-screen flex items-center justify-center p-6">

            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10">

                {/* Header */}
                <div className="text-center">

                    <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto text-4xl">
                        🔒
                    </div>

                    <h1 className="text-3xl font-bold mt-6">
                        Forgot Password?
                    </h1>

                    <p className="text-gray-500 mt-4 leading-7">
                        Enter your registered email address and we'll send you
                        a password reset link.
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                >

                    <div>
                        <label className="font-medium block">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@luxuryshop.com"
                            className="w-full mt-2 border rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition"
                    >
                        Send Reset Link
                    </button>

                </form>

                {/* Back To Login */}
                <div className="text-center mt-8">

                    <Link
                        to="/admin/login"
                        className="text-amber-500 font-semibold hover:underline"
                    >
                        ← Back To Login
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default AdminForgotPassword;