import Search from "../../ui/Search"
import PrimaryLogo from "../../../assets/Pocket_Cart_Logo_Primary.png";
import "./HeaderLayout.css"
import Button from "../../ui/Button";
function HeaderLayout() {
  return (
    <section className="header">
      <div>
        <img className="primaryLogo" src={PrimaryLogo} alt="Pocket Cart Logo" />
        <Search />
        <div className="navLinks">
          <p>Deals</p>
          <p>Orders</p>
          <p>Account</p>
          <p>Cart (0)</p>
        </div>
      </div>
      <div className="topCategories">
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
      </div>
    </section>
  );
}

export default HeaderLayout