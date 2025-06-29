import React from 'react';

const UploadZipFile = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Upload Zip File</h4>
                            </div>

                            <div className="card-body">
                                <form>
                                    <input type="hidden" name="_token" value="OdiQPEUxvVLMj0tOBjlrfg0sPr9dQISyfPiALlC3" autoComplete="off" />

                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">
                                            Choose zip file
                                        </label>
                                        <div className="drop-zone mx-auto">
                                            <span className="drop-zone__prompt">
                                                <div className="icon">
                                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                                </div>
                                                Drop file here or click to upload
                                            </span>
                                            <input name="zip_file" type="file" id="formFile" className="drop-zone__input" accept=".zip" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary py-2 px-3">
                                        Upload File
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .drop-zone {
                    border: 2px dashed #007bff;
                    border-radius: 5px;
                    padding: 20px;
                    text-align: center;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .drop-zone:hover {
                    background-color: #f0f0f0;
                }

                .drop-zone__prompt {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #007bff;
                }

                .drop-zone__input {
                    display: none;
                }

                .icon {
                    font-size: 2rem;
                    margin-bottom: 10px;
                }
            `}</style>
            </>
    );
};

export default UploadZipFile;
