import productModel from "../models/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const newProduct = new productModel(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
