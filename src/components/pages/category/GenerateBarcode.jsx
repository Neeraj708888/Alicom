import React from 'react';

const GenerateBarcode = () => {
    return (
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>
                        <i className="bi bi-box-seam-fill"></i>
                        Generate Barcode
                    </h4>
                </div>

                <div className="container-fluid mt-3">
                    <div className="card my-3">
                        <div className="card-body">
                            <div className="d-flex gap-2 pb-2">
                                <h5></h5>
                            </div>

                            <form action="" method="GET">
                                <div className="table-responsive">
                                    <table className="table table-borderless table-responsive-lg" style={{ overflow: 'auto' }}>
                                        <thead className="table-light">
                                            <tr>
                                                <th className="py-3">Code</th>
                                                <th className="py-3">Name</th>
                                                <th className="py-3">Quantity</th>
                                                <th className="py-3 text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>6009695584912</td>
                                                <td>
                                                    <div className="productName">
                                                        Meetion MT-M371 USB Wired Back...
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            name="qty"
                                                            id="qty"
                                                            className="form-control"
                                                            defaultValue="4"
                                                            placeholder=""
                                                            onInput={(e) => {
                                                                e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
                                                            }}
                                                            maxLength="255"
                                                            style={{width: '300px'}}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="text-center" style={{ maxWidth: '200px' }}>
                                                    <div className="d-flex gap-2 justify-content-center">
                                                        <button type="submit" className="btn btn-outline-primary py-2 px-4">
                                                            Generate Barcode
                                                        </button>
                                                        <a href="https://demo.alicom.app/admin/product/1/generate-barcode" className="btn btn-outline-danger py-2 px-4">
                                                            Reset
                                                        </a>
                                                        <button type="button" className="btn btn-outline-success py-2 px-4" onClick={() => window.print()}>
                                                            Print
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="my-4">
                        <div className="barcodeBox" id="printelement">
                            <div className="productBarcode">
                                <div className="siteName">alicom</div>
                                <div className="name">Meetion MT-M371 USB Wired Backlit Gaming Mouse</div>
                                <div className="price">$25.00</div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAAcAQMAAADFp5/vAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADxJREFUOI1jeNxnId/443GfPfMHi8cfLOSB3D72x/0HHn888BjIaPzxpwAobi/DwDCqclTlqMpRlXRRCQD8x2zvtJAFwAAAAABJRU5ErkJggg==" alt="barcode" />
                                <div className="code">Code: 6009695584912</div>
                            </div>
                            {/* Repeat the productBarcode div for additional barcodes */}
                            <div className="productBarcode">
                                <div className="siteName">alicom</div>
                                <div className="name">Meetion MT-M371 USB Wired Backlit Gaming Mouse</div>
                                <div className="price">$25.00</div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAAcAQMAAADFp5/vAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADxJREFUOI1jeNxnId/443GfPfMHi8cfLOSB3D72x/0HHn888BjIaPzxpwAobi/DwDCqclTlqMpRlXRRCQD8x2zvtJAFwAAAAABJRU5ErkJggg==" alt="barcode" />
                                <div className="code">Code: 6009695584912</div>
                            </div>
                            {/* Add more productBarcode divs as needed */}
                            <div className="productBarcode">
                                <div className="siteName">alicom</div>
                                <div className="name">Meetion MT-M371 USB Wired Backlit Gaming Mouse</div>
                                <div className="price">$25.00</div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAAcAQMAAADFp5/vAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADxJREFUOI1jeNxnId/443GfPfMHi8cfLOSB3D72x/0HHn888BjIaPzxpwAobi/DwDCqclTlqMpRlXRRCQD8x2zvtJAFwAAAAABJRU5ErkJggg==" alt="barcode" />
                                <div className="code">Code: 6009695584912</div>
                            </div>
                            <div className="productBarcode">
                                <div className="siteName">alicom</div>
                                <div className="name">Meetion MT-M371 USB Wired Backlit Gaming Mouse</div>
                                <div className="price">$25.00</div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAAcAQMAAADFp5/vAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADxJREFUOI1jeNxnId/443GfPfMHi8cfLOSB3D72x/0HHn888BjIaPzxpwAobi/DwDCqclTlqMpRlXRRCQD8x2zvtJAFwAAAAABJRU5ErkJggg==" alt="barcode" />
                                <div className="code">Code: 6009695584912</div>
                            </div>
                            <div className="productBarcode">
                                <div className="siteName">alicom</div>
                                <div className="name">Meetion MT-M371 USB Wired Backlit Gaming Mouse</div>
                                <div className="price">$25.00</div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAAcAQMAAADFp5/vAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADxJREFUOI1jeNxnId/443GfPfMHi8cfLOSB3D72x/0HHn888BjIaPzxpwAobi/DwDCqclTlqMpRlXRRCQD8x2zvtJAFwAAAAABJRU5ErkJggg==" alt="barcode" />
                                <div className="code">Code: 6009695584912</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default GenerateBarcode;
