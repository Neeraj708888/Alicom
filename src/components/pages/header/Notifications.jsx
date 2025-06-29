import React from 'react';
import { Link } from 'react-router-dom';

const Notifications = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Notifications</h4>
                </div>

                <div className="mt-4">
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <div className="card rounded-12">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table" style={{ overflow: 'auto' }}>
                                            <thead>
                                                <tr>
                                                    <th>Icon</th>
                                                    <th>Title</th>
                                                    <th>Message</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="iconBox pdfIcon">
                                                            <i className="bi bi-ticket-perforated-fill"></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link to="#" className="text-dark text-decoration-line-through">
                                                            New Support Ticket Created
                                                        </Link>
                                                    </td>
                                                    <td>Support Ticket created from: Demo User. Ticket Number: #7923744</td>
                                                    <td>
                                                        <Link 
                                                            to="#" 
                                                            className="btn btn-outline-danger circleIcon deleteConfirm" 
                                                            data-bs-toggle="tooltip" 
                                                            data-bs-placement="left" 
                                                            data-bs-title="Delete"
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                {/* Additional notifications can be added here */}
                                            </tbody>
                                        </table>
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

export default Notifications;
