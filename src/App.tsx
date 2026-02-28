import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  mobile: string;
  accountType: string;
};

function Home({ setData }: any) {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    mobile: "",
    accountType: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setData(form);
    navigate("/kyc");
  };

  return (
    <div>
      <h1>FinTrust – Customer Onboarding Portal</h1>

      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <br /><br />

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br /><br />

      <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
      <br /><br />

      <select name="accountType" onChange={handleChange}>
        <option value="">Select Account Type</option>
        <option value="Savings">Savings</option>
        <option value="Current">Current</option>
      </select>

      <br /><br />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

function KYC() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>KYC Verification</h2>
      <button onClick={() => navigate("/upload")}>Next</button>
    </div>
  );
}

function Upload() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Document Upload</h2>
      <button onClick={() => navigate("/review")}>Next</button>
    </div>
  );
}

function Review({ data }: any) {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Review Details</h2>
      <p>Name: {data?.fullName}</p>
      <p>Email: {data?.email}</p>
      <p>Mobile: {data?.mobile}</p>
      <p>Account: {data?.accountType}</p>
      <button onClick={() => navigate("/dashboard")}>Confirm</button>
    </div>
  );
}

function Dashboard() {
  return <h2>Welcome to Dashboard 🎉</h2>;
}

function App() {
  const [data, setData] = useState<FormData | null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setData={setData} />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/review" element={<Review data={data} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;