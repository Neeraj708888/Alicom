import React from "react";
import { FaPen } from "react-icons/fa6";
import { Link } from "react-router-dom";
 
 
const LegalAboutUs = () => {
  return (
      <div className="container-fluid">
        <div className="container-fluid mb-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 className="m-0">About Us</h4>
            <Link
              to="/admin/business/about-us/edit"
              className="btn btn-sm btn-primary px-3 py-2"
            >
              <FaPen className="me-1" /> Edit
            </Link>
          </div>
 
          <div className="card rounded-12 border-0">
            <div className="card-header py-3">
              <h5 className="m-0">Content</h5>
            </div>
            <div className="card-body">
              {/* PLACEHOLDER: Add sanitized & formatted content here */}
              <p>
                This is a placeholder for About Us content. Replace this with
                actual structured HTML or dynamic content as needed.
              </p>
 
              {/* You can also dynamically render raw HTML like below if needed:
              <div dangerouslySetInnerHTML={{ __html: yourHTMLContentString }} />
              */}
            </div>
          </div>
        </div>
      </div>
  );
};
 
export default LegalAboutUs;
 
 