import React, { useState } from "react";
import AdminHeader from "../components/admin-header";

const Settings = () => {
    // Store Information
    const [storeName, setStoreName] = useState("LuxuryShop");
    const [storeEmail, setStoreEmail] = useState("support@luxuryshop.com");
    const [phone, setPhone] = useState("+91 9876543210");
    const [website, setWebsite] = useState("www.luxuryshop.com");
    const [address, setAddress] = useState(
        "MG Road, Indore, Madhya Pradesh, India"
    );

    // General Settings
    const [notifications, setNotifications] = useState(true);
    const [userRegistration, setUserRegistration] = useState(true);
    const [emailVerification, setEmailVerification] = useState(true);
    const [maintenanceMode, setMaintenanceMode] = useState(false);

    // Payment Settings
    const [cashOnDelivery, setCashOnDelivery] = useState(true);
    const [upiPayments, setUpiPayments] = useState(true);
    const [cardPayments, setCardPayments] = useState(true);
    const [netBanking, setNetBanking] = useState(true);

    // Admin Profile
    const [adminName, setAdminName] = useState("Administrator");
    const [adminEmail, setAdminEmail] = useState("admin@luxuryshop.com");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword && newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const settingsData = {
            store: {
                name: storeName,
                email: storeEmail,
                phone,
                website,
                address,
            },

            general: {
                notifications,
                userRegistration,
                emailVerification,
                maintenanceMode,
            },

            payment: {
                cashOnDelivery,
                upiPayments,
                cardPayments,
                netBanking,
            },

            admin: {
                name: adminName,
                email: adminEmail,
            },
        };

        console.log("Settings:", settingsData);

        alert("Settings updated successfully!");
    };

    return (
        <AdminHeader
            title="Settings"
            subtitle="Manage your store settings"
        >
            <main className="p-8 space-y-8">

                <form onSubmit={handleSubmit}>

                    {/* ================= STORE INFORMATION ================= */}
                    <div className="bg-white rounded-2xl shadow p-8">

                        <h3 className="text-2xl font-bold mb-6">
                            Store Information
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <label className="block mb-2 font-medium">
                                    Store Name
                                </label>

                                <input
                                    type="text"
                                    value={storeName}
                                    onChange={(e) =>
                                        setStoreName(e.target.value)
                                    }
                                    className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Store Email
                                </label>

                                <input
                                    type="email"
                                    value={storeEmail}
                                    onChange={(e) =>
                                        setStoreEmail(e.target.value)
                                    }
                                    className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                    className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Website
                                </label>

                                <input
                                    type="text"
                                    value={website}
                                    onChange={(e) =>
                                        setWebsite(e.target.value)
                                    }
                                    className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                        </div>
                    </div>

                    {/* ================= ADDRESS ================= */}
                    <div className="bg-white rounded-2xl shadow p-8 mt-8">

                        <h3 className="text-2xl font-bold mb-6">
                            Store Address
                        </h3>

                        <textarea
                            rows="5"
                            value={address}
                            onChange={(e) =>
                                setAddress(e.target.value)
                            }
                            className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                        />

                    </div>

                    {/* ================= PREFERENCES ================= */}
                    <div className="grid lg:grid-cols-2 gap-8 mt-8">

                        {/* General Settings */}
                        <div className="bg-white rounded-2xl shadow p-8">

                            <h3 className="text-2xl font-bold mb-6">
                                General Settings
                            </h3>

                            <div className="space-y-6">

                                <label className="flex justify-between items-center cursor-pointer">
                                    <span>
                                        Enable Notifications
                                    </span>

                                    <input
                                        type="checkbox"
                                        checked={notifications}
                                        onChange={(e) =>
                                            setNotifications(
                                                e.target.checked
                                            )
                                        }
                                        className="w-5 h-5"
                                    />
                                </label>

                                <label className="flex justify-between items-center cursor-pointer">
                                    <span>
                                        Allow User Registration
                                    </span>

                                    <input
                                        type="checkbox"
                                        checked={userRegistration}
                                        onChange={(e) =>
                                            setUserRegistration(
                                                e.target.checked
                                            )
                                        }
                                        className="w-5 h-5"
                                    />
                                </label>

                                <label className="flex justify-between items-center cursor-pointer">
                                    <span>
                                        Email Verification
                                    </span>

                                    <input
                                        type="checkbox"
                                        checked={emailVerification}
                                        onChange={(e) =>
                                            setEmailVerification(
                                                e.target.checked
                                            )
                                        }
                                        className="w-5 h-5"
                                    />
                                </label>

                                <label className="flex justify-between items-center cursor-pointer">
                                    <span>
                                        Maintenance Mode
                                    </span>

                                    <input
                                        type="checkbox"
                                        checked={maintenanceMode}
                                        onChange={(e) =>
                                            setMaintenanceMode(
                                                e.target.checked
                                            )
                                        }
                                        className="w-5 h-5"
                                    />
                                </label>

                            </div>
                        </div>

                        {/* Payment Settings */}
                        <div className="bg-white rounded-2xl shadow p-8">

                            <h3 className="text-2xl font-bold mb-6">
                                Payment Settings
                            </h3>

                            <div className="space-y-6">

                                <label className="flex justify-between items-center cursor-pointer">
                                    <span>
                                        Cash On Delivery
                                    </span>

                                    <input
                                        type="checkbox"
                                        checked={cashOnDelivery}
                                        onChange={(e) =>
                                            setCashOnDelivery(
                                                e.target.checked
                                            )
                                        }
                                        className="w-5 h-5"
                                    />
                                </label>

                                <label className="flex justify-between items-center cursor-pointer">
                                    <span>
                                        UPI Payments
                                    </span>

                                    <input
                                        type="checkbox"
                                        checked={upiPayments}
                                        onChange={(e) =>
                                            setUpiPayments(
                                                e.target.checked
                                            )
                                        }
                                        className="w-5 h-5"
                                    />
                                </label>

                                <label className="flex justify-between items-center cursor-pointer">
                                    <span>
                                        Credit / Debit Card
                                    </span>

                                    <input
                                        type="checkbox"
                                        checked={cardPayments}
                                        onChange={(e) =>
                                            setCardPayments(
                                                e.target.checked
                                            )
                                        }
                                        className="w-5 h-5"
                                    />
                                </label>

                                <label className="flex justify-between items-center cursor-pointer">
                                    <span>
                                        Net Banking
                                    </span>

                                    <input
                                        type="checkbox"
                                        checked={netBanking}
                                        onChange={(e) =>
                                            setNetBanking(
                                                e.target.checked
                                            )
                                        }
                                        className="w-5 h-5"
                                    />
                                </label>

                            </div>
                        </div>

                    </div>

                    {/* ================= ADMIN PROFILE ================= */}
                    <div className="bg-white rounded-2xl shadow p-8 mt-8">

                        <h3 className="text-2xl font-bold mb-6">
                            Admin Profile
                        </h3>

                        <div className="flex flex-col md:flex-row gap-8 items-center">

                            <img
                                src="https://i.pravatar.cc/150?img=12"
                                alt="Administrator"
                                className="w-32 h-32 rounded-full"
                            />

                            <div className="flex-1 grid md:grid-cols-2 gap-6 w-full">

                                <input
                                    type="text"
                                    placeholder="Admin Name"
                                    value={adminName}
                                    onChange={(e) =>
                                        setAdminName(e.target.value)
                                    }
                                    className="border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={adminEmail}
                                    onChange={(e) =>
                                        setAdminEmail(e.target.value)
                                    }
                                    className="border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                />

                                <input
                                    type="password"
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                    className="border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                />

                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                                />

                            </div>
                        </div>

                    </div>

                    {/* ================= SYSTEM INFO ================= */}
                    <div className="bg-white rounded-2xl shadow p-8 mt-8">

                        <h3 className="text-2xl font-bold mb-6">
                            System Information
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                            <div className="bg-gray-50 rounded-xl p-5">
                                <p className="text-gray-500">
                                    Version
                                </p>

                                <h4 className="font-bold text-xl mt-2">
                                    v1.0.0
                                </h4>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-5">
                                <p className="text-gray-500">
                                    Runtime
                                </p>

                                <h4 className="font-bold text-xl mt-2">
                                    Node.js
                                </h4>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-5">
                                <p className="text-gray-500">
                                    Database
                                </p>

                                <h4 className="font-bold text-xl mt-2">
                                    MongoDB
                                </h4>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-5">
                                <p className="text-gray-500">
                                    Server
                                </p>

                                <h4 className="font-bold text-xl mt-2">
                                    Express
                                </h4>
                            </div>

                        </div>

                    </div>

                    {/* ================= SAVE ================= */}
                    <div className="flex justify-end mt-8">

                        <button
                            type="submit"
                            className="bg-amber-500 hover:bg-amber-400 px-8 py-4 rounded-xl font-semibold transition"
                        >
                            Update Settings
                        </button>

                    </div>

                </form>

            </main>
        </AdminHeader>
    );
};

export default Settings;