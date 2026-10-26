type Tone = "neutral" | "success" | "warning" | "error";

interface BadgeProps {
  label: string;
  tone?: Tone;
}

function Badge({ label = "New", tone = "neutral" }: BadgeProps) {
  return <span className={`badge badge--${tone}`}>{label}</span>;
}

export default Badge;
