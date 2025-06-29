import React from 'react';

const SupportMessage = () => {
    return (
            <div className="container-fluid">

                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Support Messages</h4>
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
                                                    <th>Subject</th>
                                                    <th>Message</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Example static row */}
                                                <tr>
                                                    <td>Order Issue</td>
                                                    <td>The item was damaged on arrival.</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-primary me-2">Reply</button>
                                                        <button className="btn btn-sm btn-danger">Delete</button>
                                                    </td>
                                                </tr>

                                                {/* If no messages */}
                                                {/* <tr>
                                                    <td colSpan="3" className="text-center text-muted">No messages available</td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default SupportMessage;
