
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "../components/header-login";
import FooterLogin from "../components/footer-login";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        console.log("Password reset successfully");

        // Yahan baad mein backend API connect kar sakte ho
    };

    return (
        <>
            {/* Header */}
            <HeaderLogin />

            {/* Reset Password */}
            <section className="py-24">
                <div className="max-w-lg mx-auto px-6">

                    <div className="bg-white rounded-3xl shadow-2xl p-10">

                        {/* Heading */}
                        <div className="text-center">

                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-4xl">
                                🔑
                            </div>

                            <h1 className="text-3xl font-bold mt-6">
                                Reset Password
                            </h1>

                            <p className="text-gray-500 mt-4 leading-7">
                                Create a new strong password for your LuxuryShop account.
                            </p>

                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 space-y-6"
                        >

                            {/* New Password */}
                            <div>
                                <label className="font-medium">
                                    New Password
                                </label>

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter new password"
                                    required
                                    className="w-full mt-2 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="font-medium">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm new password"
                                    required
                                    className="w-full mt-2 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Password Requirements */}
                            <div className="bg-gray-50 border rounded-xl p-4">

                                <h4 className="font-semibold mb-2">
                                    Password Requirements
                                </h4>

                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• Minimum 8 characters</li>
                                    <li>• At least one uppercase letter</li>
                                    <li>• At least one lowercase letter</li>
                                    <li>• At least one number</li>
                                    <li>• At least one special character</li>
                                </ul>

                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition"
                            >
                                Reset Password
                            </button>

                        </form>

                        {/* Back To Login */}
                        <div className="text-center mt-8">

                            <Link
                                to="/login"
                                className="text-amber-500 font-semibold hover:underline"
                            >
                                ← Back To Login
                            </Link>

                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <FooterLogin />
        </>
    );
};

export default ResetPassword;
``
