import React, { useState } from 'react';
 
 
const ImportCity = () => {
  const [file, setFile] = useState(null);
 
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!file) return alert('Please select a .json file to import.');
 
    const formData = new FormData();
    formData.append('file', file);
 
    // Optional: Include token if needed
    formData.append('_token', 'V1lfKO7PPCwiYrI5YbmOpS6mfgk4fAqWu73j7x2Z');
 
    // Example POST request
    fetch('https://demo.alicom.app/admin/cities/import', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('Cities imported successfully!');
      })
      .catch((err) => {
        console.error(err);
        alert('Something went wrong during import.');
      });
  };
 
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
          <h4>Bulk City Imports</h4>
        </div>
 
        <div className="container-fluid mt-3">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#showInstruction"
                  aria-expanded="false"
                  aria-controls="showInstruction"
                >
                  <span
                    className="info me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Get instructions for bulk import"
                  >
                    <i className="bi bi-info"></i>
                  </span>
                  Get instructions
                </button>
              </h2>
              <div
                id="showInstruction"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row g-4">
                    {/* Step 1 */}
                    <div className="col-lg-6 col-xl-4">
                      <div className="export-steps-item h-100">
                        <h3 className="fz-20 text-dark">Step 1</h3>
                        <div>Download JSON Template</div>
                        <ul className="m-0 ps-3">
                          <li>Download the JSON Template if you don't have one.</li>
                          <li>Use any JSON or text editor to edit the template.</li>
                        </ul>
                        <div className="mt-4">
                          <a
                            href="https://demo.alicom.app/admin/cities/import-json-template"
                            className="btn btn-primary py-2"
                          >
                            <i className="fa-solid fa-download me-2"></i>
                            Download Template
                          </a>
                        </div>
                      </div>
                    </div>
 
                    {/* Step 2 */}
                    <div className="col-lg-6 col-xl-4">
                      <div className="export-steps-item h-100">
                        <h3 className="fz-20 text-dark">Step 2</h3>
                        <div>Ensure Correct Data Format</div>
                        <ul className="m-0 ps-3">
                          <li>The JSON file must include a valid "country" name.</li>
                          <li>Only one country can be imported at a time.</li>
                          <li>Cities should be listed under the "cities" array.</li>
                          <li>City names can be freely defined.</li>
                        </ul>
                        <div className="mt-3">
                          <pre className="bg-light p-2 rounded small">
{`{
  "country": "Bangladesh",
  "cities": [
    "Dhaka",
    "Rajshahi",
    "Sylhet"
  ]
}`}
                          </pre>
                        </div>
                      </div>
                    </div>
 
                    {/* Step 3 */}
                    <div className="col-lg-6 col-xl-4">
                      <div className="export-steps-item h-100">
                        <h3 className="fz-20 text-dark">Step 3</h3>
                        <div>Upload and Import JSON File</div>
                        <ul className="m-0 ps-3">
                          <li>Upload your JSON file (.json format).</li>
                          <li>Click Import to process and add cities.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Upload Area */}
          <div className="card my-3">
            <div className="card-body text-center">
              <h4 className="text-muted mb-3">Select JSON File to Import</h4>
              <h6 className="text-danger mb-3">
                Warning: This will erase existing cities for the country.
              </h6>
              <form onSubmit={handleSubmit} id="bulkForm" encType="multipart/form-data">
                <div className="drop-zone mx-auto mb-3">
                  <span className="drop-zone__prompt">
                    <div className="icon">
                      <i className="fa-solid fa-cloud-arrow-up fa-2x"></i>
                    </div>
                    Drop file here or click to upload
                  </span>
                  <input
                    type="file"
                    accept=".json"
                    className="drop-zone__input form-control"
                    onChange={handleFileChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3 py-2">
                  Import Cities
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ImportCity;
 
 