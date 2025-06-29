import React from 'react';
 
const ThemeColor = () => {
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="page-title">
          <div className="d-flex gap-2 align-items-center">
            <i className="bi bi-gear-fill"></i> Theme Colors Settings
          </div>
        </div>
 
        <form action="https://demo.alicom.app/admin/theme-color" method="POST">
          <input type="hidden" name="_token" value="V1lfKO7PPCwiYrI5YbmOpS6mfgk4fAqWu73j7x2Z" autoComplete="off" />
 
          <div className="card mt-3">
            <div className="card-header py-3">
              <h5 className="m-0 card-title">
                <i className="bi bi-palette-fill"></i> Current Color
              </h5>
            </div>
 
            <div className="card-body d-flex justify-content-between gap-5 flex-wrap">
              <div className="d-flex align-items-center gap-5 mt-4 flex-wrap">
                <div className="color-panel">
                  <span className="color-input" id="bgPrimary" style={{ background: '#22A699' }}></span>
                  <p className="color" id="colorPrimary">#22A699</p>
                  <label htmlFor="primary_color" className="color-label">Primary</label>
                </div>
 
                <div className="color-panel">
                  <span className="color-input" id="bgSecondary" style={{ background: '#e9f6f5' }}></span>
                  <p className="color" id="colorSecondary">#e9f6f5</p>
                  <label htmlFor="secondary_color" className="color-label">Secondary</label>
                </div>
              </div>
 
              <div>
                <button type="button" className="btn btn-primary py-3 px-3" data-bs-toggle="modal" data-bs-target="#colorModal">
                  <i className="bi bi-palette-fill"></i> Change Color Palette
                </button>
              </div>
 
              <input type="hidden" name="primary_color" value="#22A699" id="primary_color" />
              <input type="hidden" name="secondary_color" value="#e9f6f5" id="secondary_color" />
            </div>
 
            <div className="card-footer d-flex justify-content-start">
              <button type="submit" className="btn btn-primary py-2 px-3">Save And Update</button>
            </div>
          </div>
        </form>
 
        <div className="mt-4">
          <h5 className="fw-bold">Available Colors palette</h5>
 
          <div className="d-flex gap-3 flex-wrap">
            <div className="color-panel">
              <button className="primary-color" style={{ background: '#22A699' }} onClick={() => setColor('#22A699', '#e9f6f5')}>
                <div className="name"></div>
                <span className="color">#22A699</span>
              </button>
              <div className="variants">
                {["#e9f6f5", "#d3edeb", "#a7dbd6", "#7acac2", "#4eb8ad", "#22A699", "#1f958a", "#1b857a", "#18746b", "#14645c", "#11534d"].map((color, index) => (
                  <div key={index} className={`varint-color ${index >= 5 ? 'text-white' : ''}`} style={{ background: color }}>
                    {index === 0 ? 50 : index * 100}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
 
        <form action="https://demo.alicom.app/admin/theme-color/change" method="post">
          <input type="hidden" name="_token" value="V1lfKO7PPCwiYrI5YbmOpS6mfgk4fAqWu73j7x2Z" autoComplete="off" />
          <div className="modal fade" id="colorModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="colorModalLabel">Change Color Palette</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
 
                <div className="modal-body">
                  <input type="text" id="generatedColorVariants" name="generated_color_variants" hidden />
 
                  <div className="mb-3">
                    <label htmlFor="primary_color" className="form-label">Select Your Primary Color</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text p-0 h-100">
                        <input type="color" id="colorPalette" name="primary_color" className="border" defaultValue="#22A699" />
                      </span>
                      <input type="text" className="form-control" placeholder="Enter hex code e.g. #22A699" id="colorInput" />
                    </div>
                  </div>
 
                  <button type="button" className="btn btn-primary" onClick={() => generateTailwindColors()}>
                    Generate Colors
                  </button>
 
                  <div className="mx-auto mt-2" id="colorPanel" style={{ display: 'none' }}>
                    <h5>Color Variants</h5>
                    <div id="colorVariants" className="mt-2 variants"></div>
                  </div>
                </div>
 
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default ThemeColor;
 
 