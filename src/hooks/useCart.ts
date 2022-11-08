import { useDispatch, useSelector } from "react-redux";

import { CartItem } from "../config/types";
import { requestAddToCart, getCartItems } from "../redux/slice/cartSlice";
import { AppDispatch } from "../redux/store";

const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cartItems: CartItem[] = useSelector(getCartItems);

  const cartTotal = cartItems.reduce((acc, curr) => {
    const itemTotal = curr.stock * curr.price;
    return acc + itemTotal;
  }, 0);

  const handleAdd = (itemId: number) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    if (!cartItem) return;

    const cartItems_ = [...cartItems];
    const cartItem_ = { ...cartItem, stock: cartItem.stock + 1 };
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    cartItems_[itemIndex] = cartItem_;

    dispatch(requestAddToCart(cartItems_));
  };

  const handleRemove = (itemId: number) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    if (!cartItem) return;

    if (cartItem.stock === 1) {
      const cartItems_ = cartItems.filter((item) => item.id !== itemId);
      dispatch(requestAddToCart(cartItems_));
    } else {
      const cartItems_ = [...cartItems];
      const cartItem_ = { ...cartItem, stock: cartItem.stock - 1 };
      const itemIndex = cartItems.findIndex((item) => item.id === itemId);
      cartItems_[itemIndex] = cartItem_;
      dispatch(requestAddToCart(cartItems_));
    }
  };

  return {
    cartItems,
    cartTotal,
    handleAdd,
    handleRemove,
  };
};

export default useCart;
