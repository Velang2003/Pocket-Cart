// RevenueChart — shell component. Wire in a real chart library (e.g. Recharts) later.
interface DataPoint {
  label: string;
  value: number;
}

interface RevenueChartProps {
  data?: DataPoint[];
}

const DEFAULT_DATA: DataPoint[] = [
  { label: "Mon", value: 12000 },
  { label: "Tue", value: 18000 },
  { label: "Wed", value: 9000 },
  { label: "Thu", value: 22000 },
  { label: "Fri", value: 30000 },
  { label: "Sat", value: 25000 },
  { label: "Sun", value: 15000 },
];

function RevenueChart({ data = DEFAULT_DATA }: RevenueChartProps) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="revenueChart">
      <p className="revenueChart__title">Revenue (this week)</p>
      <div className="revenueChart__bars">
        {data.map((d) => (
          <div key={d.label} className="revenueChart__bar">
            <div
              className="revenueChart__fill"
              style={{ height: `${(d.value / max) * 100}%` }}
            />
            <span>{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevenueChart;
