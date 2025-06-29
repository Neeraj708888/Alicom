import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
 
const EditTermAndCondition = () => {
  const [title, setTitle] = useState("Terms and Conditions");
  const [description, setDescription] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui expedita saepe maiores provident dignissimos totam ullam ad magni itaque est."
  );
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("_token", "B0v8yvd33pkhf4BL1syxY2BcAjS7O3EFGT43s3uW");
    formData.append("title", title);
    formData.append("description", description);
 
    // Example output — replace with actual fetch/axios POST request
    console.log("Submitted data:", {
      title,
      description,
    });
  };
 
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="container-fluid mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 className="m-0">Edit Terms and Conditions</h4>
            <Link
              to="/admin/business/term-and-condition"
              className="btn btn-sm btn-danger"
            >
              <i className="fa fa-arrow-left"></i> Back
            </Link>
          </div>
 
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="card border-0 rounded-12">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    placeholder="Title"
                    maxLength="255"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
 
                <div className="mt-3">
                  <label className="fw-bold mb-2">Content</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setDescription(data);
                    }}
                  />
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
 
export default EditTermAndCondition;
 
 