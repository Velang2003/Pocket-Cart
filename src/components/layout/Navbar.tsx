import SearchBar from "../ui/SearchBar";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import PrimaryLogo from "../../assets/Pocket_Cart_Logo_Primary.png";
import "./Navbar.css";

interface NavbarProps {
  cartCount?: number;
}

function Navbar({ cartCount = 0 }: NavbarProps) {
  return (
    <section className="header">
      <div>
        <img className="primaryLogo" src={PrimaryLogo} alt="Pocket Cart Logo" />
        <SearchBar />
        <div className="navLinks">
          <p>Deals</p>
          <p>Orders</p>
          <p>Account</p>
          <div className="cartNav">
            <span>Cart</span>
            <Badge label={`${cartCount}`} tone="neutral" />
          </div>
        </div>
      </div>
      <div className="topCategories">
        <p>All Categories ↓</p>
        <p>Electronics</p>
        <p>Fashion</p>
        <p>Home &amp; Kitchen</p>
        <p>Beauty</p>
        <p>Grocery</p>
        <p>Sports</p>
        <p>Books</p>
        <p>Deals</p>
      </div>
    </section>
  );
}

export default Navbar;
