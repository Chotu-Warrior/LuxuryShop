import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        parentCategory: {
            type: String,
            enum: ["None", "Men", "Women", "Shoes", "Watches"],
            default: "None"
        },
        description: {
            type: String,
            default: ""
        },
        status: {
            type: String,
            enum: ["Active", "Hidden"],
            default: "Active"
        }
    },
    {
        timestamps: true
    }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;