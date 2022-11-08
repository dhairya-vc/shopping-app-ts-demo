import useCart from "../../hooks/useCart";

import CartItem from "./CartItem";

const CartBox = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="absolute border p-8 right-0 top-[40px] rounded bg-white shadow">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <p className="flex justify-end gap-4">
        <span className="font-semibold text-slate-500">Total:</span>
        <span className="font-bold">${cartTotal}</span>
      </p>
    </div>
  );
};

export default CartBox;
