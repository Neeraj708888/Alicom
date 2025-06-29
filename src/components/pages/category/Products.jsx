import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(prev => !prev);
    }

    return (
      
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Product List</h4>
                </div>

                <div className="container-fluid mt-3">
                    <div className="card my-3">
                        <div className="card-body">
                            <div className="d-flex gap-2 pb-2">
                                <h5>Filter Products</h5>
                            </div>

                            <form action="" method="GET">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <div>
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select name="category" id="category" className="form-control select2" style={{ width: '100%' }}>
                                                <option value="">Select Category</option>
                                                <option value="5">Accessories</option>
                                                <option value="4">Women-Clothing-Fashion</option>
                                                <option value="3">Sport-and-Outdoor</option>
                                                <option value="2">Baby and Kids</option>
                                                <option value="1">Computer and Accessories</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <div>
                                            <label htmlFor="brand" className="form-label">Brand</label>
                                            <select name="brand" id="brand" className="form-control select2" style={{ width: '100%' }}>
                                                <option value="">All Brand</option>
                                                <option value="5">NIKE</option>
                                                <option value="4">Adidas</option>
                                                <option value="3">GUCCHi</option>
                                                <option value="2">Burberry</option>
                                                <option value="1">TP Link</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <div>
                                            <label htmlFor="color" className="form-label">Color</label>
                                            <select name="color" id="color" className="form-control select2" style={{ width: '100%' }}>
                                                <option value="">All Color</option>
                                                <option value="5">Yellow</option>
                                                <option value="4">Blue</option>
                                                <option value="3">Green</option>
                                                <option value="2">Red</option>
                                                <option value="1">Black</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 d-flex gap-2 justify-content-end">
                                    <Link to="https://demo.alicom.app/admin/products" className="btn btn-light py-2 px-4">Reset</Link>
                                    <button type="submit"   className="btn btn-primary py-2 px-4">Filter Data</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mb-3 card">
                        <div className="card-body">
                            <form action="" className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                <div className="input-group" style={{ maxWidth: '400px' }}>
                                    <input type="text" name="search" className="form-control" placeholder="Search by product name" />
                                    <button type="submit" className="input-group-text btn btn-primary">
                                        <i className="fa fa-search"></i> Search
                                    </button>
                                </div>
                                <Link to="/admin/products/categories/products/create" className="btn py-2 btn-primary">
                                    <i className="fa fa-plus-circle"></i> Create New
                                </Link>
                            </form>

                            <div className="table-responsive">
                                <table className="table border table-responsive-lg" style={{ overflow: 'auto' }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center">SL</th>
                                            <th>Thumbnail</th>
                                            <th>Product Name</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Discount Price</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Example Rows */}
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td>
                                                <div className="product-image">
                                                    <img src="https://demo.alicom.app/storage/products/eCRiL51Rzh0FfZKHtSBOXmz5wl4foovxtCNQofUd.jpg" alt="Product Thumbnail" />
                                                </div>
                                            </td>
                                            <td>Meetion MT-M371 USB Wired Backlit Gaming Mouse</td>
                                            <td className="text-center">$25</td>
                                            <td className="text-center">$1</td>
                                            <td className="text-center">
                                                <label className="switch mb-0">

                                                    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                                                    <span className="slider round"></span>

                                                </label>
                                            </td>
                                            <td className="text-center">
                                                <div className="d-flex gap-2 justify-content-center">
                                                    <Link to="/admin/products/categories/products/product-details" className="btn btn-outline-primary circleIcon">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </Link>
                                                    <Link to="/admin/products/categories/products/generate-barcode" className="btn btn-outline-primary circleIcon">
                                                        <i className="bi bi-upc-scan"></i>
                                                    </Link>
                                                    <Link to="/admin/products/categories/products/product-edit" className="btn btn-outline-primary circleIcon">
                                                        <i className="fa-solid fa-pen"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Add more rows as needed */}
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
                                        Showing <span className="fw-semibold">1</span> to <span className="fw-semibold">1</span> of{' '}
                                        <span className="fw-semibold">10</span> results
                                    </p>
                                </div>
                                <div>
                                    <ul className="pagination">
                                        <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                            <span className="page-link" aria-hidden="true">
                                                ‹
                                            </span>
                                        </li>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                                            <li key={page} className={`page-item ${page === 1 ? 'active' : ''}`}>
                                                <Link className="page-link" to="#">
                                                    {page}
                                                </Link>
                                            </li>
                                        ))}
                                        <li className="page-item disabled">
                                            <span className="page-link">...</span>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">
                                                9
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">
                                                10
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#" rel="next" aria-label="Next »">
                                                ›
                                            </Link>
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

export default Products;









