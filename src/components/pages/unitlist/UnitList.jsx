import React, { useState } from 'react';

const UnitList = () => {
    const [units, setUnits] = useState([
        { id: 1, name: 'Price', isActive: true },
        { id: 2, name: 'Kg', isActive: true },
        { id: 3, name: 'Item', isActive: true },
        { id: 4, name: 'Kilogram', isActive: true },
        { id: 5, name: 'Meter', isActive: true },
        { id: 6, name: 'Kelvin', isActive: true },
        { id: 7, name: 'Page', isActive: true },
    ]);

    const [modalData, setModalData] = useState({ id: null, name: '' });
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const handleCreateUnit = (e) => {
        e.preventDefault();
        const newUnit = { id: units.length + 1, name: e.target.name.value, isActive: false };
        setUnits([...units, newUnit]);
        setCreateModalOpen(false);
    };

    const handleEditUnit = (e) => {
        e.preventDefault();
        const updatedUnits = units.map(unit => 
            unit.id === modalData.id ? { ...unit, name: e.target.name.value } : unit
        );
        setUnits(updatedUnits);
        setEditModalOpen(false);
    };

    const openEditModal = (unit) => {
        setModalData(unit);
        setEditModalOpen(true);
    };

    return (
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Unit List</h4>
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
                                        {units.map((unit, index) => (
                                            <tr key={unit.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>{unit.name}</td>
                                                <td>
                                                    <label className="switch mb-0">
                                                        <input type="checkbox" checked={unit.isActive} onChange={() => {
                                                            setUnits(units.map(u => u.id === unit.id ? { ...u, isActive: !u.isActive } : u));
                                                        }} />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="d-flex gap-3 justify-content-center">
                                                        <button type="button" className="btn btn-outline-primary btn-sm circleIcon" onClick={() => openEditModal(unit)}>
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

                {/* Create Unit Modal */}
                {isCreateModalOpen && (
                    <div className="modal fade show" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create Unit</h5>
                                    <button type="button" className="btn-close" onClick={() => setCreateModalOpen(false)}></button>
                                </div>
                                <form onSubmit={handleCreateUnit}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
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

                {/* Update Unit Modal */}
                {isEditModalOpen && (
                    <div className="modal fade show" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Update Unit</h5>
                                    <button type="button" className="btn-close" onClick={() => setEditModalOpen(false)}></button>
                                </div>
                                <form onSubmit={handleEditUnit}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="updateName" className="form-label">Name <span className="text-danger">*</span></label>
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

export default UnitList;
