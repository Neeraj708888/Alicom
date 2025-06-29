import React from 'react';
import { Link } from 'react-router-dom';

const EditProducts = () => {
    return (
            <div className="container-fluid">
                <div className="page-title">
                    <div className="d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-shop"></i> Edit Product
                    </div>
                </div>
                <form action="https://demo.alicom.app/admin/product/20/update" method="POST" encType="multipart/form-data">
                    <input type="hidden" name="_token" value="JYv841snx1a6Dk3xsvst43lUF4eymdncYdudVi5b" autoComplete="off" />
                    <input type="hidden" name="_method" value="PUT" />
                    <div className="card mt-3 mb-4">
                        <div className="card-body">
                            <div>
                                <div>
                                    <label htmlFor="name" className="form-label">Product Name <span className="text-danger">*</span></label>
                                    <input type="text" name="name" id="name" className="form-control" value="hoh" placeholder="Product Name" required maxLength="255" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <label htmlFor="short-description">Short Description <span className="text-danger">*</span></label>
                                <textarea name="short_description" className="form-control" rows="2" placeholder="Short Description">hoh</textarea>
                            </div>

                            <div className="mt-3">
                                <label htmlFor="description">Description <span className="text-danger">*</span></label>
                                <textarea name="description" id="editor" style={{ display: 'none' }}>&lt;p&gt;hoho&lt;/p&gt;</textarea>
                                <div className="ck ck-editor__main" role="presentation">
                                    <div className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline" lang="en" dir="ltr" role="textbox" aria-label="Rich Text Editor. Editing area: main. Press Alt+0 for help." contentEditable="true">
                                        <p>hoho</p>
                                    </div>
                                </div>
                            </div>
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
                                    <label htmlFor="buy_price" className="form-label">Buying Price <span className="text-danger">*</span></label>
                                    <input type="text" name="buy_price" id="buy_price" className="form-control" value="79" placeholder="Buying Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} required maxLength="255" />
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <label htmlFor="price" className="form-label">Selling Price <span className="text-danger">*</span></label>
                                    <input type="text" name="price" id="price" className="form-control" value="77" placeholder="Selling Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} required maxLength="255" />
                                </div>

                                <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                                    <label htmlFor="discount_price" className="form-label">Discount Price</label>
                                    <input type="text" name="discount_price" id="discount_price" className="form-control" value="0" placeholder="Discount Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} maxLength="255" />
                                </div>

                                <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                    <label htmlFor="quantity" className="form-label">Current Stock Quantity <span className="text-danger">*</span></label>
                                    <input type="text" name="quantity" id="quantity" className="form-control" value="0" placeholder="Current Stock Quantity" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} required maxLength="255" />
                                </div>

                                <div className="col-lg-3 col-md-6 mt-3">
                                    <label htmlFor="min_order_quantity" className="form-label">Minimum Order Quantity</label>
                                    <input type="text" name="min_order_quantity" id="min_order_quantity" className="form-control" value="1" placeholder="Minimum Order Quantity" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} maxLength="255" />
                                </div>
                            </div>

                            {/* Size wise price table */}
                            <div className="mt-4 border rounded p-0 position-relative overflow-hidden" id="size-prices-box">
                                <p className="fw-bold fs-5 p-2 bg-light">Size wise extra price</p>
                                <table className="table mb-0" style={{ overflow: 'auto' }}>
                                    <thead>
                                        <tr>
                                            <th>Size</th>
                                            <th>Extra Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="size-prices-list">
                                        <tr id="size-4" style={{ display: 'table-row' }}>
                                            <td>
                                                <h4 className="mb-0 fs-6">XL</h4>
                                                <input type="hidden" name="size[4][name]" value="XL" />
                                                <input type="hidden" name="size[4][id]" value="4" />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="fw-bolder mainProductPrice">77</span>
                                                    <span className="bg-light px-2 py-1 rounded">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </span>
                                                    <input type="text" className="form-control extraPriceForm" name="size[4][price]" value="" style={{ width: '140px' }} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} disabled />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn circleIcon btn-outline-danger btn-sm" type="button" onClick={() => {/* Function to delete size row */ }}>
                                                    <i className="fa-solid fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Information */}
                    <div className="row mb-3">
                        <div className="col-md-5 col-xl-3">
                            <div className="card card-body h-100">
                                <div className="mb-2">
                                    <h5>Thumbnail <span className="text-primary">(Ratio 1:1 (500 x 500 px))</span> *</h5>
                                </div>
                                <label htmlFor="thumbnail" className="additionThumbnail">
                                    <img src="https://demo.alicom.app/storage/products/bGaIPI7bH1g83lo8gytkCSbaGFsyOnBtnXE6GoAl.webp" id="preview" alt="Thumbnail" width="100%" />
                                </label>
                                <input id="thumbnail" accept="image/*" type="file" name="thumbnail" className="d-none" onChange={(e) => {/* Function to preview file */ }} />
                            </div>
                        </div>

                        <div className="col-md-7 col-xl-9 mt-3 mt-md-0">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="mb-2">
                                        <h5>Additional Thumbnail <span className="text-primary">(Ratio 1:1 (500 x 500 px))</span> *</h5>
                                    </div>
                                    <div className="d-flex flex-wrap gap-3" id="additional_thumbnails">
                                        {/* Previous additional thumbnail */}
                                        <div id="previous_thumbnail_0" data-type="previous" data-index="0">
                                            <label htmlFor="previous_thumbnail_0_file" className="additionThumbnail">
                                                <img src="https://demo.alicom.app/storage/products/YEgjNv0bnvoe5Lqh7HHBrGbfrtG5OcTBayMIH91j.webp" id="preview_previous_thumbnail_0" alt="thumbnail" width="100%" height="100%" />
                                                <Link to="/" className="delete btn btn-sm btn-outline-danger">
                                                    <i className="fa fa-trash"></i>
                                                </Link>
                                                <button id="toggle_previous_thumbnail_0_color_select" onClick={() => {/* Function to toggle color select */ }} type="button" className="btn btn-sm btn-outline-primary" style={{ position: 'absolute', top: '10px', left: '10px', display: 'block' }}>
                                                    <i className="fas fa-palette"></i>
                                                </button>
                                                <div id="previous_thumbnail_0_color_select" className="d-none position-absolute bg-white" style={{ top: '40px', left: '10px' }}>
                                                    <span className="p-2">No colors selected</span>
                                                </div>
                                            </label>
                                            <input type="hidden" name="previous_thumbnails[0][id]" value="104" />
                                            <input id="previous_thumbnail_0_file" accept="image/*" type="file" name="previous_thumbnails[0][file]" className="d-none" onChange={(e) => {/* Function to preview file */ }} />
                                            <input id="previous_thumbnail_0_color_id" type="text" name="previous_thumbnails[0][color_id]" value="" className="d-none" />
                                        </div>

                                        {/* New additional thumbnail */}
                                        <div id="additional_thumbnail_0" data-type="additional" data-index="0">
                                            <label htmlFor="additional_thumbnail_0_file" className="additionThumbnail">
                                                <img src="https://demo.alicom.app/defualt/upload.png" id="preview_additional_thumbnail_0" alt="" width="100%" height="100%" />
                                                <button onClick={() => {/* Function to remove additional thumbnail */ }} id="remove_additional_thumbnail_0" type="button" className="delete btn btn-sm btn-outline-danger" style={{ display: 'none' }}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                                <button id="toggle_additional_thumbnail_0_color_select" onClick={() => {/* Function to toggle color select */ }} type="button" className="btn btn-sm btn-outline-primary" style={{ position: 'absolute', top: '10px', left: '10px', display: 'none' }}>
                                                    <i className="fas fa-palette"></i>
                                                </button>
                                                <div id="additional_thumbnail_0_color_select" className="d-none position-absolute bg-white" style={{ top: '40px', left: '10px' }}>
                                                    <span className="p-2">No colors selected</span>
                                                </div>
                                            </label>
                                            <input id="additional_thumbnail_0_file" accept="image/*" type="file" className="d-none" onChange={(e) => {/* Function to preview additional thumbnail file */ }} />
                                            <input id="additional_thumbnail_0_color_id" type="text" className="d-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex gap-3 justify-content-end align-items-center mb-3">
                                <button type="reset" className="btn btn-outline-secondary rounded py-2">Reset</button>
                                <button type="submit" className="btn btn-primary rounded py-2 px-5">Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default EditProducts;
