<!-- =========================================
LuxuryShop - Reusable Modal Component
========================================= -->

<!-- Open Modal Button (Demo) -->
<button id="openModal" class="bg-black text-white px-6 py-3 rounded-xl hover:bg-amber-500 hover:text-black transition">
    Open Product Preview
</button>

<!-- Overlay -->
<div id="modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/70 backdrop-blur-sm p-4">

    <!-- Modal Box -->
    <div class="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-[fadeIn_.3s_ease]">

        <!-- Close -->
        <button id="closeModal"
            class="absolute top-5 right-5 w-11 h-11 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white text-xl transition">

            ✕

        </button>

        <!-- Content -->
        <div class="grid lg:grid-cols-2">

            <!-- Image -->
            <div class="bg-gray-100">

                <img src="https://picsum.photos/700/700?random=12" alt="Product" class="w-full h-full object-cover">

            </div>

            <!-- Details -->
            <div class="p-8 lg:p-10">

                <span class="inline-block bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">

                    Best Seller

                </span>

                <h2 class="text-3xl font-bold mt-5">

                    Premium Leather Jacket

                </h2>

                <div class="flex items-center gap-2 mt-4">

                    <span class="text-yellow-400 text-xl">

                        ★★★★★

                    </span>

                    <span class="text-gray-500">

                        (124 Reviews)

                    </span>

                </div>

                <div class="flex items-center gap-4 mt-6">

                    <span class="text-4xl font-bold">

                        ₹4,999

                    </span>

                    <span class="line-through text-gray-400 text-xl">

                        ₹6,999

                    </span>

                </div>

                <p class="text-gray-600 leading-8 mt-6">

                    Premium quality leather jacket with a modern luxury design,
                    crafted for comfort, durability, and everyday style.

                </p>

                <!-- Colors -->
                <div class="mt-8">

                    <h4 class="font-semibold mb-3">

                        Colors

                    </h4>

                    <div class="flex gap-3">

                        <span class="w-8 h-8 rounded-full bg-black border-2 cursor-pointer"></span>

                        <span class="w-8 h-8 rounded-full bg-red-600 border-2 cursor-pointer"></span>

                        <span class="w-8 h-8 rounded-full bg-blue-700 border-2 cursor-pointer"></span>

                        <span class="w-8 h-8 rounded-full bg-gray-500 border-2 cursor-pointer"></span>

                    </div>

                </div>

                <!-- Sizes -->
                <div class="mt-8">

                    <h4 class="font-semibold mb-3">

                        Size

                    </h4>

                    <div class="flex gap-3">

                        <button class="w-12 h-12 rounded-xl border hover:bg-black hover:text-white">
                            S
                        </button>

                        <button class="w-12 h-12 rounded-xl bg-black text-white">
                            M
                        </button>

                        <button class="w-12 h-12 rounded-xl border hover:bg-black hover:text-white">
                            L
                        </button>

                        <button class="w-12 h-12 rounded-xl border hover:bg-black hover:text-white">
                            XL
                        </button>

                    </div>

                </div>

                <!-- Quantity -->
                <div class="mt-8">

                    <h4 class="font-semibold mb-3">

                        Quantity

                    </h4>

                    <div class="flex items-center w-fit border rounded-xl overflow-hidden">

                        <button id="minusQty" class="px-5 py-3 text-xl hover:bg-gray-100">

                            −

                        </button>

                        <span id="qty" class="px-8 font-bold">

                            1

                        </span>

                        <button id="plusQty" class="px-5 py-3 text-xl hover:bg-gray-100">

                            +

                        </button>

                    </div>

                </div>

                <!-- Buttons -->
                <div class="grid sm:grid-cols-2 gap-4 mt-10">

                    <button class="bg-amber-500 hover:bg-amber-400 text-black font-semibold py-4 rounded-xl">

                        Add To Cart

                    </button>

                    <button class="bg-black hover:bg-gray-800 text-white font-semibold py-4 rounded-xl">

                        Buy Now

                    </button>

                </div>

            </div>

        </div>

    </div>

</div>

<!-- Script -->
<script>

    const modal = document.getElementById('modal');
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementById('closeModal');

    openModal.onclick = () => {

        modal.classList.remove('hidden');
        modal.classList.add('flex');

    };

    closeModal.onclick = () => {

        modal.classList.add('hidden');
        modal.classList.remove('flex');

    };

    modal.onclick = (e) => {

        if (e.target === modal) {

            modal.classList.add('hidden');
            modal.classList.remove('flex');

        }

    }

    let qty = 1;

    const qtyText = document.getElementById('qty');

    document.getElementById('plusQty').onclick = () => {

        qty++;
        qtyText.innerText = qty;

    }

    document.getElementById('minusQty').onclick = () => {

        if (qty > 1) {

            qty--;
            qtyText.innerText = qty;

        }

    }

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            modal.classList.add("hidden");
            modal.classList.remove("flex");

        }

    });

</script>