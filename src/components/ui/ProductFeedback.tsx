import { useState } from "react";
import StarRating from "./StarRating/StarRating"

export default function ProductFeedback() {
  const [rating, setRating] = useState(0);

  function handleSubmit() {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    // Submit rating with your feedback
    console.log("Selected rating:", rating);
  }

  return (
    <div>
      <h3>Rate this product</h3>

      <StarRating
        rating={rating}
        readOnly={false}
        onRatingChange={setRating}
        size={28}
      />

      <p>
        {rating === 0
          ? "Select your rating"
          : `You selected ${rating} out of 5 stars`}
      </p>

      <button type="button" onClick={handleSubmit}>
        Submit Feedback
      </button>
    </div>
  );
}
