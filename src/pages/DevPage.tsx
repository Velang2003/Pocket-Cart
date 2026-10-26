// DEV ONLY — Component Library Showcase
// Route: /dev

import { useState } from "react";

// Base UI
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import SearchBar from "../components/ui/SearchBar";
import Checkbox from "../components/ui/Checkbox";
import RadioOption from "../components/ui/RadioOption";
import QuantityStepper from "../components/ui/QuantityStepper";
import Badge from "../components/ui/Badge";
import Rating from "../components/ui/Rating/Rating";
import Breadcrumb from "../components/ui/Breadcrumb";
import Pagination from "../components/ui/Pagination";
import Toast from "../components/ui/Toast";
import SectionHeader from "../components/ui/SectionHeader";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileAppBar from "../components/layout/MobileAppBar";
import MobileBackBar from "../components/layout/MobileBackBar";
import MobileTabBar from "../components/layout/MobileTabBar";
import MobileStickyBar from "../components/layout/MobileStickyBar";

// Features › Products
import ProductCard from "../features/products/ProductCard";
import ProductGrid from "../features/products/ProductGrid";
import CategoryTile from "../features/products/CategoryTile";
import FilterSidebar from "../features/products/FilterSidebar";
import ProductGallery from "../features/products/ProductGallery";
import OptionChips from "../features/products/OptionChips";
import DeliveryChecker from "../features/products/DeliveryChecker";
import ReviewSummary from "../features/products/ReviewSummary";
import ProductFeedback from "../features/products/ProductFeedback";

// Features › Cart
import CartLineItem from "../features/cart/CartLineItem";

// Features › Checkout
import OrderSummary from "../features/checkout/OrderSummary";
import CheckoutSteps from "../features/checkout/CheckoutSteps";
import AddressForm from "../features/checkout/AddressForm";
import AddressOption from "../features/checkout/AddressOption";
import PaymentOption from "../features/checkout/PaymentOption";
import CardForm from "../features/checkout/CardForm";

// Features › Orders
import OrderCard from "../features/orders/OrderCard";

// Features › Admin
import StatCard from "../features/admin/StatCard";
import RevenueChart from "../features/admin/RevenueChart";
import DataTable from "../features/admin/DataTable";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2 style={{ borderBottom: "2px solid #e5e7eb", paddingBottom: "8px", marginBottom: "24px" }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start" }}>
        {children}
      </div>
    </section>
  );
}

