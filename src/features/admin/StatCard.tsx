type Trend = "up" | "down" | "flat";

interface StatCardProps {
  label?: string;
  value?: string | number;
  trend?: Trend;
  trendLabel?: string;
}

function StatCard({
  label = "Total Revenue",
  value = "₹4,52,300",
  trend = "up",
  trendLabel = "+12% vs last week",
}: StatCardProps) {
  const trendColor = trend === "up" ? "green" : trend === "down" ? "red" : "gray";

  return (
    <div className="statCard">
      <p className="statCard__label">{label}</p>
      <h2 className="statCard__value">{value}</h2>
      <p className="statCard__trend" style={{ color: trendColor }}>
        {trend === "up" ? "▲" : trend === "down" ? "▼" : "—"} {trendLabel}
      </p>
    </div>
  );
}

export default StatCard;

