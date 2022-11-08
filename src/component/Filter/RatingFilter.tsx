import useFilter from "../../hooks/useFilter";

const RatingFilter = () => {
  const { rating, handleRating } = useFilter();

  return (
    <div className="mb-4">
      <h3 className="font-semibold text-lg mb-2">Rating</h3>
      <ul className="flex gap-4">
        {[1, 2, 3, 4, 5].map((rtg) => (
          <li
            key={rtg}
            className={`px-2 cursor-pointer py-1 border text-sm font-semibold rounded-md ${
              rating >= rtg ? "bg-yellow-200 text-slate-700" : "text-slate-500"
            }`}
            onClick={() => handleRating(rtg)}
          >
            {rtg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingFilter;
