import Button from "../../ui/Button"
import FormInput from "../../ui/FormInput"
import "./FooterLayout.css"
function FooterLayout() {
  return (
    <section className="footor">
      <div>
        <div className="shop">
          <h4>Shop</h4>
          <p>Electronics</p>
          <p>Electronics</p>
          <p>Electronics</p>
          <p>Electronics</p>
        </div>
        <div className="support">
          <h4>Support</h4>
          <p>Help centre</p>
          <p>Help centre</p>
          <p>Help centre</p>
          <p>Help centre</p>
        </div>
        <div className="company">
          <h4>Company</h4>
          <p>About</p>
          <p>About</p>
          <p>About</p>
          <p>About</p>
        </div>
        <div className="contact">
          <h4>Stay in the loop</h4>
          <div className="FormInput">
          <FormInput
            label="Get deals straight to your inbox."
            placeholder="Email address"
          />
          <Button varient="Primary" value="Subscribe" />
          </div>
        </div>
      </div>
      <div>
        <p>Pocket Cart . Shop more, Carry nothing</p>
        <p>2026 Pocket Cart. All rights reserved.</p>
      </div>
    </section>
  );
}

export default FooterLayout