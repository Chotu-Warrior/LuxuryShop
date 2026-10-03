<!-- =========================================
LuxuryShop - Reusable Toast Notification
Tailwind CSS + Vanilla JavaScript
========================================= -->

<!-- Toast Container -->
<div id="toastContainer" class="fixed top-5 right-5 z-[9999] space-y-4 w-96 max-w-[95%]">

</div>

<!-- Demo Buttons -->

<div class="flex flex-wrap gap-4">

    <button onclick="showToast('success','Product added successfully.')"
        class="px-5 py-3 rounded-xl bg-green-600 text-white">

        Success Toast

    </button>

    <button onclick="showToast('error','Something went wrong.')" class="px-5 py-3 rounded-xl bg-red-600 text-white">

        Error Toast

    </button>

    <button onclick="showToast('warning','Stock is running low.')"
        class="px-5 py-3 rounded-xl bg-yellow-500 text-black">

        Warning Toast

    </button>

    <button onclick="showToast('info','Welcome to LuxuryShop.')" class="px-5 py-3 rounded-xl bg-blue-600 text-white">

        Info Toast

    </button>

</div>

<script>

    function showToast(type, message) {

        const container = document.getElementById("toastContainer");

        const config = {

            success: {
                bg: "bg-green-600",
                icon: "✅"
            },

            error: {
                bg: "bg-red-600",
                icon: "❌"
            },

            warning: {
                bg: "bg-yellow-500",
                icon: "⚠️",
                text: "text-black"
            },

            info: {
                bg: "bg-blue-600",
                icon: "ℹ️"
            }

        };

        const toast = document.createElement("div");

        toast.className = `${config[type].bg} ${config[type].text || "text-white"} rounded-2xl shadow-2xl p-5 flex items-start justify-between gap-4 translate-x-20 opacity-0 transition-all duration-300`;

        toast.innerHTML = `

<div class="flex gap-4">

<div class="text-2xl">

${config[type].icon}

</div>

<div>

<h4 class="font-bold capitalize">

${type}

</h4>

<p class="text-sm mt-1">

${message}

</p>

</div>

</div>

<button class="text-xl closeToast">

✕

</button>

`;

        container.appendChild(toast);

        setTimeout(() => {

            toast.classList.remove("translate-x-20", "opacity-0");

        }, 50);

        toast.querySelector(".closeToast").onclick = () => {

            removeToast(toast);

        }

        setTimeout(() => {

            removeToast(toast);

        }, 4000);

    }

    function removeToast(toast) {

        toast.classList.add("translate-x-20", "opacity-0");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }

</script>