import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
 
const EditReturnRefund = () => {
  const [title, setTitle] = useState("Return and Refund Policy");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod."
  );
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("_token", "B0v8yvd33pkhf4BL1syxY2BcAjS7O3EFGT43s3uW");
 
    console.log("Form Submitted:", { title, description });
 
    // Example fetch:
    // fetch('/your/api/endpoint', {
    //   method: 'POST',
    //   body: formData
    // });
  };
 
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="container-fluid mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 className="m-0">Edit Return and Refund Policy</h4>
            <Link
              to="/admin/business/return-refund-policy"
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
                  <label className="fw-bold">Content</label>
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
                <button className="btn btn-primary px-4 py-2" type="submit">
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
 
export default EditReturnRefund;
 
 