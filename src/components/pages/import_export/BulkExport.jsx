import React from 'react';

const BulkExport = () => {
    return (
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Bulk Product Exports</h4>
                </div>

                <div className="container-fluid mt-3">
                    <div className="card" style={{ borderColor: 'rgba(231, 234, 243, 0.5)' }}>
                        <div className="card-body">
                            <div className="row g-4">
                                {/* Step 1 */}
                                <div className="col-lg-6 col-xl-4">
                                    <div className="export-steps-item h-100">
                                        <div className="d-flex gap-3 justify-content-between align-items-center">
                                            <div>
                                                <h3 className="fz-20 text-dark">Step 1</h3>
                                                <div>Select Data Type</div>
                                            </div>
                                            <img src="https://demo.alicom.app/assets/images/bulk-export-1.png" alt="" />
                                        </div>

                                        <h4 className="mt-3 text-dark fz-20">Instruction</h4>
                                        <ul className="m-0 pl-4">
                                            <li>
                                                Choose the data type to specify the order in which you want your data sorted when downloading.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="col-lg-6 col-xl-4">
                                    <div className="export-steps-item h-100">
                                        <div className="d-flex gap-3 justify-content-between align-items-center">
                                            <div>
                                                <h3 className="fz-20 text-dark">Step 2</h3>
                                                <div>Select Data Range by All and Export</div>
                                            </div>
                                            <img src="https://demo.alicom.app/assets/images/bulk-export-2.png" alt="" />
                                        </div>

                                        <h4 className="mt-3 text-dark fz-20">Instruction</h4>
                                        <ul className="m-0 pl-4">
                                            <li>When you download the file, it will be in .xlsx format.</li>
                                            <li>Click 'Reset' if you want to discard your changes and download the data sorted in the default order.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex gap-2 pb-2 mt-4">
                                <h5>
                                    <i className="fa-solid fa-file-import"></i>
                                    Export Products
                                </h5>
                            </div>

                            <form>
                                <input type="hidden" name="_token" value="OdiQPEUxvVLMj0tOBjlrfg0sPr9dQISyfPiALlC3" autoComplete="off" />
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label htmlFor="type" className="form-label">Type</label>
                                        <select name="type" id="type" className="form-select form-control">
                                            <option value="all">All Products</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 mt-3 justify-content-end">
                                    <button type="reset" className="btn btn-secondary py-2 px-3">Reset</button>
                                    <button type="submit" className="btn btn-primary py-2 px-3">Export</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BulkExport;
