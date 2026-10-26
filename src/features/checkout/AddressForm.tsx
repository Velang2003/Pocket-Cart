import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

interface AddressValues {
  fullName?: string;
  mobile?: string;
  pincode?: string;
  addressLine1?: string;
  city?: string;
  state?: string;
}

interface AddressFormProps {
  values?: AddressValues;
  onSubmit?: (values: AddressValues) => void;
}

function AddressForm({ values = {}, onSubmit }: AddressFormProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit?.(values);
  }

  return (
    <form className="addressForm" onSubmit={handleSubmit}>
      <h3>Delivery address</h3>
      <Input label="Full name" placeholder="Full name" />
      <Input label="Mobile number" placeholder="10-digit mobile" type="tel" />
      <Input label="Pincode" placeholder="6-digit pincode" />
      <Input label="Address" placeholder="House no., Building, Street" />
      <Input label="City" placeholder="City" />
      <Input label="State" placeholder="State" />
      <Button variant="primary" label="Save address" fullWidth />
    </form>
  );
}

export default AddressForm;

