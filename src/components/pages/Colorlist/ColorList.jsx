import React, { useState } from 'react';

const ColorList = () => {
    const [colors, setColors] = useState([
        { id: 1, name: 'Black', colorCode: '#000000', isActive: true },
        { id: 2, name: 'Red', colorCode: '#ff0000', isActive: false },
        { id: 3, name: 'Green', colorCode: '#3dbf0d', isActive: true },
        { id: 4, name: 'Blue', colorCode: '#0b89ea', isActive: true },
        { id: 5, name: 'Yellow', colorCode: '#eaed0c', isActive: false },
        { id: 6, name: 'Navy', colorCode: '#0e4081', isActive: true },
        { id: 7, name: 'Dark Red', colorCode: '#b30f0f', isActive: true },
        { id: 8, name: 'Silver', colorCode: '#a9a2a6', isActive: true },
        { id: 9, name: 'Purple', colorCode: '#6669d1', isActive: true },
        { id: 10, name: 'Dark Green', colorCode: '#3ae50b', isActive: true },
        { id: 11, name: 'Raddddy Dark', colorCode: '#421a1a', isActive: true },
        { id: 12, name: 'Apma', colorCode: '#512424', isActive: true },
        { id: 13, name: 'Black', colorCode: '#000000', isActive: true },
        { id: 14, name: 'White', colorCode: '#ffffff', isActive: true },
    ]);

    const [modalData, setModalData] = useState({ id: null, name: '', colorCode: '' });
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const handleCreateColor = (e) => {
        e.preventDefault();
        const newColor = { id: colors.length + 1, name: e.target.name.value, colorCode: e.target.color_code.value, isActive: false };
        setColors([...colors, newColor]);
        setCreateModalOpen(false);
    };

    const handleEditColor = (e) => {
        e.preventDefault();
        const updatedColors = colors.map(color => 
            color.id === modalData.id ? { ...color, name: e.target.name.value, colorCode: e.target.color_code.value } : color
        );
        setColors(updatedColors);
        setEditModalOpen(false);
    };

    const openEditModal = (color) => {
        setModalData(color);
        setEditModalOpen(true);
    };

    return (
       
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Color List</h4>
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
                                            <th>Color</th>
                                            <th>Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {colors.map((color, index) => (
                                            <tr key={color.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>{color.name}</td>
                                                <td>
                                                    <div style={{ width: '42px', height: '28px', borderRadius: '4px', background: color.colorCode }}></div>
                                                </td>
                                                <td>
                                                    <label className="switch mb-0">
                                                        <input type="checkbox" checked={color.isActive} onChange={() => {
                                                            setColors(colors.map(c => c.id === color.id ? { ...c, isActive: !c.isActive } : c));
                                                        }} />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="d-flex gap-3 justify-content-center">
                                                        <button type="button" className="btn btn-outline-primary circleIcon btn-sm" onClick={() => openEditModal(color)}>
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

                {/* Create Color Modal */}
                {isCreateModalOpen && (
                    <div className="modal fade show" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create New Color</h5>
                                    <button type="button" className="btn-close" onClick={() => setCreateModalOpen(false)}></button>
                                </div>
                                <form onSubmit={handleCreateColor}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" required />
                                        </div>
                                        <div className="mb-3 d-flex align-items-center gap-3">
                                            <label htmlFor="color_code" className="form-label m-0">Select Color <span className="text-danger">*</span></label>
                                            <input type="color" id="color_code" name="color_code" style={{ width: '120px', height: '40px' }} required />
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

                {/* Update Color Modal */}
                {isEditModalOpen && (
                    <div className="modal fade show" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Update Color</h5>
                                    <button type="button" className="btn-close" onClick={() => setEditModalOpen(false)}></button>
                                </div>
                                <form onSubmit={handleEditColor}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="updateName" className="form-label">Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="updateName" name="name" placeholder="Enter Name" required defaultValue={modalData.name} />
                                        </div>
                                        <div className="mb-3 d-flex align-items-center gap-3">
                                            <label htmlFor="updateColorCode" className="form-label m-0">Select Color <span className="text-danger">*</span></label>
                                            <input type="color" id="updateColorCode" name="color_code" style={{ width: '120px', height: '40px' }} defaultValue={modalData.colorCode} required />
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

export default ColorList;
