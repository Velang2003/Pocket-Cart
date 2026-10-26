interface Address {
  id: string;
  fullName: string;
  addressLine1: string;
  city: string;
  state: string;
  pincode: string;
}

interface AddressOptionProps {
  address?: Address;
  selected?: boolean;
  onSelect?: (id: string) => void;
}

const DEFAULT_ADDRESS: Address = {
  id: "addr-1",
  fullName: "John Doe",
  addressLine1: "123, Main Street",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400001",
};

function AddressOption({
  address = DEFAULT_ADDRESS,
  selected = false,
  onSelect,
}: AddressOptionProps) {
  return (
    <div
      className={`addressOption${selected ? " addressOption--selected" : ""}`}
      onClick={() => onSelect?.(address.id)}
      role="radio"
      aria-checked={selected}
      tabIndex={0}
    >
      <input type="radio" readOnly checked={selected} tabIndex={-1} />
      <div>
        <p className="addressOption__name">{address.fullName}</p>
        <p>
          {address.addressLine1}, {address.city}, {address.state} -{" "}
          {address.pincode}
        </p>
      </div>
    </div>
  );
}

export default AddressOption;
