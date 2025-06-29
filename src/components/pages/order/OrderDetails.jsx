import React, { useState } from 'react'

const OrderDetails = () => {
    const [orderStatus, setOrderStatus] = useState("Confirm");

    const [isChecked, setIsChecked] = useState(false);

     const statuses = [
    "Pending",
    "Confirm",
    "Processing",
    "Pickup",
    "On The Way",
    "Delivered",
    "Cancelled"
  ];

    const handleToggle = () => {
        setIsChecked(prev => !prev);
    }

    const handleStatusChange = (status) => {
        setOrderStatus(status);
        // If needed: send status to backend here
    };



    return (
        <div className="app-main-inner">
            <div className="container-fluid">

                <div>
                    <h4>Order Details</h4>
                </div>

                <div className="row my-3">
                    <div className="col-lg-8">
                        <div className="card h-100">
                            <div className="card-body">

                                <div className="d-flex justify-content-between flex-wrap gap-2">
                                    <div className="d-flex flex-column gap-2">
                                        <div className="fw-bold">
                                            Order Id: #RC001073
                                        </div>
                                        <div>
                                            17 Jun, 2025 10:53 AM
                                        </div>
                                    </div>
                                    <div>
                                        <a href="https://demo.alicom.app/admin/download-invoice/1073" className="btn btn-primary">
                                            <i className="fa-solid fa-receipt"></i>
                                            Print Invoice
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex flex-column align-items-end justify-content-end w-100 gap-2 mt-3">

                                    <div className="d-flex gap-2">
                                        <span>Order Status: </span>
                                        <span className="badge rounded-pill text-bg-primary">
                                            Confirm
                                        </span>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <span>Payment Status: </span>
                                        <span className="fw-bold">Paid</span>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <span>Payment Method: </span>
                                        <span className="fw-bold">Razorpay</span>
                                    </div>
                                </div>

                                <div className="table-responsive mt-3">
                                    <table className="table" style={{ overflow: "auto" }}>
                                        <thead>
                                            <tr>
                                                <th>SL</th>
                                                <th>Product</th>
                                                <th>Color</th>
                                                <th>Size</th>
                                                <th>Qty</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <div className="d-flex gap-1 align-items-center">
                                                        <img src="https://demo.alicom.app/storage/products/cv5F3k0Wl27Pd1IUrUZSBQqET7TAgZBOBVz6JzYi.png" alt="" width="40" height="40" loading="lazy" />
                                                        <span>A4TECH Bloody B930 TKL RGB Light Strike Libra Brown Optical Switch Mechanical Gaming Keyboard</span>
                                                    </div>
                                                </td>
                                                <td>N/A</td>
                                                <td>N/A</td>
                                                <td>1</td>
                                                <td>
                                                    $120
                                                </td>
                                                <td>
                                                    $120
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="d-flex flex-column align-items-end justify-content-end mt-2">
                                    <div className="d-flex gap-lg-5 gap-3">

                                        <div className="d-flex flex-column gap-2 align-items-end">
                                            <div>Total Price:</div>
                                            <div>Coupon Discount:</div>
                                            <div>Delivery Charge:</div>
                                            <div className="fw-bold">Grand Total:</div>
                                        </div>
                                        <div className="d-flex flex-column gap-2 align-items-end">
                                            <div>$120</div>
                                            <div>$0</div>
                                            <div>$25</div>
                                            <div className="fw-bold">$145</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* <!--##### Order & Shipping Info #####--> */}
                        <div className="card">
                            <div className="card-body">
                                <h5>Order &amp; Shipping Info</h5>

                                <div className="mt-3">
                                    <div>Change Order Status</div>
                                     <div className="dropdown w-100 mt-1">
                                        <button
                                            className="btn border text-start dropdown-toggle w-100"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {orderStatus}
                                        </button>

                                        <ul className="dropdown-menu w-100">
                                            {statuses.map((status) => (
                                                <li key={status}>
                                                    <button
                                                        className="dropdown-item"
                                                        type="button"
                                                        onClick={() => handleStatusChange(status)}
                                                    >
                                                        {status}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>

                                <div className="border rounded d-flex justify-content-between p-2 mt-3">
                                    <div>Payment Status</div>
                                    <div className="d-flex align-items-center gap-1">
                                        <span>{isChecked ? 'Paid' : 'Unpaid'}</span>
                                        <label className="switch mb-0">
                                            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="border rounded d-flex justify-content-between align-items-center p-2 mt-3">
                                    <div className="fw-medium">Assign Rider</div>
                                    <div className="d-flex align-items-center gap-1">
                                        <button
                                            className="btn btn-primary btn-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#assignRider"
                                        >
                                            <i className="bi bi-bicycle"></i>
                                            Assign
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="card">
                            <div className="card-body">
                                <h5>Order &amp; Shipping Info</h5>

                                <div className="mt-3">
                                    <div>Change Order Status</div>
                                    <div className="dropdown w-100 mt-1">
                                        <button
                                            className="btn border text-start dropdown-toggle w-100"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {orderStatus}
                                        </button>

                                        <ul className="dropdown-menu w-100">
                                            {statuses.map((status) => (
                                                <li key={status}>
                                                    <button
                                                        className="dropdown-item"
                                                        type="button"
                                                        onClick={() => handleStatusChange(status)}
                                                    >
                                                        {status}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <!--##### Shipping Address #####--> */}
                        <div className="card mt-3">
                            <div className="card-body">
                                <h5>Shipping Address</h5>

                                <div className="mt-3 d-flex flex-column gap-2">
                                    <div>
                                        <span>Name: </span>
                                        <span className="fw-medium">aggf</span>
                                    </div>
                                    <div>
                                        <span>Phone: </span>
                                        <span className="fw-medium">88246885588</span>
                                    </div>
                                    <div>
                                        <span>Address Type: </span>
                                        <span className="fw-medium">other</span>
                                    </div>
                                    <div>
                                        <span>City: </span>
                                        <span className="fw-medium">Tamilnadu</span>
                                    </div>
                                    <div v-if="$order-&gt;address?-&gt;post_code">
                                        <span>Post Code: </span>
                                        <span className="fw-medium">null</span>
                                    </div>
                                    <div>
                                        <span>Address Line: </span>
                                        <span className="fw-medium">cvbhhh</span>
                                    </div>
                                    <div>
                                        <span>Address Line 2: </span>
                                        <span className="fw-medium"></span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <!--##### Customer Info #####--> */}
                        <div className="card mt-3">
                            <div className="card-body">
                                <h5>Customer Info</h5>

                                <div className="mt-3 d-flex flex-column gap-2">
                                    <div>
                                        <span>Name: </span>
                                        <span className="fw-medium">Demo User</span>
                                    </div>
                                    <div>
                                        <span>Phone: </span>
                                        <span className="fw-medium">01601643808</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Assign Rider Modal --> */}
                <form>
                    <input type="hidden" name="_token" value="tV3DG0ZEMAqi7endm0MQXiCLPq0SAhKnrlT580Me" autoComplete="off" />        <div className="modal fade" id="assignRider">
                        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title fs-5">Select a rider</h3>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex gap-2 flex-column">
                                        <div className="w-100">
                                            <input type="radio" name="rider" value="1" id="rider1" className="btn-check" />
                                            <label htmlFor="rider1" className="btn riderSelectBtn">
                                                <div>
                                                    <img src="https://demo.alicom.app/storage/users/profile/Et2Yk96cEgaHO2BIqQXU3ZwCneIlBKt8jgQzuNQk.jpg" alt="profile" className="profilePhoto" />
                                                    <span className="riderName">
                                                        t t
                                                    </span>
                                                </div>
                                                <div className="d-flex gap-1 align-items-center">
                                                    <span className="text-muted inComplated">
                                                        Incomplete Orders:
                                                    </span>
                                                    <span className="totalOrders">10</span>
                                                </div>

                                            </label>
                                        </div>
                                        <div className="w-100">
                                            <input type="radio" name="rider" value="2" id="rider2" className="btn-check" />
                                            <label htmlFor="rider2" className="btn riderSelectBtn" >
                                                <div>
                                                    <img src="https://demo.alicom.app/storage/users/profile/b2i4ksc1pEQudEaBET2txleT8RlIwZwmeBbeBCeB.png" alt="profile" className="profilePhoto" />
                                                    <span className="riderName">
                                                        ashraful alam akif
                                                    </span>
                                                </div>
                                                <div className="d-flex gap-1 align-items-center">
                                                    <span className="text-muted inComplated">
                                                        Incomplete Orders:
                                                    </span>
                                                    <span className="totalOrders">15</span>
                                                </div>

                                            </label>
                                        </div>
                                        <div className="w-100">
                                            <input type="radio" name="rider" value="3" id="rider3" className="btn-check" />
                                            <label htmlFor="rider3" className="btn riderSelectBtn">
                                                <div>
                                                    <img src="https://demo.alicom.app/defualt/profile.jpg" alt="profile" className="profilePhoto" />
                                                    <span className="riderName" >
                                                        Mehedi Hasan
                                                    </span>
                                                </div>
                                                <div className="d-flex gap-1 align-items-center">
                                                    <span className="text-muted inComplated">
                                                        Incomplete Orders:
                                                    </span>
                                                    <span className="totalOrders">18</span>
                                                </div>

                                            </label>
                                        </div>
                                        <div className="w-100">
                                            <input type="radio" name="rider" value="4" id="rider4" className="btn-check" />
                                            <label htmlFor="rider4" className="btn riderSelectBtn">
                                                <div>
                                                    <img src="https://demo.alicom.app/storage/users/profile/lmD0QVm7qvM99kQGaEasMRMAI8U6RzmcuzhV86dF.jpg" alt="profile" className="profilePhoto" />
                                                    <span className="riderName">
                                                        asdf asdf
                                                    </span>
                                                </div>
                                                <div className="d-flex gap-1 align-items-center">
                                                    <span className="text-muted inComplated">
                                                        Incomplete Orders:
                                                    </span>
                                                    <span className="totalOrders">4</span>
                                                </div>

                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">
                                        Assign Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default OrderDetails
