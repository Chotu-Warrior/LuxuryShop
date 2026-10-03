import express from "express";
import Category from "../models/category.js";

const router = express.Router();

// GET all categories
router.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find({ status: "Active" })
            .sort({ name: 1 });

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch categories",
            error: error.message,
        });
    }
});

// CREATE category
router.post("/categories", async (req, res) => {
    try {
        const category = await Category.create({
            name: req.body.name,
            slug: req.body.slug,
            parentCategory: req.body.parentCategory || "None",
            description: req.body.description || "",
            status: req.body.status || "Active",
        });

        res.status(201).json({
            message: "Category created successfully",
            category,
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to create category",
            error: error.message,
        });
    }
});

// DELETE category
router.delete("/categories/:id", async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete category",
            error: error.message,
        });
    }
});

export default router;
