import React, { useEffect, useState } from "react";
 
const TicketIssue = () => {
  const [editData, setEditData] = useState({ id: "", name: "" });
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [ticketIssues, setTicketIssues] = useState([
    { id: 3, name: "مشكله باحد المنتجات", is_active: 1 },
    { id: 2, name: "مشاكل التوصيل", is_active: 1 },
    { id: 1, name: "vishal patel", is_active: 1 },
  ]);
 
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showModal || showEditModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
 
    return () => document.body.classList.remove("modal-open");
  }, [showModal, showEditModal]);
 
  const handleEdit = (item) => {
    setEditData(item);
    setShowEditModal(true);
  };
 
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
 
  const handleSubmitCreate = (e) => {
    e.preventDefault();
    const newIssue = {
      id: Date.now(), // Generate a unique ID
      name: e.target.name.value,
      is_active: 1,
    };
    setTicketIssues((prev) => [...prev, newIssue]);
    setShowModal(false);
    e.target.reset();
  };
 
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setTicketIssues((prev) =>
      prev.map((issue) => (issue.id === editData.id ? editData : issue))
    );
    setShowEditModal(false);
    setEditData({ id: "", name: "" });
  };
 
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
          <h4>Ticket Issue Types</h4>
          <button
            type="button"
            className="btn py-2 btn-primary"
            onClick={() => setShowModal(true)}
          >
            <i className="fa fa-plus-circle"></i> Create New
          </button>
        </div>
 
        <div className="container-fluid mt-3">
          <div className="mb-3 card">
            <div className="card-body">
              <div className="cardTitleBox">
                <h5 className="card-title chartTitle">Ticket Issue Types</h5>
              </div>
              <div className="table-responsive">
                <table className="table border">
                  <thead>
                    <tr>
                      <th className="text-center">SL</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketIssues.map((item, index) => (
                      <tr key={item.id}>
                        <td className="text-center">{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <label className="switch mb-0">
                            <input type="checkbox" defaultChecked={item.is_active === 1} />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <div className="d-flex gap-3 justify-content-center">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-sm circleIcon"
                              onClick={() => handleEdit(item)}
                            >
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <a
                              href={`https://demo.alicom.app/admin/ticket-issue-type/${item.id}/delete`}
                              className="btn btn-outline-danger btn-sm deleteConfirmAlert circleIcon"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
 
        {/* Create Modal */}
        <form onSubmit={handleSubmitCreate}>
          <div className={`modal fade ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create Ticket Issue Type</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Issue Type
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
 
        {/* Edit Modal */}
        <form onSubmit={handleSubmitEdit}>
          <div className={`modal fade ${showEditModal ? "show" : ""}`} style={{ display: showEditModal ? "block" : "none" }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Issue Type</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowEditModal(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="editName" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editName"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowEditModal(false)}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update Issue Type
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default TicketIssue;
 
 