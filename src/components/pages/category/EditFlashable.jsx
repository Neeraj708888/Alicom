import React from 'react';
import { Link } from 'react-router-dom';

const EditFlashable = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">

                <div className="page-title">
                    <div className="d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-bolt"></i> Edit Flashsale
                    </div>
                </div>
                <form action="https://demo.alicom.app/admin/flash-sale/3/update" method="POST" encType="multipart/form-data">
                    <input type="hidden" name="_token" value="tV3DG0ZEMAqi7endm0MQXiCLPq0SAhKnrlT580Me" autoComplete="off" />
                    <input type="hidden" name="_method" value="PUT" />
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div>
                                        <div>
                                            <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                                            <input type="text" name="name" id="name" className="form-control" value="" placeholder="Enter name" required maxLength="255" />
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <div>
                                            <label htmlFor="discount" className="form-label">Minimum Discount <span className="text-danger">*</span></label>
                                            <input type="text" name="discount" id="discount" className="form-control" value="10" placeholder="Enter discount" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} required maxLength="255" />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12 col-md-6 mb-3">
                                            <div>
                                                <label htmlFor="start_date" className="form-label">Start Date <span className="text-danger">*</span></label>
                                                <input type="text" name="start_date" id="datepicker" className="form-control hasDatepicker" value="" placeholder="mm/dd/yyyy" required maxLength="255" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <div>
                                                <label htmlFor="start_time" className="form-label">Start Time <span className="text-danger">*</span></label>
                                                <input type="time" name="start_time" id="timepicker" className="form-control ui-timepicker-input" value="19:00:00" placeholder="" required maxLength="255" autoComplete="off" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-6 mb-3">
                                            <div>
                                                <label htmlFor="end_date" className="form-label">End Date <span className="text-danger">*</span></label>
                                                <input type="text" name="end_date" id="datepicker2" className="form-control hasDatepicker" value="" placeholder="mm/dd/yyyy" required maxLength="255" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <div>
                                                <label htmlFor="end_time" className="form-label">End Time <span className="text-danger">*</span></label>
                                                <input type="time" name="end_time" id="timepicker2" className="form-control ui-timepicker-input" value="02:30:00" placeholder="" required maxLength="255" autoComplete="off" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="form-label mb-1">
                                            Description
                                            <span className="text-danger">*</span>
                                        </label>
                                        <textarea required name="description" className="form-control" rows="3" placeholder="Enter short description">vhghg</textarea>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div>
                                        <h5>
                                            Thumbnail
                                            <span className="text-primary">(Ratio 3:2 (600 x 400 px))</span>
                                            <span className="text-danger">*</span>
                                        </h5>
                                    </div>

                                    <label htmlFor="thumbnail" className="flashsaleThumbnail">
                                        {/* Thumbnail image will be handled here */}
                                        <img src="https://demo.alicom.app/storage/flash_sales/cJkOAroEG9IW3QOa9qoOKl4t4PT9xZLfMYNR72ZX.png" id="preview" alt="" width="100%"/>
                                    </label>
                                    <input id="thumbnail" accept="image/*" type="file" name="thumbnail" className="d-none" />
                                </div>
                            </div>

                        </div>

                        <div className="card-footer d-flex justify-content-between flex-wrap gap-2 py-3">
                            <Link to="/admin/products/categories/flash-sales" className="btn btn-light px-4 py-2">
                                Cancel
                            </Link>
                            <button type="submit" className="btn btn-primary rounded py-2 px-5">
                                Update
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default EditFlashable;
