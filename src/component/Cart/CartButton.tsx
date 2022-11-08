import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import CartBox from "./CartBox";

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen((val) => !val);
  };

  return (
    <div className="relative">
      <div
        className="border p-2 rounded hover:border-slate-400 cursor-pointer"
        onClick={toggleBox}
      >
        <AiOutlineShoppingCart />
      </div>
      {isOpen && <CartBox />}
    </div>
  );
};

export default CartButton;
