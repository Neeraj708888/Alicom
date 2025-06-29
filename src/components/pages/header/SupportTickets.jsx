
import { Link } from 'react-router-dom';

const SupportTickets = () => {
    return (
            <div className="container-fluid">
                <h4>Support Ticket #7923744</h4>

                <div className="card mt-3 h-100">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ticket-details">
                                    <div className="ticket card">
                                        <div className="card-body pt-2">
                                            <div className="d-flex justify-content-between gap-2 flex-wrap border-bottom pb-2 align-items-center">
                                                <div>
                                                    <span className="text-muted">26 March, 2025</span>
                                                    <span className="ticket-number">#7923744</span>
                                                </div>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="dropdown">
                                                        <Link className="btn btn-danger dropdown-toggle text-capitalize text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ minWidth: '80px' }}>
                                                            Cancel
                                                        </Link>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <Link className="dropdown-item" to="#">
                                                                    Cancel
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <button className="btn btn-primary" disabled data-bs-toggle="modal" data-bs-target="#setScheduleModal">
                                                        Set Schedule
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap pt-2">
                                                <div className="ticket-item">
                                                    <div className="text-muted">Order Number</div>
                                                    <div>#RC000723</div>
                                                </div>
                                                <div className="ticket-item">
                                                    <div className="text-muted">Issue Type</div>
                                                    <div className="ticket-type">مشاكل التوصيل</div>
                                                </div>
                                            </div>
                                            <div className="ticket-item mt-3">
                                                <div className="text-muted">Subject</div>
                                                <div className="ticket-subject">fr</div>
                                            </div>
                                            <h5 className="mt-4">Contact Info</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="text-muted">Email</div>
                                                    <div className="ticket-subject">muhf@gmail.com</div>
                                                </div>
                                                <div className="col-md-6 mt-3 mt-md-0">
                                                    <div className="text-muted">Phone</div>
                                                    <div className="ticket-subject">N/A</div>
                                                </div>
                                            </div>
                                            <h5 className="mt-4">File Attachment</h5>
                                            <div className="attachment d-flex flex-wrap gap-2 mt-3">
                                                <p>No attachment found!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded p-2 d-flex justify-content-between align-items-center gap-2 flex-wrap mt-3">
                                        <span>Customer Send Message Enable/Disable</span>
                                        <label className="switch mb-0">
                                            <Link to="#">
                                                <input type="checkbox" checked />
                                                <span className="slider round"></span>
                                            </Link>
                                        </label>
                                    </div>
                                    <div className="hightighted mt-4 d-flex flex-column gap-3"></div>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="message_wrapper h-100">
                                    <div className="messages" id="messages">
                                        <div className="message_item receiver">
                                            <div className="message_item_content">
                                                <div className="message_item_text">
                                                    <Link className="pinBtn" to="#" title="Pin this message">
                                                        <i className="bi bi-pin-angle"></i>
                                                    </Link>
                                                    <span id="textMessage0">rtyr</span>
                                                </div>
                                                <div className="message_item_avatar">
                                                    <img src="https://demo.alicom.app/defualt/profile.jpg" alt="avatar" loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="message_date">26 March, 2025</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <form>
                    <input type="hidden" name="_token" value="OdiQPEUxvVLMj0tOBjlrfg0sPr9dQISyfPiALlC3" autoComplete="off" />
                    <div className="modal fade" id="setScheduleModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Schedule for this ticket</h1>
                                    <button type="button" className="btn-Cancel btn btn-sm" data-bs-dismiss="modal" aria-label="Close">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="border rounded">
                                        <div className="fz-16 border-bottom p-2">Schedule Start Date and Time</div>
                                        <div className="row p-2">
                                            <div className="col-md-6">
                                                <label htmlFor="schedule">Start Date</label>
                                                <input type="date" name="start_date" className="form-control" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="schedule">Start Time</label>
                                                <input type="time" name="start_time" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded mt-3">
                                        <div className="fz-16 border-bottom p-2">Schedule End Date and Time</div>
                                        <div className="row p-2">
                                            <div className="col-md-6">
                                                <label htmlFor="schedule">End Date</label>
                                                <input type="date" name="end_date" className="form-control" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="schedule">End Time</label>
                                                <input type="time" name="end_time" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded mt-3 d-flex align-items-center p-2 gap-1">
                                        <input type="checkbox" name="highlight" className="form-check-input" id="highlight" style={{ width: '20px', height: '20px' }} />
                                        <label htmlFor="highlight" className="fz-16 m-0">Highlight Schedule</label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Set Schedule</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default SupportTickets;
