import React from "react";
import { Link } from "react-router-dom";

const FooterLogin = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-black text-gray-400 py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2026 LuxuryShop. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white">Privacy</Link>
                        <Link to="/terms" className="hover:text-white">Terms</Link>
                        <Link to="/support" className="hover:text-white">Support</Link>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default FooterLogin