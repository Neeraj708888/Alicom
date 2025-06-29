import React from 'react';

const AdminSetting = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">
                <div className="page-title">
                    <div className="d-flex gap-2 align-items-center">
                        <i className="bi bi-gear-fill"></i> Admin Settings
                    </div>
                </div>
                <form>
                    <input type="hidden" name="_token" value="OdiQPEUxvVLMj0tOBjlrfg0sPr9dQISyfPiALlC3" autoComplete="off" />
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor="name" className="form-label">Website Name</label>
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Enter Website Name" maxLength="255" />
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="title" className="form-label">Website Title</label>
                                        <input type="text" name="title" id="title" className="form-control" placeholder="Enter Website Title for title bar" maxLength="255" />
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-sm-6">
                                            <label htmlFor="currency" className="form-label">Currency Symbol</label>
                                            <input type="text" name="currency" id="currency" className="form-control" placeholder="Enter Currency Symbol for price" maxLength="255" />
                                        </div>

                                        <div className="col-sm-6 mt-4 mt-sm-0">
                                            <label htmlFor="currency_position" className="form-label">Currency Position</label>
                                            <select name="currency_position" id="currency_position" className="form-control" style={{ width: '100%' }}>
                                                <option value="prefix" selected>Prefix</option>
                                                <option value="suffix">Suffix</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-sm-6 mt-4 mt-sm-5">
                                            <div className="mt-3 d-flex align-items-center justify-content-center">
                                                <div className="logoratio">
                                                    <img id="previewLogo" src="https://demo.alicom.app/storage/logo/Xjd351SVOEDXdwp70TA5mysABikxeUwFMVW9isbF.svg" alt="" width="100%" loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <label htmlFor="logo" className="form-label">Logo Ratio 4:1 (200x50)</label>
                                                <input type="file" name="logo" id="logo" className="form-control" onChange={(event) => previewFile(event, 'previewLogo')} />
                                            </div>
                                        </div>

                                        <div className="col-sm-6 mt-4">
                                            <div className="mt-3 d-flex align-items-center justify-content-center">
                                                <div className="logoFav">
                                                    <img id="previewFavicon" src="https://demo.alicom.app/assets/favicon.png" alt="" width="100%" loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <label htmlFor="favicon" className="form-label">Favicon (300x300)</label>
                                                <input type="file" name="favicon" id="favicon" className="form-control" onChange={(event) => previewFile(event, 'previewFavicon')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 mt-4">
                                    <div className="mt-3 d-flex align-items-center justify-content-center">
                                        <div className="logoFav">
                                            <img id="previewAppIcon" src="https://demo.alicom.app/assets/favicon.png" alt="" width="100%" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="app_logo" className="form-label">App Logo (300x300)</label>
                                        <input type="file" name="app_logo" id="app_logo" className="form-control" onChange={(event) => previewFile(event, 'previewAppIcon')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Others Information */}
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-2 border-bottom pb-2">
                                <i className="bi bi-app-indicator"></i>
                                <h5 className="mb-0">Others Information</h5>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-4 col-md-6">
                                    <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                    <input type="number" name="mobile" id="mobile" className="form-control" placeholder="Enter Mobile Number" maxLength="255" />
                                </div>

                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Enter Email Address" maxLength="255" />
                                </div>

                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" name="address" id="address" className="form-control" placeholder="Enter Address" maxLength="255" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Download App Link */}
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-2">
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-app-indicator"></i>
                                    <h5 className="mb-0">Download App Link</h5>
                                </div>
                                <div>
                                    <label className="m-0 fw-bold" htmlFor="toggle">Show/Hide Download App</label>
                                    <label className="switch mb-0">
                                        <input id="toggle" type="checkbox" name="show_download_app" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6 mt-3">
                                    <label className="mb-1">Google Playstore App Link</label>
                                    <textarea name="google_playstore_url" className="form-control" rows="3" placeholder="Enter Google Playstore App Link"></textarea>
                                </div>

                                <div className="col-md-6 mt-3">
                                    <label className="mb-1">Apple Store App Link</label>
                                    <textarea name="app_store_url" className="form-control" rows="3" placeholder="Enter Apple Store App Link"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Information */}
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-2">
                                <div className="d-flex align-items-center gap-1">
                                    <i className="bi bi-align-bottom"></i>
                                    <h5 className="mb-0">Footer Section Info</h5>
                                </div>
                                <div>
                                    <label className="m-0 fw-bold" htmlFor="toggle">Show/Hide Footer Section</label>
                                    <label className="switch mb-0">
                                        <input id="toggle" type="checkbox" name="show_footer" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-4 col-md-6">
                                    <label htmlFor="footer_phone" className="form-label">Footer Mobile Number</label>
                                    <input type="number" name="footer_phone" id="footer_phone" className="form-control" placeholder="Enter Mobile Number" maxLength="255" />
                                </div>

                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <label htmlFor="footer_email" className="form-label">Footer Email Address</label>
                                    <input type="email" name="footer_email" id="footer_email" className="form-control" placeholder="Enter Email Address" maxLength="255" />
                                </div>

                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <label htmlFor="footer_text" className="form-label">Footer Text</label>
                                    <input type="text" name="footer_text" id="footer_text" className="form-control" placeholder="Enter Footer Text" maxLength="255" defaultValue="All right reserved by RazinSoft" />
                                </div>

                                <div className="col-lg-4 col-md-6 mt-4">
                                    <label className="mb-1">Frontend Footer Short Description</label>
                                    <textarea name="footer_description" className="form-control" rows="3" placeholder="Frontend Footer Short Description">The ultimate all-in-one solution for your eCommerce business worldwide.</textarea>
                                </div>

                                <div className="col-md-6 col-lg-4 mt-4">
                                    <div className="mt-4 d-flex align-items-center justify-content-center">
                                        <div className="logoratio">
                                            <img id="previewFooterLogo" src="https://demo.alicom.app/assets/logoWhite.png" alt="" width="100%" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="footer_logo" className="form-label">Frontend Footer Logo Ratio 4:1</label>
                                        <input type="file" name="footer_logo" id="footer_logo" className="form-control" onChange={(event) => previewFile(event, 'previewFooterLogo')} />
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 mt-4">
                                    <div className="mt-2 d-flex align-items-center justify-content-center">
                                        <div className="logoFav">
                                            <img id="footerqrcode" src="https://placehold.co/200x200/png" alt="" width="100%" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="footer_qrcode" className="form-label">Frontend Scan the QR (200x200)</label>
                                        <input type="file" name="footer_qrcode" id="footer_qrcode" className="form-control" onChange={(event) => previewFile(event, 'footerqrcode')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end mt-4 mb-3">
                        <button type="submit" className="btn btn-primary py-2 px-3">Save And Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Function to preview the uploaded file
const previewFile = (event, previewId) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        document.getElementById(previewId).src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    }
};

export default AdminSetting;
