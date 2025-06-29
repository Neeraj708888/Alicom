import React, { useState } from "react";

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

const EmployeePermissions = () => {
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedPermissions((prev) =>
      prev.includes(value)
        ? prev.filter((perm) => perm !== value)
        : [...prev, value]
    );
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
      <h4 className="mb-3">Employee Permissions</h4>

      {/* Employee Info Card */}
      <div className="card mt-3">
        <div className="card-header d-flex gap-2 py-3">
          <i className="fa-solid fa-user" />
          <h5 className="m-0">Employee Information</h5>
        </div>
        <div className="card-body row">
          <div className="col-md-6 mb-3">
            <label className="form-label mb-1">Name</label>
            <p className="m-0 border p-2 rounded">ankit</p>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label mb-1">Phone Number</label>
            <p className="m-0 border p-2 rounded">08320549620</p>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label mb-1">Email Address</label>
            <p className="m-0 border p-2 rounded">root@alicom.com</p>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label mb-1">Role</label>
            <p className="m-0 border p-2 rounded">cashier</p>
          </div>
        </div>
      </div>

      {/* Permissions Card */}
      <div className="card my-3">
        <div className="card-body">
          <h4>Permissions</h4>

          <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mt-3 flex-wrap gap-2">
            <div className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                checked={selectedPermissions.length === allPermissions.length}
                onChange={() => {
                  if (selectedPermissions.length === allPermissions.length) {
                    handleClearAll();
                  } else {
                    handleCheckAll();
                  }
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
              <span
                className="text-danger cursor-pointer"
                onClick={handleClearAll}
              >
                Clear
              </span>
            </div>
          </div>

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
                          onChange={() => handleCheckboxChange(value)}
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

          <div className="mt-4">
            <button className="btn btn-primary px-4 py-2.5">
              <i className="fa-solid fa-arrows-rotate"></i> Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePermissions;
