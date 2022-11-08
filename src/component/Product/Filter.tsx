import Input from "../UI/Input";

const Filter = (props: any) => {
  const { query, sortBy, handleSearch, handleSort } = props;
  const activeSort = "bg-slate-300";

  return (
    <div className="flex justify-between items-center gap-2 mb-4">
      <Input
        type="string"
        value={query}
        onChange={handleSearch}
        placeholder="Search Products"
      />
      <div className="flex gap-2">
        <span
          className={` border cursor-pointer p-2 rounded  ${
            sortBy === "ASC" ? activeSort : ""
          }`}
          onClick={() => handleSort("ASC")}
        >
          ASC
        </span>
        <span
          className={` border cursor-pointer p-2 rounded ${
            sortBy === "DESC" ? activeSort : ""
          }`}
          onClick={() => handleSort("DESC")}
        >
          DESC
        </span>
      </div>
    </div>
  );
};

export default Filter;
