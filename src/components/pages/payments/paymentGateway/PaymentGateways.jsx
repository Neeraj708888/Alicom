import React from 'react';

const PaymentGateways = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">

                <div className="container-fluid mb-3">

                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                        <h4 className="m-0">Payment Gateways</h4>
                    </div>

                    <div className="row">

                        <div className="col-lg-6 mb-4">
                            <div className="card">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                                    <p className="paymentTitle m-0">STRIPE</p>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="statusOff">Off</span>
                                        <label className="switch mb-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Turn on">
                                            <a href="https://demo.alicom.app/admin/payment-gateway/1/toggle" className="confirm">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="py-2">
                                        <img id="previewstripe" className="paymentLogo" src="https://demo.alicom.app/assets/gateway/Stripe.png" alt="logo" loading="lazy" />
                                    </div>

                                    <form>
                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autoComplete="off" />
                                        <input type="hidden" name="_method" value="PUT" />
                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="mode" className="form-label">Mode</label>
                                                <select name="mode" id="mode" className="form-control select2" style={{ width: '100%' }} tabIndex="0" aria-hidden="false">
                                                    <option value="test" selected>Test</option>
                                                    <option value="live" disabled>Live</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="config[secret_key]" className="form-label">Secret Key <span className="text-danger">*</span></label>
                                                <input type="text" name="config[secret_key]" id="config[secret_key]" className="form-control" value="sk_test_51LQPRBI8v6B8L0HsH8JBOEoUuzy0OMkhiOeqfiei1AHEkZBUnmcf7Cv5Go6fwhi3HYayZgjeLxjDsP0DYHcR0xJ1008GRte5Vf" placeholder="Secret Key" required readOnly maxLength="255" />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="config[published_key]" className="form-label">Published Key <span className="text-danger">*</span></label>
                                                <input type="text" name="config[published_key]" id="config[published_key]" className="form-control" value="pk_test_51LQPRBI8v6B8L0HsDPqZN4PY9gpuOvAktw3bqhvqWfo3zXs7Xe6S1hntVX7hZjVIVCDQ76nroy0nHUYGpRjt0lbT00aiqqq3M7" placeholder="Published Key" required readOnly maxLength="255" />
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="title" className="form-label">Payment Gateway Title <span className="text-danger">*</span></label>
                                                <input type="text" name="title" id="title" className="form-control" value="Stripe" placeholder="" required readOnly maxLength="255" />
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="logo" className="form-label">Choose Logo</label>
                                                <input type="file" name="logo" id="logo" className="form-control" onChange={(e) => {/* previewFile(e, 'previewstripe') */}} />
                                            </div>
                                        </div>

                                        <div className="mt-3 d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary py-2">Save And Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="card">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                                    <p className="paymentTitle m-0">PAYPAL</p>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="statusOff">Off</span>
                                        <label className="switch mb-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Turn on">
                                            <a href="https://demo.alicom.app/admin/payment-gateway/2/toggle" className="confirm">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="py-2">
                                        <img id="previewpaypal" className="paymentLogo" src="https://demo.alicom.app/assets/gateway/PayPal.png" alt="logo" loading="lazy" />
                                    </div>

                                    <form>
                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autoComplete="off" />
                                        <input type="hidden" name="_method" value="PUT" />
                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="mode" className="form-label">Mode</label>
                                                <select name="mode" id="mode" className="form-control select2" style={{ width: '100%' }} tabIndex="0" aria-hidden="false">
                                                    <option value="test" selected>Test</option>
                                                    <option value="live" disabled>Live</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="config[client_id]" className="form-label">Client Id <span className="text-danger">*</span></label>
                                                <input type="text" name="config[client_id]" id="config[client_id]" className="form-control" value="ASw2Ol4zJrd7UOYWz7Vjwv2ZBEZ9AXuF4aCbSXLXImOp8HaCFwGHCggJ1QBuzSoouGJ6vMncd9pMAtV9" placeholder="Client Id" required readOnly maxLength="255" />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="config[client_secret]" className="form-label">Client Secret <span className="text-danger">*</span></label>
                                                <input type="text" name="config[client_secret]" id="config[client_secret]" className="form-control" value="EA3d_eVh67xx4_vk1FYAsV75faeFvLVf1B6d2Rg9E4BfjXetw63k883MtSoVLi2v8P3bbW3tOJVFEKdt" placeholder="Client Secret" required readOnly maxLength="255" />
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="title" className="form-label">Payment Gateway Title <span className="text-danger">*</span></label>
                                                <input type="text" name="title" id="title" className="form-control" value="PayPal" placeholder="" required readOnly maxLength="255" />
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="logo" className="form-label">Choose Logo</label>
                                                <input type="file" name="logo" id="logo" className="form-control" onChange={(e) => {/* previewFile(e, 'previewpaypal') */}} />
                                            </div>
                                        </div>

                                        <div className="mt-3 d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary py-2">Save And Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default PaymentGateways;






    {/* < div class="col-lg-6 mb-4" >
        <div class="card">
            <div class="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                <p class="paymentTitle m-0">
                    RAZORPAY
                </p>

                <div class="d-flex align-items-center gap-2">
                    <span class="statusOn">
                        On
                    </span>
                    <label class="switch mb-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Turn off">
                        <a href="https://demo.alicom.app/admin/payment-gateway/3/toggle" class="confirm">
                            <input type="checkbox" checked="">
                                <span class="slider round"></span>
                        </a>
                    </label>
                </div>
            </div>
            <div class="card-body">
                <div class="py-2">
                    <img id="previewrazorpay" class="paymentLogo" src="https://demo.alicom.app/assets/gateway/Razorpay.png" alt="logo" loading="lazy">
                </div>

                <form action="https://demo.alicom.app/admin/payment-gateway/3/update" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autocomplete="off">                                <div class="mt-3">
                        <div>
                            <label for="mode" class="form-label">
                                Mode
                            </label>
                            <select name="mode" id="mode" class="form-control select2" style="width: 100%;" tabindex="0" aria-hidden="false">
                                <option value="test" selected="">
                                    Test
                                </option>
                                <option value="live" disabled="">
                                    Live
                                </option>
                            </select>
                        </div>
                    </div>

                        <div class="mt-3">
                            <div>
                                <label for="config[key]" class="form-label">Key  <span class="text-danger">*</span> </label>
                                <input type="text" name="config[key]" id="config[key]" class="form-control " value="rzp_live_C7ayx7PaJJkARf" placeholder="Key" required="" readonly="" maxlength="255">
                            </div>
                        </div>
                        <div class="mt-3">
                            <div>
                                <label for="config[secret]" class="form-label">Secret  <span class="text-danger">*</span> </label>
                                <input type="text" name="config[secret]" id="config[secret]" class="form-control " value="4BdgF5N5FitWBRBA6QwZrVwi" placeholder="Secret" required="" readonly="" maxlength="255">
                            </div>
                        </div>

                        <div class="mt-3">
                            <div>
                                <label for="title" class="form-label">Payment Gateway Title  <span class="text-danger">*</span> </label>
                                <input type="text" name="title" id="title" class="form-control " value="Razorpay" placeholder="" required="" readonly="" maxlength="255">
                            </div>
                        </div>

                        <div class="mt-3">
                            <div>
                                <label for="logo" class="form-label">
                                    Choose Logo
                                </label>
                                <input type="file" name="logo" id="logo" class="form-control " onchange="previewFile(event,'previewrazorpay')">
                            </div>
                        </div>

                        <div class="mt-3 d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary py-2">
                                Save And Update
                            </button>
                        </div>
                </form>
            </div>
        </div>
 </div > */}

