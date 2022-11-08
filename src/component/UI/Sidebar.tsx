import { CategoryFilter, RatingFilter, PriceFilter } from "../Filter";

const Sidebar = () => {
  return (
    <aside className="min-w-[240px] border-r py-8 px-4">
      <div>
        <CategoryFilter />
        <RatingFilter />
        <PriceFilter />
      </div>
    </aside>
  );
};

export default Sidebar;
