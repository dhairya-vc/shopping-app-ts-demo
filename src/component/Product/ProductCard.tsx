import { ProductCardProps } from "../../config/types";
import Button from "../UI/Button";

const ProductCard = (props: ProductCardProps) => {
  const { id, image, title, description, stock, price, handleAddToCart } =
    props;

  const cartData = {
    id,
    title,
    price,
    stock: 1,
  };

  return (
    <div
      style={{ width: "calc(33% - 10px)" }}
      className=" flex flex-col rounded-md p-4 shadow-lg gap-2 mb-4"
    >
      <div className="w-full h-[200px]">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
      </div>
      <h3 className="font-extrabold">{title}</h3>
      <p>{description}</p>
      <div className="flex justify-between font-semibold mt-auto mb-2">
        <span className="text-slate-500">{stock} Nos.</span>
        <span className="">${price}</span>
      </div>
      <div className="flex justify-center bg-slate-100 rounded-lg hover:bg-slate-300">
        <Button label="Add to Cart" onClick={() => handleAddToCart(cartData)} />
      </div>
    </div>
  );
};

export default ProductCard;
