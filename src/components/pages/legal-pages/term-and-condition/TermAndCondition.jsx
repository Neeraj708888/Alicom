import React from "react";
import { Link } from "react-router-dom";
 
const TermAndCondition = () => {
  return (
      <div className="container-fluid">
        <div className="container-fluid mb-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 className="m-0">Terms and Conditions</h4>
            <Link
              to="/admin/legalpage/term-and-condition/edit"
              className="btn btn-sm btn-primary px-3 py-2"
            >
              <i className="fa-solid fa-pen me-1"></i> Edit
            </Link>
          </div>
 
          <div className="card rounded-12 border-0">
            <div className="card-header py-3">
              <h5 className="m-0">Content</h5>
            </div>
            <div className="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis eum, est repellat amet aperiam sunt nisi recusandae
              quis illo accusamus!
            </div>
          </div>
        </div>
      </div>
  );
};
 
export default TermAndCondition;
 
 
