import Link from "next/link";
import ProductFashion from "@/data/products/fashion";
import Image from "next/image";

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
          {ProductFashion.map((items) => (
            <div
              key={items.id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full h-full rounded hover:shadow-md"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="product-woman"
                  className="object-cover object-center w-full h-full block"
                  src={items.image}
                  width={650}
                  height={580}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {items.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg mb-2 ">
                  {items.name}
                </h2>
                <Link
                  href={"#"}
                  className="mt-4 px-2 py-1 bg-[#E96479] text-white font-semibold rounded-md hover:bg-[#D61355]"
                >
                  {items.price}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2Home;
