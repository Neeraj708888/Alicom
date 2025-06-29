import React, { useState } from 'react';

const Verification = () => {
    const [formData, setFormData] = useState({
        registerOtp: true,
        registerOtpType: 'phone',
        forgotOtpType: 'phone',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
            <div className="container-fluid">
                <div className="page-title">
                    <div className="d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-unlock"></i> Verification OTP Settings
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-9">
                        <form action="https://demo.alicom.app/admin/verification/update" method="POST" onSubmit={handleSubmit}>
                            <input type="hidden" name="_token" value="rd4xY81tGbkRo84FFAufqg3m1sIQBTBUcszhnDYM" autoComplete="off" />

                            {/* Business Information */}
                            <div className="card mt-4">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-2 border-bottom pb-2">
                                        <i className="bi bi-briefcase-fill"></i>
                                        <h5 className="mb-0">Registration</h5>
                                    </div>

                                    <div className="border rounded p-2 d-flex align-items-center justify-content-between gap-2 flex-wrap mt-3" style={{ maxWidth: '400px' }}>
                                        <span>Customer Registration OTP Verify</span>
                                        <label className="switch mb-0">
                                            <input id="toggle" type="checkbox" name="registerOtp" checked={formData.registerOtp} onChange={handleChange} />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4 mt-4">
                                            <label className="form-label">Register OTP Send Method</label>
                                            <div className="d-flex flex-wrap align-items-center gap-5 border rounded fw-medium" style={{ padding: '10px' }}>
                                                <div className="flex-grow-1 d-flex align-items-center gap-1">
                                                    <input type="radio" name="registerOtpType" value="phone" className="form-check-input m-0" id="single" checked={formData.registerOtpType === 'phone'} onChange={handleChange} />
                                                    <label htmlFor="single" className="m-0 cursor-pointer">Phone</label>
                                                </div>

                                                <div className="flex-grow-1 d-flex align-items-center gap-1">
                                                    <input type="radio" name="registerOtpType" value="email" className="form-check-input m-0" id="emailRegisterOTP" checked={formData.registerOtpType === 'email'} onChange={handleChange} />
                                                    <label htmlFor="emailRegisterOTP" className="m-0 cursor-pointer">Email</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 mt-4">
                                            <label className="form-label">Forget Password OTP Send Method</label>
                                            <div className="d-flex flex-wrap align-items-center gap-5 border rounded fw-medium" style={{ padding: '10px' }}>
                                                <div className="flex-grow-1 d-flex align-items-center gap-1">
                                                    <input type="radio" name="forgotOtpType" value="phone" className="form-check-input m-0" id="forgetOTPPhone" checked={formData.forgotOtpType === 'phone'} onChange={handleChange} />
                                                    <label htmlFor="forgetOTPPhone" className="m-0 cursor-pointer">Phone</label>
                                                </div>

                                                <div className="flex-grow-1 d-flex align-items-center gap-1">
                                                    <input type="radio" name="forgotOtpType" value="email" className="form-check-input m-0" id="forgetOTPEmail" checked={formData.forgotOtpType === 'email'} onChange={handleChange} />
                                                    <label htmlFor="forgetOTPEmail" className="m-0 cursor-pointer">Email</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-end mt-4">
                                        <button type="submit" className="btn btn-primary py-2 px-3">Save And Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Verification;
