import React from 'react';

const MailConfig = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">

                <div className="container-fluid my-4">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 mx-auto">
                            <form>
                                <input type="hidden" name="_method" value="put" />
                                <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autoComplete="off" />
                                <div className="card">
                                    <div className="card-header py-3">
                                        <h4 className="m-0">Mail Configuration</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <div>
                                                    <label htmlFor="mailer" className="form-label">Mail Mailer</label>
                                                    <input type="text" name="mailer" id="mailer" className="form-control" value="smtp" placeholder="smtp" maxLength="255" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div>
                                                    <label htmlFor="host" className="form-label">Mail Host</label>
                                                    <input type="text" name="host" id="host" className="form-control" value="mailpit" placeholder="ex: smtp.gmail.com" maxLength="255" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div>
                                                    <label htmlFor="port" className="form-label">Mail Port</label>
                                                    <input type="text" name="port" id="port" className="form-control" value="1025" placeholder="ex: 465" maxLength="255" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div>
                                                    <label htmlFor="username" className="form-label">Mail User Name</label>
                                                    <input type="text" name="username" id="username" className="form-control" value="" placeholder="ex: example@gmail.com" maxLength="255" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div>
                                                    <label htmlFor="password" className="form-label">Mail Password</label>
                                                    <input type="text" name="password" id="password" className="form-control" value="" placeholder="Your app password" maxLength="255" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div>
                                                    <label htmlFor="encryption" className="form-label">Mail Encryption</label>
                                                    <input type="text" name="encryption" id="encryption" className="form-control" value="" placeholder="tls or ssl" maxLength="255" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div>
                                                    <label htmlFor="from_address" className="form-label">Mail From Address <span className="text-danger">*</span></label>
                                                    <input type="text" name="from_address" id="from_address" className="form-control" value="hello@example.com" placeholder="from email address" required maxLength="255" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary py-2">Save And Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <style>
                    {`
                        .infoBtn {
                            border: none;
                            width: 20px;
                            height: 20px;
                            border-radius: 100%;
                            font-size: 12px;
                            display: inline-flex;
                            justify-content: center;
                            align-items: center;
                            color: #fff;
                        }
                    `}
                </style>

            </div>
        </div>
    );
}

export default MailConfig;