export default function DevPage() {
  const [qty, setQty] = useState(1);
  const [checked, setChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(false);
  const [ratingVal, setRatingVal] = useState(0);
  const [page, setPage] = useState(1);
  const [chipVal, setChipVal] = useState("Black");
  const [showToast, setShowToast] = useState(true);

  return (
    <div style={{ padding: "32px", maxWidth: "1200px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "8px" }}>Pocket Cart — Component Library</h1>
      <p style={{ color: "#6b7280", marginBottom: "48px" }}>
        Dev route: <code>/dev</code> · All components with default props
      </p>

      {/* ── 9.1 BASE UI ─────────────────────────────────────── */}
      <Section title="9.1 Base components (components/ui)">

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Button</p>
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="primary" label="Button" />
            <Button variant="secondary" label="Button" />
            <Button variant="cta" label="Button" />
            <Button variant="primary" label="Loading..." loading />
            <Button variant="secondary" label="Disabled" disabled />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Input</p>
          <Input label="Label" placeholder="Placeholder" />
          <Input label="Error field" placeholder="Placeholder" error="This field is required" />
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>SearchBar</p>
          <SearchBar />
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Checkbox</p>
          <Checkbox label="Option" checked={checked} onChange={setChecked} />
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>RadioOption</p>
          <RadioOption
            title="Option title"
            description="Option description"
            selected={selectedRadio}
            onSelect={() => setSelectedRadio((v) => !v)}
          />
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>QuantityStepper</p>
          <QuantityStepper value={qty} onChange={setQty} min={1} max={10} />
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Badge (tones)</p>
          <div style={{ display: "flex", gap: 8 }}>
            <Badge label="New" tone="neutral" />
            <Badge label="In stock" tone="success" />
            <Badge label="Low stock" tone="warning" />
            <Badge label="Out of stock" tone="error" />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Rating (read-only)</p>
          <Rating value={4.2} count={128} readOnly size={18} />
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Rating (interactive)</p>
          <Rating value={ratingVal} readOnly={false} onRatingChange={setRatingVal} size={24} />
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Breadcrumb</p>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Electronics", href: "/electronics" },
              { label: "Headphones" },
            ]}
          />
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Pagination</p>
          <Pagination page={page} totalPages={12} onChange={setPage} />
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Toast</p>
          {showToast && (
            <Toast
              message="Added to cart"
              actionLabel="View cart"
              onAction={() => {}}
              onClose={() => setShowToast(false)}
            />
          )}
          {!showToast && (
            <Button variant="secondary" label="Show Toast" onClick={() => setShowToast(true)} />
          )}
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>SectionHeader</p>
          <div style={{ width: 400 }}>
            <SectionHeader title="Trending now" linkTo="/trending" />
          </div>
        </div>
      </Section>

      {/* ── 9.3 LAYOUT ──────────────────────────────────────── */}
      <Section title="9.3 Layout components">
        <div style={{ width: "100%" }}>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Navbar</p>
          <Navbar cartCount={3} />
        </div>
        <div style={{ width: 390, border: "1px solid #e5e7eb" }}>
          <p style={{ fontSize: 12, color: "#6b7280" }}>AppBar (mobile)</p>
          <MobileAppBar cartCount={3} />
        </div>
        <div style={{ width: 390, border: "1px solid #e5e7eb" }}>
          <p style={{ fontSize: 12, color: "#6b7280" }}>BackBar (mobile)</p>
          <MobileBackBar title="Product details" rightLabel="Cart" />
        </div>
        <div style={{ width: 390, border: "1px solid #e5e7eb" }}>
          <p style={{ fontSize: 12, color: "#6b7280" }}>TabBar (mobile)</p>
          <MobileTabBar />
        </div>
        <div style={{ width: 390, border: "1px solid #e5e7eb" }}>
          <p style={{ fontSize: 12, color: "#6b7280" }}>StickyBar (mobile)</p>
          <MobileStickyBar />
        </div>
        <div style={{ width: "100%", marginTop: 16 }}>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Footer</p>
          <Footer />
        </div>
      </Section>

      {/* ── 9.2 FEATURES › PRODUCTS ─────────────────────────── */}
      <Section title="9.2 Commerce — Products">
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>ProductCard</p>
          <ProductCard />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>ProductGrid</p>
          <ProductGrid />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>CategoryTile</p>
          <CategoryTile />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>FilterSidebar</p>
          <FilterSidebar />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>ProductGallery</p>
          <ProductGallery />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>OptionChips</p>
          <OptionChips label="Colour" options={["Black", "White", "Blue"]} value={chipVal} onChange={setChipVal} />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>DeliveryChecker</p>
          <DeliveryChecker />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>ReviewSummary</p>
          <ReviewSummary />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>ProductFeedback</p>
          <ProductFeedback />
        </div>
      </Section>

      {/* ── 9.2 FEATURES › CART ─────────────────────────────── */}
      <Section title="9.2 Commerce — Cart">
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>CartLineItem</p>
          <CartLineItem />
        </div>
      </Section>

      {/* ── 9.2 FEATURES › CHECKOUT ─────────────────────────── */}
      <Section title="9.2 Commerce — Checkout">
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>OrderSummary</p>
          <OrderSummary />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>CheckoutSteps</p>
          <CheckoutSteps current="address" />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>AddressForm</p>
          <AddressForm />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>AddressOption</p>
          <AddressOption selected />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>PaymentOption</p>
          <PaymentOption />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>CardForm</p>
          <CardForm />
        </div>
      </Section>

      {/* ── 9.2 FEATURES › ORDERS ───────────────────────────── */}
      <Section title="9.2 Commerce — Orders">
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>OrderCard</p>
          <OrderCard />
        </div>
      </Section>

      {/* ── 9.2 FEATURES › ADMIN ────────────────────────────── */}
      <Section title="9.2 Commerce — Admin">
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>StatCard</p>
          <StatCard />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>RevenueChart</p>
          <RevenueChart />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#6b7280" }}>DataTable</p>
          <DataTable />
        </div>
      </Section>
    </div>
  );
}

