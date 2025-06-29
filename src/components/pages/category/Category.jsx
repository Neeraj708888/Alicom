import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Category List</h4>

                    <Link to="/admin/products/categories/category/create">
                        <button type="button" className="btn py-2 btn-primary">
                        <i className="fa fa-plus-circle"></i> Create New
                    </button>
                       
                    </Link>
                </div>

                <div className="container-fluid mt-3">
                    <div className="mb-3 card">
                        <div className="card-body">
                            <div className="cardTitleBox">
                                <h5 className="card-title chartTitle">Categories</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-responsive-md" style={{ overflow: 'auto' }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center">SL</th>
                                            <th>Thumbnail</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/AyS89EbI8YMdKoDNtPiT1ksgXD9Dljk4VHvn0Fzo.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Computer and Accessories</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '0s', display: 'table-row' }}>
                                            <td className="text-center">2</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/fiKLwnZkXqiITQyxycwhNUnReqWA31G87sxoE71t.png"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Baby and Kids</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '0.1s', display: 'table-row' }}>
                                            <td className="text-center">3</td>
                                            <td>
                                                <img
                                                    src="	https://demo.alicom.app/storage/categories/JQmTMEETaAyIf1NcHanAwFiyPjhsFDPusJToEhBl.png"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '0.2s', display: 'table-row' }}>
                                            <td className="text-center">4</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/zMi8oJNbc4LKTrtsAUjw5cEevH3X2HHCprEttL2Z.png"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>


                                        <tr style={{ animationDelay: '0.3s', display: 'table-row' }}>
                                            <td className="text-center">5</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/NQOjwsMgOa5XpO6hagzuQjFsmSEkNdrSN8Ilsgc1.png"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '0.4s', display: 'table-row' }}>
                                            <td className="text-center">6</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/KQceqsMz0OODZhSrmDuRM8p7qw6Wjyr6S5RIohPZ.png"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '0.5s', display: 'table-row' }}>
                                            <td className="text-center">7</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/cD6wgzTsCiYjh2rbCaUUxEEOfMGUpeo7OdjOSzKp.png"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '0.6s', display: 'table-row' }}>
                                            <td className="text-center">8</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/vGwWsiuuNLMdyVab5kov9LtvJ7daQu8MtchA4HJr.png"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '1.8s', display: 'table-row' }}>
                                            <td className="text-center">9</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/3NceklYm2W8Vzx4e1surwzAO1njxB7btduSCq9WO.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '0.7s', display: 'table-row' }}>
                                            <td className="text-center">10</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/7vyc54jWd1Re3CP814pe6kdVhatfxlafGLlGwvto.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '0.8s', display: 'table-row' }}>
                                            <td className="text-center">11</td>
                                            <td>
                                                <img
                                                    src="	https://demo.alicom.app/storage/categories/hxwPZIsWAhQgUvSXdJQaxIxkDePWPzNF51rgVI0P.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '0.9s', display: 'table-row' }}>
                                            <td className="text-center">12</td>
                                            <td>
                                                <img
                                                    src="	https://demo.alicom.app/storage/categories/sJlNtCeIc0lCWmsLbj1xvbO1V5LVTYxPvIQvu9Cf.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '1s', display: 'table-row' }}>
                                            <td className="text-center">13</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/TfVVNARlSdOXQDgwQSCSJypOtEt3cg7gGpiz7ld0.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '1.1s', display: 'table-row' }}>
                                            <td className="text-center">14</td>
                                            <td>
                                                <img
                                                    src="	https://demo.alicom.app/storage/categories/yEAm5JMZ8b8hquh7Bai3cYIv5YtxNmzd3GgUuYib.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '1.2s', display: 'table-row' }}>
                                            <td className="text-center">15</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/xTeeIj8IV9BK5azA7xxdsMDTcY9IxINutfge89hE.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '1.3s', display: 'table-row' }}>
                                            <td className="text-center">16</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/50JGuvQVrmRcg3f9CXOuhGSgOnWGbmZxoFexYci8.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                   <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '1.4s', display: 'table-row' }}>
                                            <td className="text-center">17</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/WtniRxqutBZmyiEfJmtWpcetQHt6ZydBmnViug0o.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '1.5s', display: 'table-row' }}>
                                            <td className="text-center">18</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/YKkypKganCXe2d1OQbYIHY6VgYTNxdLxXbfVfdsm.png"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '1.6s', display: 'table-row' }}>
                                            <td className="text-center">19</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/npBPomDo3S4KYdX5CYpjr9nXwXM2qOfz1AgNYX7y.png"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style={{ animationDelay: '1.7s', display: 'table-row' }}>
                                            <td className="text-center">20</td>
                                            <td>
                                                <img
                                                    src="https://demo.alicom.app/storage/categories/nG7gJJbFwgjktMhX8Y8MxRTm9FficvcrpMLV4xbj.jpg"
                                                    width="50"
                                                    alt="category"
                                                />
                                            </td>
                                            <td>Shirt</td>

                                            <td>
                                                <label
                                                    className="switch mb-0"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    data-bs-title="Status Toggle">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex gap-3 justify-content-center">
                                                    <Link
                                                        to="/admin/products/categories/category/edit"
                                                        className="btn btn-outline-primary circleIcon"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Link>
                                                </div>
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
        </div>
    );
};

export default Category;
