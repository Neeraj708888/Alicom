import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Coupon = () => {
    const [bannerStates, setBannerStates] = useState({
            30: true,
            31: true
        });
    const [coupons, setCoupons] = useState([
        {
            id: 9,
            code: "OFER00352",
            discount: "5%",
            minAmount: "$5000",
            startedAt: "Mar 28, 2025 01:00 am",
            expiredAt: "Mar 31, 2025 02:00 am",
            isActive: false
        },
        {
            id: 8,
            code: "T3XBP4",
            discount: "50%",
            minAmount: "$10",
            startedAt: "Mar 15, 2025 12:00 am",
            expiredAt: "Mar 31, 2025 12:00 am",
            isActive: true
        },
        {
            id: 7,
            code: "bus",
            discount: "$60",
            minAmount: "$105",
            startedAt: "Feb 26, 2025 12:00 pm",
            expiredAt: "Feb 28, 2025 02:00 pm",
            isActive: true
        },
        {
            id: 6,
            code: "insta24",
            discount: "$2",
            minAmount: "$10",
            startedAt: "Feb 01, 2025 12:00 am",
            expiredAt: "Feb 28, 2025 12:00 am",
            isActive: true
        },
        {
            id: 5,
            code: "8573t",
            discount: "25%",
            minAmount: "$1",
            startedAt: "Feb 17, 2025 11:00 am",
            expiredAt: "Feb 27, 2025 02:00 am",
            isActive: true
        },
        {
            id: 4,
            code: "IAMDEAD2025",
            discount: "99%",
            minAmount: "$1",
            startedAt: "Jan 27, 2025 12:00 am",
            expiredAt: "Apr 18, 2025 01:30 am",
            isActive: true
        },
        {
            id: 3,
            code: "53574",
            discount: "$20",
            minAmount: "$10",
            startedAt: "Dec 10, 2024 11:00 am",
            expiredAt: "Dec 26, 2024 01:30 am",
            isActive: true
        },
        {
            id: 2,
            code: "test",
            discount: "25%",
            minAmount: "$100",
            startedAt: "Dec 08, 2024 12:30 am",
            expiredAt: "Dec 18, 2024 02:00 am",
            isActive: true
        },
        {
            id: 1,
            code: "ICIC",
            discount: "10%",
            minAmount: "$500",
            startedAt: "Dec 07, 2024 12:00 am",
            expiredAt: "Dec 15, 2024 12:00 am",
            isActive: true
        }
    ]);

     const handleToggle = (id) => {
        setBannerStates(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
           
                <div className="container-fluid">

                    <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-3">
                    <h2 className="mb-5 text-3xl">Coupons</h2>


                    <Link to="/admin/coupons/edit-boucher" className="btn btn-primary mb-5 px-4 py-2">
                        <i className="fa fa-plus-circle"></i> &nbsp;Create New
                    </Link>

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
                                                        <th className='text-start'>Code</th>
                                                        <th className='text-start'>Discount</th>
                                                        <th className='text-start'>Min Amount</th>
                                                        <th className='text-start'>Started At</th>
                                                        <th className='text-start'>Expired At</th>
                                                        <th className='text-start'>Status</th>
                                                        <th className='text-center'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {coupons.map(coupon => (
                                                        <tr key={coupon.id} className="text-center">
                                                            <td className="text-start">{coupon.code}</td> 
                                                            <td className='text-start'>{coupon.discount}</td>
                                                            <td className='text-start'>{coupon.minAmount}</td>
                                                            <td className='text-start'>{coupon.startedAt}</td>
                                                            <td className='text-start'>{coupon.expiredAt}</td>
                                                            <td className="text-center">
                                                                <label className="switch">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={!!bannerStates[coupon.id]}
                                                                        onChange={() => handleToggle(coupon.id)}
                                                                    />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </td>
                                                            <td className="text-center">
                                                                <Link
                                                                    to="/admin/coupons/edit-boucher"
                                                                    className="btn btn-outline-primary circleIcon me-1"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Edit">
                                                                    <i className="bi bi-pencil-square text-[#22A699] group-hover:text-white"></i>
                                                                </Link>

                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-outline-danger circleIcon group deleteConfirm"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Delete"
                                                                >
                                                                    <i className="bi bi-trash text-red-500 group-hover:text-white"></i>
                                                                </Link>
                                                            </td>

                                                        </tr>
                                                    ))}
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

export default Coupon;
