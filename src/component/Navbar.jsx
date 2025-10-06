import { useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav>
        <div className=" relative p-5 bg-primary text-white flex items-center justify-between">
      <h3 className="md:text-5xl text-3xl font-bold">Redux ToolKit</h3>
      <div>
        <BiShoppingBag size={40} />
        <div className="absolute top-5 right-3 bg-primary-light h-6 w-6 text-center rounded-full">
          <p>{amount}</p>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
