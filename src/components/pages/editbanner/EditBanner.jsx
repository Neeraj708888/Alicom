import React from 'react';

const EditBanner = () => {
  return (
      <div className="app-main-inner">
        <div className="container-fluid">
          <div className="page-title">
            <div className="d-flex gap-2 align-items-center">
              <i className="fa-solid fa-image"></i> Edit Banner
            </div>
          </div>

          <form>
            <input
              type="hidden"
              name="_token"
              value="fCitOnFWLytsZzhFQaWuoBQAtWvNIgh5ODb9Wnn9"
              autoComplete="off"
            />
            <input type="hidden" name="_method" value="PUT" />

            <div className="row">
              <div className="col-md-6">
                <div className="card mt-3 h-100">
                  <div className="card-body">
                    <div>
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        defaultValue="New Offer"
                        placeholder="Enter Short Title"
                        maxLength="255"
                      />
                    </div>

                    <div className="mt-4">
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <div className="ratio4x1">
                          <img
                            src="https://demo.alicom.app/storage/banners/MefNES68vG27I5jwvje1JA8TBzFQFCrgTkSTGkHs.png"
                            id="bannerPreview"
                            alt="Banner Preview"
                            width="100%"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="banner" className="form-label">
                          Banner Ratio 4:1 (2000 x 500 px)
                        </label>
                        <input
                          type="file"
                          name="banner"
                          id="banner"
                          className="form-control"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = function (event) {
                                const img = document.getElementById('bannerPreview');
                                if (img) img.src = event.target.result;
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end mt-4">
                      <button className="btn btn-primary py-2 px-5" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default EditBanner;
