import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>FinTrust – Customer Onboarding Portal</h1>
      <p>Open your bank account securely and seamlessly.</p>
      <Link to="/kyc">
        <button>Start KYC</button>
      </Link>
    </div>
  );
}

export default Home;