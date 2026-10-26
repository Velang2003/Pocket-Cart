// Mobile only — Sticky Bar at bottom of Product Detail page (two buttons)
import Button from "../ui/Button";

interface StickyBarProps {
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  disabled?: boolean;
}

function StickyBar({ onAddToCart, onBuyNow, disabled = false }: StickyBarProps) {
  return (
    <div className="stickyBar">
      <Button
        variant="secondary"
        label="Add to cart"
        onClick={onAddToCart}
        disabled={disabled}
        fullWidth
      />
      <Button
        variant="cta"
        label="Buy now"
        onClick={onBuyNow}
        disabled={disabled}
        fullWidth
      />
    </div>
  );
}

export default StickyBar;
