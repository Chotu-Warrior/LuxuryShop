<!-- =========================================
LuxuryShop - Reusable Pagination Component
========================================= -->

<nav class="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">

    <!-- Results Info -->

    <div class="text-gray-600 text-sm">

        Showing
        <span class="font-semibold text-black">1</span>
        to
        <span class="font-semibold text-black">12</span>
        of
        <span class="font-semibold text-black">240</span>
        Products

    </div>

    <!-- Pagination -->

    <ul class="flex items-center gap-2">

        <!-- Previous -->

        <li>

            <a href="#"
                class="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 hover:bg-black hover:text-white transition">

                ←

            </a>

        </li>

        <!-- Page 1 -->

        <li>

            <a href="#"
                class="w-11 h-11 flex items-center justify-center rounded-xl bg-amber-500 text-black font-semibold shadow">

                1

            </a>

        </li>

        <!-- Page 2 -->

        <li>

            <a href="#"
                class="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 hover:bg-black hover:text-white transition">

                2

            </a>

        </li>

        <!-- Page 3 -->

        <li>

            <a href="#"
                class="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 hover:bg-black hover:text-white transition">

                3

            </a>

        </li>

        <!-- Dots -->

        <li>

            <span class="px-2 text-gray-500">

                ...

            </span>

        </li>

        <!-- Last Page -->

        <li>

            <a href="#"
                class="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 hover:bg-black hover:text-white transition">

                20

            </a>

        </li>

        <!-- Next -->

        <li>

            <a href="#"
                class="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 hover:bg-black hover:text-white transition">

                →

            </a>

        </li>

    </ul>

</nav>

<!-- Optional Page Size -->

<div class="flex flex-col sm:flex-row items-center justify-between gap-5 mt-6">

    <div class="flex items-center gap-3">

        <span class="text-gray-600">

            Products per page

        </span>

        <div class="relative">
            <select class="appearance-none border rounded-xl px-4 py-3 pr-12 w-full outline-none focus:ring-2 focus:ring-amber-400">

                <option>12</option>
                <option>24</option>
                <option>36</option>
                <option>48</option>

            </select>

            <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
        </div>

    </div>

    <div class="text-sm text-gray-500">

        Page
        <span class="font-semibold text-black">1</span>
        of
        <span class="font-semibold text-black">20</span>

    </div>

</div>