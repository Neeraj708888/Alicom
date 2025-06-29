import React from 'react';

const Firebase = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">

                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Firebase Notification</h4>
                </div>

                <div className="container-fluid mt-3">

                    <div className="card shadow-none" style={{ borderColor: 'rgba(231, 234, 243, 0.5019607843)' }}>
                        <div className="card-body">
                            <div className="row g-4">
                                {/* Step 1 */}
                                <div className="col-lg-6 col-xl-4">
                                    <div className="export-steps-item h-100">
                                        <div className="d-flex gap-3 justify-content-between align-items-center">
                                            <div>
                                                <h3 className="fz-20 text-dark">Step 1</h3>
                                                <div>Login to your firebase account</div>
                                            </div>
                                            <img src="https://demo.alicom.app/assets/images/firebase-login.png" alt="" width="60" />
                                        </div>

                                        <h4 className="mt-3 text-dark fz-20">Instruction</h4>

                                        <ul className="m-0 pl-4">
                                            <li>First of all, login to your firebase account.</li>
                                            <li>Then, create a new project in firebase or select an existing project.</li>
                                            <li>Then, go to project settings.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="col-lg-6 col-xl-4">
                                    <div className="export-steps-item h-100">
                                        <div className="d-flex gap-3 justify-content-between align-items-center">
                                            <div>
                                                <h3 className="fz-20 text-dark">Step 2</h3>
                                                <div>Generate new private key</div>
                                            </div>
                                            <img src="https://demo.alicom.app/assets/images/firebase-download.png" alt="" width="60" />
                                        </div>

                                        <h4 className="mt-3 text-dark fz-20">Instruction</h4>

                                        <ul className="m-0 pl-4">
                                            <li>Go to <strong>Service account</strong> in project settings.</li>
                                            <li>Click on <strong>Generate new private key</strong> button.</li>
                                            <li>Then, click on <strong>Generate key</strong> button.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="col-lg-6 col-xl-4">
                                    <div className="export-steps-item h-100">
                                        <div className="d-flex gap-3 justify-content-between align-items-center">
                                            <div>
                                                <h3 className="fz-20 text-dark">Step 3</h3>
                                                <div>Upload firebase Credential</div>
                                            </div>
                                            <img src="https://demo.alicom.app/assets/images/firebase-upload.png" alt="" width="60" />
                                        </div>

                                        <h4 className="mt-3 text-dark fz-20">Instruction</h4>

                                        <ul className="m-0 pl-4">
                                            <li>Select or drag and drop your generated private key file here.</li>
                                            <li>Then, click on <strong>Upload</strong> button.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card my-3">
                        <div className="card-body text-center">
                            <h4 className="text-muted mb-3">Select generated Json File</h4>
                            <form action="https://demo.alicom.app/admin/firebase-config" method="POST" encType="multipart/form-data">
                                <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autoComplete="off" />
                                <div className="drop-zone mx-auto">
                                    <span className="drop-zone__prompt">
                                        <div className="icon">
                                            <i className="fa-solid fa-cloud-arrow-up"></i>
                                        </div>
                                        Drop file here or click to upload
                                    </span>
                                    <input name="file" type="file" className="drop-zone__input" accept=".json" />
                                </div>

                                <div id="galler" style={{ display: 'none' }}>
                                    <button type="submit" className="btn btn-primary mt-3 py-2">Upload File</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Firebase;
