import { Link } from "react-router-dom";

function Review() {
  return (
    <div>
      <h2>Review & Confirmation Page</h2>
      <Link to="/dashboard">
        <button>Confirm</button>
      </Link>
    </div>
  );
}

export default Review;