import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateSubCategory = () => {
    const [name, setName] = useState(''); // State for the name input

    const handleNameChange = (event) => {
        setName(event.target.value); // Update state on input change
    };

    return (
        <div className="app-main-inner" data-select2-id="select2-data-11-vbsd">
            <div className="container-fluid" data-select2-id="select2-data-10-56pe">

                <div className="page-title">
                    <div className="d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-border-all"></i> Create New Sub Category
                    </div>
                </div>
                <form action="https://demo.alicom.app/admin/subcategory/store" method="POST" encType="multipart/form-data" data-select2-id="select2-data-9-wvyd">
                    <input type="hidden" name="_token" value="rD0iJSOVPdIVC9h2aYzTpwd1O05olEQKQHFyNwvX" autoComplete="off" />
                    <div className="row" data-select2-id="select2-data-8-8oyu">
                        <div className="col-lg-8 m-auto" data-select2-id="select2-data-7-qi8d">
                            <div className="card mt-3" data-select2-id="select2-data-6-287y">
                                <div className="card-body" data-select2-id="select2-data-5-axa0">

                                    <div className="d-flex gap-2 border-bottom pb-2">
                                        <i className="fa-solid fa-user"></i>
                                        <h5>
                                            Sub Category Information
                                        </h5>
                                    </div>

                                    <div className="mt-3" data-select2-id="select2-data-4-mjo0">
                                        <label className="form-label">
                                            Select Category
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select name="category[]" data-placeholder="Select Category" className="form-control select2 select2-hidden-accessible" multiple="" style={{ width: '100%' }} required="" data-select2-id="select2-data-1-cm6o" tabIndex="-1" aria-hidden="true">
                                            <option value="" disabled="" data-select2-id="select2-data-16-3iv1">
                                                Select Category
                                            </option>
                                            <option value="1" data-select2-id="select2-data-17-1bf7">Computer and Accessories</option>
                                            <option value="2" data-select2-id="select2-data-18-h06r">Baby and Kids</option>
                                            <option value="11" data-select2-id="select2-data-19-wnxs">Salut</option>
                                            <option value="12" data-select2-id="select2-data-20-i1o5">Electronics</option>
                                            <option value="13" data-select2-id="select2-data-21-4de2">فساتين حفلات</option>
                                            <option value="14" data-select2-id="select2-data-22-rjmw">Grocery</option>
                                            <option value="15" data-select2-id="select2-data-23-117a">google pixel</option>
                                            <option value="16" data-select2-id="select2-data-24-5zat">Bhuvantech</option>
                                            <option value="18" data-select2-id="select2-data-25-7x76">CCTV Products</option>
                                            <option value="19" data-select2-id="select2-data-26-3jyc">Laptops</option>
                                            <option value="20" data-select2-id="select2-data-27-gfi1">Shirt</option>
                                        </select>
                                    </div>

                                    <div className="mt-3">
                                        <div>
                                            <label htmlFor="name" className="form-label">Name  <span className="text-danger">*</span> </label>
                                            <input type="text" name="name" id="name" className="form-control" value={name} onChange={handleNameChange} placeholder="Name" required="" maxLength="255" />
                                        </div>
                                    </div>

                                    <div className="mt-3 d-flex align-items-center justify-content-center">
                                        <div className="ratio1x1">
                                            <img id="previewProfile" src="https://placehold.co/500x500/f1f5f9/png" alt="" width="100%" />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div>
                                            <label htmlFor="thumbnail" className="form-label">
                                                Thumbnail (Ratio 1:1)
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="file" name="thumbnail" id="thumbnail" className="form-control" onChange={(event) => previewFile(event, 'previewProfile')} required="" />
                                        </div>
                                    </div>

                                    <div className="mt-5 d-flex gap-2 justify-content-between">
                                        <Link to="/admin/products/categories/sub-category" className="btn btn-secondary py-2 px-4">
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
}

export default CreateSubCategory;
