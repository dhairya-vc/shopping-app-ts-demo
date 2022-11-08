import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import products from "../mock/product.json";
import { getActiveFilters, setFilters } from "../redux/slice/productSlice";

import useDebounce from "./useDebounce";

const useFilter = () => {
  const dispatch = useDispatch();

  const [inputPrice, setPrice] = useState<number>(0);
  const filter = useSelector(getActiveFilters);

  const debouncedPrice = useDebounce(inputPrice, 1000);

  const productCategories = products
    .map((product) => product.category)
    .filter((category, index, self) => {
      return self.indexOf(category) == index;
    });

  const handleCategory = (category: string) => {
    const isExist = filter.category.find((cat) => cat === category);

    if (isExist) {
      dispatch(
        setFilters({
          ...filter,
          category: filter.category.filter((cat) => cat !== category),
        }),
      );
    } else {
      dispatch(
        setFilters({
          ...filter,
          category: [...filter.category, category],
        }),
      );
    }
  };

  const handleRating = (rating: number) => {
    dispatch(
      setFilters({
        ...filter,
        rating: filter.rating === rating ? 0 : rating,
      }),
    );
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  useEffect(() => {
    dispatch(
      setFilters({
        ...filter,
        price: debouncedPrice,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPrice]);

  return {
    productCategories,
    selected: filter.category,
    rating: filter.rating,
    price: filter.price,
    inputPrice,
    handleCategory,
    handleRating,
    handlePrice,
  };
};

export default useFilter;
