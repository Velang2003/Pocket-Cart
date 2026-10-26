import { useId } from "react";
import "./Rating.css";

interface RatingProps {
  value: number;
  count?: number;           // review count — shown beside the stars
  readOnly?: boolean;
  onRatingChange?: (rating: number) => void;
  maxRating?: number;
  size?: number;
}

function Rating({
  value,
  count,
  readOnly = true,
  onRatingChange,
  maxRating = 5,
  size = 20,
}: RatingProps) {
  const id = useId();

  const safeRating = Math.min(Math.max(value, 0), maxRating);

  function handleRatingChange(newValue: number) {
    if (readOnly) return;
    onRatingChange?.(newValue);
  }

  return (
    <div
      className={`star-rating ${readOnly ? "star-rating--readonly" : ""}`}
      role={readOnly ? "img" : "group"}
      aria-label={
        readOnly ? `${safeRating} out of ${maxRating} stars` : "Choose a rating"
      }
    >
      {Array.from({ length: maxRating }, (_, index) => {
        const starNumber = index + 1;
        const fillPercentage =
          Math.min(Math.max(safeRating - index, 0), 1) * 100;
        const clipId = `${id}-star-${index}`;

        const star = (
          <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <clipPath id={clipId}>
                <rect x="0" y="0" width={`${fillPercentage}%`} height="24" />
              </clipPath>
            </defs>
            <path
              d="M12 2.5L14.93 8.45L21.5 9.4L16.75 14.03L17.87 20.57L12 17.48L6.13 20.57L7.25 14.03L2.5 9.4L9.07 8.45Z"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M12 2.5L14.93 8.45L21.5 9.4L16.75 14.03L17.87 20.57L12 17.48L6.13 20.57L7.25 14.03L2.5 9.4L9.07 8.45Z"
              fill="#FBBF24"
              clipPath={`url(#${clipId})`}
            />
          </svg>
        );

        return readOnly ? (
          <span key={starNumber} className="star-rating__star">
            {star}
          </span>
        ) : (
          <button
            key={starNumber}
            type="button"
            className="star-rating__button"
            onClick={() => handleRatingChange(starNumber)}
            aria-label={`${starNumber} out of ${maxRating} stars`}
            aria-pressed={safeRating === starNumber}
          >
            {star}
          </button>
        );
      })}

      {count !== undefined && (
        <span className="star-rating__count">
          {value} ({count})
        </span>
      )}
    </div>
  );
}

export default Rating;

