import React from 'react';
import { Link } from 'react-router-dom';

const GalleryImport = () => {
    return (
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
                    <h4>Gallery Images</h4>
                    <Link to="/admin/product/gallery/upload-image" className="btn py-2 btn-primary">
                        <i className="fa fa-plus-circle me-1"></i>
                        Upload Images
                    </Link>
                </div> 

                <div className="container-fluid mt-3">
                    <div className="card my-3">
                        <div className="card-body">
                            <div className="d-flex gap-2 pb-2">
                                <h5>
                                    <i className="fa-solid fa-images"></i>
                                    Gallery Folders
                                </h5>
                            </div>

                            <div className="d-flex flex-wrap gap-3">
                                <a href="https://demo.alicom.app/admin/gallery?folder=Downloads" className="galleryFolder text-center">
                                    <div className="icon fs-1 mx-auto">
                                        <i className="fa-solid fa-folder"></i>
                                    </div>
                                    Downloads
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .galleryFolder {
                        padding: 8px 16px;
                        border-radius: 5px;
                        background-color: #f0f0f0;
                        color: #000;
                        text-decoration: none;
                        transition: all 0.3s ease;
                        font-weight: 500;
                    }

                    .galleryFolder:hover {
                        background-color: #e0e0e0;
                        color: var(--theme-color);
                    }

                    .galleryItem {
                        width: 100px;
                        overflow: hidden;
                    }

                    .galleryItem img {
                        width: 100%;
                        height: 100px;
                        object-fit: cover;
                        border-radius: 5px;
                    }

                    .galleryItem p {
                        margin: 0;
                        overflow: hidden;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                    }

                    .galleryItem .name {
                        max-width: 85px;
                        display: inline-block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                `}</style>
            </div>
    );
};

export default GalleryImport;