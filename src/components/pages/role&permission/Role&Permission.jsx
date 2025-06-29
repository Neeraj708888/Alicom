import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Permission config and utilities
const permissionsList = {
    dashboard: ["list", "notification"],
    banner: ["list", "create", "edit", "enable/disable", "delete"],
    "theme color": ["list", "update", "change"],
    city: ["list", "create", "edit", "delete", "import"],
    "delivery charge": ["list", "create", "edit", "delete"],
    "pusher config": ["list", "update"],
    gift: ["delete"],
};

const generatePermissionValue = (module, action) => {
    const moduleSlug = module.replace(/\s+/g, "").toLowerCase();
    const actionSlug = action.toLowerCase().replace("/", "");
    return `admin.${moduleSlug}.${actionSlug}`;
};

const RolePermission = () => {
    const [roles, setRoles] = useState([
        { id: 1, name: 'root', permissionsCount: 3 },
        { id: 2, name: 'visitor', permissionsCount: 4 },
        { id: 3, name: 'jksdhcs', permissionsCount: 2 },
        { id: 4, name: 'cashier', permissionsCount: 1 },
        { id: 5, name: '224', permissionsCount: 4 },
        { id: 6, name: 'sale', permissionsCount: 7 },
        { id: 7, name: 'test', permissionsCount: 8 },
    ]);

    const [newRoleName, setNewRoleName] = useState('');
    const [updateRoleData, setUpdateRoleData] = useState({ id: null, name: '' });
    const [isCreateRoleModalOpen, setCreateRoleModalOpen] = useState(false);
    const [isUpdateRoleModalOpen, setUpdateRoleModalOpen] = useState(false);

    const [selectedRoleId, setSelectedRoleId] = useState(null);
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const handleCreateRole = () => {
        if (newRoleName) {
            const newRole = { id: roles.length + 1, name: newRoleName, permissionsCount: 0 };
            setRoles([...roles, newRole]);
            setNewRoleName('');
            setCreateRoleModalOpen(false);
        }
    };

    const handleUpdateRole = () => {
        if (updateRoleData.name) {
            const updatedRoles = roles.map(role =>
                role.id === updateRoleData.id ? { ...role, name: updateRoleData.name } : role
            );
            setRoles(updatedRoles);
            setUpdateRoleModalOpen(false);
            setUpdateRoleData({ id: null, name: '' }); // Reset update role data
        }
    };

    const openUpdateRoleModal = (role) => {
        setUpdateRoleData(role);
        setUpdateRoleModalOpen(true);
        setSelectedRoleId(role.id);
        setSelectedPermissions([]);  // optional for backend
    };

    const handlePermissionChange = (value) => {
        if (selectedPermissions.includes(value)) {
            setSelectedPermissions(selectedPermissions.filter(p => p !== value));
        } else {
            setSelectedPermissions([...selectedPermissions, value]);
        }
    };

    const handleCheckAll = () => {
        const all = Object.entries(permissionsList).flatMap(([module, actions]) =>
            actions.map((action) => generatePermissionValue(module, action))
        );
        setSelectedPermissions(all);
    };

    const handleClearAll = () => {
        setSelectedPermissions([]);
    };

    const allPermissions = Object.entries(permissionsList).flatMap(([module, actions]) =>
        actions.map((action) => generatePermissionValue(module, action))
    );

    return (
        <div className="container-fluid">
            <h4 className="mb-3">Roles &amp; Permissions</h4>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        {/* Left Column - Roles */}
                        <div className="col-lg-6 h-100">
                            <h4>Role</h4>

                            <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between mt-3">
                                <div className="position-relative flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control py-2.5 pe-5" // padding-end for space on right
                                        placeholder="Search by role name"
                                        id="search"
                                        onKeyUp={() => { }}
                                    />
                                    <span className="search-icon position-absolute top-50 end-0 translate-middle-y pe-3 text-muted">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary py-2.5 d-flex align-items-center gap-2"
                                    onClick={() => setCreateRoleModalOpen(true)}
                                >
                                    <i className="fa fa-plus"></i>
                                    Create Role
                                </button>
                            </div>

                            <div className="mt-3 d-flex flex-column gap-2">
                                {/* Root Button */}
                                <div className="d-flex align-items-center justify-content-between w-100 text-capitalize roleBtn" data-name="root">
                                    <Link to="/admin/role/1/permission" className="p-2 linkBtn flex-grow-1 text-decoration-none text-dark">
                                        root (All)
                                    </Link>
                                    <span className="badge bg-secondary fst-italic">No Action</span>
                                </div>

                                {/* Visitor Button */}

                                {roles.map((role) => (
                                    <div key={role.id} className="d-flex align-items-center justify-content-between w-100 text-capitalize roleBtn" data-name="visitor">
                                        <Link to="/admin/role/3/permission" className="p-2 linkBtn flex-grow-1 text-decoration-none text-dark">
                                            {role.name} {`(${role.permissionsCount})`}
                                        </Link>
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-sm btn-primary" onClick={() => openUpdateRoleModal(role)}>
                                                <i
                                                    className="fa-solid fa-pen-to-square"></i>
                                            </button>

                                            <Link to="/admin/role/3/destroy" className="btn btn-sm btn-danger showConfirmAlert">
                                                <i className="fa-solid fa-trash"></i>
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Right Column - Permissions */}
                        {/* <div className="col-lg-6 colRight d-flex flex-column">
                            <h4 className="mb-0">Permissions</h4>

                            <div className="mt-3 permission-container flex-grow-1">
                                <div className="d-flex align-items-center justify-content-center flex-column h-100">
                                    <div className="fs-1 text-secondary">
                                        <i className="fa-solid fa-user-lock"></i>
                                    </div>
                                    <span className="text-capitalize fz-22 fst-italic">
                                        No Permissions Available
                                    </span>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-6 colRight d-flex flex-column">
                            <h4 className="mb-0">Permissions</h4>

                            <div className="mt-3 permission-container flex-grow-1">
                                {selectedRoleId ? (
                                    <>
                                        {/* Select All */}
                                        <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mt-3 flex-wrap gap-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedPermissions.length === allPermissions.length}
                                                    onChange={() => {
                                                        selectedPermissions.length === allPermissions.length
                                                            ? handleClearAll()
                                                            : handleCheckAll();
                                                    }}
                                                    className="form-check-input m-0"
                                                    style={{ width: 20, height: 20 }}
                                                />
                                                <span className="fz-18">
                                                    {selectedPermissions.length} Permissions Selected
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="fa-solid fa-arrows-rotate"></i> Update
                                                </button>
                                                <span className="text-danger cursor-pointer" onClick={handleClearAll}>
                                                    Clear
                                                </span>
                                            </div>
                                        </div>

                                        {/* Permission Checkboxes */}
                                        <div className="d-flex flex-column gap-3 mt-3">
                                            {Object.entries(permissionsList).map(([module, actions]) => (
                                                <div key={module}>
                                                    <p className="text-capitalize fz-20 pb-1 m-0">{module}</p>
                                                    <div className="d-flex align-items-center flex-wrap gap-3 fz-18">
                                                        {actions.map((action) => {
                                                            const value = generatePermissionValue(module, action);
                                                            return (
                                                                <div key={value} className="d-flex align-items-center gap-2">
                                                                    <input
                                                                        type="checkbox"
                                                                        id={value}
                                                                        value={value}
                                                                        checked={selectedPermissions.includes(value)}
                                                                        onChange={() => handlePermissionChange(value)}
                                                                        className="form-check-input m-0"
                                                                        style={{ width: 18, height: 18 }}
                                                                    />
                                                                    <label htmlFor={value} className="m-0">
                                                                        {action}
                                                                    </label>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="d-flex align-items-center justify-content-center flex-column h-100">
                                        <div className="fs-1 text-secondary">
                                            <i className="fa-solid fa-user-lock"></i>
                                        </div>
                                        <span className="text-capitalize fz-22 fst-italic">
                                            No Permissions Available
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Create Role Modal */}
            {isCreateRoleModalOpen && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5">Create Role</h1>
                                <button type="button" className="btn-close" onClick={() => setCreateRoleModalOpen(false)}></button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="roleName" className="form-label">Role Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="roleName"
                                    value={newRoleName}
                                    onChange={(e) => setNewRoleName(e.target.value)}
                                    placeholder="Role Name"
                                    required
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setCreateRoleModalOpen(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleCreateRole}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Update Role Modal */}
            {isUpdateRoleModalOpen && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5">Update Role</h1>
                                <button type="button" className="btn-close" onClick={() => setUpdateRoleModalOpen(false)}></button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="updateRoleName" className="form-label">Role Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="updateRoleName"
                                    value={updateRoleData.name}
                                    onChange={(e) => setUpdateRoleData({ ...updateRoleData, name: e.target.value })}
                                    placeholder="Role Name"
                                    required
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setUpdateRoleModalOpen(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleUpdateRole}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RolePermission;
