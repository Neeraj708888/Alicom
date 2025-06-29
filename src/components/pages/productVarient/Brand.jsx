import React, { useState } from 'react';
 
const BrandList = () => {
    const [brands, setBrands] = useState([
        { id: 1, name: 'TP Link', isActive: false },
        { id: 2, name: 'Burberry', isActive: true },
        { id: 3, name: 'GUCCHi', isActive: true },
        { id: 4, name: 'Adidas', isActive: true },
        { id: 5, name: 'NIKE', isActive: true },
        { id: 6, name: 'DELL', isActive: false },
        { id: 7, name: 'HP', isActive: true },
        { id: 8, name: 'ASUS', isActive: false },
        { id: 9, name: 'APPLE', isActive: false },
        { id: 10, name: 'DZ', isActive: false },
        { id: 11, name: 'test', isActive: false },
        { id: 12, name: 'fghjkl', isActive: true },
        { id: 13, name: 'm', isActive: false },
        { id: 14, name: 'Smart Robort', isActive: true },
        { id: 15, name: 'Hikvision', isActive: true },
        { id: 16, name: 'Anivya Creations', isActive: true },
    ]);
 
    const [modalData, setModalData] = useState({ id: null, name: '' });
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
 
    const handleCreateBrand = (e) => {
        e.preventDefault();
        const newBrand = { id: brands.length + 1, name: e.target.name.value, isActive: false };
        setBrands([...brands, newBrand]);
        setCreateModalOpen(false);
    };
 
    const handleEditBrand = (e) => {
        e.preventDefault();
        const updatedBrands = brands.map(brand =>
            brand.id === modalData.id ? { ...brand, name: e.target.name.value } : brand
        );
        setBrands(updatedBrands);
        setEditModalOpen(false);
    };
 
    const openEditModal = (brand) => {
        setModalData(brand);
        setEditModalOpen(true);
    };
 
    return (
       
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Brand List</h4>
                    <button type="button" className="btn py-2 btn-primary" onClick={() => setCreateModalOpen(true)}>
                        <i className="fa fa-plus-circle"></i> Create New
                    </button>
                </div>
 
                <div className="container-fluid mt-3">
                    <div className="mb-3 card">
                        <div className="card-body">
                            <div className="cardTitleBox">
                                <h5 className="card-title chartTitle">Brands</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table border table-responsive-md">
                                    <thead>
                                        <tr>
                                            <th className="text-center">SL</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {brands.map((brand, index) => (
                                            <tr key={brand.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>{brand.name}</td>
                                                <td>
                                                    <label className="switch mb-0">
                                                        <input type="checkbox" checked={brand.isActive} onChange={() => {
                                                            setBrands(brands.map(b => b.id === brand.id ? { ...b, isActive: !b.isActive } : b));
                                                        }} />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-outline-primary btn-sm circleIcon" onClick={() => openEditModal(brand)}>
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
                </div>
 
                {/* Create Brand Modal */}
                {isCreateModalOpen && (
                    <div className="modal fade show" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create Brand</h5>
                                    <button type="button" className="btn-close" onClick={() => setCreateModalOpen(false)}></button>
                                </div>
                                <form onSubmit={handleCreateBrand}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name *</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" required />
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
 
                {/* Edit Brand Modal */}
                {isEditModalOpen && (
                    <div className="modal fade show" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Brand</h5>
                                    <button type="button" className="btn-close" onClick={() => setEditModalOpen(false)}></button>
                                </div>
                                <form onSubmit={handleEditBrand}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="editName" className="form-label">Name *</label>
                                            <input type="text" className="form-control" id="editName" name="name" placeholder="Enter Name" defaultValue={modalData.name} required />
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
 
export default BrandList;
 
 