{/* <div class="col-lg-6 mb-4">
                            <div class="card">
                                <div class="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                                    <p class="paymentTitle m-0">
                                        PAYSTACK
                                    </p>

                                    <div class="d-flex align-items-center gap-2">
                                        <span class="statusOff">
                                            Off
                                        </span>
                                        <label class="switch mb-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Turn on">
                                            <a href="https://demo.alicom.app/admin/payment-gateway/4/toggle" class="confirm">
                                                <input type="checkbox">
                                                    <span class="slider round"></span>
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="py-2">
                                        <img id="previewpaystack" class="paymentLogo" src="https://demo.alicom.app/assets/gateway/PayStack.png" alt="logo" loading="lazy">
                                    </div>

                                    <form action="https://demo.alicom.app/admin/payment-gateway/4/update" method="POST" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autocomplete="off">                                <div class="mt-3">
                                            <div>
                                                <label for="mode" class="form-label">
                                                    Mode
                                                </label>
                                                <select name="mode" id="mode" class="form-control select2" style="width: 100%;" tabindex="0" aria-hidden="false">
                                                    <option value="test" selected="">
                                                        Test
                                                    </option>
                                                    <option value="live" disabled="">
                                                        Live
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[public_key]" class="form-label">Public Key  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[public_key]" id="config[public_key]" class="form-control " value="pk_test_99e718f74dfbffff4a4101680c367d39d5d90c5b" placeholder="Public Key" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[secret_key]" class="form-label">Secret Key  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[secret_key]" id="config[secret_key]" class="form-control " value="sk_test_12498c55ac75a902a8ebe908f4e5108790e6e93c" placeholder="Secret Key" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[machant_email]" class="form-label">Machant Email  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[machant_email]" id="config[machant_email]" class="form-control " value="" placeholder="Machant Email" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="title" class="form-label">Payment Gateway Title  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="title" id="title" class="form-control " value="Paystack" placeholder="" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="logo" class="form-label">
                                                        Choose Logo
                                                    </label>
                                                    <input type="file" name="logo" id="logo" class="form-control " onchange="previewFile(event,'previewpaystack')">
                                                </div>
                                            </div>

                                            <div class="mt-3 d-flex justify-content-end">
                                                <button type="submit" class="btn btn-primary py-2">
                                                    Save And Update
                                                </button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}

{/* <div class="col-lg-6 mb-4">
                            <div class="card">
                                <div class="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                                    <p class="paymentTitle m-0">
                                        AAMARPAY
                                    </p>

                                    <div class="d-flex align-items-center gap-2">
                                        <span class="statusOn">
                                            On
                                        </span>
                                        <label class="switch mb-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Turn off">
                                            <a href="https://demo.alicom.app/admin/payment-gateway/5/toggle" class="confirm">
                                                <input type="checkbox" checked="">
                                                    <span class="slider round"></span>
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="py-2">
                                        <img id="previewaamarpay" class="paymentLogo" src="https://demo.alicom.app/assets/gateway/AamarPay.png" alt="logo" loading="lazy">
                                    </div>

                                    <form action="https://demo.alicom.app/admin/payment-gateway/5/update" method="POST" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autocomplete="off">                                <div class="mt-3">
                                            <div>
                                                <label for="mode" class="form-label">
                                                    Mode
                                                </label>
                                                <select name="mode" id="mode" class="form-control select2" style="width: 100%;" tabindex="0" aria-hidden="false">
                                                    <option value="test" selected="">
                                                        Test
                                                    </option>
                                                    <option value="live" disabled="">
                                                        Live
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[store_id]" class="form-label">Store Id  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[store_id]" id="config[store_id]" class="form-control " value="aamarpaytest" placeholder="Store Id" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[signature_key]" class="form-label">Signature Key  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[signature_key]" id="config[signature_key]" class="form-control " value="dbb74894e82415a2f7ff0ec3a97e4183" placeholder="Signature Key" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="title" class="form-label">Payment Gateway Title  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="title" id="title" class="form-control " value="aamarPay" placeholder="" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="logo" class="form-label">
                                                        Choose Logo
                                                    </label>
                                                    <input type="file" name="logo" id="logo" class="form-control " onchange="previewFile(event,'previewaamarpay')">
                                                </div>
                                            </div>

                                            <div class="mt-3 d-flex justify-content-end">
                                                <button type="submit" class="btn btn-primary py-2">
                                                    Save And Update
                                                </button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}

{/* <div class="col-lg-6 mb-4">
                            <div class="card">
                                <div class="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                                    <p class="paymentTitle m-0">
                                        BKASH
                                    </p>

                                    <div class="d-flex align-items-center gap-2">
                                        <span class="statusOn">
                                            On
                                        </span>
                                        <label class="switch mb-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Turn off">
                                            <a href="https://demo.alicom.app/admin/payment-gateway/6/toggle" class="confirm">
                                                <input type="checkbox" checked="">
                                                    <span class="slider round"></span>
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="py-2">
                                        <img id="previewbKash" class="paymentLogo" src="https://demo.alicom.app/assets/gateway/Bkash.png" alt="logo" loading="lazy">
                                    </div>

                                    <form action="https://demo.alicom.app/admin/payment-gateway/6/update" method="POST" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autocomplete="off">                                <div class="mt-3">
                                            <div>
                                                <label for="mode" class="form-label">
                                                    Mode
                                                </label>
                                                <select name="mode" id="mode" class="form-control select2" style="width: 100%;" tabindex="0" aria-hidden="false">
                                                    <option value="test" selected="">
                                                        Test
                                                    </option>
                                                    <option value="live" disabled="">
                                                        Live
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[app_key]" class="form-label">App Key  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[app_key]" id="config[app_key]" class="form-control " value="4f6o0cjiki2rfm34kfdadl1eqq" placeholder="App Key" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[password]" class="form-label">Password  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[password]" id="config[password]" class="form-control " value="sandboxTokenizedUser02@12345" placeholder="Password" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[username]" class="form-label">Username  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[username]" id="config[username]" class="form-control " value="sandboxTokenizedUser02" placeholder="Username" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[app_secret_key]" class="form-label">App Secret Key  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[app_secret_key]" id="config[app_secret_key]" class="form-control " value="2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b" placeholder="App Secret Key" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="title" class="form-label">Payment Gateway Title  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="title" id="title" class="form-control " value="BKash" placeholder="" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="logo" class="form-label">
                                                        Choose Logo
                                                    </label>
                                                    <input type="file" name="logo" id="logo" class="form-control " onchange="previewFile(event,'previewbKash')">
                                                </div>
                                            </div>

                                            <div class="mt-3 d-flex justify-content-end">
                                                <button type="submit" class="btn btn-primary py-2">
                                                    Save And Update
                                                </button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}

{/* <div class="col-lg-6 mb-4">
                            <div class="card">
                                <div class="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                                    <p class="paymentTitle m-0">
                                        PAYTABS
                                    </p>

                                    <div class="d-flex align-items-center gap-2">
                                        <span class="statusOn">
                                            On
                                        </span>
                                        <label class="switch mb-0" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Turn off">
                                            <a href="https://demo.alicom.app/admin/payment-gateway/7/toggle" class="confirm">
                                                <input type="checkbox" checked="">
                                                    <span class="slider round"></span>
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="py-2">
                                        <img id="previewpaytabs" class="paymentLogo" src="https://demo.alicom.app/assets/gateway/PayTabs.png" alt="logo" loading="lazy">
                                    </div>

                                    <form action="https://demo.alicom.app/admin/payment-gateway/7/update" method="POST" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autocomplete="off">                                <div class="mt-3">
                                            <div>
                                                <label for="mode" class="form-label">
                                                    Mode
                                                </label>
                                                <select name="mode" id="mode" class="form-control select2 select2-hidden-accessible" style="width: 100%;" data-select2-id="select2-data-mode" tabindex="-1" aria-hidden="true">
                                                    <option value="test" selected="" data-select2-id="select2-data-20-bnij">
                                                        Test
                                                    </option>
                                                    <option value="live" disabled="">
                                                        Live
                                                    </option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-19-y4m8" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-mode-container" aria-controls="select2-mode-container"><span class="select2-selection__rendered" id="select2-mode-container" role="textbox" aria-readonly="true" title="
                                            Test
                                        ">
                                                    Test
                                                </span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                        </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[base_url]" class="form-label">Base Url  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[base_url]" id="config[base_url]" class="form-control " value="https://secure-global.paytabs.com" placeholder="Base Url" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[currency]" class="form-label">Currency  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[currency]" id="config[currency]" class="form-control " value="USD" placeholder="Currency" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[profile_id]" class="form-label">Profile Id  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[profile_id]" id="config[profile_id]" class="form-control " value="142160" placeholder="Profile Id" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <div>
                                                    <label for="config[server_key]" class="form-label">Server Key  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="config[server_key]" id="config[server_key]" class="form-control " value="S6J9R6JRLB-JJBGTHLGJK-GZWGDGZMJL" placeholder="Server Key" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="title" class="form-label">Payment Gateway Title  <span class="text-danger">*</span> </label>
                                                    <input type="text" name="title" id="title" class="form-control " value="PayTabs" placeholder="" required="" readonly="" maxlength="255">
                                                </div>
                                            </div>

                                            <div class="mt-3">
                                                <div>
                                                    <label for="logo" class="form-label">
                                                        Choose Logo
                                                    </label>
                                                    <input type="file" name="logo" id="logo" class="form-control " onchange="previewFile(event,'previewpaytabs')">
                                                </div>
                                            </div>

                                            <div class="mt-3 d-flex justify-content-end">
                                                <button type="submit" class="btn btn-primary py-2">
                                                    Save And Update
                                                </button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
