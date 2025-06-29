import React from "react";
import { FaPen, FaEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
 
const PrivacyPolicy = () => {
  return (
   
     
      <div className="app-main-inner">
        <div className="container-fluid">
          <div className="container-fluid mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
              <h4 className="m-0">Privacy Policy</h4>
              <Link
                to="/admin/business/edit-privacy-policy"
                className="btn btn-sm btn-primary px-3 py-2"
              >
                <FaPen className="me-1" />Edit
              </Link>
            </div>
 
            <div className="card rounded-12 border-0">
              <div className="card-header py-3">
                <h5 className="m-0">Content</h5>
              </div>
              <div className="card-body">
                <p>exdolorCommodi incidunt rerum.</p>
                <p>
                  Voluptatem occaecati velit iure accusantium aperiam facere
                  iste vero autem dolores quidem illum libero.
                </p>
                <p>
                  <a
                    href="http://example.org"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Qui est laudantium dolores autem.
                  </a>
                </p>
                <ol>
                  <li>Ut sed.</li>
                  <li>Vel aliquid exercitationem commodi.</li>
                  <li>Eius velit delectus quibusdam.</li>
                  <li>Accusamus fuga harum aperiam eos.</li>
                  <li>Omnis modi dicta.</li>
                  <li>Velit.</li>
                  <li>Autem ipsa.</li>
                  <li>Ea maxime modi.</li>
                </ol>
                <p>
                  Et dolor. Voluptates alias quas laborum tenetur animi culpa
                  doloribus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
     
  );
};
 
export default PrivacyPolicy;
 
 