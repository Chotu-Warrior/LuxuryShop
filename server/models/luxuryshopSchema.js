import mongoose from "mongoose";

const luxuryshopSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,
    },

    categories: {
      type: String,
      required: true,
      trim: true,
    },

    original_price: {
      type: Number,
      required: true,
      min: 0,
    },

    discount_price: {
      type: Number,
      min: 0,
      default: 0,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Active", "Draft", "Out of Stock"],
      default: "Active",
    },

    best_seller: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      enum: ["S", "M", "L", "XL"],
      required: true,
    },

    primary_image: {
      type: String,
      default: ""
    },

    images: {
      type: [String],
      default: []
    },
    product_summary: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", luxuryshopSchema);

export default Product;