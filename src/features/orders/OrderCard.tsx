import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

interface Order {
  id: string;
  date: string;
  status: "delivered" | "shipped" | "processing" | "cancelled";
  items: { title: string; image: string; qty: number; price: number }[];
  total: number;
}

interface OrderCardProps {
  order?: Order;
}

const DEFAULT_ORDER: Order = {
  id: "ORD-12345",
  date: "20 Oct 2026",
  status: "delivered",
  items: [
    {
      title: "Wireless Headphones Pro",
      image: "https://placehold.co/64x64",
      qty: 1,
      price: 2499,
    },
  ],
  total: 2499,
};

const STATUS_TONE: Record<Order["status"], "success" | "neutral" | "warning" | "error"> = {
  delivered: "success",
  shipped: "warning",
  processing: "neutral",
  cancelled: "error",
};

function OrderCard({ order = DEFAULT_ORDER }: OrderCardProps) {
  return (
    <div className="orderCard">
      <div className="orderCard__header">
        <p>Order #{order.id}</p>
        <Badge label={order.status} tone={STATUS_TONE[order.status]} />
        <p>{order.date}</p>
      </div>
      <div className="orderCard__items">
        {order.items.map((item, i) => (
          <div key={i} className="orderCard__item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>Qty: {item.qty}</p>
            <p>
              {item.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </p>
          </div>
        ))}
      </div>
      <div className="orderCard__footer">
        <p>
          Total:{" "}
          {order.total.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </p>
        <Button variant="secondary" label="View order" />
      </div>
    </div>
  );
}

export default OrderCard;
