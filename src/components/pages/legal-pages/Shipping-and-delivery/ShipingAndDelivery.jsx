import React from 'react';
import { Link } from 'react-router-dom';
 
const ShippingDeliveryPolicy = () => {
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="container-fluid mb-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 className="m-0">Shipping and Delivery Policy</h4>
            <Link
              to="/admin/business/return-refund-policy/shiping-delivery/edit"
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
              {/* Paste your HTML content here safely using dangerouslySetInnerHTML */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <h2><span style="color: #212121;">Shipping</span></h2>
                  <p><strong style="color: #212121;">What are the delivery charges?</strong></p>
                  <p style="color: #212121;">Delivery charge varies with each Seller.</p>
                  <p style="color: #212121;">Sellers incur relatively higher shipping costs on low value items... [TRIMMED FOR BREVITY]</p>
                  <h2><strong style="color: #212121;">Does Flipkart deliver internationally?</strong></h2>
                  <p style="color: #212121;">As of now, Flipkart doesn't deliver items internationally.</p>
                  <p style="color: #212121;">You will be able to make your purchases... please ensure the delivery address is in India.</p>
                `,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ShippingDeliveryPolicy;
 
 