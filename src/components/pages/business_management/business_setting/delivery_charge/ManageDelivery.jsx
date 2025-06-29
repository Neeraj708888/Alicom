import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
 
const ManageDelivery = () => {
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
          <h4>Manage Delivery Charge</h4>
          <div className="d-flex align-items-center flex-wrap gap-1">
            <Link to="/admin/Business/delivery-charges/cities/cities" className="btn py-2 btn-primary">
              <i className="fa fa-location-dot"></i> Manage Cities
            </Link>
            <Link
              to="/admin/Business/delivery-charges/cities/create-new-delivery"
              className="btn py-2 btn-primary"
            >
              <i className="fa fa-plus-circle"></i> Create New
            </Link>
          </div>
        </div>
 
        <div className="container-fluid mt-3">
          <div className="my-3 card">
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table border table-responsive-lg"
                  style={{ overflow: "auto" }}
                >
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th className="text-center">City</th>
                      <th className="text-center">Charge</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td className="text-center">Tamilnadu</td>
                      <td className="text-center">$25</td>
                      <td className="text-center">
                        <div className="d-flex gap-2 justify-content-center">
                          <Link
                            to="/admin/Business/delivery-charges/cities/edit-city"
                            className="btn btn-outline-info btn-sm circleIcon"
                          >
                            <i className="fa-solid fa-pen"></i>
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-outline-danger btn-sm deleteConfirm circleIcon"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="my-3"></div>
        </div>
      </div>
    </div>
  );
};
 
export default ManageDelivery;
 
 