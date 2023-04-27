import data from "./data.json";
import databestseller from "./databestseller.json";

export function getProducts() {
  return data;
}

export function getBestSellerProduct() {
  return databestseller;
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProducts();
    const bestSellers = getBestSellerProduct();
    const combinedData = { products, bestSellers };
    res.status(200).json(combinedData);
  }
}
