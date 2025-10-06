import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
    const dispatch = useDispatch()
  if (amount < 1) {
    return (
      <section className="min-h-[calc(100vh-120px)] w-[90vw] mx-auto mt-10">
        <header className="text-center">
          <h1 className="text-primary-dark text-3xl md:text-4xl font-bold tracking-wider uppercase">
            Your Bag
          </h1>
          <h4 className="text-sm md:text-normal text-grey-1">
            is Currently empty
          </h4>
        </header>
      </section>
    );
  }

  return (
    <section className="w-[90vw] min-h-[calc(100vh-120px)] mx-auto mt-10 py-4">
      <header className="text-center">
        <h1 className="text-primary-dark text-3xl md:text-4xl font-bold tracking-wider uppercase">
          Your Bag
        </h1>
      </header>
      <div className="border-b py-5 border-grey-5">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer className="mt-4 text-center">
        <div>
          <h4 className="flex justify-between md:text-xl text-lg font-bold tracking-widest">
            Price <span>${total}</span>
          </h4>
          <div className="mt-10">
            <button
            onClick={()=> dispatch(clearCart())} 
            className="inline-block px-4 py-1 border-2 rounded-sm tracking-widest font-semibold text-red-dark border-red-dark hover:text-red-light hover:border-red-light transition-colors duration-200 uppercase">
              Clear Cart
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
