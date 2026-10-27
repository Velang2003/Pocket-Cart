interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}

function Skeleton({
  width = "100%",
  height = 16,
  borderRadius = "var(--radius-button)",
  className = "",
}: SkeletonProps) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height, borderRadius }}
      aria-hidden="true"
    />
  );
}

// Preset card skeleton for ProductCard shape
export function ProductCardSkeleton() {
  return (
    <div className="productCard" aria-busy="true">
      <Skeleton height={200} borderRadius="var(--radius-card) var(--radius-card) 0 0" />
      <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton width="60%" height={12} />
        <Skeleton width="80%" height={14} />
        <Skeleton width="40%" height={12} />
        <Skeleton width="50%" height={16} />
        <Skeleton height={41} />
      </div>
    </div>
  );
}

export default Skeleton;
