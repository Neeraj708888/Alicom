import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Employee = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Hilary Admin', phone: '9595364574', email: 'root@alicom.com', role: 'root', profileImg: 'https://demo.alicom.app/storage/users/profile/IVLmKQQeJnrT7rd1FemiXAxwB3Wi9CQbNVGyhJta.jpg' },
        { id: 2, name: 'alaa alaa', phone: '0123456789', email: 'alaa@gmail.com', role: 'root', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 3, name: 'ankit modi', phone: '08320549620', email: 'root@alicom.com', role: 'cashier', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 4, name: 'test one', phone: '0500577763', email: 'ahmedamore@gmail.com', role: 'fortest', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 5, name: 't', phone: '01909121213', email: 'N/A', role: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 6, name: 'masud idlsm', phone: '01672886562', email: 'itskaysar@gmail.com', role: 'female', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 7, name: 'Client author', phone: '12345678903', email: 'shakilvai@gmail.com', role: 'Male', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
    ]);

    const [resetPasswordData, setResetPasswordData] = useState({ id: null, name: '' });
    const [isResetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);

    const openResetPasswordModal = (id, name) => {
        setResetPasswordData({ id, name });
        setResetPasswordModalOpen(true);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Handle password reset logic here
        console.log('Reset password for:', resetPasswordData);
        setResetPasswordModalOpen(false);
    };

    return (
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between">
                    <h4>Employees</h4>
                    <Link to="/admin/User/Employee/create" className="btn btn-primary py-2.5">
                        <i className="fa fa-plus-circle"></i> Create New
                    </Link>
                </div>

                <div className="container-fluid mt-3">
                    <div className="mb-3 card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table border table-responsive-lg">
                                    <thead>
                                        <tr>
                                            <th className="text-center">SL.</th>
                                            <th>Profile</th>
                                            <th style={{ minWidth: '150px' }}>Name</th>
                                            <th style={{ minWidth: '100px' }}>Phone</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees.map((employee, index) => (
                                            <tr key={employee.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>
                                                    <img src={employee.profileImg} width="50" alt="Profile" />
                                                </td>
                                                <td>{employee.name}</td>
                                                <td>{employee.phone}</td>
                                                <td>{employee.email}</td>
                                                <td>
                                                    <span className={`badge text-bg-${employee.role === 'root' ? 'success' : 'secondary'}`}>{employee.role}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-2 justify-content-center">
                                                        <Link to='/admin/User/Employee/employee-permission' className="btn btn-primary btn-sm px-1 py-0" style={{ fontSize: '16px' }}>
                                                            <i className="fa-solid fa-user-lock"></i>
                                                        </Link>
                                                        <button className="btn btn-warning btn-sm" onClick={() => openResetPasswordModal(employee.id, employee.name)}>
                                                            <i className="fa-solid fa-key"></i>
                                                        </button>
                                                        <Link to='#' className="btn btn-danger btn-sm deleteConfirm">
                                                            <i className="fa fa-trash"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Reset Password Modal */}
                    {isResetPasswordModalOpen && (
                        <div className="modal fade show" style={{ display: 'block' }}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title fs-5">Reset Password <span>{resetPasswordData.name}</span></h4>
                                        <button type="button" className="btn-close" onClick={() => setResetPasswordModalOpen(false)}></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleResetPassword}>
                                            <div className="mb-3">
                                                <label htmlFor="password1" className="form-label">Password</label>
                                                <div className="position-relative passwordInput">
                                                    <input type="password" name="password" id="password1" className="form-control" required placeholder="Enter Password" />
                                                    <span className="eye" onClick={() => {/* Toggle password visibility */}}>
                                                        <i className="fa fa-eye-slash" id="togglePassword1"></i>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="password2" className="form-label">Confirm Password</label>
                                                <div className="position-relative passwordInput">
                                                    <input type="password" name="password_confirmation" id="password2" className="form-control" required placeholder="Enter Password again" />
                                                    <span className="eye" onClick={() => {/* Toggle password visibility */}}>
                                                        <i className="fa fa-eye-slash" id="togglePassword2"></i>
                                                    </span>
                                                </div>
                                                <span id="passwordMatch" className="text text-danger d-none"></span>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" onClick={() => setResetPasswordModalOpen(false)}>Close</button>
                                                <button type="submit" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    );
};

export default Employee;
