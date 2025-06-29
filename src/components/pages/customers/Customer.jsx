import React from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
    const customers = [
        { id: 1, name: 'Demo User', phone: '01601643808', email: 'user@alicom.com', gender: 'N/A', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 2, name: 'Mehedi Hasan', phone: '01725115085', email: 'N/A', gender: 'N/A', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 3, name: 'Tarik', phone: '017251150852', email: 'N/A', gender: 'N/A', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 4, name: 'ashraful alam akif', phone: '1234567890', email: 'N/A', gender: 'N/A', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 5, name: 't', phone: '01909121213', email: 'N/A', gender: 'N/A', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 6, name: 'masud idlsm', phone: '01672886562', email: 'itskaysar@gmail.com', gender: 'female', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 7, name: 'Client author', phone: '12345678903', email: 'shakilvai@gmail.com', gender: 'Male', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 8, name: 't', phone: '01909121214', email: 'N/A', gender: 'N/A', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 9, name: 'Ahmed Abdelkarim', phone: '01000000000', email: 'testmail@gmail.com', gender: 'male', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
        { id: 10, name: 'amirhosein hosseini', phone: '09358223183', email: 'hoseinia0780@gmail.com', gender: 'male', dob: 'N/A', profileImg: 'https://demo.alicom.app/defualt/profile.jpg' },
    ];

    return (
            <div className="container-fluid">
                <div>
                    <h4>All Customers</h4>
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
                                            <th className="text-center">Email</th>
                                            <th className="text-center">Gender</th>
                                            <th className="text-center">Date of Birth</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers.map((customer, index) => (
                                            <tr key={customer.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>
                                                    <img src={customer.profileImg} width="50" alt="Profile" />
                                                </td>
                                                <td>{customer.name}</td>
                                                <td>{customer.phone}</td>
                                                <td>{customer.email}</td>
                                                <td className="text-center">{customer.gender}</td>
                                                <td className="text-center">{customer.dob}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="my-3">
                        <nav className="d-flex justify-items-center justify-content-between">
                            <div className="d-flex justify-content-between flex-fill d-sm-none">
                                <ul className="pagination">
                                    <li className="page-item disabled" aria-disabled="true">
                                        <span className="page-link">« Previous</span>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#" rel="next">Next »</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between">
                                <div>
                                    <p className="small text-muted">
                                        Showing <span className="fw-semibold">1</span> to <span className="fw-semibold">1</span> of <span className="fw-semibold">10</span> results
                                    </p>
                                </div>

                                <div>
                                    <ul className="pagination">
                                        <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                            <span className="page-link" aria-hidden="true">‹</span>
                                        </li>
                                        <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">6</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">7</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">8</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">9</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#" rel="next" aria-label="Next »">›</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    );
};

export default Customers;
