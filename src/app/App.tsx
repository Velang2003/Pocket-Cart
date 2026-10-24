import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
import Search from "../components/ui/Search";
import Checkbox from "../components/ui/Checkbox";
import CounterBtn from "../components/ui/CounterBtn";
import RadioOption from "../components/ui/RadioOption";
import NewIndicator from "../components/ui/NewIndicator";
import ProductCard from "../components/ui/ProductCard"
import ProductFeedback from "../components/ui/ProductFeedback";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button props={"Primary"} />
      <FormInput />
      <Search />
      <Checkbox />
      <CounterBtn />
      <RadioOption />
      <NewIndicator/>
      <ProductCard/>
      <ProductFeedback/>
    </>
  );
}

export default App;
