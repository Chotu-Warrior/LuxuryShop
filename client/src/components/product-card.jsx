<!-- =========================================
LuxuryShop - Reusable Product Card Component
========================================= -->

<div class="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">

    <!-- Product Image -->

    <div class="relative overflow-hidden bg-gray-100">

        <img src="https://picsum.photos/600/700?random=10" alt="Product"
            class="w-full h-80 object-cover group-hover:scale-110 transition duration-500">

        <!-- Badge -->

        <span class="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold px-4 py-2 rounded-full">

            NEW

        </span>

        <!-- Wishlist -->

        <button
            class="absolute top-4 right-4 w-11 h-11 rounded-full bg-white shadow-lg hover:bg-red-500 hover:text-white transition">

            ❤

        </button>

        <!-- Quick Actions -->

        <div
            class="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 flex gap-3">

            <button class="bg-black text-white px-5 py-3 rounded-xl hover:bg-amber-500 hover:text-black transition">

                👁 View

            </button>

            <button class="bg-amber-500 text-black px-5 py-3 rounded-xl hover:bg-black hover:text-white transition">

                🛒 Cart

            </button>

        </div>

    </div>

    <!-- Content -->

    <div class="p-6">

        <!-- Category -->

        <span class="text-sm text-amber-500 font-medium">

            Men Fashion

        </span>

        <!-- Product Name -->

        <h3 class="text-xl font-bold mt-2 text-gray-800 group-hover:text-amber-500 transition">

            Premium Leather Jacket

        </h3>

        <!-- Rating -->

        <div class="flex items-center gap-2 mt-3">

            <div class="text-yellow-400 text-lg">

                ★★★★★

            </div>

            <span class="text-gray-500 text-sm">

                (124 Reviews)

            </span>

        </div>

        <!-- Price -->

        <div class="flex items-center gap-3 mt-4">

            <span class="text-2xl font-bold text-black">

                ₹4,999

            </span>

            <span class="text-gray-400 line-through">

                ₹6,999

            </span>

            <span class="text-green-600 font-semibold">

                30% OFF

            </span>

        </div>

        <!-- Colors -->

        <div class="flex items-center gap-2 mt-5">

            <span class="text-sm text-gray-500">

                Colors:

            </span>

            <span class="w-5 h-5 rounded-full bg-black border"></span>

            <span class="w-5 h-5 rounded-full bg-gray-500 border"></span>

            <span class="w-5 h-5 rounded-full bg-red-600 border"></span>

            <span class="w-5 h-5 rounded-full bg-blue-700 border"></span>

        </div>

        <!-- Sizes -->

        <div class="flex items-center gap-2 mt-5">

            <button class="w-10 h-10 rounded-lg border hover:bg-black hover:text-white transition">

                S

            </button>

            <button class="w-10 h-10 rounded-lg border bg-black text-white">

                M

            </button>

            <button class="w-10 h-10 rounded-lg border hover:bg-black hover:text-white transition">

                L

            </button>

            <button class="w-10 h-10 rounded-lg border hover:bg-black hover:text-white transition">

                XL

            </button>

        </div>

        <!-- Buttons -->

        <div class="grid grid-cols-2 gap-3 mt-6">

            <a href="product.html"
                class="text-center py-3 rounded-xl border border-black font-semibold hover:bg-black hover:text-white transition">

                View Details

            </a>

            <button class="bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl">

                Add To Cart

            </button>

        </div>

    </div>

</div>