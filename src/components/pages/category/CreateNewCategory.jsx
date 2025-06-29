import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateNewCategory = () => {
    const [preview, setPreview] = useState("https://placehold.co/500x500/f1f5f9/png");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can use FormData to post data to your backend here
        console.log("Form submitted");
    };

    return (
        <div className="app-main-inner">
            <div className="container-fluid">
                <div className="page-title">
                    <div className="d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-border-all"></i> Create New Category
                    </div>
                </div>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                            placeholder="Enter Name"
                                            required
                                            maxLength="255"
                                        />
                                    </div>

                                    <div className="mt-3 d-flex align-items-center justify-content-center">
                                        <div className="ratio1x1">
                                            <img
                                                id="previewProfile"
                                                src={preview}
                                                alt="Preview"
                                                width="100%"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <label htmlFor="thumbnail" className="form-label">
                                            Thumbnail (Ratio 1:1)
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="file"
                                            name="thumbnail"
                                            id="thumbnail"
                                            className="form-control"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            required
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
                                        ></textarea>
                                    </div>

                                    <div className="mt-5 d-flex gap-2 justify-content-between">
                                        <Link
                                            to="/admin/products/categories/category"
                                            className="btn btn-secondary py-2 px-4"
                                        >
                                            Back
                                        </Link>
                                        <button type="submit" className="btn btn-primary py-2 px-4">
                                            Submit
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

export default CreateNewCategory;
