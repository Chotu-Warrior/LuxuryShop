// // Mobile Menu Script 
// console.log("Script loaded!");
// const mobileBtn = document.getElementById('mobileMenuBtn');
// const mobileMenu = document.getElementById('mobileMenu');

// mobileBtn.addEventListener('click', () => {

//     mobileMenu.classList.toggle('hidden');

// });

// Primary image ke liye:
function updatePrimaryImage(input) {
    const fileNameBox = document.getElementById("primaryFileName");

    if (input.files && input.files.length > 0) {
        fileNameBox.innerHTML = `
            <div class="flex items-center justify-between text-sm text-amber-600 font-medium">
                <span class="truncate">
                    ${input.files[0].name}
                </span>

                <button
                    type="button"
                    class="ml-2 text-red-500 hover:text-red-700 font-bold"
                    onclick="removePrimaryImage()">
                    &times;
                </button>
            </div>
        `;

        fileNameBox.classList.remove("hidden");
    } else {
        fileNameBox.innerHTML = "";
        fileNameBox.classList.add("hidden");
    }
}

function removePrimaryImage() {
    const input = document.querySelector(
        'input[name="primary_image"]'
    );

    input.value = "";

    const fileNameBox = document.getElementById("primaryFileName");

    fileNameBox.innerHTML = "";
    fileNameBox.classList.add("hidden");
}
// Gallery ke liye:
function updateGalleryFiles(input) {
    const fileNameList = document.getElementById(
        "galleryFileNameList"
    );

    if (input.files && input.files.length > 0) {

        fileNameList.innerHTML = Array.from(input.files)
            .map((file, index) => `
                <div class="flex items-center justify-between text-sm text-amber-600 font-medium">

                    <span class="truncate">
                        ${index + 1}. ${file.name}
                    </span>

                    <button
                        type="button"
                        class="ml-2 text-red-500 hover:text-red-700 font-bold"
                        onclick="removeGalleryFile(${index})">
                        &times;
                    </button>

                </div>
            `)
            .join("");

        fileNameList.classList.remove("hidden");

    } else {

        fileNameList.innerHTML = "";
        fileNameList.classList.add("hidden");

    }
}

function removeGalleryFile(index) {

    const input = document.querySelector(
        'input[name="images"]'
    );

    const dt = new DataTransfer();

    const files = Array.from(input.files);

    files.splice(index, 1);

    files.forEach(file => {
        dt.items.add(file);
    });

    input.files = dt.files;

    updateGalleryFiles(input);
}

// Product Main page
function changeImage(thumbnail, largeImageUrl) {
    const mainImage = document.getElementById("mainImage");
    if (mainImage) {
        mainImage.src = largeImageUrl;
    }

    document.querySelectorAll("#productGallery img").forEach(img => img.classList.remove("border-2", "border-amber-500"));
    thumbnail.classList.add("border-2", "border-amber-500");
}

// // Admin Active nav-bar
// document.addEventListener('DOMContentLoaded', () => {
//     const currentPath = window.location.pathname;

//     document.querySelectorAll('.nav-link').forEach(link => {
//         const linkPath = new URL(link.href, window.location.origin).pathname;

//         if (linkPath === currentPath) {
//             link.classList.add(
//                 'bg-amber-500',
//                 'text-black',
//                 'font-semibold'
//             );

//             link.classList.remove('text-white');
//         }
//     });
// });