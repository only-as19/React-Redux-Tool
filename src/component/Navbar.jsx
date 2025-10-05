import { useSelector } from "react-redux";
import { CartIcon } from "../data/icons";
const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <div>
      <h3>Redux ToolKit</h3>
      <div>
        <CartIcon />
        <div>
          <p>{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
