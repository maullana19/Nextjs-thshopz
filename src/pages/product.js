import Layouts from "@/components/layouts/Layout";
import { useState, useEffect } from "react";
import Link from "next/link";

const Product = ({ id, name, price, category, image }) => {
  return (
    <div className="container px-5 py-19 mx-auto mb-8 ">
      <div className="px-2 py-4 flex  items-center justify-between mb-4 ">
        <div>
          <h1 className="text-3xl font-semibold text-gray-600">
            Produk {category}
          </h1>
        </div>
        <div>
          <Link
            href={"#"}
            className="font-semibold text-blue-500 hover:underline text-sm"
          >
            Lihat Semua
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap -m-4 ">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={image}
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {id}.{name}
            </h2>
            <button className="mt-1 bg-slate-500 px-2 py-1 rounded text-white">
              {price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products, category }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (category) {
      const filtered = products.filter((product) => {
        return product.category === category;
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  return (
    <div>
      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default function ProductPage() {
  const products = [
    {
      id: "1",
      name: "Smartphone",
      price: "Rp. 5.000.000",
      category: "elektronik",
      image: "/images/smartphone.jpg",
    },
    {
      id: "2",
      name: "Laptop",
      price: "Rp. 10.000.000",
      category: "elektronik",
      image: "/images/laptop.jpg",
    },
    {
      id: "1",
      name: "Baju",
      price: "Rp. 200.000",
      category: "fashion",
      image: "/images/baju.jpg",
    },
    {
      id: "2",
      name: "Baju Lebaran",
      price: "Rp. 250.000",
      category: "fashion",
      image: "/images/baju.jpg",
    },
    {
      id: "3",
      name: "Sepatu",
      price: "Rp. 500.000",
      category: "fashion",
      image: "/images/sepatu.jpg",
    },
  ];

  return (
    <Layouts>
      <ProductList products={products} category="fashion" />

      <ProductList products={products} category="elektronik" />
    </Layouts>
  );
}
