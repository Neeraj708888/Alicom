import React from 'react';
import { Link } from 'react-router-dom';

const Deliver = () => {
  return (
   
      <div className="container-fluid">

        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div>Delivered Orders</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <form className="d-flex align-items-center justify-content-between gap-3 mb-3">
              <div className="input-group" style={{ maxWidth: '400px' }}>
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Search order"
                />
                <button type="submit" className="input-group-text btn btn-primary">
                  <i className="fa fa-search"></i> Search
                </button>
              </div>
            </form>

            <div className="table-responsive">
              <table className="table border table-responsive-lg" style={{ overflow: 'auto' }}>
                <thead>
                  <tr>
                    <th style={{ minWidth: '85px' }}>Order ID</th>
                    <th>Order Date</th>
                    <th>Customer</th>
                    <th>Total Amount</th>
                    <th>Payment Method</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: 'RC001050',
                      date: '09 Jun 2025, 11:31 PM',
                      customer: 'Demo User',
                      amount: '$55',
                      status: 'Pending',
                      method: 'Cash Payment',
                      view: '1050',
                    },
                    {
                      id: 'RC001049',
                      date: '09 Jun 2025, 02:39 PM',
                      customer: 'Demo User',
                      amount: '$50',
                      status: 'Pending',
                      method: 'Cash Payment',
                      view: '1049',
                    },
                    {
                      id: 'RC001048',
                      date: '09 Jun 2025, 01:48 PM',
                      customer: 'Demo User',
                      amount: '$1724',
                      status: 'Pending',
                      method: 'Cash Payment',
                      view: '1048',
                    },
                    {
                      id: 'RC001047',
                      date: '08 Jun 2025, 01:49 PM',
                      customer: 'Demo User',
                      amount: '$55',
                      status: 'Pending',
                      method: 'Cash Payment',
                      view: '1047',
                    },
                  ].map((order, index) => (
                    <tr key={order.id} style={{ animationDelay: `${index * 0.1}s`, display: 'table-row' }}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.customer}</td>
                      <td>
                        {order.amount}
                        <br />
                        <span className="badge rounded-pill text-bg-primary">{order.status}</span>
                      </td>
                      <td>{order.method}</td>
                      <td>
                        <Link
                          to='/admin/orders/order-details'
                          className="circleIcon btn-outline-primary me-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View Details"
                        >
                          <i className="bi bi-eye-fill"></i>
                        </Link>
                        <Link
                          to="#"
                          className="circleIcon btn-outline-primary me-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Download Invoice"
                        >
                          <i className="bi bi-arrow-down-circle"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="my-3">
          <nav className="d-flex justify-items-center justify-content-between">
            <div className="d-flex justify-content-between flex-fill d-sm-none">
              <ul className="pagination">
                <li className="page-item disabled" aria-disabled="true">
                  <span className="page-link">« Previous</span>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" rel="next">
                    Next »
                  </Link>
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
    
  );
};

export default Deliver;
