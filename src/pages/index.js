import Layouts from "@/components/layouts/Layout";
import HomeSection1 from "@/components/main/home/section1";
import Section3Home from "@/components/main/home/section3";
import { getBestSellerProduct } from "./api/products";
import ProductCardBestSeller from "@/components/main/product/bestsellercard";

// Page - HOME
export default function Home({ dataSellers }) {
  return (
    <Layouts>
      <HomeSection1 />
      <section className="min-h-screen bg-gray-200">
        <div className="container px-5 py-24 mx-auto ">
          <div>
            <h1 className="text-3xl font-medium text-gray-700 px-3 py-2">
              BEST SELLER
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {dataSellers.map((items) => (
              <ProductCardBestSeller key={items.id} bestSellers={items} />
            ))}
          </div>
        </div>
      </section>

      <Section3Home />
    </Layouts>
  );
}

export async function getServerSideProps() {
  const dataSellers = await getBestSellerProduct();
  return {
    props: {
      dataSellers,
    },
  };
}
