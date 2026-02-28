import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import KYC from "./Pages/KYC";
import DocumentUpload from "./Pages/DocumentUpload";
import Review from "./Pages/Review";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/upload" element={<DocumentUpload />} />
        <Route path="/review" element={<Review />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;