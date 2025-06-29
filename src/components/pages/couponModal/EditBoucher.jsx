import React from 'react';
import { Link } from 'react-router-dom';

const EditBoucher = () => {
  return (
   
      <div className="container-fluid">
        <div className="page-title">
          <div className="d-flex gap-2 align-items-center text-muted">
            <i className="bi bi-pencil-square"></i> Edit Voucher
          </div>
        </div>  

        <div className="row mt-3">
          <div className="col-lg-9 col-md-10 m-auto">
            <form method="POST">
              <input type="hidden" name="_token" value="your_token_here" autoComplete="off" />
              <input type="hidden" name="_method" value="PUT" />

              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                  <h4 className="card-title m-0">
                    <i className="bi bi-pencil-square"></i> Edit Voucher
                  </h4>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="code" className="form-label">
                        Voucher Code <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="code"
                        id="code"
                        className="form-control"
                        defaultValue="OFER00352"
                        placeholder="Coupon code"
                        required
                        maxLength="255"
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="discount_type" className="form-label">
                        Discount Type <span className="text-danger">*</span>
                      </label>
                      <select
                        name="discount_type"
                        id="discount_type"
                        className="form-control"
                        defaultValue="Percentage"
                      >
                        <option value="Amount">Amount</option>
                        <option value="Percentage">Percentage</option>
                      </select>
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="discount" className="form-label">
                        Discount <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="discount"
                        id="discount"
                        className="form-control"
                        defaultValue="5"
                        placeholder="Discount"
                        required
                        maxLength="255"
                        onInput={(e) =>
                          (e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))
                        }
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="min_order_amount" className="form-label">
                        Minimum Order Amount <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="min_order_amount"
                        id="min_order_amount"
                        className="form-control"
                        defaultValue="5000"
                        placeholder="Minimum Order Amount"
                        required
                        maxLength="255"
                        onInput={(e) =>
                          (e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))
                        }
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="limit_for_user" className="form-label">
                        Limit For Single User
                      </label>
                      <input
                        type="text"
                        name="limit_for_user"
                        id="limit_for_user"
                        className="form-control"
                        defaultValue="2"
                        placeholder="e.g. 5"
                        maxLength="255"
                        onInput={(e) =>
                          (e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))
                        }
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="max_discount_amount" className="form-label">
                        Maximum Discount Amount
                      </label>
                      <input
                        type="text"
                        name="max_discount_amount"
                        id="max_discount_amount"
                        className="form-control"
                        placeholder="e.g. $300"
                        maxLength="255"
                        onInput={(e) =>
                          (e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))
                        }
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="start_date" className="form-label">
                        Start Date <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        name="start_date"
                        id="start_date"
                        className="form-control"
                        defaultValue="2025-03-28"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="start_time" className="form-label">
                        Start Time <span className="text-danger">*</span>
                      </label>
                      <input
                        type="time"
                        name="start_time"
                        id="start_time"
                        className="form-control"
                        defaultValue="01:00"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="expired_date" className="form-label">
                        Expired Date <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        name="expired_date"
                        id="expired_date"
                        className="form-control"
                        defaultValue="2025-03-31"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <label htmlFor="expired_time" className="form-label">
                        Expired Time <span className="text-danger">*</span>
                      </label>
                      <input
                        type="time"
                        name="expired_time"
                        id="expired_time"
                        className="form-control"
                        defaultValue="02:00"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-footer py-3 d-flex justify-content-between flex-wrap gap-2">
                  <Link to="/admin/coupons" className="btn btn-light px-4 py-2">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary px-5 py-2">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default EditBoucher;
