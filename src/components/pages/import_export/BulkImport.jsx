import React from 'react';
import { Link } from 'react-router-dom';

const BulkImport = () => {
    return (
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Bulk Product Imports</h4>
                </div>

                <div className="container-fluid mt-3">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#showInstraction"
                                    aria-expanded="false"
                                    aria-controls="showInstraction"
                                >
                                    <span
                                        className="info me-2"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Get instructions for bulk import"
                                    >
                                        <i className="bi bi-info"></i>
                                    </span>
                                    Get instructions
                                </button>
                            </h2>
                            <div
                                id="showInstraction"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className="row g-4">
                                        {/* Step 1 */}
                                        <div className="col-lg-6 col-xl-4">
                                            <div className="export-steps-item h-100">
                                                <div className="d-flex gap-3 justify-content-between align-items-center">
                                                    <div>
                                                        <h3 className="fz-20 text-dark">Step 1</h3>
                                                        <div>Download Excel File</div>
                                                    </div>
                                                    <img src="https://demo.alicom.app/assets/images/bulk-import-1.png" alt="" />
                                                </div>

                                                <h4 className="mt-3 text-dark fz-20">Instruction</h4>
                                                <ul className="m-0 pl-4">
                                                    <li>Please download the format file and fill it with the appropriate data.</li>
                                                    <li>To understand how to fill the data correctly, you can download the example file as a guide.</li>
                                                    <li>You need to upload the Excel file.</li>
                                                </ul>

                                                {/* <div className="mt-4">
                                                    <a href="https://demo.alicom.app/admin/bulk-product-export/demo" className="btn btn-primary py-2">
                                                        <i className="fa-solid fa-download"></i>
                                                        Download Template
                                                    </a>
                                                </div> */}

                                                 <div className="mt-4">
                                                    <Link to="https://demo.alicom.app/admin/bulk-product-export/demo" className="btn btn-primary py-2">
                                                        <i className="fa-solid fa-download"></i> Download Template
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Step 2 */}
                                        <div className="col-lg-6 col-xl-4">
                                            <div className="export-steps-item h-100">
                                                <div className="d-flex gap-3 justify-content-between align-items-center">
                                                    <div>
                                                        <h3 className="fz-20 text-dark">Step 2</h3>
                                                        <div>Match Spreadsheet data according to instruction</div>
                                                    </div>
                                                    <img src="https://demo.alicom.app/assets/images/bulk-import-2.png" alt="" />
                                                </div>

                                                <h4 className="mt-3 text-dark fz-20">Instruction</h4>
                                                <ul className="m-0 pl-4">
                                                    <li>Fill in the data according to the format.</li>
                                                    <li>Ensure the thumbnail image is properly uploaded and the image name follows the correct format. The accepted image formats are jpg, jpeg, png, and gif.</li>
                                                    <li>Adding a category is required and category is one. Make sure the category name is correct.</li>
                                                    <li>You have the option to add multiple subcategories. Make sure each subcategory name is accurate and separate the names with commas.</li>
                                                    <li>Adding a brand to the product entry is optional. If you include one, ensure you enter a single brand name accurately.</li>
                                                    <li>You can add multiple colors. Ensure each color name is correct and separate them with commas.</li>
                                                    <li>You can add multiple sizes. Ensure each size name is correct and separate them with commas.</li>
                                                    <li>Price is required and must be a number.</li>
                                                    <li>Discount price is optional and must be less than the original price.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Step 3 */}
                                        <div className="col-lg-6 col-xl-4">
                                            <div className="export-steps-item h-100">
                                                <div className="d-flex gap-3 justify-content-between align-items-center">
                                                    <div>
                                                        <h3 className="fz-20 text-dark">Step 3</h3>
                                                        <div>Validate data and complete import</div>
                                                    </div>
                                                    <img src="https://demo.alicom.app/assets/images/bulk-import-3.png" alt="" />
                                                </div>

                                                <h4 className="mt-3 text-dark fz-20">Instruction</h4>
                                                <ul className="m-0 pl-4">
                                                    <li>In the Excel file upload section first select the upload option.</li>
                                                    <li>Upload your file in .xlsx format.</li>
                                                    <li>If you have thumbnails, click the 'Select Gallery Folder' button. Next, choose the folder containing product thumbnails from the Excel file you have selected. Finally, click the 'Confirm and Import' button.</li>
                                                    <li>If you do not have thumbnails, click on the 'Import Without Gallery' button.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card my-3">
                        <div className="card-body text-center">
                            <h4 className="text-muted mb-3">Select Excel (xlsx) File to Import</h4>
                            <form action="https://demo.alicom.app/admin/bulk-product-import/store" method="POST" encType="multipart/form-data" id="bulkForm">
                                <input type="hidden" name="_token" value="OdiQPEUxvVLMj0tOBjlrfg0sPr9dQISyfPiALlC3" autoComplete="off" />
                                <div className="drop-zone mx-auto">
                                    <span className="drop-zone__prompt">
                                        <div className="icon">
                                            <i className="fa-solid fa-cloud-arrow-up"></i>
                                        </div>
                                        Drop file here or click to upload
                                    </span>
                                    <input name="file" type="file" className="drop-zone__input" accept=".xlsx" />
                                </div>

                                <div id="galler" style={{ display: "none" }}>
                                    <button type="submit" className="btn btn-primary mt-3 py-2">
                                        Import Without Gallery
                                    </button>

                                    <button type="button" className="btn btn-outline-primary mt-3 py-2" data-bs-toggle="modal" data-bs-target="#galleryModal">
                                        Select Gallery Folder
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="galleryModal" tabIndex="-1" aria-labelledby="galleryModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="galleryModalLabel">Select Gallery Folder</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ul className="mb-2">
                                    <li className="fw-medium">Select Gallery Folder that has product thumbnails in the selected Excel file</li>
                                </ul>

                                <div className="d-flex gap-3 flex-wrap mt-3">
                                    <button type="button" onClick={() => selectFolder('Downloads')} className="btn border galleryFolder">
                                        <div className="icon fs-3">
                                            <i className="fa-solid fa-folder"></i>
                                        </div>
                                        Downloads
                                    </button>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" onClick={() => submitForm()}>Confirm And Import</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal for generating CSV template */}
                <form action="https://demo.alicom.app/admin/bulk-product-format-export" method="GET">
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Generate CSV Template</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label htmlFor="">How many products do you want to import?</label>
                                    <input type="number" className="form-control" name="quantity" required placeholder="Enter quantity" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default BulkImport;
