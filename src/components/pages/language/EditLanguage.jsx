import React, { useState } from 'react';
import { FaFloppyDisk, FaCloudArrowUp, FaCloudArrowDown, FaFileCode } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const EditLanguage = () => {
  const [jsonSearch, setJsonSearch] = useState('');
  const jsonData = [
    { key: 'Dashboard', value: 'لوحة القيادة' },
    { key: 'Dashboard', value: 'لوحة القيادة' },
    { key: 'Dashboard', value: 'لوحة القيادة' },
    { key: 'Dashboard', value: 'لوحة القيادة' },
  ];

  const filteredData = jsonData.filter(item =>
    item.key.toLowerCase().includes(jsonSearch.toLowerCase()) ||
    item.value.toLowerCase().includes(jsonSearch.toLowerCase())
  );

  return (
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <h4 className="m-0">Edit Language (ar)</h4>
          <Link to="/admin/language" className="btn btn-danger">
            Back
          </Link>
        </div>

        {/* Update Title */}
        <div className="card border-0 shadow-sm rounded-3 mt-4">
          <div className="card-body">
            <form action="#" method="POST">
              <label className="form-label fw-bold mb-1">Title for ar</label>
              <div className="input-group">
                <input
                  type="text"
                  name="title"
                  className="form-control py-2.5"
                  placeholder="title"
                  defaultValue="ar"
                />
                <button type="submit" className="input-group-text btn btn-primary">
                  <FaFloppyDisk className="me-1" />
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Import & Export */}
        <div className="row mb-4 mt-4">
          <div className="col-md-6">
            <div className="card shadow border-0 rounded-lg">
              <div className="card-body text-center">
                <h4 className="text-dark mb-2 fw-bold">Select JSON File to Import</h4>
                <p className="text-muted mb-3">
                  Upload a JSON file to update your language settings.
                </p>

                <form action="#" method="POST" encType="multipart/form-data" id="bulkForm">
                  <div className="drop-zone mx-auto border p-4 rounded text-center cursor-pointer">
                    <div className="icon mb-2">
                      <FaCloudArrowUp size={24} />
                    </div>
                    Drop file here or click to upload
                    <input
                      name="file"
                      type="file"
                      className="form-control mt-2"
                      accept=".json"
                    />
                  </div>

                  <div style={{ display: 'none' }} id="galler">
                    <button type="submit" className="btn btn-primary mt-4 py-2 px-4">
                      Update Language JSON
                      <FaCloudArrowUp className="ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow border-0 rounded-lg">
              <div className="card-body text-center">
                <div className="icon-container mb-3">
                  <FaFileCode className="text-primary" size={36} />
                </div>
                <h4 className="text-dark mb-3 fw-bold">Export JSON File</h4>
                <p className="text-muted">
                  Export your language files in JSON format with just one click!
                </p>
                <form action="#" method="POST">
                  <button type="submit" className="btn btn-primary py-2 px-4">
                    Export
                    <FaCloudArrowDown className="ms-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* JSON Viewer */}
        <div className="card border-0 shadow-sm rounded-3 mb-3">
          <div className="card-header py-2.5">
            <h4 className="m-0">ar.json (file content)</h4>
          </div>
          <div className="card-body p-3">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search in JSON"
                value={jsonSearch}
                onChange={e => setJsonSearch(e.target.value)}
              />
            </div>

            <div className="json-view-container">
              {filteredData.map((item, index) => (
                <div key={index} className="json-item mb-2">
                  <span className="json-key fw-bold">"{item.key}": </span>
                  <span className="json-value">"{item.value}"</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditLanguage;
