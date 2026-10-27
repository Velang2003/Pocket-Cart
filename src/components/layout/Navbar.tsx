import { Link } from "react-router-dom";
import SearchBar from "../ui/SearchBar";
import Badge from "../ui/Badge";
import PrimaryLogo from "../../assets/Pocket_Cart_Logo_Primary.png";
import { useCartStore } from "../../stores/cartStore";
import "./Navbar.css";

function Navbar() {
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <section className="header">
      <div>
        <Link to="/">
          <img className="primaryLogo" src={PrimaryLogo} alt="Pocket Cart Logo" />
        </Link>
        <SearchBar />
        <div className="navLinks">
          <Link to="/deals">Deals</Link>
          <Link to="/account/orders">Orders</Link>
          <Link to="/account">Account</Link>
          <Link to="/cart" className="cartNav">
            <span>Cart</span>
            <Badge label={`${totalItems}`} tone="neutral" />
          </Link>
        </div>
      </div>
      <div className="topCategories">
        <Link to="/products">All Categories ↓</Link>
        <Link to="/products?category=electronics">Electronics</Link>
        <Link to="/products?category=mens-shirts">Fashion</Link>
        <Link to="/products?category=furniture">Home &amp; Kitchen</Link>
        <Link to="/products?category=beauty">Beauty</Link>
        <Link to="/products?category=groceries">Grocery</Link>
        <Link to="/products?category=sports-accessories">Sports</Link>
        <Link to="/products?category=vehicle">Deals</Link>
      </div>
    </section>
  );
}

export default Navbar;
