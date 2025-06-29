import React, { useState } from 'react';

const Business = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        currencyPosition: 'prefix',
        estimatedDeliveryTime: '5',
        timezone: 'Asia/Dhaka',
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
                <div className="page-title">
                    <div className="d-flex gap-2 align-items-center">
                        <i className="bi bi-buildings"></i> Business Settings
                    </div>
                </div>

                <div className="mt-4">
                    <form action="https://demo.alicom.app/admin/business-setting" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                        <input type="hidden" name="_token" value="rd4xY81tGbkRo84FFAufqg3m1sIQBTBUcszhnDYM" autoComplete="off" />

                        {/* Business Information */}
                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center gap-2 border-bottom pb-2">
                                    <i className="bi bi-briefcase-fill"></i>
                                    <h5 className="mb-0">Business Information</h5>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4 mt-4">
                                        <label htmlFor="name" className="form-label">Company Name</label>
                                        <input type="text" name="name" id="name" className="form-control" value={formData.name} placeholder="Enter Company Name / Business Name" maxLength="255" onChange={handleChange} />
                                    </div>

                                    <div className="col-lg-4 mt-4">
                                        <label htmlFor="email" className="form-label">Company Email</label>
                                        <input type="text" name="email" id="email" className="form-control" value={formData.email} placeholder="Enter Company Email" maxLength="255" onChange={handleChange} />
                                    </div>

                                    <div className="col-lg-4 mt-4">
                                        <label htmlFor="mobile" className="form-label">Company Phone</label>
                                        <input type="text" name="mobile" id="mobile" className="form-control" value={formData.mobile} placeholder="Enter Company Phone" maxLength="255" onChange={handleChange} />
                                    </div>

                                    <div className="col-lg-4 mt-4">
                                        <label className="form-label">Currency Position</label>
                                        <div className="d-flex flex-wrap align-items-center gap-5 border rounded fw-medium" style={{ padding: '10px' }}>
                                            <div className="flex-grow-1">
                                                <input type="radio" name="currencyPosition" value="prefix" className="form-check-input" id="prefix" checked={formData.currencyPosition === 'prefix'} onChange={handleChange} />
                                                <label htmlFor="prefix" className="m-0">($) Left</label>
                                            </div>

                                            <div className="flex-grow-1 d-flex align-items-center gap-2">
                                                <input type="radio" name="currencyPosition" value="suffix" className="form-check-input" id="suffix" checked={formData.currencyPosition === 'suffix'} onChange={handleChange} />
                                                <label htmlFor="suffix" className="m-0">Right ($)</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mt-4">
                                        <label className="form-label">Payment with Reward Point</label>
                                        <div className="d-flex justify-content-between align-items-center border rounded fw-medium" style={{ padding: '10px' }}>
                                            <label htmlFor="toggle">Enable/Disable</label>
                                            <label className="switch mb-0">
                                                <input id="toggle" type="checkbox" name="payment_with_reward" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mt-4">
                                        <label htmlFor="estimated_delivery_time" className="form-label">Estimated Delivery Days <span className="text-danger">*</span></label>
                                        <input type="text" name="estimated_delivery_time" id="estimated_delivery_time" className="form-control" value={formData.estimatedDeliveryTime} placeholder="" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} required maxLength="255" onChange={handleChange} />
                                    </div>

                                    <div className="col-lg-4 mt-4">
                                        <label htmlFor="timezone" className="form-label">Time Zone</label>
                                        <select name="timezone" id="timezone" className="form-control" value={formData.timezone} onChange={handleChange}>
                                            <option value="Asia/Dhaka">UTC/GMT +06:00 - Asia/Dhaka</option>
                                            {/* Add other timezone options here */}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Theme Settings */}
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center gap-2 border-bottom pb-2">
                                            <i className="bi bi-palette-fill"></i>
                                            <h5 className="mb-0">Theme Color Settings</h5>
                                        </div>

                                        <div className="d-flex align-items-center gap-5 mt-4 flex-wrap">
                                            <div className="color-panel">
                                                <span className="color-input" style={{ background: '#22A699' }}></span>
                                                <p className="color">#22A699</p>
                                                <label htmlFor="primary_color" className="color-label">Primary Color</label>
                                            </div>

                                            <div className="color-panel">
                                                <span className="color-input" style={{ background: '#e9f6f5' }}></span>
                                                <p className="color">#e9f6f5</p>
                                                <label htmlFor="secondary_color" className="color-label">Secondary Color</label>
                                            </div>
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
        </div>
    );
};

export default Business;
