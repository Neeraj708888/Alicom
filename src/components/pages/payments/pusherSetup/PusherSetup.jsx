import React from 'react';

const PusherSetup = () => {
    return (
        <div className="app-main-inner">
            <div className="container-fluid">

                <div className="container-fluid my-4">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 m-auto">
                            <form>
                                <input type="hidden" name="_token" value="Bsn2zZVvjGX5zdsu2vAbyhUNOuqOvpiYsj32aKDK" autoComplete="off" />
                                <div className="card">
                                    <div className="card-header py-3">
                                        <h4 className="m-0">Pusher Configuration</h4>
                                    </div>
                                    <div className="card-body pb-4">
                                        <div className="mb-3">
                                            <div>
                                                <label htmlFor="app_id" className="form-label">PUSHER APP ID</label>
                                                <input type="text" name="app_id" id="app_id" className="form-control" value="1776074" placeholder="PUSHER APP ID" maxLength="255" />
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div>
                                                <label htmlFor="app_key" className="form-label">PUSHER APP KEY</label>
                                                <input type="text" name="app_key" id="app_key" className="form-control" value="724f0aac1f211d91a553" placeholder="PUSHER APP KEY" maxLength="255" />
                                            </div>
                                        </div>

                                        <div className="">
                                            <div>
                                                <label htmlFor="app_secret" className="form-label">PUSHER APP SECRET</label>
                                                <input type="text" name="app_secret" id="app_secret" className="form-control" value="648b73830c49e4c20b4f" placeholder="PUSHER APP SECRET" maxLength="255" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer py-3">
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-primary py-2">Save And Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PusherSetup;
