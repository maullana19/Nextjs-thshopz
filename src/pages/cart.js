import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";
import Layouts from "@/components/layouts/Layout";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <>
      <Layouts>
        <section className="min-h-screen">
          <div className="justify-center items-center grid grid-cols-3 gap-5 px-3 py-5">
            {cart.length === 0 ? (
              <div className="min-h-screen flex justify-center items-center">
                <div>
                  <Image
                    src={"/img/empty-cart.png"}
                    width={980}
                    height={800}
                    alt="cartImages"
                  />
                </div>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-center  px-2 py-4 w-full m-2 bg-gray-100 shadow-sm"
                  >
                    <div className="p-4">
                      <Image
                        src={item.image}
                        height={90}
                        width={120}
                        alt="imageproduct"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start ">
                      <Link
                        href={`/product/${item.id}`}
                        className="hover:underline"
                      >
                        {item.names}
                      </Link>
                      <p>Price : Rp{item.price}</p>
                      <p>Qty : {item.quantity}</p>
                      <div className=" px-2 py-2 m-2 gap-4 flex">
                        <button
                          className="bg-green-400 px-2 py-2 rounded text-white"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                        <button
                          className="bg-yellow-400 px-2 rounded py-2 text-white"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          -
                        </button>
                        <button
                          className="bg-red-500 px-2 py-2 rounded text-white"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          x
                        </button>
                      </div>
                      <div>
                        <p>Rp {(item.quantity * item.price).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div>
                  <h2>
                    Grand Total:{" "}
                    <span className="bg-green-500 text-white px-2 py-1 rounded-sm">
                      {" "}
                      Rp {getTotalPrice().toFixed(2)}{" "}
                    </span>
                  </h2>
                </div>
                <div className="">
                  <Link
                    href={"#"}
                    className="bg-red-400 text-white px-2 py-3  w-full"
                  >
                    Checkout
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default CartPage;
