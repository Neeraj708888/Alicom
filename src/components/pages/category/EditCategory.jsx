import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditCategory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Computer and Accessories',
    description:
      "A computer's hardware is the physical parts of the computer, while accessories, also known as peripherals, are external devices that enhance the computer's functionality and usability:",
    thumbnail: null,
    previewUrl:
      'https://demo.alicom.app/storage/categories/AyS89EbI8YMdKoDNtPiT1ksgXD9Dljk4VHvn0Fzo.jpg',
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      thumbnail: file,
      previewUrl: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle API submission logic here
    console.log('Form submitted:', formData);
    alert('Category updated (dummy handler)');
  };

  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="page-title">
          <div className="d-flex gap-2 align-items-center">
            <i className="fa-solid fa-border-all"></i> Edit Category
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="d-flex gap-2 border-bottom pb-2">
                    <i className="fa-solid fa-user"></i>
                    <h5>Category Information</h5>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      required
                      maxLength="255"
                    />
                  </div>

                  <div className="mt-3 d-flex align-items-center justify-content-center">
                    <div className="ratio1x1">
                      <img
                        id="previewProfile"
                        src={formData.previewUrl}
                        alt="Preview"
                        width="100%"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="thumbnail" className="form-label">
                      Thumbnail (Ratio 1:1)
                    </label>
                    <input
                      type="file"
                      name="thumbnail"
                      id="thumbnail"
                      className="form-control"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      placeholder="Enter description"
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="mt-5 d-flex gap-2 justify-content-between">
                    <button
                      type="button"
                      className="btn btn-secondary py-2 px-4"
                      onClick={() => navigate('/admin/products/categories/category')}
                    >
                      Back
                    </button>
                    <button type="submit" className="btn btn-primary py-2 px-4">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
