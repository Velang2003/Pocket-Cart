import Button from "../ui/Button";
import Input from "../ui/Input";
import "./Footer.css";

function Footer() {
  return (
    <section className="footor">
      <div>
        <div className="shop">
          <h4>Shop</h4>
          <p>Electronics</p>
          <p>Fashion</p>
          <p>Home &amp; Kitchen</p>
          <p>Deals</p>
        </div>
        <div className="support">
          <h4>Support</h4>
          <p>Help centre</p>
          <p>Track order</p>
          <p>Returns</p>
          <p>Contact us</p>
        </div>
        <div className="company">
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Seller hub</p>
          <p>Press</p>
        </div>
        <div className="contact">
          <h4>Stay in the loop</h4>
          <p>Get deals straight to your inbox.</p>
          <div className="newsletterForm">
            <Input label="email" placeholder="Email address" type="email" />
            <Button variant="cta" label="Subscribe" />
          </div>
        </div>
      </div>
      <div>
        <p>Pocket Cart · Shop more, Carry nothing</p>
        <p>© 2026 Pocket Cart. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;

