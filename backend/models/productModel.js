import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdby: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const product = mongoose.model("ProductCollection", productSchema);

export default product;
