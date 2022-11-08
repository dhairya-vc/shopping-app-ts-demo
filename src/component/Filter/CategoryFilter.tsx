import useFilter from "../../hooks/useFilter";

const CategoryFilter = () => {
  const { productCategories, selected, handleCategory } = useFilter();

  return (
    <div className="mb-4">
      <h3 className="font-semibold text-lg mb-2">Category</h3>
      <ul>
        {productCategories.map((category) => (
          <li
            key={category}
            className={`pl-2 cursor-pointer mb-1.5 rounded text-sm font-bold capitalize ${
              selected.includes(category) ? "text-slate-700 underline" : "text-slate-500"
            }`}
            onClick={() => handleCategory(category)}
          >
            <p>{category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
