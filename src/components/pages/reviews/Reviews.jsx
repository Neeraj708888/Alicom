import React from 'react';

const Reviews = () => {
    return (
       
            <div className="container-fluid">
                <div>
                    <h4>Reviews</h4>
                </div>

                <div className="container-fluid mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-responsive-lg table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Thumbnail</th>
                                            <th style={{ minWidth: '120px' }}>Product Name</th>
                                            <th style={{ minWidth: '280px' }}>Review</th>
                                            <th>Rating</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="customar-image">
                                                    <img
                                                        src="https://demo.alicom.app/storage/products/dnFYQLHC8TULVHLX5GK0l5qW0a8MLf4riukTg5ZL.jpg"
                                                        alt="product"
                                                        width="50"
                                                    />
                                                </div>
                                            </td>
                                            <td>Hikvision 5MP 4K Hybrid IP Bul...</td>
                                            <td>Good</td>
                                            <td>
                                                <i className="fa fa-star text-warning"></i> 4.7
                                            </td>
                                            <td className="text-center">
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle"
                                                >
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="my-3"></div>
                </div>
            </div>
       
    );
};

export default Reviews;
