import { Link } from "react-router-dom";

function KYC() {
  return (
    <div>
      <h2>KYC Verification Page</h2>
      <Link to="/upload">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default KYC;