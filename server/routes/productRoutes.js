import express from "express";
import Product from "../models/luxuryshopSchema.js";
import upload from "../config/multer.js";

const router = express.Router();


// ===============================
// GET ALL PRODUCTS
// ===============================
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});


// ===============================
// GET SINGLE PRODUCT
// ===============================
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
    });
  }
});

// ===============================
// ADD PRODUCT
// ===============================
router.post(
    "/products",
    upload.fields([
        {
            name: "primary_image",
            maxCount: 1,
        },
        {
            name: "images",
            maxCount: 10,
        },
    ]),
    async (req, res) => {
        try {
            console.log("========== ADD PRODUCT ==========");
            console.log("BODY:", req.body);
            console.log("FILES:", req.files);

            const primaryImage =
                req.files?.primary_image?.[0]?.filename || "";

            const galleryImages =
                req.files?.images?.map((file) => file.filename) || [];

            const product = new Product({
                product_name: req.body.product_name,
                categories: req.body.categories,

                original_price: Number(req.body.original_price),

                discount_price: Number(
                    req.body.discount_price || 0
                ),

                stock: Number(req.body.stock),

                status: req.body.status || "Active",

                best_seller:
                    req.body.best_seller === "true",

                size: req.body.size || "S",

                primary_image: primaryImage,

                images: galleryImages,

                product_summary:
                    req.body.product_summary || "",

                description:
                    req.body.description || "",
            });

            const savedProduct = await product.save();

            console.log("PRODUCT SAVED:", savedProduct);

            return res.status(201).json({
                success: true,
                message: "Product added successfully",
                product: savedProduct,
            });

        } catch (error) {
            console.error("========== ADD PRODUCT ERROR ==========");
            console.error(error);
            console.error("MESSAGE:", error.message);
            console.error("======================================");

            return res.status(500).json({
                success: false,
                message: "Failed to add product",
                error: error.message,
            });
        }
    }
);




// ===============================
// UPDATE PRODUCT
// ===============================
router.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
});


// ===============================
// DELETE PRODUCT
// ===============================
router.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message,
    });
  }
});


export default router;