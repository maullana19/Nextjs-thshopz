import ProductCard from "@/components/main/product/product_card";

import { getProducts } from "./api/products";
import Layouts from "@/components/layouts/Layout";

const ShopPage = ({ products }) => {
  return (
    <Layouts>
      <section className="min-h-screen px-3 py-3">
        <div className=" flex flex-col justify-center items-center">
          <div className="mt-6 p-4 border-b-2">
            <h1 className="text-3xl uppercase font-semibold text-gray-700">
              Product Fashionista
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 mx-auto mt-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default ShopPage;

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}
