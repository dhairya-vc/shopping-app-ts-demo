import { useDispatch, useSelector } from "react-redux";

import { CartItem, Filters, Product, SortBy } from "../config/types";
import { getCartItems, requestAddToCart } from "../redux/slice/cartSlice";
import {
  loading,
  getProducts,
  getSearchQuery,
  setQuery,
  getActiveSort,
  setSort,
  getActiveFilters,
} from "../redux/slice/productSlice";
import { AppDispatch } from "../redux/store";

const useProduct = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isLoading: boolean = useSelector(loading);
  const query: string = useSelector(getSearchQuery);
  const sortBy: SortBy = useSelector(getActiveSort);
  const filter: Filters = useSelector(getActiveFilters);
  const products: Product[] = useSelector(getProducts);
  const cartItems: CartItem[] = useSelector(getCartItems);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setQuery(value));
  };

  const handleSort = (value: SortBy) => {
    dispatch(setSort(value));
  };

  const handleAddToCart = (product: CartItem) => {
    const isExist = cartItems.find((item) => item.id === product.id);
    if (isExist) return;

    const cartItems_ = [...cartItems, product];
    dispatch(requestAddToCart(cartItems_));
  };

  const getFilteredProducts = () => {
    const data = products.slice().sort((a, b) => {
      if (sortBy === "ASC") {
        return a.title.localeCompare(b.title);
      }
      return b.title.localeCompare(a.title);
    });
    return data
      .filter((product: Product) => product.title.toLowerCase().includes(query))
      .filter((product) =>
        filter.category.length > 0
          ? filter.category.includes(product.category)
          : product,
      )
      .filter((product) =>
        filter.price > 0 ? product.price <= filter.price : product,
      )
      .filter((product) =>
        filter.rating > 0 ? product.rating >= filter.rating : product,
      );
  };

  return {
    isLoading,
    products,
    query,
    sortBy,
    getFilteredProducts,
    handleSearch,
    handleSort,
    handleAddToCart,
  };
};

export default useProduct;
