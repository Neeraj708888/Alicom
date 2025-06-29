
import React from 'react';
import spec from '/src/assets/images/spec.png'
import download from '/src/assets/images/download.jpeg'

const ProductDetails = () => {
    return (
            <div className="container-fluid">

                <div>
                    <h4>
                        Product Details
                    </h4>
                </div>

                <div className="card mt-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex gap-3">
                            <div className="text-center">
                                <div className="rounded overflow-hidden ratio1x1">
                                    <img src="https://demo.alicom.app/storage/products/eCRiL51Rzh0FfZKHtSBOXmz5wl4foovxtCNQofUd.jpg" alt="" width="140" />
                                </div>
                                <a href="/products/1/details" target="_blank" className="btn btn-outline-primary mt-3">
                                    <i className="fa-solid fa-globe"></i> View Live
                                </a>
                            </div>

                            <div className="flex-grow-1">
                                <div className="d-flex flex-wrap gap-3 justify-content-between">
                                    <div className="d-flex gap-3 productThumbnail">
                                        <img src="https://demo.alicom.app/storage/products/PRy6r2GrECIiopDjZ8EIe2hmTkIjIKiKhMfAkSsl.jpg" alt="product" />
                                    </div>

                                    <div>
                                        <div className="d-flex gap-3 border p-2 rounded fw-bold">
                                            <div>63 Orders</div>

                                            <div className="border-start w-0" style={{ height: '20px' }}></div>

                                            <div>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                0.0
                                            </div>

                                            <div className="border-start w-0" style={{ height: '20px' }}></div>

                                            <div>0.0 Reviews</div>
                                        </div>
                                    </div>

                                </div>
                                <h3 className="mb-2 mt-3 pb-1">Meetion MT-M371 USB Wired Backlit Gaming Mouse</h3>

                                <div>
                                    <h6 className="mb-1 text-muted">
                                        Short Description
                                    </h6>
                                    <p>Meetion MT-M371 USB Wired Backlit Gaming Mouse</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-top my-3"></div>

                        {/* General Information */}

                        <div className="d-flex gap-4 flex-wrap justify-content-lg-between">
                            <div>
                                <h5 className="text-dark fw-bold">General Information</h5>
                                <table className="table table-borderless mb-0 border-0" style={{ overflow: 'auto' }}>
                                    <tbody>
                                        <tr>
                                            <td className="ps-0 py-1">Brand</td>
                                            <td className="py-1">:</td>
                                        </tr>
                                        <tr style={{ animationDelay: '0s', display: 'table-row' }}>
                                            <td className="ps-0 py-1">Categories</td>
                                            <td className="py-1">: Baby and Kids</td>
                                        </tr>
                                        <tr style={{ animationDelay: '0.1s', display: 'table-row' }}>
                                            <td className="ps-0 py-1">Colors</td>
                                            <td className="py-1">: Green, Blue</td>
                                        </tr>
                                        <tr style={{ animationDelay: '0.2s', display: 'table-row' }}>
                                            <td className="ps-0 py-1">Sizes</td>
                                            <td className="py-1">: M, L, XL, XXL</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <h5 className="text-dark fw-bold">Price Information</h5>
                                <table className="table table-borderless mb-0 border-0" style={{ overflow: 'auto' }}>
                                    <tbody>
                                        <tr>
                                            <td className="ps-0 py-1">Price</td>
                                            <td className="py-1">: $25</td>
                                        </tr>
                                        <tr style={{ animationDelay: '0.3s', display: 'table-row' }}>
                                            <td className="ps-0 py-1">Discount Price</td>
                                            <td className="py-1">: $1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <h5 className="text-dark fw-bold">Current Stock Quantity</h5>
                                <p className="mb-0 fw-bold">157</p>
                            </div>
                        </div>

                        <div className="border-top my-3"></div>

                        {/* Description */}

                        <div>
                            <h5 className="text-dark fw-bold">
                                Description
                            </h5>
                            <p></p>
                            <h2>&#xFEFF;</h2>
                            <p>
                                <img src={spec} width="971" height="587" alt="Product Image" />
                            </p>
                            <figure className="image image_resized" style={{ width: '25.56%' }}>
                                <img src={download} style={{ aspectRatio: '1280/693' }} width="1280" height="693" alt="Product Figure" />
                            </figure>
                            <h2><strong>Description</strong></h2>
                            <p>&nbsp;</p>
                            <h2><strong>T-Wolf V1 7 Color RGB Backlit RGB Gaming Mouse</strong></h2>
                            <p>&nbsp;</p>
                            <p>
                                <span style={{ color: 'rgb(1,19,45)' }}>The&nbsp;</span>
                                <strong>T-Wolf V1</strong>
                                <span style={{ color: 'rgb(1,19,45)' }}>&nbsp;7 Color RGB Backlit RGB Gaming&nbsp;</span>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.startech.com.bd/accessories/mouse">Mouse&nbsp;</a>
                                <span style={{ color: 'rgb(1,19,45)' }}>
                                    was precisely created for gamers that value accuracy, dependability, and a visually appealing experience. This high-performance optical mouse has a sophisticated sensor that provides great tracking accuracy and smooth, responsive movement, which are essential for both recreational and competitive gaming conditions. With three ergonomic buttons, the mouse provides tactile feedback and quick reaction times, allowing for effective command execution and an advantage in fast-paced games. A USB connected connection ensures a strong and uninterrupted communication to your PC, which is critical for latency-free gaming. The T-Wolf V1 stands out because of its brilliant RGB backlighting, which not only adds visual appeal but also allows for adjustable lighting settings. Gamers may customize the backlighting to match their gaming setup, mood, or even sync with other RGB-enabled gadgets to provide a consistent look. The T-Wolf V1 is ergonomically designed, with a contoured form that fits nicely in your hand and reduces fatigue during long gaming sessions. The mouse is made to last, using high-quality materials that provide durability and longevity. It can resist the wear and tear of vigorous gaming. Its sleek look and sturdy construction make it a dependable friend for any gamer. In addition to its useful features, the T-Wolf V1 is simple to set up and operate, with no complicated installation processes. Simply connect it to your computer's USB port and you're ready to game.
                                </span>
                                <a target="_blank" rel="noopener noreferrer" href="https://investigacion-psicopedagogica.org/">
                                    <span style={{ color: 'rgb(1,19,45)' }}>mega888</span>
                                </a>
                                <span style={{ color: 'rgb(1,19,45)' }}>The T-Wolf V1 7 Backlit RGB Gaming Mouse's performance, paired with its configurable illumination and ergonomic shape, make it an excellent choice for gamers wishing to improve their gaming experience while retaining functionality and flair.</span>
                            </p>
                            <p>&nbsp;</p>
                            <h2><strong>Buy T-Wolf V1 7 Color RGB Backlit RGB Gaming Mouse From Star Tech</strong></h2>
                            <p>&nbsp;</p>
                            <p>
                                <span style={{ color: 'rgb(1,19,45)' }}>In Bangladesh, you can get original&nbsp;</span>
                                <strong>T-Wolf V1 7 Color RGB Backlit RGB Gaming Mouse</strong>
                                <span style={{ color: 'rgb(1,19,45)' }}>&nbsp;From Star Tech. We have a large collection of latest&nbsp;</span>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.startech.com.bd/t-wolf-mouse">T-WOLF Mouse</a>
                                <span style={{ color: 'rgb(1,19,45)' }}>&nbsp;to purchase. Order Online Or Visit your Nearest&nbsp;</span>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.startech.com.bd/">Star Tech</a>
                                <span style={{ color: 'rgb(1,19,45)' }}>&nbsp;Shop to get yours at the lowest price. The T-Wolf V1 7 Color RGB Backlit RGB Gaming Mouse comes with a 1-year warranty.</span>
                            </p>
                            <p>&nbsp;</p>
                        </div>

                    </div>
                </div>

            </div>
    );
}

export default ProductDetails;
