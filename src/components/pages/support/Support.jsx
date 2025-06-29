import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
            <div className="container-fluid">

                {/* Header with sort dropdown */}
                <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap mb-3">
                    <h4>All Support Tickets</h4>

                    <div>
                        <span className="text-muted me-2">Short By:</span>
                        <div className="dropdown d-inline-block">
                            <Link className="btn btn-secondary btn-sm dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ minWidth: '80px' }}>
                                All
                            </Link>

                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">All</Link></li>
                                <li><Link className="dropdown-item" to="#">Pending</Link></li>
                                <li><Link className="dropdown-item" to="#">Confirm</Link></li>
                                <li><Link className="dropdown-item" to="#">Completed</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Support tickets list */}
                <div className="card">
                    <div className="card-body d-flex flex-column gap-3">
                        {[
                            {
                                id: 4,
                                date: "26 March, 2025",
                                number: "#7923744",
                                status: "cancel",
                                order: "#RC000723",
                                issue: "مشاكل التوصيل",
                                subject: "fr"
                            },
                            {
                                id: 3,
                                date: "28 December, 2024",
                                number: "#7734943",
                                status: "cancel",
                                order: "N/A",
                                issue: "vishal patel",
                                subject: "patal"
                            },
                            {
                                id: 2,
                                date: "19 December, 2024",
                                number: "#9430772",
                                status: "cancel",
                                order: "#RC000055",
                                issue: "vishal patel",
                                subject: ""
                            },
                            {
                                id: 1,
                                date: "15 December, 2024",
                                number: "#8712181",
                                status: "confirm",
                                order: "#RC000090",
                                issue: "vishal patel",
                                subject: "return"
                            }
                        ].map((ticket) => (
                            <div className="ticket card" key={ticket.id}>
                                <div className="card-body">
                                    {/* Header */}
                                    <div className="d-flex justify-content-between gap-2 flex-wrap border-bottom pb-2">
                                        <span className="text-muted">{ticket.date}</span>
                                        <div className="d-flex gap-2 align-items-center">
                                            <span className="ticket-number">{ticket.number}</span>
                                            <span className={`ticket-status ${ticket.status}`}>
                                                {ticket.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <Link to="#" className="d-flex justify-content-between align-items-center gap-2 flex-wrap pt-2">
                                        <div className="ticket-item">
                                            <div className="text-muted">Order Number</div>
                                            <div>{ticket.order}</div>
                                        </div>

                                        <div className="ticket-item">
                                            <div className="text-muted">Issue Type</div>
                                            <div className="ticket-type">{ticket.issue}</div>
                                        </div>

                                        <div className="ticket-item">
                                            <div className="text-muted">Subject</div>
                                            <div className="ticket-subject">{ticket.subject || "—"}</div>
                                        </div>

                                        <div className="icon">
                                            <i className="bi bi-chevron-right"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional pagination or footer */}
                <div className="py-3 text-center">
                    {/* Example: */}
                    <span className="text-muted">No more tickets</span>
                    {/* Or add pagination here */}
                </div>

            </div>
    );
};

export default Support;
