
import multer from "multer";
import path from "path";
import fs from "fs";

// =====================================
// UPLOAD DIRECTORY
// =====================================

const uploadPath = path.join(
    process.cwd(),
    "public",
    "uploads"
);

// =====================================
// CREATE FOLDER IF NOT EXISTS
// =====================================

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, {
        recursive: true,
    });
}

// =====================================
// STORAGE
// =====================================

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
        const extension = path.extname(
            file.originalname
        );

        const filename =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9) +
            extension;

        cb(null, filename);
    },
});

// =====================================
// FILE FILTER
// =====================================

const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
        "image/gif",
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(
            new Error(
                "Only JPG, JPEG, PNG, WEBP and GIF images are allowed"
            )
        );
    }
};

// =====================================
// MULTER
// =====================================

const upload = multer({
    storage,

    fileFilter,

    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

export default upload;

