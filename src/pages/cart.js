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
          <div className="justify-start items-center flex mx-auto flex-col">
            {cart.length === 0 ? (
              <h1>Your Cart is Empty!</h1>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-center  px-2 py-4 w-full m-2"
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
                        {item.product}
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
                  <h2>Grand Total: $ {getTotalPrice().toFixed(2)}</h2>
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
