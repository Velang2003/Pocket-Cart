import Rating from "../../components/ui/Rating/Rating";

interface RatingBreakdown {
  stars: number;
  count: number;
}

interface ReviewSummaryProps {
  rating?: number;
  reviewCount?: number;
  breakdown?: RatingBreakdown[];
}

const DEFAULT_BREAKDOWN: RatingBreakdown[] = [
  { stars: 5, count: 120 },
  { stars: 4, count: 80 },
  { stars: 3, count: 40 },
  { stars: 2, count: 10 },
  { stars: 1, count: 5 },
];

function ReviewSummary({
  rating = 4.2,
  reviewCount = 255,
  breakdown = DEFAULT_BREAKDOWN,
}: ReviewSummaryProps) {
  const total = breakdown.reduce((sum, b) => sum + b.count, 0);

  return (
    <div className="reviewSummary">
      <div className="reviewSummary__score">
        <h2>{rating}</h2>
        <Rating value={rating} count={reviewCount} readOnly size={20} />
      </div>
      <div className="reviewSummary__breakdown">
        {breakdown.map((b) => (
          <div key={b.stars} className="reviewSummary__bar">
            <span>{b.stars}★</span>
            <div className="reviewSummary__barTrack">
              <div
                className="reviewSummary__barFill"
                style={{ width: `${(b.count / total) * 100}%` }}
              />
            </div>
            <span>{b.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSummary;

