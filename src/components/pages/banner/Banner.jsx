import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '/src/assets/images/banner1.png'

const Banner = () => {
    const [bannerStates, setBannerStates] = useState({
        30: true,
        31: true
    });

    const handleToggle = (id) => {
        setBannerStates(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const banners = [
        {
            id: 30,
            title: 'New offer',
            // img: 'https://demo.alicom.app/storage/banners/zqU1WcougwODW7iTy0Vuyh9Zz9angwdkYDis2xTr.jpg',
            img: banner
        },
        {
            id: 31,
            title: 'New Offer',
            // img: 'https://demo.alicom.app/storage/banners/MefNES68vG27I5jwvje1JA8TBzFQFCrgTkSTGkHs.png',
            img: banner
        },
    ];

    return (
            <>

                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-3">
                    <h2 className="mb-5 text-3xl">Banner List</h2>


                    <Link to="/admin/banners/edit" className="btn btn-primary mb-5 px-4 py-2">
                        <i className="fa fa-plus-circle"></i> &nbsp;Create New
                    </Link>

                </div>

                <div className="card shadow-sm">
                    <div className="card-body pt-3 pb-4">
                        <div className="table-responsive">
                            <table className="table mb-0 overflow-hidden border">
                                <thead>
                                    <tr>
                                        <th>Thumbnail</th>
                                        <th>Title</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {banners.map((banner) => (
                                        <tr key={banner.id}>
                                            <td>
                                                <img
                                                    src={banner.img}
                                                    alt={banner.title}
                                                    height="76"
                                                />
                                            </td>

                                            <td>{banner.title}</td>
                                            <td className="text-center">
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        checked={!!bannerStates[banner.id]}
                                                        onChange={() => handleToggle(banner.id)}
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 justify-content-center">
                                                    <Link
                                                        to='/admin/banners/edit'
                                                        className="btn btn-outline-primary circleIcon btn-sm"
                                                    >
                                                        <i className="fa-solid fa-pen"></i>
                                                    </Link>

                                                    <Link
                                                        to='#'
                                                        className="btn btn-outline-primary btn-sm circleIcon"
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
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

            </>
    );
};

export default Banner;
