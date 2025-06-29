import React from 'react';

const SMSGateways = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">

                <div className="container-fluid my-4">
                    <div className="row">
                        <div className="col-12 mt-2 mx-auto">
                            <div className="card shadow">
                                <div className="card-header bg-custom py-2">
                                    <h3 className="m-0">SMS Configuration</h3>
                                    <span className="badge badge-info">You can activate only one provider at a time</span>
                                </div>
                                <div className="card-body">

                                    <div className="row">

                                        <div className="col-md-6 mb-3">
                                            <div className="card shadow-sm">
                                                <div className="card-header bg-white">
                                                    <img src="https://demo.alicom.app/assets/sms-gateway/Twilio.png" alt="Twilio" height="70px" />
                                                </div>
                                                <form>
                                                    <div className="card-body">
                                                        <input type="hidden" name="_method" value="put" />
                                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autoComplete="off" />
                                                        <div className="row">
                                                            <input type="hidden" name="provider" value="twilio" />
                                                            <div className="col-md-12 mb-3">
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" value="1" type="radio" name="status" id="twilioActive" />
                                                                    <label className="form-check-label" htmlFor="twilioActive">Active</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" checked value="0" type="radio" name="status" id="twilioInactive" />
                                                                    <label className="form-check-label" htmlFor="twilioInactive">Inactive</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <div>
                                                                    <input type="text" name="twilio_sid" id="twilio_sid" className="form-control" placeholder="Twilio SID" maxLength="255" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <div>
                                                                    <input type="text" name="twilio_token" id="twilio_token" className="form-control" placeholder="Twilio Token" maxLength="255" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div>
                                                                    <input type="text" name="twilio_from" id="twilio_from" className="form-control" placeholder="Twilio From" maxLength="255" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer bg-white">
                                                        <button type="submit" className="btn btn-primary">Update</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <div className="card shadow-sm">
                                                <div className="card-header bg-white">
                                                    <img src="https://demo.alicom.app/assets/sms-gateway/Nexmo.png" alt="Nexmo" height="70px" />
                                                </div>
                                                <form>
                                                    <div className="card-body">
                                                        <input type="hidden" name="_method" value="put" />
                                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autoComplete="off" />
                                                        <div className="row">
                                                            <input type="hidden" name="provider" value="nexmo" />
                                                            <div className="col-md-12 mb-3">
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" value="1" type="radio" name="status" id="nexmoActive" />
                                                                    <label className="form-check-label" htmlFor="nexmoActive">Active</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" checked value="0" type="radio" name="status" id="nexmoInactive" />
                                                                    <label className="form-check-label" htmlFor="nexmoInactive">Inactive</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <div>
                                                                    <input type="text" name="nexmo_key" id="nexmo_key" className="form-control" placeholder="Nexmo Key" maxLength="255" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div>
                                                                    <input type="text" name="nexmo_secret" id="nexmo_secret" className="form-control" placeholder="Nexmo Secret" maxLength="255" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mt-3">
                                                                <div>
                                                                    <input type="text" name="nexmo_from" id="nexmo_from" className="form-control" placeholder="Nexmo From" maxLength="255" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer bg-white">
                                                        <button type="submit" className="btn btn-primary">Update</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <div className="card shadow-sm">
                                                <div className="card-header bg-white">
                                                    <img src="https://demo.alicom.app/assets/sms-gateway/Telesign.png" alt="Telesign" height="70px" />
                                                </div>
                                                <form>
                                                    <div className="card-body">
                                                        <input type="hidden" name="_method" value="put" />
                                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autoComplete="off" />
                                                        <div className="row">
                                                            <input type="hidden" name="provider" value="telesign" />
                                                            <div className="col-md-12 mb-3">
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" value="1" type="radio" name="status" id="teleSignActive" />
                                                                    <label className="form-check-label" htmlFor="teleSignActive">Active</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" checked value="0" type="radio" name="status" id="teleSignInactive" />
                                                                    <label className="form-check-label" htmlFor="teleSignInactive">Inactive</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <div>
                                                                    <input type="text" name="customer_id" id="customer_id" className="form-control" placeholder="Customer ID" maxLength="255" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div>
                                                                    <input type="text" name="api_key" id="api_key" className="form-control" placeholder="API KEY" maxLength="255" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer bg-white">
                                                        <button type="submit" className="btn btn-primary">Update</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <div className="card shadow-sm">
                                                <div className="card-header bg-white">
                                                    <img src="https://demo.alicom.app/assets/sms-gateway/MessageBird.png" alt="MessageBird" height="70px" />
                                                </div>
                                                <form>
                                                    <div className="card-body">
                                                        <input type="hidden" name="_method" value="put" />
                                                        <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autoComplete="off" />
                                                        <div className="row">
                                                            <input type="hidden" name="provider" value="message_bird" />
                                                            <div className="col-md-12 mb-3">
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" value="1" type="radio" name="status" id="messageBirdActive" />
                                                                    <label className="form-check-label" htmlFor="messageBirdActive">Active</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" checked value="0" type="radio" name="status" id="messageBirdInactive" />
                                                                    <label className="form-check-label" htmlFor="messageBirdInactive">Inactive</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <div>
                                                                    <input type="text" name="api_key" id="api_key" className="form-control" placeholder="API Key" maxLength="255" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div>
                                                                    <input type="text" name="from" id="from" className="form-control" placeholder="From" maxLength="255" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer bg-white">
                                                        <button type="submit" className="btn btn-primary">Update</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
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

export default SMSGateways;
