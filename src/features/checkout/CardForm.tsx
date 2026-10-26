import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

function CardForm() {
  return (
    <form className="cardForm">
      <Input label="Card number" placeholder="1234 5678 9012 3456" />
      <Input label="Name on card" placeholder="As printed on card" />
      <div className="cardForm__row">
        <Input label="Expiry" placeholder="MM / YY" />
        <Input label="CVV" placeholder="•••" type="password" />
      </div>
      <Button variant="primary" label="Pay now" fullWidth />
    </form>
  );
}

export default CardForm;
