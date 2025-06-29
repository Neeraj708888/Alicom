import React, { useState } from "react";
import { Link } from "react-router-dom";
 
const EditShippingDelivery = () => {
  const [title, setTitle] = useState("Shipping and Delivery Policy");
  const [description, setDescription] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque atque sed incidunt sunt voluptates voluptate ipsa tempore mollitia illum."
  );
 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
 
  //   const formData = new FormData();
  //   formData.append("_token", "B0v8yvd33pkhf4BL1syxY2BcAjS7O3EFGT43s3uW");
  //   formData.append("title", title);
  //   formData.append("description", description);
 
  //   // Replace with your actual API request
  //   console.log("Form Submitted", {
  //     title,
  //     description,
  //   });
  // };
 
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="container-fluid mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 className="m-0">Edit Shipping and Delivery Policy</h4>
            <Link
              to="/admin/business/shiping-delivery"
              className="btn btn-sm btn-danger"
            >
              <i className="fa fa-arrow-left"></i> Back
            </Link>
          </div>
 
          <form>
            <div className="card border-0 rounded-12">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    placeholder="Title"
                    maxLength="255"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
 
                <div className="mt-3">
                  <label htmlFor="description" className="fw-bold">
                    Content
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    rows={6}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
 
              <div className="card-footer text-center">
                <button type="submit" className="btn btn-primary px-4 py-2">
                  Save And Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default EditShippingDelivery;
 
 