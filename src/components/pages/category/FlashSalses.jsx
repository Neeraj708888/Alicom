import React from 'react';
import { Link } from 'react-router-dom';

const FlashSales = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">

                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4 className="mb-0">Flash Sales</h4>
                    <Link to="/admin/products/categories/flash-sales/edit" className="btn py-2.5 btn-primary">
                        <i className="fa fa-plus-circle"></i>
                        &nbsp;Create New
                    </Link>
                </div>

                <div className="container-fluid mt-3">
                    <div className="mb-3 card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table border table-responsive-lg" style={{ overflow: 'auto' }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center">SL</th>
                                            <th>Thumbnail</th>
                                            <th>Name</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th className="text-center">Status</th>
                                            <th style={{ maxWidth: '250px' }}>Description</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[{
                                            id: 1,
                                            thumbnail:"https://demo.alicom.app/storage/flash_sales/iobVsQFqXW2LD1G4DcVtUtatRThXW44Hd6UVl8B4.jpg",
                                            start: "- 19:00:00",
                                            end: "- 02:30:00",
                                            desc: "vhghg",
                                            toggleUrl: "https://demo.alicom.app/admin/flash-sale/3/toogle",
                                            actions: {
                                                view: "https://demo.alicom.app/admin/flash-sale/3/product",
                                                edit: "https://demo.alicom.app/admin/flash-sale/3/edit",
                                                delete: "https://demo.alicom.app/admin/flash-sale/3/destroy"
                                            }
                                        },
                                        {
                                            id: 2,
                                            thumbnail: "https://demo.alicom.app/storage/flash_sales/CSgiz4fjbsiq8LZlJi0mrGp8ZvIR5GlOxcjhuE5N.svg",
                                            start: "- 02:00:00",
                                            end: "- 00:30:00",
                                            desc: "3434343443",
                                            toggleUrl: "https://demo.alicom.app/admin/flash-sale/2/toogle",
                                            actions: {
                                                view: "https://demo.alicom.app/admin/flash-sale/2/product",
                                                edit: "https://demo.alicom.app/admin/flash-sale/2/edit",
                                                delete: "https://demo.alicom.app/admin/flash-sale/2/destroy"
                                            }
                                        },
                                        {
                                            id: 3,
                                            thumbnail: "https://demo.alicom.app/storage/flash_sales/Lkl6cWXSvacK5dG8dtzJSllJ6z1NabcBbI4dJwqt.jpg",
                                            start: "- 01:00:00",
                                            end: "- 01:30:00",
                                            desc: "Beli 1 Gratis 1 Barang",
                                            toggleUrl: "https://demo.alicom.app/admin/flash-sale/1/toogle",
                                            actions: {
                                                view: "https://demo.alicom.app/admin/flash-sale/1/product",
                                                edit: "https://demo.alicom.app/admin/flash-sale/1/edit",
                                                delete: "https://demo.alicom.app/admin/flash-sale/1/destroy"
                                            }
                                        }].map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>
                                                    <div className="product-image" style={{ width: 90, height: 76 }}>
                                                        <img src={item.thumbnail} alt="thumbnail" style={{ width: '100%', height: '100%' }} loading="lazy" />
                                                    </div>
                                                </td>
                                                <td></td>
                                                <td>{item.start}</td>
                                                <td>{item.end}</td>
                                                <td className="text-center">
                                                    <label className="switch mb-0" title="Update Publish Status">
                                                       
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round"></span>
                                                     
                                                    </label>
                                                </td>
                                                <td style={{ maxWidth: '250px' }}>{item.desc}</td>
                                                <td className="text-center">
                                                    <div className="d-flex gap-2 justify-content-center">
                                                        <Link href={item.actions.view} className="btn btn-outline-primary circleIcon" title="View Product">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </Link>
                                                        <Link to='/admin/products/categories/flash-sales/edit' className="btn btn-outline-primary circleIcon" title="Edit">
                                                            <i className="fa-solid fa-pen"></i>
                                                        </Link>
                                                        <Link to='#' className="btn btn-outline-danger circleIcon deleteConfirm" title="Delete">
                                                            <i className="fa-solid fa-trash-can"></i>
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

                    <div className="my-3">
                        {/* Pagination or additional content can go here */}

                        {/* <nav>
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">Previous</a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FlashSales;
