import React from 'react';
import { Link } from 'react-router-dom';

const EditProfileDetails = () => {
    return (
            <div className="container-fluid">
                <div className="page-title">
                    <div className="d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-user"></i>Edit Profile
                    </div>
                </div>

                <form encType="multipart/form-data">
                    <input type="hidden" name="_token" value="OdiQPEUxvVLMj0tOBjlrfg0sPr9dQISyfPiALlC3" autoComplete="off" />
                    <input type="hidden" name="_method" value="PUT" />
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <div className="card mt-3">
                                <div className="card-body">
                                    <div className="d-flex gap-2 border-bottom pb-2">
                                        <i className="fa-solid fa-user"></i>
                                        <h5>User Information</h5>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="mt-3">
                                                <label htmlFor="name" className="form-label">Full Name <span className="text-danger">*</span></label>
                                                <input type="text" name="name" id="name" className="form-control" value="Hilary Admin" placeholder="Full Name" required maxLength="255" />
                                            </div>

                                            <div className="mt-3">
                                                <label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></label>
                                                <input type="number" name="phone" id="phone" className="form-control" value="9595364574" placeholder="Enter phone number" required maxLength="255" />
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mt-3">
                                                        <label htmlFor="gender" className="form-label">Gender</label>
                                                        <select name="gender" id="gender" className="form-control" style={{ width: '100%' }}>
                                                            <option value="male">Male</option>
                                                            <option value="female" selected>Female</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mt-3">
                                                        <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
                                                        <input type="date" name="date_of_birth" id="date_of_birth" className="form-control" value="1990-01-06" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-3">
                                                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                <input type="email" name="email" id="email" className="form-control" value="root@alicom.com" placeholder="Enter Email Address" required readOnly maxLength="255" />
                                            </div>
                                        </div>

                                        <div className="col-lg-5">
                                            <div className="mt-3 mt-lg-5 d-flex align-items-center justify-content-center">
                                                <div className="ratio1x1 mt-lg-5">
                                                    <img id="previewProfile" src="https://demo.alicom.app/storage/users/profile/IVLmKQQeJnrT7rd1FemiXAxwB3Wi9CQbNVGyhJta.jpg" alt="" style={{ width: '100%' }} />
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <label htmlFor="profile_photo" className="form-label">User  profile (Ratio 1:1)</label>
                                                <input type="file" name="profile_photo" id="profile_photo" className="form-control" onChange={(event) => previewFile(event, 'previewProfile')} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mt-4">
                                        <Link to="/admin/profile" className="btn btn-light py-2 px-4">
                                            <i className="bi bi-arrow-left"></i> Back
                                        </Link>
                                        <button type="submit" className="btn btn-primary py-2 px-4">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default EditProfileDetails;

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
