import { Filter, ProductCard } from "../component/Product";
import useProduct from "../hooks/useProduct";

const Home = () => {
  const {
    query,
    sortBy,
    handleSearch,
    handleSort,
    getFilteredProducts,
    handleAddToCart,
  } = useProduct();

  return (
    <>
      <section>
        <Filter
          query={query}
          sortBy={sortBy}
          handleSearch={handleSearch}
          handleSort={handleSort}
        />
      </section>

      <section className="flex flex-wrap justify-between">
        {getFilteredProducts().map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            description={product.description}
            stock={product.stock}
            rating={product.rating}
            id={product.id}
            price={product.price}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
