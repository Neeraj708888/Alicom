import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails = () => {
    return (
            <div className="container-fluid">
                <div>
                    <h4>Profile Details</h4>
                </div>

                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                        <img
                                            src="https://demo.alicom.app/storage/users/profile/IVLmKQQeJnrT7rd1FemiXAxwB3Wi9CQbNVGyhJta.jpg"
                                            alt="Avatar"
                                            className="img-fluid mt-5 mb-3"
                                            style={{ width: '80px' }}
                                        />
                                        <h5>Hilary Admin</h5>
                                        <Link to="/admin/profile/edit" className="btn btn-sm btn-primary">
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    <p className="text-muted">root@alicom.com</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Phone</h6>
                                                    <p className="text-muted">9595364574</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Gender</h6>
                                                    <p className="text-muted">female</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Date of Birth</h6>
                                                    <p className="text-muted">1990-01-06</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProfileDetails;
