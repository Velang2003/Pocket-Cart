import { useState } from "react";
import Rating from "../../components/ui/Rating/Rating";

export default function ProductFeedback() {
  const [rating, setRating] = useState(0);

  function handleSubmit() {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    console.log("Selected rating:", rating);
  }

  return (
    <div>
      <h3>Rate this product</h3>

      <Rating
        value={rating}
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
