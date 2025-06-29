import React, { useState } from 'react';

const SizeList = () => {
    const [sizes, setSizes] = useState([
        { id: 1, name: 'S', isActive: true },
        { id: 2, name: 'M', isActive: true },
        { id: 3, name: 'L', isActive: true },
        { id: 4, name: 'XL', isActive: true },
        { id: 5, name: 'XXL', isActive: true },
        { id: 6, name: '40', isActive: true },
        { id: 7, name: '41', isActive: false },
        { id: 8, name: '42', isActive: false },
        { id: 9, name: '43', isActive: false },
        { id: 10, name: '44', isActive: false },
        { id: 11, name: '52', isActive: false },
        { id: 12, name: 'ds', isActive: false },
        { id: 13, name: '4XL', isActive: false },
        { id: 14, name: 'abc', isActive: false },
        { id: 15, name: 's', isActive: false },
        { id: 16, name: 'S', isActive: false },
        { id: 17, name: 'ola', isActive: false },
        { id: 18, name: 'roun', isActive: false },
        { id: 19, name: 'Test', isActive: false },
        { id: 20, name: 'gggg', isActive: false },
    ]);

    const [modalData, setModalData] = useState({ id: null, name: '' });
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const handleCreateSize = (e) => {
        e.preventDefault();
        const newSize = { id: sizes.length + 1, name: e.target.name.value, isActive: false };
        setSizes([...sizes, newSize]);
        setCreateModalOpen(false);
    };

    const handleEditSize = (e) => {
        e.preventDefault();
        const updatedSizes = sizes.map(size => 
            size.id === modalData.id ? { ...size, name: e.target.name.value } : size
        );
        setSizes(updatedSizes);
        setEditModalOpen(false);
    };

    const openEditModal = (size) => {
        setModalData(size);
        setEditModalOpen(true);
    };

    return (
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Size List</h4>
                    <button type="button" className="btn py-2 btn-primary" onClick={() => setCreateModalOpen(true)}>
                        <i className="fa fa-plus-circle"></i> Create New
                    </button>
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
                                            <th>Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sizes.map((size, index) => (
                                            <tr key={size.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>{size.name}</td>
                                                <td>
                                                    <label className="switch mb-0">
                                                        <input type="checkbox" checked={size.isActive} onChange={() => {
                                                            setSizes(sizes.map(s => s.id === size.id ? { ...s, isActive: !s.isActive } : s));
                                                        }} />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="d-flex gap-3 justify-content-center">
                                                        <button type="button" className="btn btn-outline-primary btn-sm circleIcon" onClick={() => openEditModal(size)}>
                                                            <i className="fa-solid fa-pen"></i>
                                                        </button>
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

                {/* Create Size Modal */}
                {isCreateModalOpen && (
                    <div className="modal fade show" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create Size</h5>
                                    <button type="button" className="btn-close" onClick={() => setCreateModalOpen(false)}></button>
                                </div>
                                <form onSubmit={handleCreateSize}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name <small className="text-danger">*</small></label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => setCreateModalOpen(false)}>Close</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* Update Size Modal */}
                {isEditModalOpen && (
                    <div className="modal fade show" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Update Size</h5>
                                    <button type="button" className="btn-close" onClick={() => setEditModalOpen(false)}></button>
                                </div>
                                <form onSubmit={handleEditSize}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="updateName" className="form-label">Name <small className="text-danger">*</small></label>
                                            <input type="text" className="form-control" id="updateName" name="name" placeholder="Name" required defaultValue={modalData.name} />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => setEditModalOpen(false)}>Close</button>
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>

    );
};

export default SizeList;
