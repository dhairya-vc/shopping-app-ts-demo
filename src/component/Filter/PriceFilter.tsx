import useFilter from "../../hooks/useFilter";
import { Input } from "../UI";

const PriceFilter = () => {
  const { inputPrice, price, handlePrice } = useFilter();

  return (
    <div className="mb-4">
      <h3 className="font-semibold text-lg mb-2">Upto Price</h3>
      <Input type="number" value={inputPrice} onChange={handlePrice} />
    </div>
  );
};

export default PriceFilter;
