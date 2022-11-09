import { CartButton } from "../Cart";

const Header = () => {
  return (
    <header className="py-4 px-8 shadow-lg">
      <nav className="flex justify-between items-center">
        <span className="font-bold text-3xl">Cart.Co</span>
        <CartButton />
      </nav>
    </header>
  );
};

export default Header;
