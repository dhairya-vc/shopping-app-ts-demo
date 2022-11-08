import { CartItem as CartItemProps } from "../../config/types";
import useCart from "../../hooks/useCart";

const CartItem = (props: CartItemProps) => {
  const { id, title, stock } = props;
  const { handleAdd, handleRemove } = useCart();

  return (
    <div className="flex gap-1 justify-between items-center min-w-[300px] mb-4">
      <span className="">{title}</span>

      <div className="flex gap-2 rounded-full border border-slate-400 px-4">
        <span className="p-1 cursor-pointer" onClick={() => handleRemove(id)}>
          -
        </span>
        <span className="p-1">{stock}</span>
        <span className="p-1 cursor-pointer" onClick={() => handleAdd(id)}>
          +
        </span>
      </div>
    </div>
  );
};

export default CartItem;
