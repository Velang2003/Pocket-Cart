// Mobile only — App Bar shown on the Home page
import Badge from "../ui/Badge";
import PrimaryLogo from "../../assets/Pocket_Cart_Logo_Primary.png";

interface AppBarProps {
  cartCount?: number;
}

function AppBar({ cartCount = 0 }: AppBarProps) {
  return (
    <header className="appBar">
      <img src={PrimaryLogo} alt="Pocket Cart" className="appBar__logo" />
      <div className="appBar__cartBadge">
        <span>Cart</span>
        <Badge label={`${cartCount}`} tone="neutral" />
      </div>
    </header>
  );
}

export default AppBar;
