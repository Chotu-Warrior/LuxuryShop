
import express from "express";
import cors from "cors";
import path from "path";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();

// =====================================
// DATABASE
// =====================================

connectDB();

// =====================================
// CORS
// =====================================

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

// =====================================
// BODY PARSER
// =====================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =====================================
// UPLOADS
// =====================================

app.use(
    "/uploads",
    express.static(
        path.join(
            process.cwd(),
            "public",
            "uploads"
        )
    )
);

// =====================================
// API ROUTES
// =====================================

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

// =====================================
// SERVER
// =====================================

const PORT = 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on http://localhost:${PORT}`
    );
});
