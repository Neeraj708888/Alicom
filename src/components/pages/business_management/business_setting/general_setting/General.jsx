import React, { useState } from 'react';
 
const General = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        currency: '',
        currencyPosition: 'prefix',
        mobile: '',
        email: '',
        address: '',
        googlePlaystoreUrl: '',
        appStoreUrl: '',
        footerPhone: '',
        footerEmail: '',
        footerText: 'All right reserved by RazinSoft',
        footerDescription: 'The ultimate all-in-one solution for your eCommerce business worldwide.',
    });
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };
 
    return (
        <div className="app-main-inner">
            <div className="container-fluid">
                <h4 className="mb-3">Roles &amp; Permissions</h4>
 
                <form action="https://demo.alicom.app/admin/generale-setting" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor="name" className="form-label">Website Name</label>
                                        <input type="text" name="name" id="name" className="form-control" value={formData.name} placeholder="Enter Website Name" maxLength="255" onChange={handleChange} />
                                    </div>
 
                                    <div className="mt-4">
                                        <label htmlFor="title" className="form-label">Website Title</label>
                                        <input type="text" name="title" id="title" className="form-control" value={formData.title} placeholder="Enter Website Title for title bar" maxLength="255" onChange={handleChange} />
                                    </div>
 
                                    <div className="row mt-4">
                                        <div className="col-sm-6">
                                            <div>
                                                <label htmlFor="currency" className="form-label">Currency Symbol</label>
                                                <input type="text" name="currency" id="currency" className="form-control" value={formData.currency} placeholder="Enter Currency Symbol for price" maxLength="255" onChange={handleChange} />
                                            </div>
                                        </div>
 
                                        <div className="col-sm-6 mt-4 mt-sm-0">
                                            <div>
                                                <label htmlFor="currency_position" className="form-label">Currency Position</label>
                                                <select name="currencyPosition" id="currency_position" className="form-control" value={formData.currencyPosition} onChange={handleChange}>
                                                    <option value="prefix">Prefix</option>
                                                    <option value="suffix">Suffix</option>
                                                </select>
                                            </div>
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
                                                <input type="file" name="logo" id="logo" className="form-control" onChange={(e) => {/* Handle logo preview */}} />
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
                                                <input type="file" name="favicon" id="favicon" className="form-control" onChange={(e) => {/* Handle favicon preview */}} />
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
                                        <input type="file" name="app_logo" id="app_logo" className="form-control" onChange={(e) => {/* Handle app logo preview */}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
 
                    {/* Other Information */}
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-2 border-bottom pb-2">
                                <i className="bi bi-app-indicator"></i>
                                <h5 className="mb-0">Others Information</h5>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                        <input type="number" name="mobile" id="mobile" className="form-control" value={formData.mobile} placeholder="Enter Mobile Number" maxLength="255" onChange={handleChange} />
                                    </div>
                                </div>
 
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div>
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input type="email" name="email" id="email" className="form-control" value={formData.email} placeholder="Enter Email Address" maxLength="255" onChange={handleChange} />
                                    </div>
                                </div>
 
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div>
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input type="text" name="address" id="address" className="form-control" value={formData.address} placeholder="Enter Address" maxLength="255" onChange={handleChange} />
                                    </div>
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
                                        <input id="toggle" type="checkbox" name="show_download_app" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6 mt-3">
                                    <label className="mb-1">Google Playstore App Link</label>
                                    <textarea name="google_playstore_url" className="form-control" rows="3" placeholder="Enter Google Playstore App Link" value={formData.googlePlaystoreUrl} onChange={handleChange}></textarea>
                                </div>
 
                                <div className="col-md-6 mt-3">
                                    <label className="mb-1">Apple Store App Link</label>
                                    <textarea name="app_store_url" className="form-control" rows="3" placeholder="Enter Apple Store App Link" value={formData.appStoreUrl} onChange={handleChange}></textarea>
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
                                        <input id="toggle" type="checkbox" name="show_footer" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
 
                            <div className="row mt-3">
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <label htmlFor="footer_phone" className="form-label">Footer Mobile Number</label>
                                        <input type="number" name="footer_phone" id="footer_phone" className="form-control" value={formData.footerPhone} placeholder="Enter Mobile Number" maxLength="255" onChange={handleChange} />
                                    </div>
                                </div>
 
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div>
                                        <label htmlFor="footer_email" className="form-label">Footer Email Address</label>
                                        <input type="email" name="footer_email" id="footer_email" className="form-control" value={formData.footerEmail} placeholder="Enter Email Address" maxLength="255" onChange={handleChange} />
                                    </div>
                                </div>
 
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div>
                                        <label htmlFor="footer_text" className="form-label">Footer Text</label>
                                        <input type="text" name="footer_text" id="footer_text" className="form-control" value={formData.footerText} placeholder="Enter Footer Text" maxLength="255" onChange={handleChange} />
                                    </div>
                                </div>
 
                                <div className="col-lg-4 col-md-6 mt-4">
                                    <label className="mb-1">Frontend Footer Short Description</label>
                                    <textarea name="footer_description" className="form-control" rows="3" placeholder="Frontend Footer Short Description" value={formData.footerDescription} onChange={handleChange}></textarea>
                                </div>
 
                                <div className="col-md-6 col-lg-4 mt-4">
                                    <div className="mt-4 d-flex align-items-center justify-content-center">
                                        <div className="logoratio">
                                            <img id="previewFooterLogo" src="https://demo.alicom.app/assets/logoWhite.png" alt="" width="100%" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="footer_logo" className="form-label">Frontend Footer Logo Ratio 4:1</label>
                                        <input type="file" name="footer_logo" id="footer_logo" className="form-control" onChange={(e) => {/* Handle footer logo preview */}} />
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
                                        <input type="file" name="footer_qrcode" id="footer_qrcode" className="form-control" onChange={(e) => {/* Handle footer QR code preview */}} />
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
 
export default General;
 
 