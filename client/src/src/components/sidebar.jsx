<!-- =========================================
LuxuryShop - Reusable Sidebar Component
========================================= -->

<!-- Mobile Overlay -->
<div id="sidebarOverlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 hidden lg:hidden">
</div>

<!-- Sidebar -->
<aside id="sidebar"
    class="fixed lg:sticky top-0 left-0 h-screen w-72 bg-black text-white z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 overflow-y-auto">

    <!-- Logo -->
    <div class="flex items-center justify-between p-6 border-b border-gray-800">

        <a href="../index.html" class="text-3xl font-bold">

            Luxury<span class="text-amber-500">Shop</span>

        </a>

        <!-- Close -->
        <button id="closeSidebar" class="lg:hidden text-3xl">

            ✕

        </button>

    </div>

    <!-- User -->
    <div class="p-6 border-b border-gray-800">

        <div class="flex items-center gap-4">

            <img src="https://i.pravatar.cc/100?img=12" class="w-14 h-14 rounded-full">

            <div>

                <h4 class="font-semibold">

                    Admin User

                </h4>

                <p class="text-sm text-gray-400">

                    Administrator

                </p>

            </div>

        </div>

    </div>

    <!-- Navigation -->
    <nav class="p-5 space-y-2">

        <a href="../admin/dashboard.html"
            class="flex items-center gap-4 px-5 py-4 rounded-xl bg-amber-500 text-black font-semibold">

            🏠 Dashboard

        </a>

        <a href="../admin/products.html"
            class="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-gray-800 transition">

            📦 Products

        </a>

        <a href="../admin/categories.html"
            class="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-gray-800 transition">

            📂 Categories

        </a>

        <a href="../admin/orders.html"
            class="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-gray-800 transition">

            🛒 Orders

        </a>

        <a href="../admin/customers.html"
            class="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-gray-800 transition">

            👥 Customers

        </a>

        <a href="../admin/settings.html"
            class="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-gray-800 transition">

            ⚙ Settings

        </a>

        <hr class="border-gray-700 my-4">

        <a href="../index.html" class="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-gray-800 transition">

            🌐 Visit Store

        </a>

        <a href="../login.html" class="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-red-600 transition">

            🚪 Logout

        </a>

    </nav>

    <!-- Footer -->
    <div class="absolute bottom-0 left-0 w-full p-6 border-t border-gray-800">

        <p class="text-sm text-center text-gray-500">

            © 2026 LuxuryShop Admin

        </p>

    </div>

</aside>

<!-- Mobile Menu Button -->
<button id="openSidebar" class="fixed top-5 left-5 lg:hidden bg-black text-white w-12 h-12 rounded-xl shadow-xl z-30">

    ☰

</button>

<!-- Script -->
<script>

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    document.getElementById("openSidebar").onclick = () => {

        sidebar.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");

    }

    document.getElementById("closeSidebar").onclick = () => {

        sidebar.classList.add("-translate-x-full");
        overlay.classList.add("hidden");

    }

    overlay.onclick = () => {

        sidebar.classList.add("-translate-x-full");
        overlay.classList.add("hidden");

    }

</script>