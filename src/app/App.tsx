import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
import Search from "../components/ui/Search";
import Checkbox from "../components/ui/Checkbox";
import CounterBtn from "../components/ui/CounterBtn";
import RadioOption from "../components/ui/RadioOption";
import NewIndicator from "../components/ui/NewIndicator";
import ProductCard from "../features/products/ProductCard"
import ProductFeedback from "../features/products/ProductFeedback";
import CartProductCard from "../features/cart/CartProductCard";

function App() {
  const product = {
    brand: "brand",
    title: "Product name goes here",
    rating: 2.5,
    reviewCount: 128,
    image: "https://placehold.co/258x200",
    realPrice: 1999,
    discountedPrice: 1299,
  };
  return (
    <>
      <h1>Hello World</h1>
      <Button varient={"Primary"} />
      <FormInput />
      <Search />
      <Checkbox />
      <CounterBtn />
      <RadioOption />
      <NewIndicator/>
      <ProductCard {...product}/>
      <ProductFeedback/>
      <CartProductCard/>
    </>
  );
}

export default App;
