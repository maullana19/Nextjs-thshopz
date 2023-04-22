import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cart.slice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="px-2 py-2 flex justify-start flex-col ">
      <Image
        src={product.image}
        height={300}
        width={220}
        alt="ecommerce-product"
        className="h-72 object-cover object-center block rounded"
      />
      <div className="mt-2">
        <Link
          href={`/product/${product.id}`}
          className="text-xl font-semibold hover:underline"
        >
          {product.product}
        </Link>
        <h5 className="text-sm text-gray-600">{product.category}</h5>
        <p className="text-green-700">Rp {product.price}</p>
        <button
          className="px-1 py-2  rounded-md w-full mt-2 border border-black hover:bg-[#F45050] hover:text-white hover:border-none"
          onClick={() => dispatch(addToCart(product))}
        >
          Tambah Ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
