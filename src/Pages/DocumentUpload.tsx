import { Link } from "react-router-dom";

function DocumentUpload() {
  return (
    <div>
      <h2>Document Upload Page</h2>
      <Link to="/review">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default DocumentUpload;