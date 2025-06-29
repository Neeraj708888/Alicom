import React from 'react';
import DescriptionEditor from './DescriptionEditor';

const AddNewProduct = () => {
    return (
        <form encType="multipart/form-data">
            <input type="hidden" name="_token" value="rD0iJSOVPdIVC9h2aYzTpwd1O05olEQKQHFyNwvX" autoComplete="off" />
            <div className="card mt-3 mb-4">
                <div className="card-body">
                    <div>
                        <div>
                            <label htmlFor="name" className="form-label">Product Name <span className="text-danger">*</span></label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Enter Product Name" required maxLength="255" />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="short_description">
                            Short Description
                            <span className="text-danger">*</span>
                        </label>
                        <textarea required name="short_description" className="form-control" rows="2" placeholder="Enter short description"></textarea>
                    </div>

                  <DescriptionEditor />

                </div>
            </div>

            {/* General Information */}
            <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex gap-2 border-bottom pb-2">
                                <i className="fa-solid fa-user"></i>
                                <h5>General Information</h5>
                            </div>

                            <div className="row mt-3">
                                {/* Select Category */}
                                <div className="col-md-6 col-lg-4">
                                    <label className="form-label">Select Category <span className="text-danger">*</span></label>
                                    <select name="category" className="form-select">
                                        <option value="" disabled>Select Category</option>
                                        <option value="1">Computer and Accessories</option>
                                        <option value="2">Baby and Kids</option>
                                        <option value="11">Salut</option>
                                        <option value="12">Electronics</option>
                                    </select>
                                </div>

                                {/* Select Sub Categories */}
                                <div className="col-md-6 col-lg-4">
                                    <label className="form-label">Select Sub Category</label>
                                    <select name="sub_category" className="form-select">
                                        <option value="" disabled>Select Sub Category</option>
                                        <option value="5">Triathlon male athlete cycle</option>
                                        <option value="6">Kids pink toy</option>
                                        <option value="7">Electronics Accessories</option>
                                        <option value="8">Mobile Covers</option>
                                        <option value="9">Gaming Consoles</option>
                                        <option value="10">School Stationery</option>
                                        <option value="11">Boys Clothing</option>
                                        <option value="12">Girls Shoes</option>
                                        <option value="13">Laptops</option>
                                        <option value="14">Baby Health</option>
                                        <option value="15">Outdoor Gear</option>
                                    </select>
                                </div>

                                {/* Select Brand */}
                                <div className="col-md-6 col-lg-4 mt-3 mt-md-0">
                                    <label htmlFor="brand" className="form-label">Select Brand</label>
                                    <select name="brand" id="brand" className="form-select">
                                        <option value="">Select Brand</option>
                                        <option value="2">Burberry</option>
                                        <option value="3">GUCCHi</option>
                                        <option value="4">Adidas</option>
                                        <option value="5">NIKE</option>
                                        <option value="7" selected>HP</option>
                                        <option value="15">Hikvision</option>
                                        <option value="16">Anivya Creations</option>
                                    </select>
                                </div>

                                {/* Select Color */}
                                <div className="col-md-6 col-lg-4 mt-4">
                                    <label className="form-label">Select Color</label>
                                    <select name="color" className="form-select">
                                        <option value="" disabled>Select Color</option>
                                        <option value="1">Black</option>
                                        <option value="3">Green</option>
                                        <option value="4">Blue</option>
                                    </select>
                                </div>

                                {/* Select Unit */}
                                <div className="col-lg-4 col-md-6 mt-4">
                                    <label htmlFor="unit" className="form-label">Select Unit</label>
                                    <select name="unit" id="unit" className="form-select">
                                        <option value="">Select Unit</option>
                                        <option value="1">Price</option>
                                        <option value="2">Kg</option>
                                        <option value="3">Item</option>
                                        <option value="4" selected>Kilogram</option>
                                        <option value="5">Meter</option>
                                        <option value="6">Kelvin</option>
                                        <option value="7">Page</option>
                                    </select>
                                </div>

                                {/* Select Size */}
                                <div className="col-md-6 col-lg-4 mt-4">
                                    <label className="form-label">Select Color</label>
                                    <select name="color" className="form-select">
                                        <option value="" disabled>Select Color</option>
                                        <option value="1">S</option>
                                        <option value="3">M</option>
                                        <option value="4">L</option>
                                        <option value="4">XL</option>
                                        <option value="4">XXL</option>
                                        <option value="4">3XL</option>
                                        <option value="4">4XL</option>
                                    </select>
                                </div>

                                {/* Product SKU with Generate Code */}
                                <div className="col-md-6 col-lg-4 mt-4">
                                    <label className="form-label d-flex align-items-center gap-2 justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span>Product SKU <span className="text-danger">*</span></span>
                                            <span className="info" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Create a unique product code. This will be used to generate a barcode">
                                                <i className="bi bi-info"></i>
                                            </span>
                                        </div>
                                        <span className="text-primary cursor-pointer" onClick={() => { /* Generate code */ }}>
                                            Generate Code
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="barcode"
                                        name="code"
                                        placeholder="Ex: 134543"
                                        className="form-control"
                                        value="77989"
                                        onInput={(e) =>
                                        (e.target.value = e.target.value
                                            .replace(/[^0-9.]/g, "")
                                            .replace(/(\..*?)\..*/g, "$1"))
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

            {/* Price Information */}
            <div className="card mt-4 mb-4">
                <div className="card-body">
                    <div className="d-flex gap-2 border-bottom pb-2">
                        <i className="fa-solid fa-user"></i>
                        <h5>Price Information</h5>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-3 col-md-6">
                            <div>
                                <label htmlFor="buy_price" className="form-label">Buying Price <span className="text-danger">*</span></label>
                                <input type="text" name="buy_price" id="buy_price" className="form-control" placeholder="Buying Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} required maxLength="255" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div>
                                <label htmlFor="price" className="form-label">Selling Price <span className="text-danger">*</span></label>
                                <input type="text" name="price" id="price" className="form-control" placeholder="Selling Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} required maxLength="255" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                            <div>
                                <label htmlFor="discount_price" className="form-label">Discount Price</label>
                                <input type="text" name="discount_price" id="discount_price" className="form-control" placeholder="Discount Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} maxLength="255" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                            <div>
                                <label htmlFor="quantity" className="form-label">Current Stock Quantity <span className="text-danger">*</span></label>
                                <input type="text" name="quantity" id="quantity" className="form-control" placeholder="Current Stock Quantity" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} required maxLength="255" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                            <div>
                                <label htmlFor="min_order_quantity" className="form-label">Minimum Order Quantity</label>
                                <input type="text" name="min_order_quantity" id="min_order_quantity" className="form-control" placeholder="Minimum Order Quantity" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} maxLength="255" />
                            </div>
                        </div>
                    </div>

                    <div className="row" id="attribute-prices-container">
                        {/* Size wise price table */}
                        <div className="mt-4 border rounded p-0 position-relative overflow-hidden" id="size-prices-box" style={{ display: 'none' }}>
                            <p className="fw-bold fs-5 p-2 bg-light">Size wise extra price</p>
                            <table className="table mb-0" style={{ overflow: 'auto' }}>
                                <thead>
                                    <tr>
                                        <th>Size</th>
                                        <th>Extra Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="size-prices-list"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thumbnail Information */}
            <div className="row mb-3">
                <div className="col-md-5 col-xl-3">
                    <div className="card card-body h-100">
                        <div className="mb-2">
                            <h5>
                                Thumbnail
                                <span className="text-primary">(Ratio 1:1 (500 x 500 px))</span>
                                <span className="text-danger">*</span>
                            </h5>
                        </div>

                        <label htmlFor="thumbnail" className="additionThumbnail">
                            <img src="https://placehold.co/500x500/f1f5f9/png" id="preview" alt="" width="100%" />
                        </label>
                        <input id="thumbnail" accept="image/*" type="file" name="thumbnail" className="d-none" onChange={(event) => previewFile(event, 'preview')} />
                    </div>
                </div>
                <div className="col-md-7 col-xl-9 mt-3 mt-md-0">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="mb-2">
                                <h5>
                                    Additional Thumbnail
                                    <span className="text-primary">(Ratio 1:1 (500 x 500 px))</span>
                                    <span className="text-danger">*</span>
                                </h5>
                            </div>

                            <div className="d-flex flex-wrap gap-3" id="additional_thumbnails">
                                <div id="additional_thumbnail_0" data-index="0">
                                    <label htmlFor="additional_thumbnail_0_file" className="additionThumbnail">
                                        <img src="https://placehold.co/500x500/f1f5f9/png" id="preview_additional_thumbnail_0" alt="" width="100%" height="100%" />
                                        <button onClick={() => removeAdditionalThumbnail(0)} id="remove_additional_thumbnail_0" type="button" className="delete btn btn-sm btn-outline-danger" style={{ display: 'none' }}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        <button id="toggle_additional_thumbnail_0_color_select" onClick={() => toggleAdditionalThumbnailColorSelect(0)} type="button" className="btn btn-sm btn-outline-primary" style={{ position: 'absolute', top: '10px', left: '10px', display: 'none' }}>
                                            <i className="fas fa-palette"></i>
                                        </button>
                                        <div id="additional_thumbnail_0_color_select" className="d-none position-absolute bg-white" style={{ top: '40px', left: '10px' }}>
                                            <span className="p-2">No colors selected</span>
                                        </div>
                                    </label>
                                    <input id="additional_thumbnail_0_file" accept="image/*" type="file" className="d-none" onChange={(event) => previewAdditionalThumbnailFile(event, 0)} />
                                    <input id="additional_thumbnail_0_color_id" type="text" className="d-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-3 justify-content-end align-items-center mb-3">
                    <button type="reset" className="btn btn-outline-secondary rounded py-2">Reset</button>
                    <button type="submit" className="btn btn-primary rounded py-2 px-5">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default AddNewProduct;
