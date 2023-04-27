import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cart.slice";

const ProductCardBestSeller = ({ bestSellers }) => {
  const dispatch = useDispatch();

  return (
    <div className="px-2 py-2 flex justify-start flex-col ">
      <Image
        src={bestSellers.image}
        height={300}
        width={220}
        alt="ecommerce- bestSellers"
        className="h-72 object-cover object-center block rounded"
      />
      <div className="mt-2">
        <Link
          href={`/product/detailedbestseller/${bestSellers.id}`}
          className="text-xl font-semibold hover:underline"
        >
          {bestSellers.names}
        </Link>
        <h5 className="text-sm text-gray-600">{bestSellers.category}</h5>
        <p className="text-green-700">Rp {bestSellers.price}</p>
        <button
          className="px-1 py-2  rounded-md w-full mt-2 border border-black hover:bg-[#E74646] hover:text-white hover:border-none"
          onClick={() => dispatch(addToCart(bestSellers))}
        >
          Beli
        </button>
      </div>
    </div>
  );
};

export default ProductCardBestSeller;
