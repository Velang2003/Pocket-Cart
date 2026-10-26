interface Column {
  key: string;
  label: string;
}

interface DataTableProps {
  columns?: Column[];
  rows?: Record<string, string | number>[];
}

const DEFAULT_COLUMNS: Column[] = [
  { key: "order", label: "Order" },
  { key: "customer", label: "Customer" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
];

const DEFAULT_ROWS = [
  { order: "#1001", customer: "Ravi Kumar", amount: "₹2,499", status: "Delivered" },
  { order: "#1002", customer: "Priya Shah", amount: "₹1,299", status: "Shipped" },
  { order: "#1003", customer: "Ankit Roy", amount: "₹3,999", status: "Processing" },
];

function DataTable({
  columns = DEFAULT_COLUMNS,
  rows = DEFAULT_ROWS,
}: DataTableProps) {
  return (
    <table className="dataTable">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
