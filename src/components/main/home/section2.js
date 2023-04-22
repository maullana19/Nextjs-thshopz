import Link from "next/link";

import Image from "next/image";
import ProductCard from "../product/product_card";

const Section2Home = () => {
  return (
    <section>
      <div className="container px-5 py-19 mx-auto mb-8">
        <div className="px-2 py-4 flex  items-center justify-between mb-4 ">
          <div>
            <h1 className="text-3xl font-semibold text-gray-600">
              Produk Ramadhan
            </h1>
          </div>
          <div>
            <Link
              href={"#"}
              className="font-semibold text-blue-500 hover:underline"
            >
              Lihat Semua
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 ">
          <p>Product Here</p>
        </div>
      </div>
    </section>
  );
};

export default Section2Home;
