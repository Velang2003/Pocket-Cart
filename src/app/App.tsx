import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button props={"Primary"} />
      <FormInput />
      <div className="productSearch">
      <input type="text" name="search" id="search" placeholder="Search products, brands and categories" />
      <button>Search</button>
      </div>
    </>
  );
}

export default App;
