import React, { useState, useEffect } from "react";
 
const initialLinks = [
  {
    id: 1,
    name: "Facebook",
    logo: "https://demo.alicom.app/assets/icons/Facebook.svg",
    link: "",
  },
  {
    id: 2,
    name: "LinkedIn",
    logo: "https://demo.alicom.app/assets/icons/LinkedIn.svg",
    link: "https://www.linkedin.com/company/razinsoft",
  },
  {
    id: 3,
    name: "Instagram",
    logo: "https://demo.alicom.app/assets/icons/Instagram.svg",
    link: "",
  },
  {
    id: 4,
    name: "YouTube",
    logo: "https://demo.alicom.app/assets/icons/YouTube.svg",
    link: "https://www.youtube.com/@razinsoft",
  },
];
 
export default function SocialLink() {
  const [links, setLinks] = useState(initialLinks);
  const [editItem, setEditItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
 
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
 
    return () => document.body.classList.remove("modal-open");
  }, [showModal]);
 
  const handleEdit = (item) => {
    setEditItem(item);
    setShowModal(true);
  };
 
  const handleChange = (e) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLinks((prev) =>
      prev.map((link) => (link.id === editItem.id ? editItem : link))
    );
    handleCloseModal();
  };
 
  const handleCloseModal = () => {
    setShowModal(false);
    setEditItem(null);
  };
 
  return (
    <div className="app-main-inner container-fluid">
      <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
        <h4>Social Link List</h4>
      </div>
 
      <div className="container-fluid mt-3">
        <div className="mb-3 card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-responsive-md">
                <thead>
                  <tr>
                    <th className="text-center">SL</th>
                    <th>Name</th>
                    <th>Link</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {links.map((item, index) => (
                    <tr key={item.id}>
                      <td className="text-center">{index + 1}</td>
                      <td>
                        <img
                          src={item.logo}
                          alt={item.name}
                          width="22"
                          className="me-2"
                        />
                        {item.name}
                      </td>
                      <td>{item.link || "-"}</td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleEdit(item)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
 
        {/* React Modal */}
        {showModal && (
          <>
            <div
              className="modal show fade d-block"
              tabIndex="-1"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                      <h5 className="modal-title">Update Social Link</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={handleCloseModal}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label htmlFor="updateName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="updateName"
                          name="name"
                          value={editItem?.name || ""}
                          readOnly
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="updateLink" className="form-label">
                          Social Link
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="updateLink"
                          name="link"
                          value={editItem?.link || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Update Link
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show"></div>
          </>
        )}
      </div>
    </div>
  );
}

 