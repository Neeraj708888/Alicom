import React from 'react';

const ChangePassword = () => {
    return (
            <div className="container-fluid">
                <div className="container-fluid my-4 my-md-0">
                    <div className="row d-flex align-items-center h-100vh">
                        <div className="col-md-8 col-lg-7 m-auto">
                            <form>
                                <input type="hidden" name="_token" value="OdiQPEUxvVLMj0tOBjlrfg0sPr9dQISyfPiALlC3" autoComplete="off" />
                                <input type="hidden" name="_method" value="PUT" />
                                <div className="card shadow rounded-12 border-0">
                                    <div className="card-header py-3">
                                        <h4 className="m-0">Change Password</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="current_password" className="form-label">Current Password</label>
                                            <input type="password" name="current_password" id="current_password" className="form-control" placeholder="Current Password" maxLength="255" />
                                        </div>

                                        <div className="form-group mt-3">
                                            <label htmlFor="password" className="form-label">New Password</label>
                                            <input type="password" name="password" id="password" className="form-control" placeholder="Enter New Password" maxLength="255" />
                                        </div>

                                        <div className="form-group mt-3">
                                            <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                            <input type="password" name="password_confirmation" id="password_confirmation" className="form-control" placeholder="Enter Confirm Password" maxLength="255" />
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between py-3">
                                        <button type="submit" className="btn btn-primary py-2">Update Password</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ChangePassword;
