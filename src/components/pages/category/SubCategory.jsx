import React from 'react';
import { Link } from 'react-router-dom';

const SubCategory = () => {
    // Sample data for subcategories
    const subCategories = [
        {
            id: 1,
            thumbnail: "https://demo.alicom.app/storage/categories/euaw7MVZNAcWTvorEsOSVJlGmLamWWPZIs4F6vot.png",
            category: "Baby and Kids",
            name: "Dell",
            status: true,
        },
        {
            id: 2,
            thumbnail: "https://demo.alicom.app/storage/categories/YWza2a59HLJD6ug4H15NTXYFXKhfIprxX3GVoay7.png",
            category: "CCTV Products",
            name: "IP Camera",
            status: true,
        },
        {
            id: 3,
            thumbnail: "https://demo.alicom.app/storage/categories/yP7fPMItN94AI5DYvC39bWE1VIZuCF3M5xrQxy8G.jpg",
            category: "Electronics",
            name: "Google Pixel",
            status: true,
        },
        {
            id: 4,
            thumbnail: "https://demo.alicom.app/storage/categories/GRPmI0I76Q1FgjVPCFf302L0BG3EXV0M1qJbs8Fb.jpg",
            category: "Grocery",
            name: "Fresh Vegetables",
            status: true,
        },
        {
            id: 5,
            thumbnail: "https://demo.alicom.app/storage/categories/ggatHcXmtQHyZmdpyejNzsmX6Yk1ANyfmwmPdf4u.jpg",
            category: "Salut",
            name: "Roots Goods mvp3",
            status: true,
        },
        {
            id: 6,
            thumbnail: "https://demo.alicom.app/storage/categories/Rw0jbZOJpL5l73SmXXxsz19NcbinxnqNgVhMyu0z.jpg",
            category: "mrjak skin care",
            name: "Vitamin C Serum",
            status: true,
        },
        {
            id: 7,
            thumbnail: "https://demo.alicom.app/storage/categories/3FqQHBie0yTO6OdpDfb185Ma1HMbTklTCTghDvi7.png",
            category: "demo",
            name: "Vishal Patel",
            status: true,
        },
        {
            id: 8,
            thumbnail: "https://demo.alicom.app/storage/categories/dmFdkcYUfNe61SJnnvlsWRdNXdpv30fmBTXxv3Qo.jpg",
            category: "Computer and Accessories",
            name: "Other Accessories",
            status: true,
        },
        {
            id: 9,
            thumbnail: "https://demo.alicom.app/storage/categories/I5sQsoTbZkeTo0n2bXyhpts7i5l5T2Q31bkc9rip.png",
            category: "Accessories",
            name: "Triathlon Male Athlete Cycle",
            status: true,
        },
        {
            id: 10,
            thumbnail: "https://demo.alicom.app/storage/categories/XVcZ7OR39hFEMsl104v2fA6gJHAvJTw0X48CEw0Z.png",
            category: "Women-Clothing-Fashion",
            name: "A Row of Neatly Hanging Clothes",
            status: true,
        },
    ];

    return (
        <div className="app-main-inner">
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Sub Categories</h4>
                    <Link to="/admin/products/categories/sub-category/create">
                        <button type="button" className="btn py-2 btn-primary">
                            <i className="fa fa-plus-circle"></i> Create New
                        </button>
                    </Link>
                </div>

                <div className="container-fluid mt-3">
                    <div className="mb-3 card">
                        <div className="card-body">
                            <div className="cardTitleBox">
                                <h5 className="card-title chartTitle">Sub Categories</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-responsive-md" style={{ overflow: 'auto' }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center">SL</th>
                                            <th>Thumbnail</th>
                                            <th>Category</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subCategories.map((subCategory, index) => (
                                            <tr key={subCategory.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>
                                                    <img src={subCategory.thumbnail} width="50" alt="Category Thumbnail" />
                                                </td>
                                                <td>
                                                    <span className="badge rounded-pill text-bg-primary me-1">{subCategory.category}</span>
                                                </td>
                                                <td>{subCategory.name}</td>
                                                <td>
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
                                                <td className="text-center">
                                                    <div className="d-flex gap-3 justify-content-center">
                                                        <Link to='/admin/products/categories/category/edit' className="btn btn-outline-primary circleIcon">
                                                            <i className="bi bi-pencil-fill"></i>
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
                        <nav className="d-flex justify-items-center justify-content-between">
                            <div className="d-flex justify-content-between flex-fill d-sm-none">
                                <ul className="pagination">
                                    <li className="page-item disabled" aria-disabled="true">
                                        <span className="page-link">« Previous</span>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="/" rel="next">Next »</Link>
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
        </div>
    );
};

export default SubCategory;
